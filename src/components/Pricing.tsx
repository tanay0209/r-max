import { ArrowRight, Check, X } from "lucide-react"
import { Switch } from "./ui/switch"

function Pricing() {
    return (
        <div className='h-full w-full flex flex-col gap-y-10 items-center'>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center">
                Choose Plan <br /> That&apos;s Right For You
            </h2>
            <p className="text-muted-foreground text-sm text-center w-3/4">
                Simple and transparent pricing. Start for free, upgrade when you love it <br />{" "}
                <span className="text-orange-600">30 day free trial in a button</span>
            </p>
            <p className="text-center leading-relaxed">Running a{" "}<span className="font-semibold">Growth Business</span> or {" "}<span className="font-semibold">Enterprise</span>? Let&apos;s connect -{" "}<button className="bg-[#F54F35] text-white px-2 py-1 rounded-md text-sm">Talk to sales</button></p>
            <div className="flex items-center space-x-2">
                <label htmlFor="monthly">Monthly</label>
                <Switch />
                <label htmlFor="yearly">Yearly</label>
                <div className="text-[#F54F35] text-sm text-center font-semibold bg-[#FEF1EF] rounded-xl px-2">Save 25%</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                <div className="flex flex-col py-5 px-6 justify-between space-y-4 border border-gray-200 rounded-md">
                    <h5 className="uppercase font-semibold text-orange-600">Starter</h5>
                    <h3 className="">${" "}<span className="text-4xl font-bold">17</span>{" "}/{" "}month</h3>
                    <p className="text-muted-foreground">billed monthly</p>
                    <ul className="flex flex-col items-start space-y-2">
                        <li className="flex items-center gap-2"><Check className="mt-1" stroke="#4BF01EFF" size={16} />Commercial License</li>
                        <li className="flex items-center gap-2"><Check className="mt-1" stroke="#4BF01EFF" size={16} />100+ HTML UI Elements</li>
                        <li className="flex items-center gap-2"><Check className="mt-1" stroke="#4BF01EFF" size={16} />Unlimited Domain Support</li>
                        <li className="flex items-center gap-2"><X className="mt-1" stroke="gray" size={16} />6 Month Premium Support</li>
                        <li className="flex items-center gap-2"><X className="mt-1" stroke="gray" size={16} />Life Time Updates</li>
                    </ul>
                    <button className="p-2 bg-[#FEF1EF] text-[#F54F35] flex justify-between items-center rounded-md">Get Started <ArrowRight stroke="#F54F35" /></button>
                    <h6 className="text-xs">No credit card required</h6>
                </div>


                <div className="flex flex-col py-5 px-6 justify-between space-y-4 border border-gray-200 rounded-md">
                    <h5 className="uppercase font-semibold text-orange-600">Premium</h5>
                    <h3 className="">${" "}<span className="text-4xl font-bold">88</span>{" "}/{" "}month</h3>
                    <p className="text-muted-foreground">billed monthly</p>
                    <ul className="flex flex-col items-start space-y-2">
                        <li className="flex items-center gap-2"><Check className="mt-1" stroke="#4BF01EFF" size={16} />Commercial License</li>
                        <li className="flex items-center gap-2"><Check className="mt-1" stroke="#4BF01EFF" size={16} />100+ HTML UI Elements</li>
                        <li className="flex items-center gap-2"><Check className="mt-1" stroke="#4BF01EFF" size={16} />Unlimited Domain Support</li>
                        <li className="flex items-center gap-2"><Check className="mt-1" stroke="#4BF01EFF" size={16} />6 Month Premium Support</li>
                        <li className="flex items-center gap-2"><Check className="mt-1" stroke="#4BF01EFF" size={16} />Life Time Updates</li>
                    </ul>
                    <button className="p-2 bg-[#FEF1EF] text-[#F54F35] flex justify-between items-center rounded-md">Get Started <ArrowRight stroke="#F54F35" /></button>
                    <h6 className="text-xs">No credit card required</h6>
                </div>
            </div>
            <a href="#" className="text-center w-full text-blue-700 underline">Explore in depth difference</a>
        </div>
    )
}

export default Pricing