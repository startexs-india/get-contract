export default function Footer() {
    return (
        <footer className="w-full bg-white text-black py-12 mt-10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 animate-slideUp">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-heading font-semibold mb-3">
                        Contract Explorer
                    </h2>
                    <p className="text-sm">
                        Explore, manage, and analyze contracts with ease.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-heading font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/about" className="hover:text-accent transition">About</a></li>
                        <li><a href="/contact" className="hover:text-accent transition">Contact</a></li>
                        <li><a href="/terms" className="hover:text-accent transition">Terms & Conditions</a></li>
                        <li><a href="/privacy" className="hover:text-accent transition">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-lg font-heading font-semibold mb-3">Follow Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-accent transition">Twitter</a></li>
                        <li><a href="#" className="hover:text-accent transition">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-accent transition">Instagram</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/20 mt-10 pt-5 text-center text-gray-200 text-sm animate-fade">
                © {new Date().getFullYear()} Contract Explorer. All rights reserved.
            </div>
        </footer>
    );
}
