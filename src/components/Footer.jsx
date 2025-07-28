
const Footer = () => {
  return (
    <footer className="bg-gray-50 text-center px-4 py-10 text-sm carlito-bold">
      {/* Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a href="#" className="hover:underline">Features</a>
        <span className="text-gray-300 hidden sm:inline">|</span>
        <a href="#" className="hover:underline">About</a>
        <span className="text-gray-300 hidden sm:inline">|</span>
        <a href="#" className="hover:underline">Donation</a>
        <span className="text-gray-300 hidden sm:inline">|</span>
        <a href="#" className="hover:underline">Contact</a>
        <span className="text-gray-300 hidden sm:inline">|</span>
        <a href="#" className="hover:underline">Download</a>
      </div>


      <div className="w-8 h-0.5 bg-gray-200 mx-auto mb-4"></div>


      <div className="text-center space-y-1">
        <p>1717 Harrison St, San Francisco, CA 94103, USA</p>
        <p>© 2022 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
