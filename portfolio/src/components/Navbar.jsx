import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-stone-50 backdrop-blur-lg border-b border-white/10 shadow-2xs">
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                <a href="#home" className="font-mono text-xl font-bold text-teal-300"> 
                    m.<span className="text-indigo-300">s</span>
                
                </a>
                <div className="w-7 h-5 md:hidden"></div>
                
              
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center space-x-8">
                        <a href="#home" className="text-indigo-300 hover:text-teal-200 transition-colors">Home</a>
                        <a href="#about" className="text-indigo-300 hover:text-teal-200 transition-colors">About Me</a>
                        <a href="#projects" className="text-indigo-300 hover:text-teal-200 transition-colors">Projects</a>
                        <a href="#contact" className="text-indigo-300 hover:text-teal-200 transition-colors">Contact</a>
                    </div>
                </div>

                <div 
                    className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-indigo-300"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    &#9776;
                </div>
            </div>
        </nav>
    );
};