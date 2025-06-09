export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-pink-200 to-pink-400 bg-clip-text text-transparent leading-right">
                    Hi, I'm Manahil!
                </h1>

                <p className="text-pink-300 text-lg mb-8 max-w-lg mx-auto">
                   I'm a CS student in the NYC area. I love working on high impact products, and I'm always
                   building something new!
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-pink-300 text-stone-50 py-3 px-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        Projects
                    </a>
                    <a href="#contact" className=" border border-pink-300 bg-stone-50 text-pink-300 py-3 px-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};