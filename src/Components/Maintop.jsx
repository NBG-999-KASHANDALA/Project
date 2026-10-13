import React from 'react'
import img from '../assets/img.png'

const Maintop = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col items-start max-w-lg">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight mb-6">
                        Your everyday tasks, automated.
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Whirl lets you design and streamline your everyday tasks and workflows in just a few clicks.
                    </p>
                    <div className="flex items-center gap-6">
                        <button className="bg-[#0e7490] hover:bg-[#0891b2] text-white px-6 py-3 rounded-md font-medium transition-colors">
                            Book a demo
                        </button>
                        <a href="#learn-more" className="text-[#0e7490] font-medium hover:underline flex items-center gap-1">
                            Learn more <span>&gt;</span>
                        </a>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center">
                    {/* HERO ILUSTROSIYA RASMI UCHUN JOY */}
                    <div className="w-full max-w-md bg-cyan-50 rounded-2xl p-6 flex justify-center items-center min-h-[350px]">

                        <span className="text-gray-400 text-sm font-medium">
                            <img src={img} alt="" />
                        </span>
                    </div>
                </div>
            </section>

            {/* Trusted By Section */}
            <section className="max-w-7xl mx-auto px-6 py-10 border-t border-gray-100">
                <p className="text-center text-gray-600 text-sm font-medium mb-8">
                    Trusted by 50,000+ companies
                </p>

                {/* Kompaniya Logotiplari */}
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
                    {/* LOGO 1 */}
                    <div className="flex items-center gap-2 font-semibold text-gray-700">
                        {/* <img src="/focusfox-logo.svg" alt="focusfox" className="h-6" /> */}
                        <span>focusfox</span>
                    </div>

                    {/* LOGO 2 */}
                    <div className="flex items-center gap-2 font-semibold text-gray-700">
                        {/* <img src="/nowintech-logo.svg" alt="NowInTech" className="h-6" /> */}
                        <span>NowInTech</span>
                    </div>

                    {/* LOGO 3 */}
                    <div className="flex items-center gap-2 font-semibold text-gray-700">
                        {/* <img src="/optimer-logo.svg" alt="Optimer" className="h-6" /> */}
                        <span>Optimer</span>
                    </div>

                    {/* LOGO 4 */}
                    <div className="flex items-center gap-2 font-semibold text-gray-700">
                        {/* <img src="/carded-logo.svg" alt="Carded" className="h-6" /> */}
                        <span>Carded</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Maintop