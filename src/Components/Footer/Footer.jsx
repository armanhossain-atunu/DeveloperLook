import React from "react";

import NaveLogo from "../Header/Logo/NaveLogo";
import { Flame, Mail, Music2 } from "lucide-react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 pb-6 pt-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h1 className="text-center text-4xl font-black tracking-tight text-black sm:text-5xl md:text-6xl lg:text-8xl">
          Let&apos;s Get Hyped!
        </h1>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:info@gethyped.nl"
            className="inline-flex items-center gap-3 rounded-2xl border border-black/25 bg-[#faf4ec] px-5 py-3 text-sm font-semibold text-black transition-transform duration-200 hover:-translate-y-1"
          >
            Mail us directly
            <span className="rounded-xl bg-black p-2 text-white">
              <Mail size={16} />
            </span>
          </a>

          <button
            className="inline-flex items-center gap-3 rounded-2xl bg-[#ff5a2f] px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-1"
          >
            Get Results
            <span className="rounded-xl bg-white p-2 text-[#ff5a2f]">
              <Flame size={16} />
            </span>
          </button>
        </div>

        {/* Footer Box */}
        <div
          style={{
            clipPath:
              "polygon(0 56%, 100% 36%, 100% 100%, 0% 100%)",
            WebkitClipPath:
              "polygon(0 56%, 100% 36%, 100% 100%, 0% 100%)",
          }}
          className="relative flex w-full flex-col min-h-[530px] overflow-hidden rounded-[2rem] bg-[#e8e1d5] px-5 pb-8 pt-32 sm:px-6 lg:min-h-[520px] lg:px-12 lg:pb-10 lg:pt-40"
        >
          {/* Logo */}
          <div className="absolute top-8 lg:top-auto lg:bottom-40 left-4 lg:left-8 md:left-8">
            <NaveLogo className="h-16 w-32 md:h-20 md:w-40 lg:h-32 lg:w-64" />
          </div>

          {/* Content */}
          <div className="relative z-10 ml-auto flex max-w-2xl flex-col gap-4 lg:mt-6">
            {/* Badge */}
            <div className="self-end rounded-full bg-[#f3b4ef] px-6 py-5 text-center text-sm font-black uppercase tracking-wide text-black">
              <div>Get Hyped.</div>
              <div className="mt-1 text-4xl leading-none">GH</div>
            </div>

            {/* Links + Social */}
            <div className="flex w-full flex-col gap-8 lg:flex-row lg:justify-between">
              <div className="w-full">
                <div className="mb-3 flex w-full flex-wrap gap-2 sm:gap-3">
                  {[
                    { name: "Expertises", link: "/expertises" },
                    { name: "Work", link: "/work" },
                    { name: "About", link: "/about" },
                    { name: "Contact", link: "/contact" },
                  ].map((item) => (
                    <a
                      key={`footer-${item.name}`}
                      href={item.link}
                      className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black transition-transform duration-200 hover:-translate-y-1"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* Social */}
                <div className="mt-4 flex flex-wrap items-center gap-3 lg:mt-6">
                  <span className="text-lg font-semibold text-black">
                    Follow us
                  </span>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white p-3 text-black"
                  >
                   <FaLinkedin size={18} />
                  </a>

                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white p-3 text-black"
                  >
                    <Music2 size={18} />
                  </a>

                  <a
                   href="https://instagram.com"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="rounded-full bg-white p-3 text-black"
                 >
                   <FaInstagram size={18} />
                 </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white p-3 text-black"
                  >
                    <FaYoutube size={18} />
                  </a> 
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid gap-5 text-sm text-black grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                  <h3 className="text-xl font-bold">Contact</h3>
                  <p className="mt-2">info@gethyped.nl</p>
                  <p>+31 6 1533 7496</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold">Address</h3>
                  <p className="mt-2">Beltrumsestraat 6,</p>
                  <p>7141 AL Groenlo</p>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex flex-col gap-2 pt-6 text-xs text-black/70 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2025 Get Hyped</p>
              <p>Privacyvoorwaarden</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;