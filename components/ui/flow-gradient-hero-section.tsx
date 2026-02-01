"use client";
import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';

// Helper to detect if device should use simplified rendering
function shouldUseSimplifiedRendering(): boolean {
  if (typeof window === 'undefined') return false;

  // Check for low hardware concurrency (fewer CPU cores)
  const lowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;

  // Check for mobile devices
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Check screen size (mobile viewport)
  const smallScreen = window.innerWidth < 768;

  return lowCores || isMobile || prefersReducedMotion || smallScreen;
}

interface LiquidGradientProps {
  title?: string;
  showPauseButton?: boolean;
  showTitle?: boolean;
  showCta?: boolean;
  showFooter?: boolean;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

class TouchTexture {
  size = 64; width = 64; height = 64; maxAge = 64; radius = 0.1; speed = 1/64;
  trail: { x: number; y: number; age: number; force: number; vx: number; vy: number }[] = [];
  last: { x: number; y: number } | null = null;
  canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D; texture: THREE.Texture;
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width; this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d")!;
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.texture = new THREE.Texture(this.canvas);
  }
  update() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = this.trail.length - 1; i >= 0; i--) {
      const p = this.trail[i];
      const f = p.force * this.speed * (1 - p.age / this.maxAge);
      p.x += p.vx * f; p.y += p.vy * f; p.age++;
      if (p.age > this.maxAge) this.trail.splice(i, 1);
      else this.drawPoint(p);
    }
    this.texture.needsUpdate = true;
  }
  addTouch(point: { x: number; y: number }) {
    let force = 0, vx = 0, vy = 0;
    if (this.last) {
      const dx = point.x - this.last.x, dy = point.y - this.last.y;
      if (dx === 0 && dy === 0) return;
      const d = Math.sqrt(dx*dx + dy*dy);
      vx = dx/d; vy = dy/d;
      force = Math.min((dx*dx + dy*dy) * 20000, 2.0);
    }
    this.last = { x: point.x, y: point.y };
    this.trail.push({ x: point.x, y: point.y, age: 0, force, vx, vy });
  }
  drawPoint(p: { x: number; y: number; age: number; force: number; vx: number; vy: number }) {
    const pos = { x: p.x * this.width, y: (1 - p.y) * this.height };
    let intensity = p.age < this.maxAge * 0.3
      ? Math.sin((p.age / (this.maxAge * 0.3)) * (Math.PI / 2))
      : -((1 - (p.age - this.maxAge * 0.3) / (this.maxAge * 0.7)) * ((1 - (p.age - this.maxAge * 0.3) / (this.maxAge * 0.7)) - 2));
    intensity *= p.force;
    const color = `${((p.vx + 1) / 2) * 255}, ${((p.vy + 1) / 2) * 255}, ${intensity * 255}`;
    const radius = this.radius * this.width;
    this.ctx.shadowOffsetX = this.size * 5;
    this.ctx.shadowOffsetY = this.size * 5;
    this.ctx.shadowBlur = radius;
    this.ctx.shadowColor = `rgba(${color},${0.2 * intensity})`;
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(255,0,0,1)";
    this.ctx.arc(pos.x - this.size * 5, pos.y - this.size * 5, radius, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

class GradientBackground {
  mesh: THREE.Mesh | null = null;
  uniforms: Record<string, { value: THREE.Vector2 | THREE.Vector3 | THREE.Texture | number | null }>;
  sceneManager: App;
  isPaused = false;

  constructor(sceneManager: App) {
    this.sceneManager = sceneManager;
    this.uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uColor1: { value: new THREE.Vector3(0.4, 0.2, 0.8) },     // Deep purple
      uColor2: { value: new THREE.Vector3(0.9, 0.3, 0.5) },     // Pink/magenta
      uColor3: { value: new THREE.Vector3(0.2, 0.6, 0.9) },     // Sky blue
      uColor4: { value: new THREE.Vector3(0.95, 0.5, 0.2) },    // Orange
      uColor5: { value: new THREE.Vector3(0.6, 0.2, 0.9) },     // Violet
      uColor6: { value: new THREE.Vector3(0.2, 0.8, 0.7) },     // Teal
      uSpeed: { value: 0.5 }, uIntensity: { value: 1.0 },
      uTouchTexture: { value: null }, uGrainIntensity: { value: 0.03 },
      uDarkNavy: { value: new THREE.Vector3(0.96, 0.96, 0.98) },
      uGradientSize: { value: 0.5 }, uGradientCount: { value: 12.0 },
      uColor1Weight: { value: 1.0 }, uColor2Weight: { value: 1.0 }
    };
  }
  init() {
    const viewSize = this.sceneManager.getViewSize();
    const geometry = new THREE.PlaneGeometry(viewSize.width, viewSize.height, 1, 1);
    const material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: `varying vec2 vUv; void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); vUv = uv; }`,
      fragmentShader: `
        uniform float uTime, uSpeed, uIntensity, uGrainIntensity, uGradientSize, uGradientCount, uColor1Weight, uColor2Weight;
        uniform vec2 uResolution;
        uniform vec3 uColor1, uColor2, uColor3, uColor4, uColor5, uColor6, uDarkNavy;
        uniform sampler2D uTouchTexture;
        varying vec2 vUv;

        float grain(vec2 uv, float t) { return fract(sin(dot(uv * uResolution * 0.5 + t, vec2(12.9898, 78.233))) * 43758.5453) * 2.0 - 1.0; }

        vec3 getGradientColor(vec2 uv, float time) {
          vec2 c1 = vec2(0.5 + sin(time * uSpeed * 0.4) * 0.4, 0.5 + cos(time * uSpeed * 0.5) * 0.4);
          vec2 c2 = vec2(0.5 + cos(time * uSpeed * 0.6) * 0.5, 0.5 + sin(time * uSpeed * 0.45) * 0.5);
          vec2 c3 = vec2(0.5 + sin(time * uSpeed * 0.35) * 0.45, 0.5 + cos(time * uSpeed * 0.55) * 0.45);
          vec2 c4 = vec2(0.5 + cos(time * uSpeed * 0.5) * 0.4, 0.5 + sin(time * uSpeed * 0.4) * 0.4);
          vec2 c5 = vec2(0.5 + sin(time * uSpeed * 0.7) * 0.35, 0.5 + cos(time * uSpeed * 0.6) * 0.35);
          vec2 c6 = vec2(0.5 + cos(time * uSpeed * 0.45) * 0.5, 0.5 + sin(time * uSpeed * 0.65) * 0.5);

          float i1 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c1));
          float i2 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c2));
          float i3 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c3));
          float i4 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c4));
          float i5 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c5));
          float i6 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c6));

          vec3 color = uDarkNavy;
          color = mix(color, uColor1, i1 * uColor1Weight);
          color = mix(color, uColor2, i2 * uColor2Weight);
          color = mix(color, uColor3, i3 * uColor1Weight);
          color = mix(color, uColor4, i4 * uColor2Weight);
          color = mix(color, uColor5, i5 * uColor1Weight);
          color = mix(color, uColor6, i6 * uColor2Weight);

          return color;
        }

        void main() {
          vec2 uv = vUv;
          vec4 touchTex = texture2D(uTouchTexture, uv);
          uv.x -= (touchTex.r * 2.0 - 1.0) * 0.8 * touchTex.b;
          uv.y -= (touchTex.g * 2.0 - 1.0) * 0.8 * touchTex.b;
          vec2 center = vec2(0.5);
          float dist = length(uv - center);
          float ripple = sin(dist * 20.0 - uTime * 3.0) * 0.04 * touchTex.b;
          uv += vec2(ripple);
          vec3 color = getGradientColor(uv, uTime);
          color += grain(uv, uTime) * uGrainIntensity;
          color = clamp(color, vec3(0.0), vec3(1.0));
          gl_FragColor = vec4(color, 1.0);
        }
      `
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.sceneManager.scene.add(this.mesh);
  }
  update(delta: number) { if (!this.isPaused) (this.uniforms.uTime.value as number) += delta; }
  setTheme(_isDark: boolean) {
    // Vibrant colors for liquid effect
    (this.uniforms.uColor1.value as THREE.Vector3).set(0.4, 0.2, 0.8);     // Deep purple
    (this.uniforms.uColor2.value as THREE.Vector3).set(0.9, 0.3, 0.5);     // Pink/magenta
    (this.uniforms.uColor3.value as THREE.Vector3).set(0.2, 0.6, 0.9);     // Sky blue
    (this.uniforms.uColor4.value as THREE.Vector3).set(0.95, 0.5, 0.2);    // Orange
    (this.uniforms.uColor5.value as THREE.Vector3).set(0.6, 0.2, 0.9);     // Violet
    (this.uniforms.uColor6.value as THREE.Vector3).set(0.2, 0.8, 0.7);     // Teal
    (this.uniforms.uDarkNavy.value as THREE.Vector3).set(0.96, 0.96, 0.98);
    (this.uniforms.uIntensity.value as number) = 1.0;
    (this.uniforms.uGradientSize.value as number) = 0.5;
    (this.uniforms.uColor1Weight.value as number) = 1.0;
    (this.uniforms.uColor2Weight.value as number) = 1.0;
    this.sceneManager.scene.background = new THREE.Color(0xf8f8fa);
  }
  onResize(w: number, h: number) {
    const viewSize = this.sceneManager.getViewSize();
    if (this.mesh) {
      this.mesh.geometry.dispose();
      this.mesh.geometry = new THREE.PlaneGeometry(viewSize.width, viewSize.height, 1, 1);
    }
    (this.uniforms.uResolution.value as THREE.Vector2).set(w, h);
  }
}

class App {
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  clock: THREE.Clock;
  touchTexture: TouchTexture;
  gradientBackground: GradientBackground;
  animationId: number | null = null;
  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    console.log('[LiquidGradient] Initializing with container:', container.clientWidth, 'x', container.clientHeight);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);
    console.log('[LiquidGradient] WebGL renderer created');
    this.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 10000);
    this.camera.position.z = 50;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf8f8fa);
    this.clock = new THREE.Clock();
    this.touchTexture = new TouchTexture();
    this.gradientBackground = new GradientBackground(this);
    this.gradientBackground.uniforms.uTouchTexture.value = this.touchTexture.texture;
    this.init();
    console.log('[LiquidGradient] Initialization complete');
  }
  setTheme(isDark: boolean) { this.gradientBackground.setTheme(isDark); }
  setPaused(paused: boolean) { this.gradientBackground.isPaused = paused; }
  getViewSize() {
    const fov = (this.camera.fov * Math.PI) / 180;
    const height = Math.abs(this.camera.position.z * Math.tan(fov / 2) * 2);
    return { width: height * this.camera.aspect, height };
  }
  init() {
    this.gradientBackground.init();
    const c = this.container;
    const onMove = (x: number, y: number) => { this.touchTexture.addTouch({ x: x / c.clientWidth, y: 1 - y / c.clientHeight }); };
    c.addEventListener("mousemove", (e) => onMove(e.offsetX, e.offsetY));
    c.addEventListener("touchmove", (e) => {
      const rect = c.getBoundingClientRect();
      onMove(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
    });
    window.addEventListener("resize", () => {
      this.camera.aspect = c.clientWidth / c.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(c.clientWidth, c.clientHeight);
      this.gradientBackground.onResize(c.clientWidth, c.clientHeight);
    });
    this.tick();
  }
  tick() {
    const delta = Math.min(this.clock.getDelta(), 0.1);
    this.touchTexture.update();
    this.gradientBackground.update(delta);
    this.renderer.render(this.scene, this.camera);
    this.animationId = requestAnimationFrame(() => this.tick());
  }
  cleanup() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    this.renderer.dispose();
    if (this.container && this.renderer.domElement && this.container.contains(this.renderer.domElement)) {
      this.container.removeChild(this.renderer.domElement);
    }
  }
}

