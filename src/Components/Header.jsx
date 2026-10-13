
const Header = () => {
  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      {/* Navbar Section */}
      <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo va Navigatsiya linklari */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2 cursor-pointer">
    
            <span className="text-xl font-bold tracking-tight text-gray-900">Whirl</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#integrations" className="hover:text-gray-900 transition-colors">Integrations</a>
            <a href="#learn" className="hover:text-gray-900 transition-colors">Learn</a>
          </nav>
        </div>

        <div className="flex items-center gap-4 text-sm font-medium">
          <a href="#signin" className="text-gray-600 hover:text-gray-900 transition-colors px-3 py-2">
            Sign in
          </a>
          <button className="bg-[#0e7490] hover:bg-[#0891b2] text-white px-5 py-2.5 rounded-md font-medium transition-colors">
            Book a demo
          </button>
        </div>
      </header>

    </div>
  );
};

export default Header;