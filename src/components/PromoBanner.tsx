const PromoBanner = () => {
  return (
    <section className="relative bg-pop-cyan py-12 overflow-hidden border-y-4 border-pop-black">
      {/* Animated Background */}
      <div className="absolute inset-0 dots-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {/* Left Decoration */}
          <div className="hidden md:block">
            <div className="w-20 h-20 starburst border-4 border-pop-black animate-[spin_10s_linear_infinite]" />
          </div>

          {/* Main Content */}
          <div className="text-center">
            <div className="speech-bubble inline-block bg-card mb-4">
              <p className="font-hand text-lg text-foreground">限时优惠!</p>
            </div>
            <h3 className="font-display text-4xl md:text-5xl text-primary-foreground text-outline">
              FREE SHIPPING
            </h3>
            <p className="font-body text-xl text-primary-foreground mt-2">
              满 ¥299 全场包邮！使用代码: <span className="font-hand text-accent bg-pop-black px-2">POPSHIP</span>
            </p>
          </div>

          {/* Right Decoration */}
          <div className="hidden md:block">
            <div className="w-20 h-20 bg-pop-yellow border-4 border-pop-black rotate-12 flex items-center justify-center">
              <span className="font-display text-2xl text-accent-foreground">WOW</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
