import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface DemoRequestPayload {
  id: string;
  name: string;
  email: string;
  institution: string;
  message?: string;
  created_at: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const payload: DemoRequestPayload = await req.json();

    const adminEmailBody = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2c3e50; margin-bottom: 20px;">New Demo Request Received</h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
              <p><strong>Institution/Organization:</strong> ${escapeHtml(payload.institution)}</p>
              <p><strong>Submitted:</strong> ${new Date(payload.created_at).toLocaleString()}</p>
              ${payload.message ? `<p><strong>Message:</strong></p><p>${escapeHtml(payload.message)}</p>` : ""}
            </div>
            
            <p style="color: #666; font-size: 14px;">
              Request ID: ${payload.id}
            </p>
          </div>
        </body>
      </html>
    `;

    const userEmailBody = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2c3e50; margin-bottom: 20px;">Thank You for Your Interest in PlantechX</h2>
            
            <p>Hi ${escapeHtml(payload.name)},</p>
            
            <p>Thank you for submitting a demo request for PlantechX. We've received your request and our team will contact you within 24 hours to schedule your personalized demo.</p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Your Information:</strong></p>
              <p>Name: ${escapeHtml(payload.name)}</p>
              <p>Institution: ${escapeHtml(payload.institution)}</p>
              <p>Request ID: ${payload.id}</p>
            </div>
            
            <p>In the meantime, feel free to explore our features or reach out to us directly at <a href="mailto:contact@plantechx.in" style="color: #0066cc;">contact@plantechx.in</a></p>
            
            <p>Best regards,<br/>The PlantechX Team</p>
          </div>
        </body>
      </html>
    `;

    const adminResponse = await sendEmail(
      "contact@plantechx.in",
      `New Demo Request from ${payload.name}`,
      adminEmailBody
    );

    const userResponse = await sendEmail(
      payload.email,
      "Demo Request Received - PlantechX",
      userEmailBody
    );

    if (!adminResponse.ok || !userResponse.ok) {
      throw new Error("Failed to send email");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Emails sent successfully",
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});

async function sendEmail(
  to: string,
  subject: string,
  htmlBody: string
): Promise<Response> {
  const resendApiKey = Deno.env.get("RESEND_API_KEY");

  if (!resendApiKey) {
    console.error("RESEND_API_KEY not configured");
    return new Response(null, { status: 400 });
  }

  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: "demo@plantechx.in",
      to: to,
      subject: subject,
      html: htmlBody,
    }),
  });
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
