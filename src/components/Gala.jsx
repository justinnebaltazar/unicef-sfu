export const Gala = () => {
    return (
        <div>
            {/* header */}
            <div className="w-full flex flex-col sm:flex-row p-14 justify-center items-center">
                <div className="w-3/4 md:w-5/8 text-center">
                    <h2 className="text-[#08457E] font-bold text-xl sm:text-2xl md:text-4xl mb-4 text-center sm:text-left">Light of Light Gala</h2>
                    <p className="w-7/8 text-center sm:text-left text-l mx-auto sm:mx-0">Our upcoming annual charity event will focus on advocating for child survival around the world and will feature keynote speaker Sediqa Sarwari, founder of Young Leaders Initiative World. 
                        We’ll also have food, a photo booth, and tons of chances to win raffle prizes!</p>
                    <div className="flex flex-col sm:flex-row gap-2 my-4">
                        <div className="bg-[#08457E] text-sm sm:text-md md:text-lg w-full sm:w-2/7 md:w-2/7 lg:w-1/5 text-[#EBFAFF] rounded-xl p-2 text-center">
                            SFU Burnaby
                        </div>
                        <div className="bg-[#EBFAFF] text-sm sm:text-md md:text-lg w-full sm:w-3/7 md:w-3/7 lg:w-1/3 text-[#08457E] rounded-xl p-2 text-center">
                            March 20th at 5:30 PM
                        </div>
                    </div>
                </div>

                <div className="w-[220px] h-[220px] rounded-2xl overflow-hidden">
                    <a href="https://www.instagram.com/p/DUW53QCCU92/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/gala/instagram_gala_invite.jpg" className="w-full h-full object-cover"></img></a>
                </div>
            </div>

            {/* tickets banner */}
            <div className="bg-[#EBFAFF] w-full flex flex-col p-15 lg:p-20 justify-center items-center gap-5 sm:gap-8">
                <h2 className="text-[#08457E] text-center text-xl sm:text-2xl lg:text-4xl font-bold">Early Bird Tickets Available Now!</h2>
                <p className="text-l sm:text-xl text-center w-4/5">Join us for an inspiring evening of advocacy, entertainment, and networking, all while supporting an important cause!</p>
                <div className="bg-[#08457E] text-white text-xl rounded-xl p-3 md:p-4 text-center">
                    <a href="https://www.bouncelife.com/events/6988266b316bad8542535c2e"
                        target='_blank' rel='noopener noreferrer'>Get Tickets Here!</a>
                </div>
            </div>

            {/* guest speaker */}
            <div className="w-full flex flex-col p-15 justify-center items-center gap-6 mb-7">
                <h2 className="text-[#08457E] text-center font-bold text-2xl md:text-3xl">Our Keynote Speaker</h2>
                <p className="text-center text-l md:text-xl w-3/4">Meet our guest speaker for the Light of Light Gala: Sediqa Sarwari. Don’t miss this opportunity to hear from an inspiring speaker! Get your tickets now!</p>
                
                <div className="w-full flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
                    <div className="rounded-full w-60 h-60 sm:w-64 sm:h-64 overflow-hidden">
                        <img src="/gala/Gala_KeynoteSpeaker.jpeg" className="w-full h-full object-cover"></img>
                    </div>
                    <div className="w-3/4 sm:w-4/5 md:w-4/7 flex flex-col gap-4 justify-center text-center md:text-left">
                        <h2 className="text-[#08457E] font-bold text-xl md:text-2xl">Sediqa Sarwari</h2>
                        <p className="text-l md:text-xl">Sediqa Sarwari is the author of <em>The Flowers of Your Pains</em> and the founder of Young Leaders Initiative World. She is a mental health advocate with over ten years of experience in the social services sector in Canada and internationally. Her work and writings focus on resilience, healing, and hope.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}