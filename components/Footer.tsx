import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex flex-col items-center gap-3 mb-2">
            <Image src="/logo.jpg" alt="JGFA Football" width={120} height={120} className="rounded-xl object-contain" />
            <span className="text-white font-bold text-base tracking-tight">JGFA Football</span>
          </div>
          <div className="flex gap-6 text-xs">
            <Link href="/#programs" className="hover:text-white transition-colors">Programs</Link>
            <Link href="/#why" className="hover:text-white transition-colors">Why JGFA</Link>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <Link href="/#gallery" className="hover:text-white transition-colors">Gallery</Link>
            <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
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
