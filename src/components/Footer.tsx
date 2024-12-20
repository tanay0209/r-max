import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4 text-sm">
            <div className="px-4 grid grid-cols-2 md:grid-cols-6 gap-6 pt-8">
                <div>
                    <h3 className="font-semibold text-lg mb-4 text-muted-foreground">Company</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">About us</a></li>
                        <li><a href="#" className="hover:underline">Contact us</a></li>
                        <li><a href="#" className="hover:underline">Careers</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-4 text-muted-foreground">Business Size</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Entrepreneurs</a></li>
                        <li><a href="#" className="hover:underline">SMBs</a></li>
                        <li><a href="#" className="hover:underline">Growth Business</a></li>
                        <li><a href="#" className="hover:underline">Household Services</a></li>
                        <li><a href="#" className="hover:underline">Enterprise</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-4 text-muted-foreground">Business Type</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Health & Wellness</a></li>
                        <li><a href="#" className="hover:underline">Sports</a></li>
                        <li><a href="#" className="hover:underline">Learning Activities</a></li>
                        <li><a href="#" className="hover:underline">Household Services</a></li>
                        <li><a href="#" className="hover:underline">Miscellaneous</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-4 text-muted-foreground">Download</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Apple Business App</a></li>
                        <li><a href="#" className="hover:underline">Google Play Business App</a></li>
                        <li><a href="#" className="hover:underline">Apple User App</a></li>
                        <li><a href="#" className="hover:underline">Google Play User App</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-4 text-muted-foreground">Legal</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:underline">Return Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-4 text-muted-foreground">Contact us</h3>
                    <ul className="space-y-2">
                        <li><p>support@Rmax.com</p></li>
                        <li><p>+91-8459671235</p></li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6">
                <p className="text-sm">&copy; 2024 Copyright, All Rights Reserved @RMax</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-400"><Twitter fill="white" /></a>
                    <a href="#" className="hover:text-gray-400"><Facebook /></a>
                    <a href="#" className="hover:text-gray-400"><Instagram /></a>
                    <a href="#" className="hover:text-gray-400"><Linkedin fill="white" /></a>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
