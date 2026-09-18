"use client";

import Image from "next/image";
import MyComponent from "./my_component.tsx";
import { useState, useEffect } from "react";

export default function Home() {
  const [state, setState] = useState(0);
  const [bgColor, setBgColor] = useState('red');
  const onIncrementar = () => {
    setState(state + 1)
  };
  const onDecrementar = () => {
    setState(state - 1)
  };
  const onDelete = () => {
    localStorage.removeItem("contador");
  };
  useEffect(() => {
    if (state == 0) {
      const valorGuardado = localStorage.getItem("contador");
      setState(Number(valorGuardado || 0))
    }
    if (state) {
      localStorage.setItem("contador", String(state));
    }
    if (state > 2) {
      setBgColor("red");
    } else {
      setBgColor("grey");
    }
    console.log('useEffect');
  
    // return () => {
    //   return
    // }
  }, [state, bgColor]);
  return (
    <main>
      <div className={`bg-${bgColor} dark:bg-${bgColor}`} style={{ background: bgColor }}>
        <h1>Big Title</h1>
        <h2>{state}</h2>
        <button onClick={onIncrementar}>Increment</button>
        <br/>
        <button onClick={onDecrementar}>Decrement</button>
        <br/>
        <button onClick={onDelete}>Delete Stuff</button>
        <MyComponent/>
      </div>
    </main>
  );
  // (
  //   <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
  //     <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
  //       <Image
  //         className="dark:invert h-5 w-[100px]"
  //         src="/next.svg"
  //         alt="Next.js logo"
  //         width={100}
  //         height={20}
  //         priority
  //       />
  //       <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
  //         <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
  //           To get started, edit the{" "}
  //           <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
  //             page.tsx
  //           </code>{" "}
  //           file.
  //         </h1>
  //         <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
  //           Looking for a starting point or more instructions? Head over to{" "}
  //           <a
  //             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //             className="font-medium text-zinc-950 dark:text-zinc-50"
  //           >
  //             Templates
  //           </a>{" "}
  //           or the{" "}
  //           <a
  //             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //             className="font-medium text-zinc-950 dark:text-zinc-50"
  //           >
  //             Learning
  //           </a>{" "}
  //           center.
  //         </p>
  //       </div>
  //       <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
  //         <a
  //           className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
  //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <Image
  //             className="dark:invert h-[14px] w-4"
  //             src="/vercel.svg"
  //             alt="Vercel logomark"
  //             width={16}
  //             height={14}
  //           />
  //           Deploy Now
  //         </a>
  //         <a
  //           className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
  //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Documentation
  //         </a>
  //       </div>
  //     </main>
  //   </div>
  // );
}
