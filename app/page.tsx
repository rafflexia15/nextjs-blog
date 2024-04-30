import Image from "next/image";

import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { LogoNodejs } from "react-ionicons";

import { JSX as LocalJSX } from "@ionic/core";
import { JSX as IoniconsJSX } from "ionicons";
import { HTMLAttributes, ReactText } from "react";

type ToReact<T> = {
  [P in keyof T]?: T[P] &
    Omit<HTMLAttributes<Element>, "className"> & {
      class?: string;
      key?: ReactText;
    };
};

declare global {
  export namespace JSX {
    interface IntrinsicElements
      extends ToReact<
        LocalJSX.IntrinsicElements & IoniconsJSX.IntrinsicElements
      > {}
  }
}

const Profile = () => {
  return (
    <div className="w-full md:w-[40%] border border-white shadow-lg bg-gradient-to-r from-cyan-500 to-teal-950 p-14 rounded-2xl flex flex-col gap-4 items-center">
      <div className="aspect-square w-40 bg-white rounded-full relative overflow-hidden">
        <Image alt="foto ganteng" src="/images/pp.jpg" fill={true} />
      </div>
      <span className="text-3xl font-medium text-center">Ravenka</span>
      <span className="bg-black text-lg py-1 px-3 rounded-lg">Programmer</span>

      <div className="flex gap-3">
        <a href="https://www.instagram.com/__ravenka/" target="_blank">
          <ion-icon class="icon" name="logo-instagram" size="large"></ion-icon>
        </a>
        <a href="https://github.com/rafflexia15" target="_blank">
          <ion-icon class="icon" name="logo-github" size="large"></ion-icon>
        </a>
      </div>
    </div>
  );
};

const Description = () => {
  return (
    <div className="w-full md:w-[60%] border border-white shadow-lg rounded-2xl p-12 flex items-center justify-center">
      <div className="text-xl leading-relaxed text-center tracking-widest ">
        24 year old <b>programmer and video editor</b> based in{" "}
        <b className="text-2xl">Jakarta</b> helping you to make{" "}
        <i>your brand</i> become <b className="text-2xl">Bigger</b> and{" "}
        <b className=" text-2xl">Better.</b>
        <div>
          <a
            href="https://drive.google.com/drive/folders/1ElrNWFd-UMp-1HOfWF_1haF9WwMZN1_1?usp=sharing"
            className="text-xs button rounded-lg mt-4"
            target="_blank"
          >
            <b>Check Portofolio</b>
          </a>
        </div>
      </div>
    </div>
  );
};

const Spotify1 = () => {
  return (
    <div className="w-full md:w-[50%] flex items-center justify-center">
      <iframe
        src="https://open.spotify.com/embed/playlist/5e6XY1JR3Li5tmjF5Py6nV?utm_source=generator&theme=0"
        width="100%"
        height="400"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

const Spotify2 = () => {
  return (
    <div className="w-full md:w-[50%] flex items-center justify-center">
      <iframe 
        src="https://open.spotify.com/embed/playlist/42K0zKKOXsdhNBVomvacoT?utm_source=generator"
        width="100%"
        height="400"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        ></iframe>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex bg-min-h-screen flex-col items-center justify-between px-4 py=8">
      <div className="flex flex-col gap-8 max-w-screen-md pt-6">
        <div className="flex flex-col md:flex-row gap-8">
          <Profile />
          <Description />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <Spotify1 />
          <Spotify2 />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between text-xs font-small text-center pt-6 pb-6">
        &copy; Ravenka 2023
      </div>
      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        defer
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        defer
      ></script>
    </main>
  );
}
