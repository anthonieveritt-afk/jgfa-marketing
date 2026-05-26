"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

/* ─── Nav ─── */
function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpg" alt="JGFA Football" width={56} height={56} className="rounded-md object-contain" />
          <span className="font-bold text-white text-sm tracking-tight">JGFA Football</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white">
          <a href="#programs" className="hover:text-white transition-colors">Programs</a>
          <a href="#why" className="hover:text-white transition-colors">Why JGFA</a>
          <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-800 transition-colors">
          Book a Trial — £10
        </a>
      </div>
    </header>
  );
}

/* ─── Hero ─── */
const heroSlides = [
  { src: "/gallery/g28.jpg", alt: "JGFA May Camp 2026" },
  { src: "/gallery/g11.jpg", alt: "JGFA in action" },
  { src: "/gallery/g3.jpg", alt: "JGFA training" },
  { src: "/gallery/g1.jpg", alt: "JGFA session" },
  { src: "/gallery/g5.jpg", alt: "JGFA coaching" },
  { src: "/gallery/g9.jpg", alt: "JGFA players" },
  { src: "/gallery/g32.jpg", alt: "JGFA camp" },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Full-bleed background slides */}
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
            className="object-cover object-center"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-widest uppercase border border-white/20">
          ⚽ Youth Football · Ages 5–11
        </div>
        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-6" style={{textShadow:'0 2px 20px rgba(0,0,0,0.9)'}}>
          The Game<br/>
          <span className="text-blue-400">Starts Here.</span>
        </h1>
        <p className="text-xl md:text-2xl text-white leading-relaxed mb-3" style={{textShadow:'0 1px 8px rgba(0,0,0,0.8)'}}>
          Football development &amp; skills training for aspiring players aged 5–11.
        </p>
        <p className="text-sm text-white/80 mb-10">Collier Row · Dagenham · Harold Hill · After-school at Mead Primary</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a href="#contact" className="bg-blue-700 text-white font-bold px-10 py-4 rounded-full hover:bg-blue-800 transition-colors shadow-xl">
            Book a Trial Class — £10
          </a>
          <a href="#programs" className="bg-white/20 backdrop-blur-sm text-white font-semibold px-10 py-4 rounded-full hover:bg-white/30 transition-colors border border-white/40">
            See Our Programs
          </a>
        </div>
        <div className="flex items-center justify-center gap-10 text-sm">
          <div><span className="block text-3xl font-black">5–11</span><span className="text-white/80">Ages</span></div>
          <div className="w-px h-10 bg-white/20" />
          <div><span className="block text-3xl font-black">4</span><span className="text-white/80">Locations</span></div>
          <div className="w-px h-10 bg-white/20" />
          <div><span className="block text-3xl font-black">£10</span><span className="text-white/80">Trial class</span></div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-8" : "bg-white/40 w-2"
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 z-10 text-white/70 text-xs tracking-widest rotate-90 hidden md:block">
        SCROLL
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
      "Ages 5–11 · Mixed abilities welcome",
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
          <p className="text-blue-700 text-sm font-bold uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Programs built for
            <br />
            every young player.
          </h2>
          <p className="text-gray-400 text-sm mt-4">
            Sessions available in Collier Row · Dagenham · Harold Hill · After-school at Mead Primary
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{p.emoji}</div>
              <div className="text-xs text-blue-700 font-semibold uppercase tracking-widest mb-1">
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
                    <span className="text-blue-600 mt-0.5 shrink-0">✓</span>
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
            className="inline-flex items-center gap-2 bg-blue-700 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-800 transition-colors"
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
          <p className="text-blue-700 text-sm font-bold uppercase tracking-widest mb-3">
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
const gallerySections = [
  {
    title: "May Football Camp 2026",
    photos: [
      { src: "/gallery/g28.jpg", alt: "May Camp 2026" },
      { src: "/gallery/g29.jpg", alt: "May Camp 2026" },
      { src: "/gallery/g30.jpg", alt: "May Camp 2026" },
      { src: "/gallery/g31.jpg", alt: "May Camp 2026" },
      { src: "/gallery/g32.jpg", alt: "May Camp 2026" },
      { src: "/gallery/g33.jpg", alt: "May Camp 2026" },
      { src: "/gallery/g34.jpg", alt: "May Camp 2026" },
      { src: "/gallery/g35.jpg", alt: "May Camp 2026" },
      { src: "/gallery/g36.jpg", alt: "May Camp 2026" },
      { src: "/gallery/g37.jpg", alt: "May Camp 2026" },
      { src: "/gallery/g38.jpg", alt: "May Camp 2026" },
      { src: "/gallery/g39.jpg", alt: "May Camp 2026" },
      { src: "/gallery/g40.jpg", alt: "May Camp 2026" },
      { src: "/gallery/g41.jpg", alt: "May Camp 2026" },
      { src: "/gallery/g42.jpg", alt: "May Camp 2026" },
    ],
  },
  {
    title: "Sessions & Training",
    photos: [
      { src: "/gallery/g1.jpg", alt: "JGFA session" },
      { src: "/gallery/g2.jpg", alt: "JGFA session" },
      { src: "/gallery/g3.jpg", alt: "JGFA session" },
      { src: "/gallery/g4.jpg", alt: "JGFA session" },
      { src: "/gallery/g5.jpg", alt: "JGFA session" },
      { src: "/gallery/g6.jpg", alt: "JGFA session" },
      { src: "/gallery/g7.jpg", alt: "JGFA session" },
      { src: "/gallery/g8.jpg", alt: "JGFA session" },
      { src: "/gallery/g9.jpg", alt: "JGFA session" },
      { src: "/gallery/g10.jpg", alt: "JGFA session" },
      { src: "/gallery/g11.jpg", alt: "JGFA session" },
      { src: "/gallery/g12.jpg", alt: "JGFA session" },

    ],
  },
];

