import { ChevronDown, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
function Navbar() {
    return (
        <div className="max-w-[75%] mx-auto py-4 mt-4 flex justify-between items-center bg-white border-gray-200 shadow-md border rounded-md px-3 *:cursor-pointer">
            <h2 className="font-bold text-xl">R<span className="text-red-700">Max</span></h2>
            <ul className="items-center hidden lg:flex space-x-4 *:font-medium">
                <li className="text-black">Home</li>
                <li className="flex items-center">Features <span className="mt-1"><ChevronDown size={16} /></span></li>
                <li>Pricing</li>
                <li className="flex items-center">Solutions <span className="mt-1"><ChevronDown size={16} /></span></li>
                <div className="border-l flex space-x-2 px-2 border-gray-300">
                    <li className="border rounded-md px-3 py-2">Login</li>
                    <li className="bg-orange-600 rounded-md px-3 py-2 text-white">Try for free</li>
                </div>
            </ul>
            <div className="flex lg:hidden">
                <Sheet>
                    <SheetTrigger><Menu /></SheetTrigger>
                    <SheetContent>
                        <ul className="flex w-full flex-col space-y-4 *:font-medium mt-4">
                            <li className="text-black cursor-pointer">Home</li>
                            <li className="flex justify-between cursor-pointer">Features <span className="mt-1"><ChevronDown size={16} /></span></li>
                            <li className="cursor-pointer">Pricing</li>
                            <li className="flex justify-between cursor-pointer">Solutions <span className="mt-1"><ChevronDown size={16} /></span></li>
                            <li className="border cursor-pointer rounded-md px-3 py-2 text-center">Login</li>
                            <li className="bg-orange-600 rounded-md cursor-pointer px-3 py-2 text-center text-white">Try for free</li>
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

export default Navbar