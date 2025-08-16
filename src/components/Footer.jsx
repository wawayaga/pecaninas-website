const Footer = () => {
  return (
    <footer className="bg-gray-50 text-center px-4 py-10 text-sm carlito-bold">
      {/* Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a href="#" className="hover:underline">
          Reservas
        </a>
        <span className="text-gray-300 hidden sm:inline">|</span>
        <a href="#" className="hover:underline">
          Sobre mí
        </a>
        <span className="text-gray-300 hidden sm:inline">|</span>
        <a href="#" className="hover:underline">
          Donaciones
        </a>
        <span className="text-gray-300 hidden sm:inline">|</span>
        <a href="#" className="hover:underline">
          Contacto
        </a>
        <span className="text-gray-300 hidden sm:inline">|</span>
      </div>

      <div className="w-8 h-0.5 bg-gray-200 mx-auto mb-4"></div>

      <div className="text-center space-y-1">
        <p>© 2025 Pecanina. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
