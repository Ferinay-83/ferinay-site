import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type");
    let body: any;

    if (contentType?.includes("application/json")) {
      body = await request.json();
    } else {
      // Handle FormData
      const formData = await request.formData();
      body = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        company: formData.get("company") as string,
        message: formData.get("message") as string,
        privacyConsent: formData.get("privacyConsent") as string,
      };
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
      privacyConsent,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message || !privacyConsent) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    try {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "info@mail.ferinay.co.za",
          to: "info@ferinay.co.za",
          subject: `New contact form submission from ${firstName} ${lastName}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <p><strong>Privacy Consent:</strong> ${
              privacyConsent ? "Yes" : "No"
            }</p>
            <hr>
            <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
          `,
        }),
      });

      if (!emailResponse.ok) {
        console.error(
          "Failed to send notification email:",
          await emailResponse.text()
        );
      }

      const autoResponderResponse = await fetch(
        "https://api.resend.com/emails",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "noreply@ferinay.co.za",
            to: email,
            subject: "Thank you for your message!",
            html: `
            <h2>Thank you for contacting Ferinay!</h2>
            <p>Dear ${firstName},</p>
            <p>Your message has been received.</p>
            <p>I am currently away from my desk but will get back to you as soon as possible during my operating hours.</p>
            
            <h3>Operating Hours (SAST):</h3>
            <ul>
              <li>Monday - Friday: 6:00 PM - 12:00 AM</li>
              <li>Saturday & Sunday: Closed</li>
            </ul>
            
            <p>We appreciate your patience and look forward to speaking with you.</p>
            
            <p>Best regards,<br>
            The Ferinay Team</p>
            
            <hr>
            <p><small>This is an automated response. Please do not reply to this email.</small></p>
          `,
          }),
        }
      );

      if (!autoResponderResponse.ok) {
        console.error(
          "Failed to send auto-responder email:",
          await autoResponderResponse.text()
        );
      }
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      // Continue with success response even if email fails
    }

    // Log the submission for backup
    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
      privacyConsent,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message:
          "Thank you for your message! We'll get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
