export const About = () => {

    const languageSkills = ["C++", "Python", "Java", "SQL", "JavaScript"];
    const frameworkSkills = ["React", "PyTorch", "Angular", "LlamaIndex"];
    const developerTools = ["Git", "Azure", "Visual Studio", "AWS", "VS Code"];
    const librarySkills = ["SFML", "Pandas", "NumPy", "Matplotlib"]; 



    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-br from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center"> 
                About Me 
            </h2>

            <div className="rounded-xl p-8 border-sky-300 border hover:-translate-y-1 transition-all"> 
                <p className="text-gray-600 mb-6">
                    Passionate developer with experience in building AI-driven workflows and high performance fintech systems.</p>
            

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="rounded-xl p-3 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-3 text-sky-300">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                        {languageSkills.map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                            ">
                                {tech}

                            </span>
                        ))}

                        

                    </div>

                </div>

                <div className="rounded-xl p-3 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-3 text-sky-300">Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                        {frameworkSkills.map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                            ">
                                {tech}

                            </span>
                        ))}

                        

                    </div>

                </div>

                <div className="rounded-xl p-3 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-3 text-sky-300">Developer Tools</h3>
                    <div className="flex flex-wrap gap-2">
                        {developerTools.map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                            ">
                                {tech}

                            </span>
                        ))}

                        

                    </div>

                </div>

                <div className="rounded-xl p-3 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-3 text-sky-300">Libraries</h3>
                    <div className="flex flex-wrap gap-2">
                        {librarySkills.map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                            ">
                                {tech}

                            </span>
                        ))}

                        

                    </div>

                </div>
                
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-sky-300 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                    <ul className="list-disc list-inside text-gray-500 space-y-2">
                        <li>
                            <strong>B.S. in Computer Science</strong> - New Jersey Institute of Technology (2023 - 2026)
                        </li>
                        <li>
                            <strong>Relevant Coursework</strong> - Data Structures, Database Design & Management, Operating Systems, Theory of Computation, 
                            Intensive Programming in Linux Systems, GPU Cluster Programming
                        </li>
                    </ul>
                </div>

                <div className="p-6 rounded-xl border-sky-300 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">🖥️ Work Experience</h3>
                    <div className="space-y-4 text-gray-500">
                         <div>

                            <h4>
                                <strong>Office Assistant @ Darul Islah (Sep 2024 - Present)</strong>
                            </h4>
                            <p>
                                Resolved hardware and network issues for 20+ workstations—achieved 99% uptime for critical school systems

                            </p>
                        </div>
                        
                        <div>
                            <h4>
                                <strong>Software Engineer Extern @ Outamation via Extern (March 2025 - May 2025)</strong>
                            </h4>
                            <p>
                                Developed AI-driven workflows for processing mortgage documents, leveraging NLP and CV to automate classification and data extraction

                            </p>
                            </div>

                           

                    </div>
                    
                </div>

            </div>
        </div>

        
    </section>
}