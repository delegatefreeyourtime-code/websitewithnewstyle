import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, answers, lostPerYear, tradeType } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone and email are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // n8n webhook — fire and don't block
    const webhookUrl =
      process.env.EVENT_AUDIT_N8N_WEBHOOK ||
      "https://n8n.delegate-me.com/webhook/ccee82db-3a1a-432c-b0f6-e67206a80fee";

    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "event_audit",
        name,
        phone,
        email,
        tradeType,
        answers,
        lostPerYear,
        timestamp: new Date().toISOString(),
      }),
    }).catch(console.error);

    // Resend confirmation email — direct REST, no SDK
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const lostFormatted = `£${lostPerYear.toLocaleString("en-GB")}`;

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Delegate <claude@delegate-me.com>",
          to: [email],
          subject: `Your AI Audit — You're losing ${lostFormatted}/year to missed calls`,
          html: `
            <div style="background:#FAFAF9;color:#0B0C10;font-family:'Space Grotesk',sans-serif;padding:40px;max-width:600px;margin:0 auto;">
              <div style="color:#FF5A1F;font-weight:700;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:24px;">DELEGATE — AI FOR TRADES</div>
              <h1 style="font-size:32px;font-weight:700;margin:0 0 8px;text-transform:uppercase;">Hi ${name},</h1>
              <p style="color:#6B6B70;margin:0 0 32px;">Here are your AI audit results from today.</p>

              <div style="background:#FFFFFF;border:1px solid #E5E5E4;padding:32px;text-align:center;margin-bottom:32px;">
                <div style="color:#6B6B70;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:8px;">ESTIMATED ANNUAL LOSS TO MISSED CALLS</div>
                <div style="color:#FF5A1F;font-size:48px;font-weight:700;">${lostFormatted}</div>
                <div style="color:#6B6B70;font-size:14px;margin-top:8px;">per year</div>
              </div>

              <div style="margin-bottom:32px;">
                <div style="font-weight:700;text-transform:uppercase;margin-bottom:16px;font-size:14px;letter-spacing:0.05em;">HERE'S WHAT AI FIXES:</div>
                <div style="color:#6B6B70;padding:12px 0;border-bottom:1px solid #E5E5E4;">✓ &nbsp;Answers every call 24/7 — never miss a lead again</div>
                <div style="color:#6B6B70;padding:12px 0;border-bottom:1px solid #E5E5E4;">✓ &nbsp;Instant SMS callback when you're on the tools</div>
                <div style="color:#6B6B70;padding:12px 0;">✓ &nbsp;Bookings confirmed without you picking up the phone</div>
              </div>

              <a href="https://calendly.com/delegate-freeyourtime" style="display:block;background:#FF5A1F;color:white;text-align:center;padding:16px;font-weight:700;text-decoration:none;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:24px;">BOOK YOUR FREE 30-MIN DEMO →</a>

              <p style="color:#6B6B70;font-size:12px;text-align:center;margin:0;">Delegate — AI for UK trades | delegate-me.com</p>
            </div>
          `,
        }),
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Event audit error:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
