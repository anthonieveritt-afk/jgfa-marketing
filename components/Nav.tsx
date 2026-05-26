"use client";
import Image from "next/image";
import Link from "next/link";

export default function Nav({ dark = false }: { dark?: boolean }) {
  const bg = dark ? "bg-white border-b border-gray-100" : "bg-black/30 backdrop-blur-sm border-b border-white/10";
  const textCol = dark ? "text-gray-600 hover:text-blue-700" : "text-white hover:text-white";
  const nameCol = dark ? "text-gray-900" : "text-white";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${bg}`}>
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpg" alt="JGFA Football" width={56} height={56} className="rounded-md object-contain" />
          <span className={`font-bold text-sm tracking-tight ${nameCol}`}>JGFA Football</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/#programs" className={`transition-colors ${textCol}`}>Programs</Link>
          <Link href="/#why" className={`transition-colors ${textCol}`}>Why JGFA</Link>
          <Link href="/locations" className={`transition-colors ${textCol}`}>Locations</Link>
          <Link href="/#gallery" className={`transition-colors ${textCol}`}>Gallery</Link>
          <Link href="/#contact" className={`transition-colors ${textCol}`}>Contact</Link>
        </nav>
        <Link href="/#contact" className="bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-800 transition-colors">
          Book a Trial — £10
        </Link>
      </div>
    </header>
  );
}
