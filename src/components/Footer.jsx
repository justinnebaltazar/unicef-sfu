export const Footer = () => {
     return (
        <footer className="w-full bg-[#E8F6FC] text-[#585962]">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between">
                    {/* logo + description */}
                    <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-2/5">
                        <img
                            src="/unicef-logo.jpg"
                            alt="UNICEF logo"
                            className="w-48 lg:w-56 object-contain"
                        />
                        <p className="text-lg text-center lg:text-left leading-relaxed">
                            We are Simon Fraser University’s student-led Campus Club directly affiliated with UNICEF Canada.
                            We hold events that fundraise, raise awareness and advocate on behalf of children around the world.
                            100% of proceeds raised each academic year are donated to UNICEF Canada.
                        </p>
                    </div>

                    {/* website navigation */}
                    <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-1/5 text-center lg:text-left">
                        <h3 className="text-xl font-semibold text-[#1F145D]">Website</h3>
                        <ul className="space-y-2">
                            <li className="hover:text-[#009EDB] transition-colors">Home</li>
                            <li className="hover:text-[#009EDB] transition-colors">About Us</li>
                            <li className="hover:text-[#009EDB] transition-colors">Events</li>
                            <li className="hover:text-[#009EDB] transition-colors">Contact</li>
                            <li className="hover:text-[#009EDB] transition-colors">Get Involved</li>
                        </ul>
                    </div>

                    {/* contact section */}
                    <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-1/3 text-center lg:text-left">
                        <h3 className="text-xl font-semibold text-[#1F145D]">Contact</h3>
                        <p className="max-w-xs lg:max-w-none">
                            Follow us on social media to get the latest updates on events and fundraisers.
                        </p>
                        <div className="flex items-center gap-4 justify-center lg:justify-start">
                            <a aria-label="Instagram">
                                <img src="/instagram-logo.png" alt="Instagram logo" className="w-10 h-10" />
                            </a>
                            <a aria-label="TikTok">
                                <img src="/tiktok-logo.png" alt="TikTok logo" className="w-10 h-10" />
                            </a>
                            <a aria-label="LinkedIn">
                                <img src="/linkedin-logo.png" alt="LinkedIn logo" className="w-10 h-10" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}