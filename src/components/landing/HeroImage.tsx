import heroBuilding from "@/assets/images/hero.webp";
import heroAsn from "@/assets/images/asn.webp";
import { Folder, BarChart3, Building2 } from "lucide-react";

function HeroImage() {
  return (
    <div className="relative w-full flex flex-col items-center lg:block lg:h-[760px]">
      {/* Glow Background - Desktop Only */}
      <div className="hidden lg:block absolute right-8 top-12 h-[620px] w-[620px] rounded-full bg-cyan-300/20 blur-[130px]" />

      {/* Dot Pattern - Desktop Only */}
      <div
        className="
          hidden lg:block
          absolute
          right-6
          top-14
          h-56
          w-80
          opacity-25
          bg-[radial-gradient(circle,#60a5fa_1.4px,transparent_1.4px)]
          bg-[size:12px_12px]
        "
      />

      {/* Orbit - Desktop Only */}
      <svg
        className="hidden lg:block absolute right-32 top-6 h-[560px] w-[560px] opacity-40"
        viewBox="0 0 560 560"
        fill="none"
      >
        <circle cx="280" cy="280" r="205" stroke="white" strokeWidth="2" />

        <circle cx="280" cy="280" r="245" stroke="white" strokeWidth="1" />
      </svg>

      {/* Illustration container (Building + ASN) with responsive height */}
      <div className="relative w-full h-[260px] xs:h-[300px] sm:h-[400px] md:h-[460px] lg:h-[760px] overflow-hidden lg:overflow-visible">
        {/* Building */}
        <div
          className="absolute lg:-top-25 sm:-top-8 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 w-[520px] sm:w-[720px] lg:w-[850px] overflow-hidden"
          style={{
            WebkitMaskImage: `
              linear-gradient(to left, black 82%, transparent),
              linear-gradient(to top, black 75%, transparent)
            `,
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect",
          }}
        >
          <img
            src={heroBuilding}
            alt=""
            className="
              w-full
              object-cover
              select-none
              pointer-events-none
            "
          />
        </div>

        {/* Blue Glow - Desktop Only */}
        <div className="hidden lg:block absolute bottom-20 right-60 h-32 w-32 rounded-full bg-cyan-500/40 blur-[60px]" />

        {/* ASN - Centered on mobile, shifted to right on desktop */}
        <img
          src={heroAsn}
          alt=""
          className="
            absolute
            top-[130px]
            sm:top-[200px]
            lg:top-[220px]
            left-1/2
            -translate-x-1/2
            lg:translate-x-0
            lg:left-20
            z-20
            w-[300px]
            sm:w-[420px]
            lg:w-[470px]
            select-none
            pointer-events-none
            drop-shadow-[0_15px_30px_rgba(0,0,0,.15)]
          "
        />
      </div>

      {/* Floating Cards */}
      <div
        className="
    relative
    z-30
    mt-5
    flex
    flex-col
    gap-3

    sm:grid
    sm:grid-cols-3
    sm:gap-3

    lg:absolute
    lg:right-0
    lg:top-1/2
    lg:-translate-y-1/2
    lg:flex
    lg:w-auto
    lg:flex-col
    lg:gap-4
  "
      >
        {/* Card */}
        <div
          className="
      flex
      items-center
      gap-3
      rounded-2xl
      border
      border-blue-100/70
      bg-white/95
      px-4
      py-3
      shadow-lg
      backdrop-blur

      w-full
      max-w-[280px]

      lg:w-[270px]
    "
        >
          <div className="rounded-xl bg-blue-50 p-2">
            <Folder className="text-blue-600" size={16} />
          </div>

          <div>
            <p className="text-sm font-bold text-slate-800">Arsip Digital</p>

            <span className="text-[11px] text-slate-500">
              Penyimpanan Terintegrasi
            </span>
          </div>
        </div>

        {/* Card */}
        <div
          className="
      flex
      items-center
      gap-3
      rounded-2xl
      border
      border-blue-100/70
      bg-white/95
      px-4
      py-3
      shadow-lg
      backdrop-blur

      w-full
      max-w-[280px]

      lg:w-[270px]
    "
        >
          <div className="rounded-xl bg-cyan-50 p-2">
            <BarChart3 className="text-cyan-600" size={16} />
          </div>

          <div>
            <p className="text-sm font-bold text-slate-800">Monitoring</p>

            <span className="text-[11px] text-slate-500">
              Dashboard Statistik
            </span>
          </div>
        </div>

        {/* Card */}
        <div
          className="
      flex
      items-center
      gap-3
      rounded-2xl
      border
      border-blue-100/70
      bg-white/95
      px-4
      py-3
      shadow-lg
      backdrop-blur

      w-full
      max-w-[280px]

      lg:w-[270px]
    "
        >
          <div className="rounded-xl bg-indigo-50 p-2">
            <Building2 className="text-indigo-600" size={16} />
          </div>

          <div>
            <p className="text-sm font-bold text-slate-800">OPD Mitra</p>

            <span className="text-[11px] text-slate-500">
              Sinergitas Terintegrasi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
