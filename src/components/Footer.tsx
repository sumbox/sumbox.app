import React from "react";
import { FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";

type Props = {};
type IconProps = {
  href: string;
  children: React.ReactNode;
};

const FooterIcon: React.FC<IconProps> = ({ href, children }: IconProps) => {
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

const FooterLink: React.FC<IconProps> = ({ href, children }: IconProps) => {
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

const Footer = (props: Props) => {
  return (
    <footer
      id="footer"
      className="border-gray-550 bg-gray-850 z-50 w-screen border-t pt-3"
    >
      <div className="min-h-64 m-auto mx-auto grid max-w-[100rem] grid-cols-2 gap-6 p-8 pt-10 pb-20 text-white sm:grid-cols-2 lg:grid-cols-6">
        <div className="col-span-2">
          <img src="/color.svg" className="mb-5 h-10 w-10" />
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
        <div className="col-span-1 flex flex-col space-y-2">
          <h3 className="mb-1 text-xs font-bold uppercase ">About</h3>
          <FooterLink href="/team">Team</FooterLink>
          <FooterLink href="/docs/product/resources/faq">FAQ</FooterLink>
          <FooterLink href="/changelog">Changelog</FooterLink>
          <FooterLink href="/blog">Blog</FooterLink>
        </div>
        <div className="pointer-events-none col-span-1 flex flex-col space-y-2">
          <h3 className="mb-1 text-xs font-bold uppercase">Download</h3>
          <div className="col-span-1 flex flex-col space-y-2 opacity-50">
            <FooterLink href="#">macOS</FooterLink>
            <FooterLink href="#">Windows</FooterLink>
            <FooterLink href="#">Linux</FooterLink>
            <FooterLink href="#">Android</FooterLink>
            <FooterLink href="#">iOS</FooterLink>
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-2">
          <h3 className="mb-1 text-xs font-bold uppercase ">Developers</h3>
          <FooterLink href="https://github.com/sumbox/sumbox.app/tree/master/src/pages/docs">
            Documentation
          </FooterLink>
          <FooterLink href="https://github.com/sumbox/sumbox/blob/master/CONTRIBUTING.md">
            Contribute
          </FooterLink>
          <div className="pointer-events-none opacity-50">
            <FooterLink href="#">Self Host</FooterLink>
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-2">
          <h3 className="mb-1 text-xs font-bold uppercase ">Company</h3>
          <FooterLink href="https://github.com/sumbox/sumbox/blob/master/LICENSE">
            License
          </FooterLink>
          <div className="pointer-events-none opacity-50">
            <FooterLink href="#">Privacy</FooterLink>
          </div>
          <div className="pointer-events-none opacity-50">
            <FooterLink href="#">Terms</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
