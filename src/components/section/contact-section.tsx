// import { FlickeringGrid } from "@/components/magicui/flickering-grid";
// import { DATA } from "@/data/resume";

// export default function ContactSection() {
//   return (
//     <div className="border rounded-xl p-10 relative">
//       <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
//         <span className="text-background text-sm font-medium">{DATA.sections.contact.label}</span>
//       </div>
//       <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
//         <FlickeringGrid
//           className="h-full w-full"
//           squareSize={2}
//           gridGap={2}
//           style={{
//             maskImage: "linear-gradient(to bottom, black, transparent)",
//             WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
//           }}
//         />
//       </div>
//       <div className="relative flex flex-col items-center gap-4 text-center">
//         <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
//           {DATA.sections.contact.heading}
//         </h2>
//         <p className="mx-auto max-w-lg text-muted-foreground text-balance">
//           {DATA.sections.contact.text}
//         </p>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { Mail, MapPin, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
// import { DATA } from "@/data/resume";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    alert("Thanks! Your message has been sent.");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    alert(error instanceof Error ? error.message : "Something went wrong.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="relative overflow-hidden rounded-2xl border">
      <div className="absolute inset-0">
        <FlickeringGrid
          squareSize={2}
          gridGap={2}
          className="h-full w-full opacity-50"
        />
      </div>

      <div className="relative p-8 md:p-12">

        <div className="mb-10 text-center">
          <p className="text-primary font-medium">
            CONTACT
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Let's Build Something Together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Looking for a Software Engineer to build scalable
            backend systems, modern SaaS platforms, or AI
            applications? I'd love to hear about your project.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-1">

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid gap-5 md:grid-cols-2">

              <Input
                placeholder="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <Input
                placeholder="Your Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <Input
              placeholder="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
            />

            <Textarea
              rows={7}
              placeholder="Tell me about your project..."
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />

            <Button
              className="w-full"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>


        </div>

      </div>
    </section>
  );
}