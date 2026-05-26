"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

/* ─── Nav ─── */
function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-black">J</span>
          </div>
          <span className="font-bold text-gray-900 text-sm tracking-tight">
            Junior Generation FA
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#programs" className="hover:text-green-600 transition-colors">
            Programs
          </a>
          <a href="#why" className="hover:text-green-600 transition-colors">
            Why JGFA
          </a>
          <a href="#gallery" className="hover:text-green-600 transition-colors">
            Gallery
          </a>
          <a href="#contact" className="hover:text-green-600 transition-colors">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="bg-green-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-green-700 transition-colors"
        >
          Book a Free Trial
        </a>
      </div>
    </header>
  );
}

/* ─── Hero ─── */
const heroSlides = [
  { src: "/hero/hero1.jpg", alt: "Young players competing on the pitch" },
  { src: "/hero/hero2.jpg", alt: "Football stadium lights" },
  { src: "/hero/hero3.jpg", alt: "Junior football action" },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-16 bg-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-8 tracking-wide uppercase">
            ⚽ Youth Football · Ages 4–16
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-6">
            The Game
            <br />
            <span className="text-green-600">Starts Here.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
            Professional coaching, real development, and a love for the game.
            JGFA gives every young player the skills, confidence, and team
            spirit to thrive on and off the pitch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-green-600 text-white font-bold px-8 py-4 rounded-full text-center hover:bg-green-700 transition-colors text-base"
            >
              Book a Free Trial Session
            </a>
            <a
              href="#programs"
              className="border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full text-center hover:border-green-600 hover:text-green-600 transition-colors text-base"
            >
              See Our Programs
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8 text-sm text-gray-400">
            <div>
              <span className="block text-2xl font-black text-gray-900">4–16</span>
              All ages welcome
            </div>
            <div className="w-px h-10 bg-gray-100" />
            <div>
              <span className="block text-2xl font-black text-gray-900">Pro</span>
              UEFA qualified coaches
            </div>
            <div className="w-px h-10 bg-gray-100" />
            <div>
              <span className="block text-2xl font-black text-gray-900">All</span>
              Abilities, no tryouts
            </div>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden relative bg-gray-100">
            {heroSlides.map((slide, i) => (
              <div
                key={slide.src}
                className="absolute inset-0 transition-opacity duration-1000"
                style={{ opacity: i === current ? 1 : 0 }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
            {/* Dark overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl" />
          </div>
          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">
              ⚽
            </div>
            <div>
              <div className="text-xs text-gray-400">Season kicking off</div>
              <div className="text-sm font-bold text-gray-900">
                Register Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Programs ─── */
const programs = [
  {
    emoji: "🏫",
    title: "After-School Clubs",
    subtitle: "Weekly sessions",
    description:
      "Fun, structured football training straight after school. Your child builds skills, makes friends, and burns energy — all in a safe, coached environment.",
    bullets: [
      "Technical skills: passing, shooting, dribbling",
      "Small-sided games and team play",
      "Progress tracked every term",
      "Ages 5–16 · Mixed abilities welcome",
    ],
  },
  {
    emoji: "⛺",
    title: "Holiday Camps",
    subtitle: "School holiday intensives",
    description:
      "Full-day football camps during half-term and school holidays. Intensive, exciting, and packed with development. Kids leave better players and big smiles.",
    bullets: [
      "Full-day sessions (9am–3pm)",
      "Themed coaching days",
      "Mini tournaments and skills challenges",
      "Half-term, Easter & Summer",
    ],
  },
  {
    emoji: "🎯",
    title: "Skills Academy",
    subtitle: "Position-specific coaching",
    description:
      "For players who want to go further. Focused sessions on specific positions and advanced techniques, delivered by our most experienced coaches.",
    bullets: [
      "Goalkeeper, striker, midfielder tracks",
      "Video analysis for older groups",
      "Pathway to grassroots teams",
      "Ages 8–16",
    ],
  },
];

function Programs() {
  return (
    <section id="programs" className="bg-gray-50 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-green-600 text-sm font-bold uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Programs built for
            <br />
            every young player.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{p.emoji}</div>
              <div className="text-xs text-green-600 font-semibold uppercase tracking-widest mb-1">
                {p.subtitle}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">
                {p.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {p.description}
              </p>
              <ul className="space-y-2">
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-8 py-4 rounded-full hover:bg-green-700 transition-colors"
          >
            Enrol Your Child Today →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Why JGFA ─── */
const reasons = [
  {
    icon: "🏆",
    title: "Qualified, passionate coaches",
    body: "Every JGFA coach holds UEFA/FA qualifications and a current DBS check. They don't just teach football — they inspire young players.",
  },
  {
    icon: "🌱",
    title: "Development-first, not results-first",
    body: "We focus on long-term player development: technique, confidence, and enjoyment. Winning is a byproduct. Loving the game is the goal.",
  },
  {
    icon: "🤝",
    title: "All abilities, no tryouts",
    body: "Never kicked a ball before? Perfect. Our sessions are designed to welcome beginners and challenge experienced players alike — no tryouts, no pressure.",
  },
  {
    icon: "🛡️",
    title: "Safe, structured environment",
    body: "Safeguarding is non-negotiable. All coaches are DBS-cleared, sessions are fully supervised, and our venues are safe, enclosed spaces.",
  },
  {
    icon: "📈",
    title: "Visible progress, every term",
    body: "Parents receive regular updates on their child's development. We track progress against age-appropriate benchmarks so you always know where your player is headed.",
  },
  {
    icon: "⚽",
    title: "Real football. Real fun.",
    body: "Sessions are designed to be genuinely fun. Kids come back every week because they want to — that's how we know it's working.",
  },
];

function Why() {
  return (
    <section id="why" className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-green-600 text-sm font-bold uppercase tracking-widest mb-3">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            More than a football club.
            <br />A foundation for life.
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Everything we do is built around one thing: giving every child the
            best possible start in football and in life.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <div className="text-3xl shrink-0">{r.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{r.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Gallery ─── */
const gallerySlots = Array.from({ length: 6 });

function Gallery() {
  return (
    <section id="gallery" className="bg-gray-50 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-green-600 text-sm font-bold uppercase tracking-widest mb-3">
            See It in Action
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Life at JGFA.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallerySlots.map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl bg-gradient-to-br from-green-100 to-green-200 flex flex-col items-center justify-center text-green-400 overflow-hidden"
            >
              <svg
                className="w-10 h-10 mb-2 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-xs font-medium opacity-60">Photo {i + 1}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 mt-6">
          Photos coming soon — check back shortly!
        </p>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
const testimonials = [
  {
    name: "Sarah M.",
    child: "Mum of Lucas, age 9",
    quote:
      "Lucas absolutely loves his after-school sessions. In just one term his confidence with the ball has gone through the roof — and he runs to get ready every Tuesday without me asking!",
  },
  {
    name: "James T.",
    child: "Dad of Amara, age 7",
    quote:
      "We were nervous about Amara joining because she'd never played before. The coaches were brilliant with her — patient, encouraging, and clearly passionate. She's now asking for boots for her birthday.",
  },
  {
    name: "Priya K.",
    child: "Mum of Rayan, age 12",
    quote:
      "Rayan's been to the summer camp two years running. The level of coaching is genuinely impressive — proper technique, proper feedback. Way beyond what I expected.",
  },
];

function Testimonials() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-green-600 text-sm font-bold uppercase tracking-widest mb-3">
            What Parents Say
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Heard from the touchline.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
            >
              <div className="text-green-500 text-3xl mb-4">"</div>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                {t.quote}
              </p>
              <div>
                <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                <div className="text-gray-400 text-xs">{t.child}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact / CTA ─── */
function Contact() {
  return (
    <section id="contact" className="bg-green-600 py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          Ready to kick off?
        </h2>
        <p className="text-green-100 text-lg mb-10 max-w-xl mx-auto">
          Book your child's free trial session today — no commitment, no
          pressure. Just football. We'll take it from there.
        </p>
        <div className="bg-white rounded-3xl p-8 md:p-12 text-left shadow-xl">
          <h3 className="text-2xl font-black text-gray-900 mb-2">
            Get in Touch
          </h3>
          <p className="text-gray-400 text-sm mb-8">
            Fill in the form below and we'll be in touch within 24 hours.
          </p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">
                  Parent / Guardian Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">
                  Child's Name & Age
                </label>
                <input
                  type="text"
                  placeholder="e.g. Marcus, age 8"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">
                Interested In
              </label>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option>After-School Club</option>
                <option>Holiday Camp</option>
                <option>Skills Academy</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">
                Anything else?
              </label>
              <textarea
                rows={3}
                placeholder="Any questions, experience level, availability..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-colors text-sm tracking-wide"
            >
              Book Free Trial Session →
            </button>
          </form>
          <p className="text-center text-xs text-gray-400 mt-4">
            Or email us directly at{" "}
            <a
              href="mailto:hello@jgfa.co.uk"
              className="text-green-600 hover:underline"
            >
              hello@jgfa.co.uk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-black">J</span>
          </div>
          <span className="text-white font-bold text-sm">
            Junior Generation Football Academy
          </span>
        </div>
        <div className="flex gap-6 text-xs">
          <a href="#programs" className="hover:text-white transition-colors">
            Programs
          </a>
          <a href="#why" className="hover:text-white transition-colors">
            Why JGFA
          </a>
          <a href="#gallery" className="hover:text-white transition-colors">
            Gallery
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} JGFA. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Programs />
        <Why />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
