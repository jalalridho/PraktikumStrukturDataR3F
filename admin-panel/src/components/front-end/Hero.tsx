const Hero = () => {
    return (
      <div className="bg-[#E3EDF6] mt-4">
        <div className="container grid md:grid-cols-2 py-8">
          <div className="flex items-center">
            <div className="max-w-[450px] space-y-4">
              <p className="text-topHeadingSecondary">
                Mulai dari <span className="font-bold">Rp.100.000,-</span> tapi cuma kabel casan:v
              </p>
              <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
                Recommended David Gadgetin
              </h1>
              <h3 className="text-2xl font-['Oregano', cursive]">
                Promo Tahun baru hingga <span className="text-red-600">-99%</span> tapi toko tutup
              </h3>
  
              <a
                className="inline-block bg-white rounded-md px-6 py-3 hover:bg-accent hover:text-white"
                href="#"
              >
                Shop Now
              </a>
            </div>
          </div>
  
          <div>
            <img className="ml-auto mix-blend-multiply" src="/hero.PNG" alt="hero" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;