export const Home = () => {
  const stats = [
    { number: "500+", label: "Club Members" },
    { number: "15+", label: "Fundraisers Held" },
    { number: "$3,000+", label: "Raised for Charity" },
    { number: "60+", label: "Advocacy Campaigns" },
  ]

  const galleryItems = [
    {
      id: "gallery-0",
      title: "Button Station",
      img: "/event-gallery/button-station.jpeg",
    },
    {
      id: "gallery-1",
      title: "Photo Room",
      img: "/event-gallery/photo-room.jpeg",
    },
    {
      id: "gallery-2",
      title: "Presentation",
      img: "/event-gallery/presentation.jpeg",
    },
    {
      id: "gallery-3",
      title: "Work Simulation",
      img: "/event-gallery/work-simulation.jpeg",
    },
  ]

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full aspect-[22/10] overflow-hidden">
        <img
          src="/new-banner.png"
          alt="UNICEF image"
          className="w-full h-full object-cover object-[100%_100%]"
        />
        <div className="absolute bottom-8 left-15 text-white">
          <p
            className="text-4xl font-semibold"
            style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)" }}
          >
            For every child, <span className="text-[#65D5FF]">hope</span>
          </p>
        </div>
      </div>

      {/* Who we are section */}
      <div className="w-full text-[#585962] flex flex-col items-center justify-center px-8 md:px-10 pt-16 pb-9 gap-8 text-center">
        <h2 className="font-bold text-4xl text-black">Who We Are</h2>
        <p className="w-full md:w-2/3 lg:w-1/2 px-4 text-black text-lg text-justify mb-5">
          We are Simon Fraser University's student-led Campus Club directly
          affiliated with UNICEF Canada. We hold events that fundraise, raise
          awareness and advocate on behalf of children around the world. 100% of
          proceeds raised each academic year are donated to UNICEF Canada.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-4 w-full max-w-6xl my-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg"
            >
              <div className="text-4xl font-bold text-[#1CABE2] mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-[#1CABE2] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Gallery */}
      <div className="w-full bg-[#D9D9D9] py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-4xl font-semibold text-[#1CABE2] mb-3">
            Event Gallery
          </h2>
          <p className="text-sm text-black/70 text-center mb-10">
            Browse through our image gallery of previous events and fundraisers!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl h-44 sm:h-48 md:h-52 shadow-sm overflow-hidden"
              >
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-black/30 font-medium">
                    Image
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
