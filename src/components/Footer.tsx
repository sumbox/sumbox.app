import React from "react";
import { FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";
import Image from "next/image";

type SubProps = {
  href: string;
  children: React.ReactNode;
};

const FooterIcon: React.FC<SubProps> = ({ href, children }: SubProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="text-gray-300 hover:text-white"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

const FooterLink: React.FC<SubProps> = ({ href, children }: SubProps) => {
  return (
    <a
      href={href}
      target=""
      className="text-gray-300 hover:text-white"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

const Footer = () => (
  <footer
    id="footer"
    className="border-gray-550 bg-gray-850 z-50 w-screen border-t pt-3"
  >
    <div className="min-h-64 m-auto mx-auto grid grid-cols-2 gap-6 p-8 pt-10 pb-20 text-white sm:grid-cols-2 lg:grid-cols-6">
      <div className="col-span-2">
        <div className="z-30 mr-3 mb-2 h-12 w-12 rounded-md bg-white">
          <Image
            src="/color.svg"
            alt="Sumbox"
            width={50}
            height={50}
            className="mb-2 p-1"
          />
        </div>
        <h3 className="mb-1 text-xl font-bold">Sumbox</h3>
        <p className="text-gray-350 text-sm">
          © Copyright 2022 The Sumbox Team.
          <br /> Licensed under{" "}
          <a
            href="https://choosealicense.com/licenses/gpl-3.0/"
            className="underline"
          >
            GNU General Public License v3.0
          </a>
          .
        </p>
        <div className="mt-6 mb-10 flex flex-row space-x-3">
          <FooterIcon href="https://twitter.com/sumboxapp">
            <FaTwitter size={24} />
          </FooterIcon>
          <FooterIcon href="https://github.com/sumbox">
            <FaGithub size={24} />
          </FooterIcon>
          <FooterIcon href="https://twitch.tv/rithulkamesh">
            <FaTwitch size={24} />
          </FooterIcon>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
