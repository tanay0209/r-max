import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
function Hero() {
    return (
        <div className='w-full h-full flex flex-col items-center gap-y-12'>
            <div className='flex space-x-3 mt-12 w-full justify-center'>
                <div className='flex flex-col font-bold md:text-lg border bg-white text-black px-3 pl-4 rounded-tl-md rounded-bl-md items-end'>
                    <h4>AI</h4>
                    <h4>R<span className="text-red-700">Max</span></h4>
                </div>
                <input className='px-4 w-full md:w-1/2 rounded-tr-md rounded-br-md focus:outline-none focus:ring-0 placeholder:text-xs placeholder:md:text-base' type="text" placeholder='Curious? Let AI Uncover the answers' />
            </div>
            <div className='text-center font-bold'>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="md:text-6xl sm:text-5xl text-3xl">Maximize Your Impact</motion.h1>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="leading-relaxed md:text-6xl text-3xl sm:text-5xl"><span className="text-orange-500">Business with</span> R<span className="text-red-700">Max</span></motion.h1>
            </div>
            <p className="text-center text-muted-foreground md:w-3/4 lg:w-1/2 text-sm">Enhance your business with RMax&apos;s all-in-one platform-streamlining client engagement, automating workflows, and fueling growth.</p>
            <div className="md:w-1/2 text-xs sm:text-base flex items-center justify-center space-x-4">
                <button className="bg-orange-600 flex items-center rounded-md px-3 py-2 text-center text-white">Get Started <span className="ml-2"><ArrowRight size={16} /></span></button>
                <button className="border cursor-pointer rounded-md px-3 py-2 text-center bg-white shadow-md">Book a demo</button>
            </div>
            <div className="flex justify-around w-full items-center flex-wrap gap-y-4">
                <div className="border border-gray-200 px-2 py-1 rounded-md bg-white">Seamless Onboarding</div>
                <div className="border border-gray-200 px-2 py-1 rounded-md bg-white">Client Engagement</div>
                <div className="border border-gray-200 px-2 py-1 rounded-md bg-white">Generate Report</div>
                <div className="border border-gray-200 px-2 py-1 rounded-md bg-white">Revenue Growth</div>
            </div>
        </div>
    )
}

export default Hero