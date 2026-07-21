// import type { APIRoute } from "astro";
// import { Resend } from "resend";

// const resend = new Resend(import.meta.env.RESEND_API_KEY);

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
//       to: import.meta.env.CONTACT_EMAIL,
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

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All fields are required.",
        }),
        {
          status: 400,
        }
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: import.meta.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact • ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;">
          <h2>New Portfolio Contact</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Subject:</strong> ${subject}</p>

          <hr />

          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({
        success: true,
      }),
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error(err);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Unable to send email.",
      }),
      {
        status: 500,
      }
    );
  }
};