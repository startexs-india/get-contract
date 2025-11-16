export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white py-8 mt-10">
            <div className="flex justify-around">
                {/* Brand */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">Contract Explorer</h2>
                    <p className="text-sm text-gray-300">Explore, manage, and analyze contracts with ease.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><a href="/about" className="hover:text-white">About</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                        <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
                        <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><a href="#" className="hover:text-white">Twitter</a></li>
                        <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-white">Instagram</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Contract Explorer. All rights reserved.
            </div>
        </footer>
    );
}
