import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 border-b border-border/20">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="flex items-center">
          <Image
            src="/logo-nav.svg"
            alt="BirdBox Labs"
            width={80}
            height={24}
            className="h-6 w-auto"
          />
        </div>
      </div>
    </nav>
  );
}