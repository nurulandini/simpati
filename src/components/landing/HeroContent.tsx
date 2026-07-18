import { ArrowRight, Folder, FilePlus, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

function HeroContent() {
  return (
    <div
      className="
        relative
        z-10
        flex
        h-full
        max-w-[600px]
        flex-col
        justify-center
        lg:-mt-60
      "
    >
      {/* Badge */}
      <div
        className="
          inline-flex
          w-fit
          items-center
          gap-2
          rounded-full
          border
          border-blue-100
          bg-white/80
          px-4
          py-2
          shadow-sm
          backdrop-blur
        "
      >
        <Folder size={16} className="text-blue-600" />

        <span className="text-[13px] font-semibold text-blue-700">
          Bidang PSDA Bappeda Kota Medan
        </span>
      </div>

      {/* Title */}
      <h1
        className="
          mt-5
          text-6xl
          sm:text-7xl
          lg:text-[82px]
          font-black
          leading-[0.9]
          tracking-[-0.05em]
          bg-gradient-to-r
          from-blue-700
          via-blue-500
          to-cyan-400
          bg-clip-text
          text-transparent
        "
      >
        SIMPATI
      </h1>

      {/* Subtitle */}
      <h2
        className="
          mt-3
          max-w-[560px]
          text-[16px]
          lg:text-[18px]
          font-bold
          leading-tight
          text-slate-800
        "
      >
        Sistem Monitoring dan Penyimpanan Arsip Terintegrasi
      </h2>

      {/* Divider */}
      <div className="mt-5 flex items-center gap-2">
        <div className="h-1 w-16 rounded-full bg-cyan-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
      </div>

      {/* Description */}
      <p
        className="
          mt-2
          max-w-[520px]
          text-[16px]
          leading-8
          text-slate-600
        "
      >
        Media pelaporan, pemantauan, dan pembaruan data secara berkala untuk
        mendukung pengelolaan dokumen Bidang Perekonomian dan Sumber Daya Alam
        Bappeda Kota Medan.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap gap-5">

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfhXjvRQ6NiJjGXJ57RARMCUXEDF_Jjwfpk_KUqxKgtD31sNg/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            inline-flex
            items-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-blue-700
            to-cyan-400
            px-8
            py-4
            font-semibold
            text-white
            shadow-lg
            shadow-blue-500/20
            transition-all
            duration-300
            hover:-translate-y-1
          "
        >
          <FilePlus size={18} />

          Tambah Laporan

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>

        <Link
          to="/dashboard"
          className="
            inline-flex
            items-center
            gap-3
            rounded-2xl
            border
            border-slate-200
            bg-white/90
            px-8
            py-4
            font-semibold
            text-slate-700
            shadow-lg
            backdrop-blur
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-blue-200
          "
        >
          <BarChart3 size={18} />

          Lihat Dashboard
        </Link>

      </div>
    </div>
  );
}

export default HeroContent;