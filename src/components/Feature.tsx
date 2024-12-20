import { BriefcaseBusiness, Calendar, Sparkle } from "lucide-react";
import FeatureCard from "./feature-card";

function Feature() {

    return (
        <div className="flex flex-col h-full w-full gap-y-10 items-center">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center">Why RMax?</h2>
            <p className="text-muted-foreground text-sm text-center">Rmax is designed to simplify and transform the way service businesses operate. From onboarding, scheduling and billing to client management, payments and growth, Rmax integrates everything in one easy-to-use platform connecting all the stake holders.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                <FeatureCard title="Scheduling" description="Manage appointments, classes, and events, workshops with.." Icon={Calendar} />
                <FeatureCard title="Client Management & CRM" description="Keep track of customer data, preferences, and interactions to..." />
                <FeatureCard title="AI Powered Insights" description="Know exactly what is happening in business and get actionable..." Icon={Sparkle} />
                <FeatureCard className="row-span-2" title="Billing & Payments" description="Streamline invoicing and payments with automated workflows, reducing ..." image="https://s3-alpha-sig.figma.com/img/6fa6/e295/4d0e99797aa4929a2f6f84115cd97695?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hTqduAo3aczm93MFXqJXDhdiQJDF1V25HznBP7eOjkYZKItbz5JIlMaAafO36imUkx5NiG9A0MieppP4tYrEJa0iydJnDfaNih0PIJW5jFGZgz5OcadRnNPN2O3lHHGuiMBkHRNwZlEaZHbwBuuIY94G5jkNgtrLUum~Z-ef690sq~g-pX4gLnR6~APpGOENvVCNQPaWdunxBPlEiU0vS6BZpZbwwTdQqdLezUXxlUEIZ7g4jDtIlAHXZiUrjccRhkOmSiyhGiTcTsUlsNMNPxaDkHfe2PsTwYIhWEE70GKJqFFBy8NuG~9-AL1uZDOeQYGTzFoMOAF6HbgQSKH~Fg__" />
                <FeatureCard title="Marketing & Engagement Tools" description="Boost client retention and grow your business with integrated..." Icon={BriefcaseBusiness} />
                <FeatureCard className="lg:row-span-2 row-span-1" title="Custom Branded website" description="Qest’s Custom Branded Website Builder allows you to create a fully personalized..." image="https://s3-alpha-sig.figma.com/img/7d18/ff47/b609fdce17ba4f7df00b52436ee175cf?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XsRAcrh~iZ1Xej9ctYIC-EeVaeDsW3XX0M3VjXPS30ShdC1210z5IMRZZprWXawZyMJYMw1E6l1sIFt~OYPof6Wwn9JXxqBzx-Rz~FlwdTvUmI5VeZ2YnnPKGYC6-URnIiZnFQ27dOJhJ3a0bvOBZAuC2GcJ19yJn7qOSK6bihwSjca75XuaHxzf~V4StFgrHY57Ov5N5YzZTNp3FOFV4rxCYbJ3sLspHHUn0zFPsV-icZLfvOvOSSAqEh3s1JDrUGpyfDDj7M7T~JK5QPowixlzEDYeLsTOnKTA-d5fHkN87jZTJn2M3xngsil1zmFNfGvKRL1FjJcZ-8mNOu8jdw__" />
                <FeatureCard title="Multi-Location Management" description="Manage multiple locations with ease, assigning roles and permissions..." />
            </div>
        </div>
    )
}

export default Feature