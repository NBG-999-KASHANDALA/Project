import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white font-sans text-gray-700">
      {/* Top CTA Banner */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="bg-[#e8f5fb] px-8 sm:px-14 py-16 md:py-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1e293b] font-normal tracking-tight mb-4">
            Get started with Whirl
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>

          <div>
            <button className="bg-[#026c88] hover:bg-[#02566c] text-white px-7 py-3 rounded-md text-sm font-medium transition-colors shadow-sm cursor-pointer">
              Book a demo
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-gray-500 font-normal">
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-gray-500" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3.5 8.5 6.5 11.5 12.5 4.5" />
              </svg>
              <span>Free 30-day trial</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-gray-500" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3.5 8.5 6.5 11.5 12.5 4.5" />
              </svg>
              <span>No credit-card required</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Logo & Info column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              {/* Whirl Swirl Logo Icon */}
              <div className="w-7 h-7 text-[#026c88]">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path
                    d="M16 6C10.477 6 6 10.477 6 16C6 21.523 10.477 26 16 26C19.866 26 23.21 23.804 24.85 20.6"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 11C13.239 11 11 13.239 11 16C11 18.761 13.239 21 16 21C18.2 21 20.06 19.57 20.73 17.5"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  <circle cx="16" cy="16" r="2" fill="currentColor" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#1e293b]">Whirl</span>
            </div>

            <div className="mt-5 space-y-1 text-xs text-gray-500">
              <p>
                Built by{' '}
                <a href="#nikolai" className="text-[#026c88] hover:underline font-medium">
                  Nikolai Bain
                </a>
                .
              </p>
              <p>
                Powered by{' '}
                <a href="#webflow" className="text-[#026c88] hover:underline font-medium">
                  Webflow
                </a>
                .
              </p>
            </div>
          </div>

          {/* Info column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-gray-900 tracking-wider mb-4">Info</h3>
            <ul className="space-y-3 text-xs text-gray-500">
              <li>
                <a href="#features" className="hover:text-gray-900 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-gray-900 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-gray-900 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-gray-900 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-gray-900 transition-colors">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-gray-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Admin column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-gray-900 tracking-wider mb-4">Admin</h3>
            <ul className="space-y-3 text-xs text-gray-500">
              <li>
                <a href="#style-guide" className="hover:text-gray-900 transition-colors">
                  Style Guide
                </a>
              </li>
              <li>
                <a href="#licenses" className="hover:text-gray-900 transition-colors">
                  Licenses
                </a>
              </li>
              <li>
                <a href="#instructions" className="hover:text-gray-900 transition-colors">
                  Instructions
                </a>
              </li>
              <li>
                <a href="#changelog" className="hover:text-gray-900 transition-colors">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#password" className="hover:text-gray-900 transition-colors">
                  Password
                </a>
              </li>
              <li>
                <a href="#404" className="hover:text-gray-900 transition-colors">
                  404
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter column */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold text-gray-900 tracking-wider mb-4">Newsletter</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-6 max-w-xs">
              Sign up for the latest news, company insights, and Whirl updates.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="max-w-xs">
              <div className="relative flex items-center border-b border-gray-300 pb-1.5 focus-within:border-[#026c88] transition-colors">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-transparent text-xs text-gray-700 placeholder-gray-400 focus:outline-none pr-6"
                />
                <button
                  type="submit"
                  aria-label="Submit newsletter subscription"
                  className="absolute right-0 text-[#026c88] hover:text-[#02566c] cursor-pointer transition-transform hover:translate-x-0.5"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; 2022 Whirl. All Rights Reserved. Illustrations by{' '}
            <a href="#streamline" className="text-[#026c88] hover:underline font-medium">
              Streamline
            </a>
            .
          </p>

          <div className="flex items-center gap-4 text-gray-900">
            {/* Twitter */}
            <a href="#twitter" aria-label="Twitter" className="hover:text-[#026c88] transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#linkedin" aria-label="LinkedIn" className="hover:text-[#026c88] transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#facebook" aria-label="Facebook" className="hover:text-[#026c88] transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
