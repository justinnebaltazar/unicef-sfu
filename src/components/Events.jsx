import { useEvents } from "../hooks/useEvents"

export const Events = () => {
    const events = useEvents()

    const getMonthAbbreviation = (month) => month.slice(0, 3).toUpperCase()

    if (!events.length) {
        return (
            <div className="py-24 text-center text-gray-500 text-lg">
                Loading events...
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center p-20 w-full">
            {/* header */}
            <div className="flex flex-col items-center justify-center p-2 mb-12">
                <h2 className="text-4xl w-3/4 text-center p-10 text-[#009EDB] font-semibold">Upcoming Events</h2>
                <p className="text-xl text-center w-1/2 text-[#585962]">UNICEF SFU holds a wide variety of events every month, from General Meetings to donation drives. Make a difference by contributing to our fundraisers and advocacy events.</p>
            </div>
            
            {/* events section */}
            <div className="w-9/10 max-w-6xl p-4">
                {events.map((monthData, monthIndex) => (
                    <div key={monthIndex}>
                        <h3 className="text-4xl p-8 text-[#009EDB] font-semibold">{monthData.month} Events</h3>

                        {/* all upcoming events for the month */}
                        {monthData.events.map((event, eventIndex) => (
                            <div key={eventIndex} className="w-full max-w-3xl mx-auto flex flex-col md:flex-row bg-[#e5f7fd] rounded-2xl m-4 overflow-hidden">
                                
                                {/* left column info */}
                                <div className="flex-1 flex flex-col md:flex-row gap-6 px-6 md:pl-8 md:pr-2 py-8">

                                    {/* date box */}
                                    <div className="flex flex-col items-center justify-center bg-white/60 rounded-xl px-4 py-3 h-fit self-center">
                                        <span className="text-sm font-semibold text-[#009EDB] tracking-[0.3em]">
                                            {getMonthAbbreviation(monthData.month)}
                                        </span>
                                        {event.dates.map((date, idx) => (
                                            <span key={`${event.title}-${date}-${idx}`} className="text-lg font-semibold text-[#1F145D]">
                                                {date}
                                            </span>
                                        ))}
                                    </div>

                                    {/* text info */}
                                    <div className="flex flex-col justify-center flex-1 items-center md:items-start text-center md:text-left">
                                        <h4 className="text-2xl text-[#1F145D] font-semibold mb-4">{event.title}</h4>

                                        {/* event location */}
                                        <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                                            <img src="/location-icon.png" alt="location-icon" className="w-8 h-8"/>
                                            <div>
                                                <p className="text-md text-[#5D5D5D]">{event.building}</p>
                                                <p className="text-md text-[#5D5D5D]">{event.room}</p>
                                                <p className="text-md text-[#5D5D5D]">{event.campus}</p>
                                            </div>
                                        </div>
                                        
                                        {/* time info */}
                                        <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                                            <img src="/clock-icon.png" alt="time" className="w-8 h-8"/>

                                            <p className="text-md text-[#5D5D5D]">{event.time}</p>
                                        </div>

                                        {/* instagram link post / more info  */}
                                        {event.postLink && (
                                            <a href={event.postLink} target="_blank" rel="noopener noreferrer" className="mt-4 w-fit self-center md:self-start">
                                                <button className="px-6 py-2 bg-[#009EDB] text-white rounded-lg font-semibold hover:bg-[#007fb0] transition">
                                                    Learn More
                                                </button>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* image */}
                                <div className="w-full md:w-1/2 flex-shrink-0 flex items-center justify-center md:justify-end p-4">
                                    <div className="w-[220px] h-[220px] rounded-2xl overflow-hidden bg-white shadow-sm">
                                        <img 
                                            src={event.imgLink} alt={event.title} className="w-full h-full object-cover"
                                            onError={(e) => {
                                                console.error("Image failed to load:", event.imgLink)
                                                e.target.src = "posts/unicef-logo.png"
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* our work section */}
            <div className="w-full bg-[#F9FAFB] py-16 flex flex-col items-center mt-20">
                <h2 className="text-4xl font-bold text-center text-black mb-12">Our Work</h2>
                <div className="flex flex-col gap-12 max-w-6xl px-6">
                    {/* haiti */}
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <img
                            src="/hearts-for-haiti.png"
                            alt="Hearts For Haiti image"
                            className="w-full md:w-1/2 rounded-lg shadow-md object-cover"
                        />
                        <div className="w-full md:w-1/2 text-left">
                            <h3 className="text-xl font-semibold text-[#1CABE2] mb-3">Hearts For Haiti</h3>
                            <p className="text-[#585962]">
                                In the Spring 2024 semester, UNICEF SFU launched their second advocacy campaign of the school year
                                to raise awareness surrounding the children's humanitarian crisis in Haiti.
                            </p>
                        </div>
                    </div>

                    {/* gala */}
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <img
                            src="/mind-matter-gala.png"
                            alt="Minds Matter Gala image"
                            className="w-full md:w-1/2 rounded-lg shadow-md object-cover"
                        />
                        <div className="w-full md:w-1/2 text-left">
                            <h3 className="text-xl font-semibold text-[#1CABE2] mb-3">Minds Matter Gala 2024</h3>
                            <p className="text-[#585962]">
                                Minds Matter Gala was one of UNICEF SFU's annual charity galas held in the Spring 2024 semester.
                                This event advocated for integrating mental health into frameworks and systems that support children's well-being
                                and mental health in humanitarian emergencies and resource-limited settings.
                                <br />
                                <br />
                                Our charity gala featured guest speakers Dr. Laura Aiken, a psychology professor at Simon Fraser University,
                                and Lauren Baniara, a registered clinical counsellor.
                            </p>
                        </div>
                    </div>

                    {/* halloween */}
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <img
                            src="/halloween-bottle-drive.png"
                            alt="Halloween image"
                            className="w-full md:w-1/2 rounded-lg shadow-md object-cover"
                        />
                        <div className="w-full md:w-1/2 text-left">
                            <h3 className="text-xl font-semibold text-[#1CABE2] mb-3">Halloween Bottle Drive 2024</h3>
                            <p className="text-[#585962]">
                                In the Fall 2024 semester, club-wide bottle drives raised over $500.
                                Our team collected bottles from people around campus and donated them to local recycling centers.
                            </p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}
