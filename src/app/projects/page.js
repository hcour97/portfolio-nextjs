'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faEnvelope, faHouse, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import { useState } from "react";
import Link from "next/link";
import { projectsList } from "../projectsList";
import ProjectCard from '@/components/ProjectCard';

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

            <div className="navigation flex justify-center items-center space-x-8">
                <Link className="text-navy" href={"/"}><FontAwesomeIcon icon={ faHouse }size ="2x"/></Link>
                <Link href="https://www.linkedin.com/in/hcour/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedinIn } size="2x"/> </Link>
                <Link href="https://github.com/hcour97" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } size="2x"/> </Link>
                <a href={`mailto:${'hcour97@gmail.com'}`} ><FontAwesomeIcon icon={ faEnvelope }size ="2x"/></a>
            </div>
        
        
            
        {/* <p className="text-xs">Javascript | HTML | CSS | Python | Node.js | React.js | Next.js | Express | PostgreSQL | SQL </p> */}
        <br></br>

            {/* <div className="flex justify-center items-center text-white">
                <button className="text-5xl px-5" onClick={prevProject}><FontAwesomeIcon icon={ faArrowLeft } className="text-navy"/></button>
                <div className="flower-border flex flex-col items-center bg-green-500 border rounded-lg p-10 px-20">
                        <h1 className="font-bold text-2xl">{projectsList[currentIndex].title}</h1>
                        <p>{projectsList[currentIndex].languages}</p><br></br>
                        <img className="w-32 h-auto" src={projectsList[currentIndex].imgURL} alt={projectsList[currentIndex].title} /><br></br>
                        <p className="text-xs">{projectsList[currentIndex].description}</p>
                        <Link href={projectsList[currentIndex].githubURL} target="_blank" rel="noopener noreferrer">View on Github <FontAwesomeIcon icon={faExternalLinkAlt} /></Link>
                </div> 
                <button className="text-5xl px-5" onClick={nextProject} ><FontAwesomeIcon icon={ faArrowRight } className="text-navy"/></button>
            </div> */}


            <div className="mapoutalltheprojects">
                {projectsList.map((project) => {
                    return (
                    <ProjectCard id={project.id}
                                title={project.title}
                                languages={project.languages}
                                imgURL={project.imgURL}
                                description={project.description}
                                githubURL={project.githubURL}
                    />
                    )
                })}
            </div>
        </main>
        
    )
}