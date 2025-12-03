import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-fuchsia-400 to-fuchsia-700 bg-clip-text text-transparent leading-right">
                    Hi, I'm Manahil!
                </h1>

                <p className="text-fuchsia-600 text-lg mb-8 max-w-lg mx-auto">
                   I'm a CS student in the NYC area. I love working on high impact products, and I'm always
                   building something new. Scroll to see more of my work!
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-fuchsia-700 text-fuchsia-100 py-3 px-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(150,7,166,0.4)]">
                        Projects
                    </a>
                    <a href="#contact" className=" border border-fuchsia-700 bg-fuchsia-100 text-fuchsia-700 py-3 px-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(150,7,166,0.4)]">
                        Contact Me
                    </a>
                </div>

                <p className="flex justify-center space-x-4 mx-4 my-10 text-fuchsia-500"> ↓ </p>
            </div>
            </RevealOnScroll>
        </section>
    );
};