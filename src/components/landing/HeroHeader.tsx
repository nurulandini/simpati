import logoMedan from "@/assets/logos/logo-medan.png";
import logoBappeda from "@/assets/logos/logo-bappeda.png";
import medanUntukSemua from "@/assets/logos/medan-untuk-semua.png";

function HeroHeader() {
  return (
    <header className="flex items-center justify-between w-full">
      {/* Logo Kiri */}
      <div className="flex items-center gap-4 sm:gap-5">
        <img
          src={logoMedan}
          alt="Logo Kota Medan"
          className="h-9 xs:h-10 sm:h-12 lg:h-20 object-contain"
        />

        <img
          src={logoBappeda}
          alt="Logo Bappeda Kota Medan"
          className="h-9 xs:h-10 sm:h-12 lg:h-23 object-contain"
        />
      </div>

      {/* Logo Kanan */}
      <div className="flex items-center justify-end">
        <img
          src={medanUntukSemua}
          alt="Medan Untuk Semua"
          className="h-5 xs:h-6 sm:h-8 lg:h-8 object-contain"
        />
      </div>
    </header>
  );
}

export default HeroHeader;