'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import Typewriter from 'typewriter-effect';

import { useEffect, useState } from 'react';
import Link from "next/link";

export default function Home() {

  const [isTypewriterComplete, setIsTypewriterComplete] = useState(false);

  useEffect(() => {
    const isTypewriterAlreadyComplete = localStorage.getItem('isTypewriterComplete');
    if (isTypewriterAlreadyComplete) {
      setIsTypewriterComplete(true);
    }
  }, []);

  const handleTypewriterComplete = () => {
    setIsTypewriterComplete(true);
    localStorage.setItem('isTypewriterComplete', 'true');
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 font-playfair text-navy relative">
    <div className="floral-left absolute left-0 top-0 bottom-0 z-0"></div>
      <div className="floral-right absolute right-0 top-0 bottom-0 z-0"></div>

      <div className="relative z-10 text-center">
      <h1 className="text-xl">
        {!isTypewriterComplete ? (

            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Hello')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Hi, I'm Hannah.")
                  .callFunction(handleTypewriterComplete)
                  .start();
              }}
            />
        ) : (
          "Hi, I'm Hannah."
        )} 
        </h1>
      
        
        {isTypewriterComplete && (
          <div className="flex flex-col justify-content items-center">
            <h1 className="text-xl">Thanks for stopping by.</h1>
            <h4 className="text-centerfont-jersey text-xs max-w-md overflow-hidden whitespace-no-wrap pt-4">
              I'm a fullstack software engineer, with a bachelor's degree and experience designing, 
              implementing and testing full-stack web applications.
              Currently open to a role where I can continue my coding journey.
              In my freetime, I love to walk my dog, read, golf and bird-watch.
            </h4>
            <br></br>
            <div className="navigation flex space-x-8">
              <Link href="https://www.linkedin.com/in/hcour/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedinIn } size="2x"/> </Link>
              <Link href="https://github.com/hcour97" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } size="2x"/> </Link>
              <a href={`mailto:${'hcour97@gmail.com'}`} ><FontAwesomeIcon icon={ faEnvelope }size ="2x"/></a>
            </div>
            <br></br>
            
            <div>
              <div className="flex justify-left">
                <Link href="/hannah-courtney-resume.pdf" download className="inline-block px-6 py-2 text-white bg-green-500 border border-green-250 rounded-lg">Download my resume {"\u21E9"} </Link>
                <div className="w-8"></div>
                <Link href={'/projects'} className="inline-block px-6 py-2 text-white bg-green-500 border border-green-250 rounded-lg">Check Out My Projects</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
    
  );
}
