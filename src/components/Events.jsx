import events from "../data/events.json"

export const Events = () => {
    const getMonthAbbreviation = (month) => month.slice(0, 3).toUpperCase()

    return (
        <div className="flex flex-col items-center justify-center p-20 w-full">
            <div className="flex flex-col items-center justify-center p-2 mb-12">
                <h2 className="text-4xl w-3/4 text-center p-10 text-[#009EDB] font-semibold">Upcoming Events</h2>
                <p className="text-xl text-center w-1/2 text-[#585962]">UNICEF SFU holds a wide variety of events every month, from General Meetings to donation drives. Make a difference by contributing to our fundraisers and advocacy events.</p>
            </div>
            
            <div className="w-9/10 max-w-6xl p-4">
                {events.map((monthData, monthIndex) => (
                    <div key={monthIndex}>
                        <h3 className="text-4xl p-8 text-[#009EDB] font-semibold">{monthData.month} Events</h3>
                        {monthData.events.map((event, eventIndex) => (
                             <div key={eventIndex} className="w-full max-w-4xl mx-auto flex bg-[#e5f7fd] rounded-2xl m-4 overflow-hidden">
                                {/* event info on the left */}
                                <div className="flex-1 flex gap-6 pl-8 pr-2 py-8">
                                    {/* dates column */}
                                    <div className="flex flex-col items-center justify-center bg-white/60 rounded-xl px-4 py-3 h-fit self-center">
                                        <span className="text-sm font-semibold text-[#009EDB] tracking-[0.3em]">{getMonthAbbreviation(monthData.month)}</span>
                                        {event.dates.map((date, idx) => (
                                            <span key={`${event.title}-date-${date}-${idx}`} className="text-lg font-semibold text-[#1F145D]">
                                                {date}
                                            </span>
                                        ))}
                                    </div>

                                    {/* textual event details */}
                                    <div className="flex flex-col justify-center flex-1">
                                        <h4 className="text-2xl text-[#1F145D] font-semibold mb-4">{event.title}</h4>

                                        {/* location tag icon + location info */}
                                        <div className="flex items-start gap-3 mb-4">
                                            <img src="/location-icon.png" alt="location-icon" className="w-8 h-8" />
                                            <div className="flex flex-col">
                                                <p className="text-md text-[#5D5D5D]">{event.building}</p>
                                                <p className="text-md text-[#5D5D5D]">{event.room}</p>
                                                <p className="text-md text-[#5D5D5D]">{event.campus}</p>
                                            </div>
                                        </div>

                                        {/* time icon + info */}
                                        <div className="flex items-start gap-3">
                                            <img src="/clock-icon.png" alt="clock-icon" className="w-8 h-8" />
                                            <p className="text-md text-[#5D5D5D]">{event.time}</p>
                                        </div>
                                    </div>
                                </div>
 
                                 {/* image on the right */}
                                 <div className="w-1/2 flex-shrink-0 flex items-center justify-end p-4">
                                     <div className="w-[220px] h-[220px] rounded-2xl overflow-hidden bg-white shadow-sm">
                                        <img src={event.imgLink} alt={event.title} className="w-full h-full object-cover" />
                                     </div>
                                  </div>
                             </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}