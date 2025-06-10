import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-teal-200 to-indigo-400 bg-clip-text text-transparent leading-right">
                    Hi, I'm Manahil!
                </h1>

                <p className="text-indigo-300 text-lg mb-8 max-w-lg mx-auto">
                   I'm a CS student in the NYC area. I love working on high impact products, and I'm always
                   building something new. Scroll to see more of my work!
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-indigo-300 text-stone-50 py-3 px-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(153,246,228,0.4)]">
                        Projects
                    </a>
                    <a href="#contact" className=" border border-indigo-300 bg-stone-50 text-indigo-300 py-3 px-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(153,246,228,0.4)]">
                        Contact Me
                    </a>
                </div>

                <p className="flex justify-center space-x-4 mx-4 my-10 text-teal-200"> ↓ </p>
            </div>
            </RevealOnScroll>
        </section>
    );
};