"use client";

import Link from "next/link";
import "@/styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer relative mt-auto w-full">
            {/* Overlay para contraste sobre o fundo */}
            <div className="absolute inset-0 bg-[#3a385d]/70 pointer-events-none" />

            <div className="relative mx-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8">
                {/* GRID PRINCIPAL */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
                    {/* LOGO + COPYRIGHT */}
                    <div className="col-span-full hidden lg:col-span-1 lg:block">
            <span className="flex-none font-semibold text-xl text-white">
              Midwest Psychological Assessments
            </span>
                        <p className="mt-3 text-xs sm:text-sm text-white/70">
                            © 2025 Midwest Psychology Ireland
                        </p>
                    </div>

                    {/* COLUNA 1 */}
                    <div>
                        <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Services</h4>
                        <div className="mt-3 grid space-y-3 text-sm">
                            <p><Link className="footer-link" href="#assessments">Services</Link></p>
                            <p><Link className="footer-link" href="#conditions">Conditions</Link></p>
                        </div>
                    </div>

                    {/* COLUNA 2 */}
                    <div>
                        <h4 className="text-xs font-semibold text-white uppercase tracking-wider">About</h4>
                        <div className="mt-3 grid space-y-3 text-sm">
                            <p><Link className="footer-link" href="#principles">Principles</Link></p>
                            <p><Link className="footer-link" href="#approach">Our approach</Link></p>
                            <p><Link className="footer-link" href="#ethic">Ethic</Link></p>
                            <p><Link className="footer-link" href="#team">Team</Link></p>
                        </div>
                    </div>

                    {/* COLUNA 3 */}
                    <div>
                        <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Process</h4>
                        <div className="mt-3 grid space-y-3 text-sm">
                            <p><Link className="footer-link" href="#process">Process</Link></p>
                            <p><Link className="footer-link" href="#faqs">FAQs</Link></p>
                        </div>
                    </div>

                    {/* COLUNA 4 */}
                    <div>
                        <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Contact</h4>
                        <div className="mt-3 grid space-y-3 text-sm">
                            <p><Link className="footer-link" href="#contact">Contact</Link></p>
                        </div>
                    </div>
                </div>

                {/* LINHA FINAL */}
                <div className="pt-5 mt-5 border-t border-white/20">
                    <div className="sm:flex sm:justify-between sm:items-center">
                        <div className="text-sm text-white/70">
                            Terms • Privacy • Status
                        </div>

                        {/* LOGO MOBILE */}
                        <div className="mt-3 sm:mt-0 sm:hidden text-right">
              <span className="font-semibold text-white">
                Midwest Psychological Assessments
              </span>
                            <p className="mt-1 text-xs text-white/70">
                                © 2025 Midwest Psychology Ireland
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
