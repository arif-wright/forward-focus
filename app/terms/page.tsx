'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Terms() {
    return (
        <div className="bg-white flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow px-4 sm:px-6 lg:px-8 py-12 max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
                <p className="mb-4 text-gray-700">
                    By using the Forward Focus website, you agree to the following terms and conditions.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-2">Use of Website</h2>
                <p className="mb-4 text-gray-700">
                    You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use of this site by any third party.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-2">Intellectual Property</h2>
                <p className="mb-4 text-gray-700">
                    All content, trademarks, logos, and intellectual property on this website are the property of Forward Focus unless otherwise stated. You may not reproduce or use them without permission.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
                <p className="mb-4 text-gray-700">
                    Forward Focus is not liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this site or any linked content.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-2">Links to Other Sites</h2>
                <p className="mb-4 text-gray-700">
                    This website may contain links to third-party websites. Forward Focus is not responsible for the content or privacy practices of those sites.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-2">Changes to These Terms</h2>
                <p className="mb-4 text-gray-700">
                    We reserve the right to modify these terms at any time. Continued use of the site signifies your acceptance of any changes.
                </p>

                <p className="text-sm text-gray-500 mt-8">Last updated: July 2025</p>
            </main>
            <Footer />
        </div>
    );
}
