import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({id, title, imgURL, languages, description, githubURL }) {
    return (
            <div className="project-card">
                    <div className="project-content">
                            <h1 className="font-bold text-2xl">{title}</h1>
                            <p>{languages}</p><br></br>
                            <img className="w-32 h-auto" src={imgURL} alt={title} /><br></br>
                            <p className="text-xs">{description}</p>
                            <Link href={githubURL} target="_blank" rel="noopener noreferrer">View on Github <FontAwesomeIcon icon={ faExternalLinkAlt } /></Link>
                    </div> 
                </div>    
    )
}