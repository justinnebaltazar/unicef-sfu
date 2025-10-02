export const About = () => {
  const stats = [
    { number: '500+', label: 'Club Members' },
    { number: '15+', label: 'Fundraisers Held' },
    { number: '$3,000+', label: 'Raised for Charity' },
    { number: '60+', label: 'Advocacy Campaigns' },
  ]

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full h-96">
        <img 
          src="/banner.jpeg" 
          alt="UNICEF image" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 left-15 text-white">
          <p className="text-4xl font-semibold" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>For every child, <span className="text-[#65D5FF]">hope</span></p>
        </div>
      </div>

      {/* Who we are section */}
      <div className="w-full text-[#585962] flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 pt-16 pb-9 gap-8 text-center">
        <h2 className="font-bold text-4xl text-black">Who We Are</h2>
        <p className="w-full md:w-2/3 lg:w-1/2 text-black text-lg text-justify mb-5">
          We are Simon Fraser University's student-led Campus Club directly
          affiliated with UNICEF Canada. We hold events that fundraise, raise
          awareness and advocate on behalf of children around the world. 100% of
          proceeds raised each academic year are donated to UNICEF Canada.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-4 w-full max-w-6xl mt-4">
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
    </div>
  )
}