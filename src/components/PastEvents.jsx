import pastEvents from "../data/pastEvents.json"
import { PastEventsCard } from "./PastEventsCard"


export const PastEvents = () => {

    {/* past events section */}
    return (
        <div className="w-full bg-[#FFFFFF] py-16 flex flex-col items-center mt-20">
            <h2 className="text-4xl font-bold text-center text-[#009EDB] mb-12">Our Work</h2>

            {/* timeline container */}
            <div className="relative w-full container-xl mx-0 my-auto">
                <div className="absolute left-1/2 inset-y-0 w-1 bg-[#009EDB] -translate-x-1/2 z-[1]">
                    {/* timeline line down the middle */}
                </div>

                {/* actual events */}
                <div>
                    {pastEvents.map((pastEvent, id) => {
                        return (
                            <div key={id}
                                className="relative z-[2] flex w-full items-center
                                    odd:justify-end odd:pr-[calc(50%+30px)]
                                    even:justify-start even:pl-[calc(50%+30px)]"
                            >
                                <div className="absolute left-1/2 w-5 h-5 bg-[#009EDB] border-4 border-[#F9FAFB] rounded-full -translate-x-1/2 z-[3] shadow-[0_0_0_4px_#009EDB]"></div>
                                <PastEventsCard pastEvent={pastEvent}></PastEventsCard>
                            </div>
                        )
                    } )}
                </div>
            </div>
        </div>
    )
}