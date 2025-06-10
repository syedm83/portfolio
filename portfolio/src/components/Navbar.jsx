import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(167, 167, 167, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-2xs">
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                <a href="#home" className="font-mono text-xl font-bold text-pink-300"> 
                    m<span className="text-pink-200">s</span>
                
                </a>
                <div className="w-7 h-5 md:hidden"></div>
                
              
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center space-x-8">
                        <a href="#home" className="text-pink-300 hover:text-white transition-colors">Home</a>
                        <a href="#about" className="text-pink-300 hover:text-white transition-colors">About Me</a>
                        <a href="#projects" className="text-pink-300 hover:text-white transition-colors">Projects</a>
                        <a href="#contact" className="text-pink-300 hover:text-white transition-colors">Contact</a>
                    </div>
                </div>

                <div 
                    className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-pink-300"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    &#9776;
                </div>
            </div>
        </nav>
    );
};