import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const languageSkills = ["C++", "Java", "Python", "JavaScript", "React", "Angular.js", "Rust", "Go"];
    const frameworkSkills = ["PyTorch", "Git", "Linux", "Azure Cloud", "AWS", "Oracle MySQL Developer", "Google Cloud", "API Development"];
    const developerTools = ["Data Structures", "Statistics", "Operating Systems", "Linux", "Machine Learning", "Discrete Math"];
    const librarySkills = ["SFML", "Pandas", "NumPy", "Matplotlib"]; 



    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-br from-fuchsia-500 to-fuchsia-700 bg-clip-text text-transparent text-center"> 
                About Me 
            </h2>

            <div className="rounded-xl p-8 border-fuchsia-700/50 border hover:-translate-y-1 transition-all"> 
                <p className="text-fuchsia-500 mb-6">
                    <h3 className="text-xl font-bold mb-4 text-fuchsia-600">🏫 Education</h3>
                    <ul className="list-disc list-inside text-fuchsia-500 space-y-2">
                        <li>
                            <strong>B.S. in Computer Science</strong> - New Jersey Institute of Technology (January 2023 - January 2027)
                        </li>
                        </ul>
                    
                    </p>
            

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="rounded-xl p-3 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-3 text-fuchsia-500">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                        {languageSkills.map((tech, key) => (
                            <span key={key} className="bg-fuchsia-500/10 text-fuchsia-800 py-1 px-3 rounded-full text-sm hover:bg-fuchsia-500/20 
                                            hover:shadow-[0_2px_8px_rgba(150,7,166,0.2)] transition
                            ">
                                {tech}

                            </span>
                        ))}

                        

                    </div>

                </div>

                <div className="rounded-xl p-3 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-3 text-fuchsia-500">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                        {frameworkSkills.map((tech, key) => (
                            <span key={key} className="bg-fuchsia-500/10 text-fuchsia-800 py-1 px-3 rounded-full text-sm hover:bg-fuchsia-500/20 
                                            hover:shadow-[0_2px_8px_rgba(150,7,166,0.2)] transition
                            ">
                                {tech}

                            </span>
                        ))}

                        

                    </div>

                </div>

                <div className="rounded-xl p-3 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-3 text-fuchsia-500">Relevant Coursework</h3>
                    <div className="flex flex-wrap gap-2">
                        {developerTools.map((tech, key) => (
                            <span key={key} className="bg-fuchsia-500/10 text-fuchsia-800 py-1 px-3 rounded-full text-sm hover:bg-fuchsia-500/20 
                                            hover:shadow-[0_2px_8px_rgba(150,7,166,0.2)] transition
                            ">
                                {tech}

                            </span>
                        ))}

                        

                    </div>

                </div>

                <div className="rounded-xl p-3 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-3 text-fuchsia-500">Libraries</h3>
                    <div className="flex flex-wrap gap-2">
                        {librarySkills.map((tech, key) => (
                            <span key={key} className="bg-fuchsia-500/10 text-fuchsia-800 py-1 px-3 rounded-full text-sm hover:bg-fuchsia-500/20 
                                            hover:shadow-[0_2px_8px_rgba(150,7,166,0.2)] transition
                            ">
                                {tech}

                            </span>
                        ))}

                        

                    </div>

                </div>
                
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">

                <div className="p-6 rounded-xl border-fuchsia-700/50 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4 text-fuchsia-600">🖥️ Work Experience</h3>
                    <div className="space-y-4 text-fuchsia-500">
                         <div>

                            <h4>
                                <strong>Technical Office Staff @ Darul Islah (Sep 2024 - Present)</strong>
                            </h4>
                            <p>
                                - Resolved hardware and network issues for 20+ school workstations, achieved 99% uptime for critical admin systems, including technology and network systems
                            </p>
                            <p>
                                 - Automated attendance taking with Bash and Python scripts, cutting manual data entry time
                            </p>
                               


                            
                        </div>
                        
                        <div>
                            <h4>
                                <strong>Software Engineer Intern @ Outamation (May 2025 - August 2025)</strong>
                            </h4>
                            <p>
                                Developed AI driven workflows for processing mortgage documents, leveraging Natural Language Processing (NLP) and Computer Vision to automate classification and data extraction in a fast-paced, collaborative environment
                            </p>
                            <p>
                                Evaluated open-source AI models, optimizing performance for document classification and question answering tasks in mortgage automation by 15%

                            </p>
                            </div>

                           

                    </div>
                    
                </div>

            </div>
        </div>
</RevealOnScroll>
        
    </section>
}