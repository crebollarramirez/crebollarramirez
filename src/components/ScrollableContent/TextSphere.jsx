import React, {useEffect} from "react";
import "./../../styles/TextSphere.css";

import TagCloud from "TagCloud";

const TextSphere = () => {
    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const texts = [
                "C++",
                "Java",
                "Python",
                "HTML+CSS",
                "JavaScript",
                "TypeScript",
                "Swift",
                "GDB Debugger",
                "JDB Debugger",
                "Valgrind",
                "GPROF",
                "Git",
                "React.js",
                "Node.js",
                "React-Native",
                "MongoDB",
                "SQL",
                "Firebase",
                "Sentry",
                "Flurry"
            ];
            
            
            const options = {
                radius: 300, 
                maxSpeed: "fast",
                initSpeed: "fast",
                keep: true,
            };

            TagCloud(container, texts, options)
        }
    }, [])

    return (
        <div className="text-sphere textSphereGridItem grid-skills-item">
            <span className="tagcloud"></span>
        </div>
    )
}

export default TextSphere;