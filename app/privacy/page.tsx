'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Privacy() {
    return (
        <div className="bg-white flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow px-4 sm:px-6 lg:px-8 py-12 max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                <p className="mb-4 text-gray-700">
                    At Forward Focus, we respect your privacy and are committed to protecting any personal information you share with us.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
                <p className="mb-4 text-gray-700">
                    When you contact us via our website, we may collect your name, email address, company name, and any other details you provide.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>To respond to your inquiries and provide consulting services.</li>
                    <li>To send you relevant updates or follow-ups via email.</li>
                    <li>To improve our website and services.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-8 mb-2">Email Communication</h2>
                <p className="mb-4 text-gray-700">
                    If you fill out our contact form, you may receive a confirmation or follow-up email. You can request removal from our mailing list at any time.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-2">Third-Party Services</h2>
                <p className="mb-4 text-gray-700">
                    We use secure third-party services such as Resend to handle email delivery. Your data is never sold or shared beyond what is required to operate our services.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-2">Your Rights</h2>
                <p className="mb-4 text-gray-700">
                    You can contact us at any time to request access to, correction of, or deletion of your personal data.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
                <p className="mb-4 text-gray-700">
                    If you have any questions about this policy, please contact us at <a href="mailto:jcroft@fwdfocus.com" className="text-[#0072CE] underline">jcroft@fwdfocus.com</a>.
                </p>

                <p className="text-sm text-gray-500 mt-8">Last updated: July 2025</p>
            </main>
            <Footer />
        </div>
    );
}
