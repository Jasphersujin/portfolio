// import type { APIRoute } from "astro";
// import { Resend } from "resend";

// // const resend = new Resend(process.env.RESEND_API_KEY);

// const apiKey = process.env.RESEND_API_KEY;

// if (!apiKey) {
//   throw new Error("RESEND_API_KEY is missing");
// }

// const resend = new Resend(apiKey);

// export const POST: APIRoute = async ({ request }) => {
//   try {
//     const { name, email, subject, message } = await request.json();

//     if (!name || !email || !subject || !message) {
//       return new Response(
//         JSON.stringify({
//           success: false,
//           message: "All fields are required.",
//         }),
//         {
//           status: 400,
//         }
//       );
//     }

//     await resend.emails.send({
//       from: "Portfolio <onboarding@resend.dev>",
//       to: process.env.CONTACT_EMAIL!,
//       replyTo: email,
//       subject: `Portfolio Contact • ${subject}`,
//       html: `
//         <div style="font-family:Arial,sans-serif;padding:20px;">
//           <h2>New Portfolio Contact</h2>

//           <p><strong>Name:</strong> ${name}</p>

//           <p><strong>Email:</strong> ${email}</p>

//           <p><strong>Subject:</strong> ${subject}</p>

//           <hr />

//           <p>${message.replace(/\n/g, "<br/>")}</p>
//         </div>
//       `,
//     });

//     await resend.emails.send({
//       from: "Portfolio <onboarding@resend.dev>",
//       to: email,
//       subject: "Thanks for contacting me",
//       html: `
//         <p>Hi ${name},</p>
//         <p>Thanks for reaching out through my portfolio.</p>
//         <p>I've received your message and will get back to you soon.</p>
//         <p>Best,<br />Jaspher</p>
//       `,
//     });

//     return new Response(
//       JSON.stringify({
//         success: true,
//       }),
//       {
//         status: 200,
//       }
//     );
//   } catch (err) {
//     console.error(err);

//     return new Response(
//       JSON.stringify({
//         success: false,
//         message: "Unable to send email.",
//       }),
//       {
//         status: 500,
//       }
//     );
//   }
// };


import type { APIRoute } from "astro";
import { Resend } from "resend";

export const POST: APIRoute = async ({ request }) => {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      console.error("Missing email environment variables");

      return new Response(
        JSON.stringify({
          success: false,
          message: "Email service is not configured.",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const resend = new Resend(apiKey);

    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All fields are required.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Email to you
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: `Portfolio Contact • ${subject}`,
      html: `
        <h2>New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Confirmation email to visitor
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: email,
      subject: "Thanks for contacting me",
      html: `
        <p>Hi ${name},</p>

        <p>Thanks for reaching out through my portfolio.</p>

        <p>
          I've received your message and will get back to you soon.
        </p>

        <p>Best,<br />Jaspher</p>
      `,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message sent successfully.",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Unable to send email.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};