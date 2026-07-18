import HeroHeader from "./HeroHeader";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFF] lg:h-screen">

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e3effc_1px,transparent_1px),linear-gradient(to_bottom,#e3effc_1px,transparent_1px)] bg-[size:56px_56px] opacity-50" />

      {/* Glow kiri */}
      <div className="absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-sky-200/30 blur-[140px]" />

      {/* Glow kanan */}
      <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-blue-100/30 blur-[180px]" />

      {/* Constellation kiri atas */}
      <svg
        className="hidden sm:block absolute left-10 top-20 h-64 w-64 text-blue-200/40 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
      >
        <line x1="20" y1="50" x2="80" y2="20" stroke="currentColor" strokeWidth="0.75" />
        <line x1="80" y1="20" x2="140" y2="60" stroke="currentColor" strokeWidth="0.75" />
        <line x1="80" y1="20" x2="100" y2="100" stroke="currentColor" strokeWidth="0.75" />
        <line x1="140" y1="60" x2="100" y2="100" stroke="currentColor" strokeWidth="0.75" />
        <line x1="20" y1="50" x2="60" y2="120" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
        <line x1="60" y1="120" x2="100" y2="100" stroke="currentColor" strokeWidth="0.75" />

        <circle cx="20" cy="50" r="3" fill="#60a5fa" />
        <circle cx="80" cy="20" r="4" fill="#3b82f6" />
        <circle cx="140" cy="60" r="3" fill="#60a5fa" />
        <circle cx="100" cy="100" r="3.5" fill="#3b82f6" />
        <circle cx="60" cy="120" r="2.5" fill="#93c5fd" />
      </svg>

      {/* Container */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col px-5 pt-6 lg:px-10 lg:pt-8">

        <HeroHeader />

        <div
          className="
            mt-8
            grid
            flex-1
            items-center
            gap-10

            lg:mt-6
            lg:grid-cols-[42%_58%]
          "
        >
          <HeroContent />

          <HeroImage />
        </div>

      </div>

      {/* Wave */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="block w-full h-[110px] lg:h-[150px]"
        >
          <path
            d="M0,120 C300,190 600,70 900,90 C1180,110 1320,165 1440,140 L1440,180 L0,180 Z"
            fill="#dbeafe"
          />

          <path
            d="M0,140 C340,185 720,105 1080,125 C1260,138 1360,165 1440,150 L1440,180 L0,180 Z"
            fill="#eff6ff"
            opacity=".7"
          />
        </svg>
      </div>

    </section>
  );
}

export default Hero;