import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-zinc-100 p-8 select-none">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-4xl font-display font-extrabold tracking-tight bg-gradient-to-r from-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-sm text-zinc-400 font-light leading-relaxed">
          This is the about page. Under construction as part of the portfolio revamp.
        </p>
        <div className="pt-6">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-full border border-white/10 hover:bg-white hover:text-zinc-950 text-xs font-semibold tracking-wider uppercase transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
