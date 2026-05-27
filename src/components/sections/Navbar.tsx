import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 mix-blend-difference px-6 lg:px-12 py-6">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex-shrink-0">
          <Link href="/" className="font-mono text-sm font-bold text-white flex gap-2 tracking-widest uppercase items-center">
            <span>Chizel</span>
            <span className="text-zinc-500">/ STUDIO</span>
          </Link>
        </div>

        {/* Center */}
        <nav className="hidden md:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
          {['Work', 'Services', 'Process'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-xs font-mono text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex-shrink-0">
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
          >
            Initiate Project <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </header>
  );
}
