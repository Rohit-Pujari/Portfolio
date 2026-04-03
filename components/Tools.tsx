import React from "react";
import InfiniteMenu from "./InfiniteMenu";
import { tools } from "@/constants";

function Tools() {
  return (
    <section
      id="tools"
      className="relative flex w-full max-w-6xl flex-col gap-4 rounded-3xl border border-white/12 bg-black/40 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 md:bg-white/10"
    >
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.3em] text-white/55">
          Stack
        </p>
        <h2 className="text-xl font-bold sm:text-2xl">Tools I work with</h2>
      </div>

      <div className="hidden md:block">
        <InfiniteMenu items={tools} />
      </div>

      <div className="grid grid-cols-2 gap-3 md:hidden">
        {tools.map((tool) => (
          <a
            key={tool.title}
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/12 bg-white/14 p-4 transition-colors hover:bg-white/18"
          >
            <p className="text-sm font-semibold text-white">{tool.title}</p>
            <p className="mt-2 text-xs leading-5 text-white/65">
              {tool.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Tools;
