"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;

      setIsVisible(scrollingUp || currentScrollY < 80);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pathname = usePathname();

  const navItems = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 px-6 lg:px-12 py-6 transition-transform duration-500 ease-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
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
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-mono ${isActive ? 'text-white' : 'text-zinc-400'} hover:text-white transition-colors uppercase tracking-widest`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right */}
        <div className="flex-shrink-0">
          <Link
            href="/planner"
            className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
          >
            Initiate Project <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </header>
  );
}
