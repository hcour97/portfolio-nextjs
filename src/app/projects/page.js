'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faEnvelope, faHouse, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import { useState } from "react";
import Link from "next/link";
import { projectsList } from "../projectsList";

export default function ProjectRoladex() {

const [currentIndex, setCurrentIndex] = useState(0);
console.log("currentIndex=", currentIndex)



const prevProject = () => {
    setCurrentIndex((prevIndex) => 
    prevIndex === 0 ? projectsList.length - 1 : prevIndex - 1
    );    
}

const nextProject = () => {
    setCurrentIndex((prevIndex) => {
        console.log("prevIndex=", prevIndex);
        return prevIndex === projectsList.length - 1 ? 0 : prevIndex + 1;
    })
}

    return (
        <main className="flex min-h-screen flex-col items-center p-24 font-playfair text-navy">

            <div className="px-100">
                <Link href="https://www.linkedin.com/in/hcour/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedinIn } size="2x"/> </Link>
                <Link href="https://github.com/hcour97" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } size="2x"/> </Link>
                <Link href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faEnvelope }size ="2x"/> </Link>
            </div>
            
            
        <p className="text-xs">Javascript | HTML | CSS | Python | Node.js | React.js | Next.js | Express | PostgreSQL | SQL </p>
        <br></br>
            <Link className="text-navy absolute top-0 left-0" href={"/"}><FontAwesomeIcon icon={ faHouse }size ="2x"/></Link>
            <div className="flex justify-center items-center">
                <button className="text-5xl px-5" onClick={prevProject}><FontAwesomeIcon icon={ faArrowLeft }/></button>
                <div className="flower-border flex flex-col items-center bg-green-500 border rounded-lg p-10 px-20">
                        <h1 className="font-bold text-2xl">{projectsList[currentIndex].title}</h1><br></br>
                        <img className="w-32 h-auto" src={projectsList[currentIndex].imgURL} alt={projectsList[currentIndex].title} /><br></br>
                        <p><span className="font-bold">built with:</span> {projectsList[currentIndex].languages}</p>
                        <p className="text-xs">{projectsList[currentIndex].description}</p>
                        <Link href={projectsList[currentIndex].githubURL} target="_blank" rel="noopener noreferrer">View on Github <FontAwesomeIcon icon={faExternalLinkAlt} /></Link>
                </div> 
                <button className="text-5xl px-5" onClick={nextProject} ><FontAwesomeIcon icon={ faArrowRight }/></button>
            </div>
        </main>
        
    )
}