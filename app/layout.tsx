import type { Metadata } from "next";
import "./globals.css";
import Particles from "@/components/Particles";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Rohit Pujari | Developer Portfolio",
  description:
    "Portfolio of Rohit Pujari featuring interactive frontend work, current tools, and selected projects built with Next.js and React.",
  keywords: [
    "Rohit Pujari",
    "Developer Portfolio",
    "Frontend Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript Portfolio",
    "Linux",
    "Open Source",
  ],
  authors: [{ name: "Rohit Pujari", url: "https://rohit-pujari.vercel.app" }],
  creator: "Rohit Pujari",
  metadataBase: new URL("https://rohit-pujari.vercel.app"),
  openGraph: {
    title: "Rohit Pujari | Full Stack Developer",
    description:
      "Explore Rohit Pujari's portfolio, stack, and featured work built with modern web tools.",
    url: "https://rohit-pujari.vercel.app",
    siteName: "Rohit Pujari Portfolio",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/avatar.jpg" type="image/jpg" />
      </head>
      <body
        suppressHydrationWarning
        className="relative overflow-x-hidden bg-black font-serif text-white"
      >
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.32),_transparent_30%),radial-gradient(circle_at_18%_20%,_rgba(255,255,255,0.18),_transparent_22%),radial-gradient(circle_at_82%_26%,_rgba(255,255,255,0.14),_transparent_18%),linear-gradient(180deg,_rgba(255,255,255,0.1),_rgba(2,2,2,0)_24%),linear-gradient(135deg,_#12151a_0%,_#050608_48%,_#000000_100%)] md:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_35%),linear-gradient(180deg,_rgba(255,255,255,0.05),_rgba(2,2,2,0)_25%),linear-gradient(135deg,_#090909_0%,_#020202_55%,_#000000_100%)]" />
          <div className="absolute -left-10 top-14 h-56 w-56 rounded-full bg-white/18 blur-3xl md:-left-24 md:top-24 md:h-56 md:w-56 md:bg-cyan-400/10" />
          <div className="absolute right-[-3rem] top-1/4 h-72 w-72 rounded-full bg-white/18 blur-3xl md:right-0 md:top-1/3 md:h-72 md:w-72 md:bg-white/6" />
          <div className="absolute bottom-8 left-1/5 h-60 w-60 rounded-full bg-slate-100/16 blur-3xl md:bottom-0 md:left-1/4 md:h-64 md:w-64 md:bg-slate-400/8" />
          <div className="absolute inset-0 opacity-80">
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={700}
              particleSpread={10}
              speed={0.2}
              particleBaseSize={200}
              moveParticlesOnHover={false}
              alphaParticles={true}
              disableRotation={true}
            />
          </div>
        </div>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
