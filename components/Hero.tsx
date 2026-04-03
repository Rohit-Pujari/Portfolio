"use client";
import React from "react";
import TiltedCard from "./TiltedCard";

function Hero() {
  return (
    <section
      id="about"
      className="mt-16 flex min-h-[auto] w-full max-w-6xl flex-col items-center gap-5 rounded-3xl border border-white/12 bg-black/40 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:mt-20 sm:p-6 md:gap-6 md:bg-white/10 lg:flex-row lg:items-start"
      style={{ perspective: "1000px" }}
    >
      <TiltedCard
        imageSrc={"/images/avatar.jpg"}
        altText="Avatar Image"
        imageHeight={"min(240px, 42vw)"}
        imageWidth={"min(240px, 42vw)"}
      />
      <div className="flex max-w-2xl flex-col gap-3 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">
          Rohit Pujari
        </p>
        <h1 className="text-xl font-semibold leading-tight sm:text-3xl">
          Full stack developer building clean, responsive web products.
        </h1>
        <p className="text-sm leading-6 break-words text-white/75 sm:text-base sm:leading-7">
          I build responsive web experiences with React, Next.js, TypeScript,
          and modern UI tooling. This portfolio is a focused snapshot of my
          current stack, selected work, and the kind of interfaces I like
          shipping.
        </p>
      </div>
    </section>
  );
}

export default Hero;
