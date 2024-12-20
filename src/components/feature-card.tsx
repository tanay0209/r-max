import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface IFeatureCardProps {
    Icon?: React.ElementType;
    title: string;
    description: string;
    image?: string;
    className?: string
}

const FeatureCard = ({ Icon, title, description, image, className }: IFeatureCardProps) => {
    return (
        <div className={cn("bg-gray-50 shadow-md rounded-lg flex flex-col items-center text-center hover:shadow-lg h-max lg:h-full transition-shadow duration-300 space-y-2 justify-between", className)}>
            {Icon ? <div className="pt-4"><Icon stroke="#E27221FF" /></div> : null}
            {image ? (
                <img src={image} />
            ) : null}
            <div className="px-6 py-4 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600 text-sm mt-2">{description}</p>
                <a
                    className="text-blue-500 mt-4 flex text-sm items-center justify-center font-medium hover:underline"
                >
                    View details <span><ChevronRight className="mt-0.5" size={16} /></span>
                </a>
            </div>
        </div>
    );
};

export default FeatureCard;