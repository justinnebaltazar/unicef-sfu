export const Quote = () => {
    return (
        <div className="flex flex-col items-center justify-center p-20">
            <h2 className="text-4xl text-[#374EA2] w-3/4 text-center">Children need champions. Get involved, speak up, and volunteer with us to make an impact.</h2>
            <div className="flex gap-4 p-10 text-lg text-[#374EA2]">
                <a className="border-2 border-[#374EA2] border-solid rounded-md p-4 text-lg" href="/events">Upcoming Events</a>
                <a className="border-2 border-[#374EA2] border-solid rounded-md p-4 text-lg" href="/contact">Contact</a>
            </div>
        </div>
    )
}