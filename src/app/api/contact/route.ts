import { NextResponse } from "next/server";
import { siteConfig } from "@/data/siteConfig";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, videoLength, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const payload = {
      name,
      email,
      company: company || "Not provided",
      projectType: projectType || "General Inquiry",
      videoLength: videoLength || "Not specified",
      message,
      _subject: `🎬 New EXPLAINERACE Inquiry: ${name} (${company || "Direct Client"})`,
      _replyto: email,
      _template: "table",
    };

    // Forward to FormSubmit via server-to-server fetch
    const response = await fetch(
      `https://formsubmit.co/ajax/${siteConfig.contactEmail}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: siteConfig.siteUrl,
          Referer: `${siteConfig.siteUrl}/contact`,
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to dispatch email inquiry." },
      { status: 500 }
    );
  }
}
