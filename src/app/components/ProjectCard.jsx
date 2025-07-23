import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl, title, description, gitUrl, previewUrl, tech
}) => {
  return (
    <div
      className="group cursor-pointer rounded-2xl bg-[#181818]/70 shadow-xl overflow-hidden border border-white/10 hover:border-yellow-400/40 transition-all duration-500 hover:scale-105 w-[340px] h-[420px] flex flex-col"
    >
      <div
        className="h-52 md:h-56 rounded-t-2xl relative"
        style={{ background: `url(${imgUrl}) center/cover` }}
      >
        <div className="overlay absolute inset-0 bg-[#181818]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-all duration-500">
          <Link
            href={gitUrl}
            target="_blank"
            onClick={e => e.stopPropagation()}
            className="h-12 w-12 border-2 rounded-full border-yellow-400 flex items-center justify-center transition-colors hover:border-white"
          >
            <CodeBracketIcon className="h-7 w-7 text-yellow-400 group-hover:text-white transition-colors" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            onClick={e => e.stopPropagation()}
            className="h-12 w-12 border-2 rounded-full border-yellow-400 flex items-center justify-center transition-colors hover:border-white"
          >
            <EyeIcon className="h-7 w-7 text-yellow-400 group-hover:text-white transition-colors" />
          </Link>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h5 className="text-lg font-bold mb-2 text-white line-clamp-2">{title}</h5>
          <p className="text-[#ADB7BE] mb-2 line-clamp-3">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tech?.map((t, i) => (
            <span key={i} className="bg-yellow-400/20 text-yellow-300 text-xs px-2 py-1 rounded">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
