import { Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#0b2543] text-white py-12 mt-10">
            <div className="max-w-6xl mx-auto px-6 
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 
                animate-slideUp">

                {/* Brand */}
                <div className="text-center sm:text-left">
                    <h2 className="text-2xl font-heading font-semibold mb-3">
                        Contract Explorer
                    </h2>
                    <p className="text-sm">
                        Explore, manage, and analyze contracts with ease.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="text-center sm:text-left">
                    <h3 className="text-lg font-heading font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/about" className="hover:text-accent transition">About</a></li>
                        <li><a href="/contact" className="hover:text-accent transition">Contact</a></li>
                        <li><a href="/terms" className="hover:text-accent transition">Terms & Conditions</a></li>
                        <li><a href="/privacy" className="hover:text-accent transition">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div className="text-center sm:text-left">
                    <h3 className="text-lg font-heading font-semibold mb-3">Follow Us</h3>
                    <ul className="space-y-2 text-sm flex justify-center gap-10">
                        <li>
                            <a href="#" className="hover:text-accent transition flex items-center gap-1">
                                <Twitter size={16} /> Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-accent transition flex items-center gap-1">
                                <Linkedin size={16} /> LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-accent transition flex items-center gap-1">
                                <Instagram size={16} /> Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/20 mt-6 pt-5 
                text-center text-gray-300 text-sm animate-fade">
                © {new Date().getFullYear()} Contract Explorer. All rights reserved.
            </div>
        </footer>
    );
}
