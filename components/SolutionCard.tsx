import Link from 'next/link';

interface SolutionCardProps {
  id: string;
  title: string;
  description: string;
  whoFor: string;
  value: string;
  priceRange: string;
  icon: React.ReactNode;
}

export default function SolutionCard({
  id,
  title,
  description,
  whoFor,
  value,
  priceRange,
  icon,
}: SolutionCardProps) {
  return (
    <div id={id} className="bg-white border border-border rounded-lg p-8 hover:border-foreground/20 transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-foreground">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>

      <p className="text-muted-foreground mb-6">{description}</p>

      <div className="space-y-3 mb-6">
        <div>
          <span className="text-sm font-medium text-foreground">Who it&apos;s for: </span>
          <span className="text-sm text-muted-foreground">{whoFor}</span>
        </div>
        <div>
          <span className="text-sm font-medium text-foreground">Value: </span>
          <span className="text-sm text-muted-foreground">{value}</span>
        </div>
        <div>
          <span className="text-sm font-medium text-foreground">Investment: </span>
          <span className="text-sm text-muted-foreground">{priceRange}</span>
        </div>
      </div>

      <Link
        href="/contact"
        className="inline-flex items-center text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
      >
        Learn more <span className="ml-1">→</span>
      </Link>
    </div>
  );
}