export default function LiquidGradient({
  title = "Liquid Gradient",
  showPauseButton = false,
  showTitle = false,
  showCta = false,
  showFooter = false,
  ctaText = "Explore More",
  onCtaClick,
  className = "",
  children
}: LiquidGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [useSimplified, setUseSimplified] = useState(false);
  const appRef = useRef<App | null>(null);

  useEffect(() => {
    setIsMounted(true);
    setUseSimplified(shouldUseSimplifiedRendering());
  }, []);

  useEffect(() => {
    const checkTheme = () => {
      const html = document.documentElement;
      const body = document.body;
      const isDark = html.classList.contains('dark') ||
                     body.classList.contains('dark') ||
                     html.getAttribute('data-theme') === 'dark' ||
                     window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'data-theme'] });
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkTheme);
    return () => { observer.disconnect(); mediaQuery.removeEventListener('change', checkTheme); };
  }, []);

  useEffect(() => {
    if (!isMounted || useSimplified) return;

    const container = containerRef.current;
    if (!container) return;

    // Wait for container to have dimensions
    const initApp = () => {
      if (container.clientWidth > 0 && container.clientHeight > 0) {
        if (appRef.current) appRef.current.cleanup();
        appRef.current = new App(container);
      } else {
        requestAnimationFrame(initApp);
      }
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(initApp, 100);

    return () => {
      clearTimeout(timeoutId);
      if (appRef.current) appRef.current.cleanup();
    };
  }, [isMounted, useSimplified]);

  useEffect(() => { if (appRef.current) appRef.current.setTheme(isDarkMode); }, [isDarkMode]);
  useEffect(() => { if (appRef.current) appRef.current.setPaused(!isPlaying); }, [isPlaying]);

  // Show background color until mounted
  if (!isMounted) {
    return (
      <div className={`relative w-full h-full min-h-[90vh] bg-white ${className}`}>
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </div>
    );
  }

  // CSS-only fallback for low-end devices/mobile
  if (useSimplified) {
    return (
      <div className={`relative w-full h-full min-h-[90vh] ${className}`}>
        {/* Simplified CSS gradient background */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            minHeight: '90vh',
            background: 'linear-gradient(135deg, #f8f8fa 0%, #e8e0f0 25%, #f0e8f8 50%, #e0f0f8 75%, #f8f8fa 100%)',
          }}
        />

        {/* Content overlay */}
        <div className="relative z-10 w-full h-full pointer-events-none">
          <div className="pointer-events-auto">
            {children}
          </div>
        </div>

        {showTitle && (
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-6xl md:text-8xl font-bold text-foreground pointer-events-none">
            {title}
          </h1>
        )}

        {showCta && (
          <button
            className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 px-8 py-3 bg-foreground/10 backdrop-blur-md text-foreground border border-foreground/20 rounded-full hover:bg-foreground/20 transition-all"
            onClick={onCtaClick}
          >
            {ctaText}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full min-h-[90vh] ${className}`}>
      {/* Three.js Canvas Container */}
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ minHeight: '90vh' }}
      />

      {/* Content overlay */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        <div className="pointer-events-auto">
          {children}
        </div>
      </div>

      {showTitle && (
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-6xl md:text-8xl font-bold text-white mix-blend-difference pointer-events-none">
          {title}
        </h1>
      )}

      {showCta && (
        <button
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 px-8 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full hover:bg-white/20 transition-all"
          onClick={onCtaClick}
        >
          {ctaText}
        </button>
      )}

      {showPauseButton && (
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute bottom-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full hover:bg-white/20 transition-all"
          aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
        >
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.14v14l11-7-11-7z" />
            </svg>
          )}
        </button>
      )}

      {showFooter && (
        <footer className="absolute bottom-6 left-6 z-10 text-white/60 text-sm">
          <a href="https://haikkashiyani.kesug.com/?i=1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Made By Haik
          </a>
        </footer>
      )}
    </div>
  );
}

export { LiquidGradient };
