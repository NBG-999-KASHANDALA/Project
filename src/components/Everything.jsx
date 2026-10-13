import React from 'react'

const Everything = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen py-16 px-6 font-sans text-slate-800  ">
      <div className="max-w-6xl mx-auto space-y-20 ">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-400 ">
          <div>
            <h1 className="text-4xl lg:text-5xl font-serif text-slate-900 leading-tight mb-10">
              We will take care of everything, so you can get back to relaxing.
            </h1>

            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://api.iconify.design/lucide:shield-alert.svg?color=%232563eb" 
                      alt="icon" 
                      className="w-5 h-5" 
                    />
                    <h3 className="font-semibold text-lg text-slate-900">Anti-loss technology</h3>
                  </div>
                  <span className="text-slate-400 text-sm">▼</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed pl-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://api.iconify.design/lucide:refresh-cw.svg?color=%232563eb" 
                    alt="icon" 
                    className="w-5 h-5" 
                  />
                  <span className="text-slate-700 font-medium">Exchange easily</span>
                </div>
                <span className="text-slate-400 text-sm">▼</span>
              </div>

              <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://api.iconify.design/lucide:lock.svg?color=%232563eb" 
                    alt="icon" 
                    className="w-5 h-5" 
                  />
                  <span className="text-slate-700 font-medium">Fully encrypted</span>
                </div>
                <span className="text-slate-400 text-sm">▼</span>
              </div>

              <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://api.iconify.design/lucide:zap.svg?color=%232563eb" 
                    alt="icon" 
                    className="w-5 h-5" 
                  />
                  <span className="text-slate-700 font-medium">Plenty of options</span>
                </div>
                <span className="text-slate-400 text-sm">▼</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img 
              src="https://cdn.prod.website-files.com/660caa26eea83cc14ce9771a/660caa26eea83cc14ce9782a_streamline-icon-coding@250x250.SVG" 
              alt="Illustration" 
              className="w-full max-w-md object-contain" 
            />
          </div>
        </div>
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 border-t border-slate-200">
          <div className="lg:col-span-4">
            <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 leading-snug">
              What's Whirl all about?
            </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 text-lg mb-3">All on one place.</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div>
              <img 
                src="https://api.iconify.design/lucide:search.svg?color=%232563eb" 
                alt="search" 
                className="w-6 h-6 mb-3" 
              />
              <h3 className="font-semibold text-slate-900 text-lg mb-3">Get daily alerts.</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>

            <div>
              <img 
                src="https://api.iconify.design/lucide:monitor-check.svg?color=%232563eb" 
                alt="secure" 
                className="w-6 h-6 mb-3" 
              />
              <h3 className="font-semibold text-slate-900 text-lg mb-3">Safe and secure.</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

       

      </div>
    </div>
    
  )
}

export default Everything