function Gallery() {
  return (
    <section id="gallery" className="bg-gray-50 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-700 text-sm font-bold uppercase tracking-widest mb-3">
            See It in Action
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Life at JGFA.
          </h2>
        </div>
        {gallerySections.map((section) => (
          <div key={section.title} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-black text-gray-900 whitespace-nowrap">{section.title}</h3>
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 whitespace-nowrap">{section.photos.length} photos</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {section.photos.map((photo) => (
                <div
                  key={photo.src}
                  className="relative rounded-2xl overflow-hidden bg-gray-100"
                  style={{ paddingBottom: "100%" }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
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
          <p className="text-blue-700 text-sm font-bold uppercase tracking-widest mb-3">
            What Parents Say
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Heard from the sideline.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
            >
              <div className="text-blue-600 text-3xl mb-4">"</div>
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
    <section id="contact" className="bg-blue-700 py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          Ready to kick off?
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
          Start your child's journey with a £10 trial class — no commitment,
          no pressure. Just football. We'll take it from there.
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
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">
                  Child's Name & Age
                </label>
                <input
                  type="text"
                  placeholder="e.g. Marcus, age 8"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">
                Interested In
              </label>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
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
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-colors text-sm tracking-wide"
            >
              Book a Trial Class — £10 →
            </button>
          </form>
          <p className="text-center text-xs text-gray-400 mt-4">
            Or email us directly at{" "}
            <a
              href="mailto:jack.jgfa@outlook.com"
              className="text-blue-700 hover:underline"
            >
              jack.jgfa@outlook.com
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
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex flex-col items-center gap-3 mb-2">
            <Image src="/logo.jpg" alt="JGFA Football" width={120} height={120} className="rounded-xl object-contain" />
            <span className="text-white font-bold text-base tracking-tight">
              JGFA Football
            </span>
          </div>
          <div className="flex gap-6 text-xs">
            <a href="#programs" className="hover:text-white transition-colors">Programs</a>
            <a href="#why" className="hover:text-white transition-colors">Why JGFA</a>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-xs">© 2021 – 2026 JGFA Football. All rights reserved.</p>
        </div>
        <p className="text-center text-xs text-gray-600 border-t border-gray-800 pt-4">
          Sessions in Collier Row · Dagenham · Harold Hill · After-school at Mead Primary
        </p>
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
