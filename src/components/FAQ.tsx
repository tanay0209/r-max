import { Search } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { AccordionContent } from "@radix-ui/react-accordion"

function FAQ() {
    return (
        <div className='w-full h-full flex flex-col space-y-10 items-center pb-8'>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-sm text-center w-full md:w-1/2">Find answers to common questions about our services and features. For more details, contact our support team.</p>
            <div className="flex items-center justify-center w-full sm:w-1/2 mx-auto">
                <input type="text" className="w-full placeholder:text-muted-foreground p-2 rounded-tl-md rounded-bl-md border" placeholder="Ask Q! e.g Tell me about key features" />
                <div className="bg-[#F54F35] rounded-tr-md rounded-br-md p-2 border border-[#F54F35]"><Search stroke="white" size={20} /></div>
            </div>
            <div className="w-full sm:w-3/4 mx-auto">
                <Accordion type="single" collapsible className="w-full space-y-4 text-sm sm:text-base">
                    <AccordionItem value="item-1" className="border border-gray-300 p-3 rounded-md">
                        <AccordionTrigger className="hover:no-underline">What is RMax?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm">
                            Qest, is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border border-gray-300 p-3 rounded-md">
                        <AccordionTrigger className="hover:no-underline">How does it work?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm">
                            Qest, is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border border-gray-300 p-3 rounded-md">
                        <AccordionTrigger className="hover:no-underline">How much does it cost?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm">
                            Qest, is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
            <a className="text-sm text-center">Haven&apos;t got your answer{" "} <span className="text-blue-600 font-semibold">Contact our support now</span> </a>
        </div>
    )
}

export default FAQ