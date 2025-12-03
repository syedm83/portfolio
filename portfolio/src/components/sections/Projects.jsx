import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () =>{
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-br from-fuchsia-300 to-fuchsia-400 bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-fuchsia-700/50 hover:-translate-y-1 hover:border-fuchsia-700/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 text-fuchsia-400">TradePlay</h3>
                    <p className="text-fuchsia-300 mb-4">A high-performance, multithreaded stock trading system in C++, leveraging advanced object-oriented programming to ensure modularity and extensibility. Designed to allow users to simulate a trading environment.</p>
                    <div>
                        {["C++17", "Matplotlib", "NumPy"].map((tech, key) => (
                            <span key={key} className="bg-fuchsia-500/10 text-fuchsia-600 mx-1 py-1 px-4 rounded-full text-sm hover:bg-fuchsia-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                            ">
                                {tech}

                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <a href="https://github.com/syedm83" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"> View Project → </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-fuchsia-700/50 hover:-translate-y-1 hover:border-fuchsia-700/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 text-fuchsia-400">Pawlytics</h3>
                    <p className="text-fuchsia-300 mb-4">A fullstack pet shop manager website that allows for insertion, deletion, and editing of items. Includes security features using XML as well as user authentication.</p>
                    <div>
                        {["PHP", "SQL", "JavaScript"].map((tech, key) => (
                            <span key={key} className="bg-fuchsia-500/10 text-fuchsia-600 mx-1 py-1 px-4 rounded-full text-sm hover:bg-fuchsia-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                            ">
                                {tech}

                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <a href="https://github.com/syedm83/petshop" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"> View Project → </a>
                    </div>
                </div>


                <div className="p-6 rounded-xl border border-fuchsia-700/50 hover:-translate-y-1 hover:border-fuchsia-700/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 text-fuchsia-400">AI Movie Recommendation App</h3>
                    <p className="text-fuchsia-300 mb-4">A cozy web app that recommends movies based on your mood selections using AI-powered text embeddings and cosine similarity.</p>
                    <div>
                        {["Python", "JSON"].map((tech, key) => (
                            <span key={key} className="bg-fuchsia-500/10 text-fuchsia-600 mx-1 py-1 px-4 rounded-full text-sm hover:bg-fuchsia-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                            ">
                                {tech}

                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <a href="https://github.com/syedm83/ai-movierecs" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"> View Project → </a>
                    </div>
                </div>


                <div className="p-6 rounded-xl border border-fuchsia-700/50 hover:-translate-y-1 hover:border-fuchsia-700/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 text-fuchsia-400">Wordle Clone</h3>
                    <p className="text-fuchsia-300 mb-4"> A dynamic Wordle clone that implements efficient state management to handle over 1,000
game sessions</p>
                    <div>
                        {["React", "JSON"].map((tech, key) => (
                            <span key={key} className="bg-fuchsia-500/10 text-fuchsia-600 mx-1 py-1 px-4 rounded-full text-sm hover:bg-fuchsia-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                            ">
                                {tech}

                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <a href="https://github.com/syedm83/wordle" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"> View Project → </a>
                    </div>
                </div>

                

            </div>

        </div>
        </RevealOnScroll>
    </section>
}