'use client'
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-left p-24 font-playfair text-navy">
      <h1 className="font-bold text-3xl">Hi I'm Hannah.</h1>
        <p className="text-navy text-small">Thanks for stopping by. </p>
        
        <br></br>
      <h4 className="text-centerfont-jersey text-xs">
        I'm a fullstack web developer, who loves to read, golf and bird in my freetime.
      </h4>
      <br></br>
      <div className="flex justify-left">
        <Link href="/hannah-courtney-resume.pdf" download className="inline-block px-6 py-2 text-white bg-green-500 border border-green-250 rounded-lg">Download my resume {"\u21E9"} </Link>
        <div className="w-8"></div>
        <Link href={'/projects'} className="inline-block px-6 py-2 text-white bg-green-500 border border-green-250 rounded-lg">Check Out My Projects</Link>
      </div>
      
    </main>
  );
}
