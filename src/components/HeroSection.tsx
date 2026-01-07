const HeroSection = () => {
  return (
    <section className="relative bg-split overflow-hidden">
      {/* Dots Overlay */}
      <div className="absolute inset-0 dots-pattern-pink opacity-50" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Speech Bubble */}
            <div className="speech-bubble inline-block mb-6 bg-card">
              <p className="font-hand text-xl text-foreground">WOW! Check this out!</p>
            </div>

            {/* Main Title */}
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-pop-yellow text-pop leading-tight mb-4">
              NEW DROPS
              <br />
              <span className="text-primary-foreground">ARE HERE!</span>
            </h2>

            <p className="font-body text-xl text-primary-foreground mb-8 max-w-md">
              限量复古系列，每件都是艺术品。手快有，手慢无！
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="btn-pop-accent text-xl animate-bounce hover:animate-none">
                SHOP NOW!
              </button>
              <button className="btn-pop bg-card text-foreground">
                VIEW LOOKBOOK
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-pop-cyan border-4 border-pop-black rotate-12 z-0" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 starburst border-4 border-pop-black z-0" />

              {/* Main Image Frame */}
              <div className="relative z-10 pop-frame bg-card p-4">
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=700&fit=crop"
                  alt="Fashion Model"
                  className="w-full h-auto border-4 border-pop-black"
                />
                {/* Comic Effect */}
                <div className="absolute top-4 right-4 bg-pop-yellow border-4 border-pop-black px-4 py-2 rotate-6">
                  <span className="font-display text-2xl text-accent-foreground">HOT!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-background border-t-4 border-pop-black" />
    </section>
  );
};

export default HeroSection;
