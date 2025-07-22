import {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    TwitterIcon,
  } from "lucide-react";
  import { Button } from "./ui/button";
  import { Input } from "./ui/input";
  import { Separator } from "./ui/separator";
  import { footerLinks } from "../Router/Routes";
  import { Link } from "react-router-dom";
  
  
   const Footer = (): JSX.Element => {
    // Company information data
    const companyDescription =
      "We believe in creating furniture that combines timeless style with lasting quality. Our pieces are crafted to elevate your space, offering both comfort and sophistication.";
  
    // Contact information data
    const contactInfo = {
      phone: "123-456-7890",
      email: "hello@calcos.com",
      address: "A-1 High Place Street, Anywhwere City,\nMC 12345",
    };
  
    // Social media icons data
    const socialIcons = [
      { icon: <FacebookIcon className="w-8 h-8 text-black" />, alt: "Facebook" },
      { icon: <InstagramIcon className="w-8 h-8  text-black" />, alt: "Instagram" },
      { icon: <TwitterIcon className="w-8 h-8  text-black" />, alt: "Twitter" },
      { icon: <LinkedinIcon className="w-8 h-8  text-black" />, alt: "LinkedIn" },
    ];
  
    return (
      <footer className="flex flex-col items-center self-stretch bg-[#b7b7b7] w-full  md:px-20 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-start justify-between py-16 self-stretch gap-y-10">
          {/* Left column - Logo, description, social icons */}
          <div className="flex flex-col px-4 gap-[30px] md: md:w-[353px] md:h-[240px] items-center justify-between md:items-start">
            <div className="flex flex-col items-center lg:items-start gap-y-5 w-fit">
  
              {/* Logo */}
              <div className="inline-flex items-center backdrop-blur-sm">
                <div className=" w-[159px] h-[35px]">
                  <img
                    className="w-[33px] h-[35px] "
                    alt="Group"
                    src="/lens.png"
                  />
                  <div className="absolute w-[119px] h-[26px] top-0.5 left-10">
                    <div className="relative h-[26px]">
                      <img
                        className="w-[113px] h-[26px] absolute top-0 left-0"
                        alt="Calcos"
                        src="/calcos-1.png"
                      />
                      <img
                        className="left-[113px] absolute w-1.5 h-1.5 top-0"
                        alt="Image"
                        src="/-.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Company description */}
              <p className="font-normal text-[#1f1f1f] text-base leading-[25.6px] lg:text-start">
                {companyDescription}
              </p>
            </div>
  
            {/* Social media icons */}
            <div className="flex items-center gap-8 h-8 mt-auto">
              {socialIcons.map((social, index) => (
                <button
                  key={index}
                  aria-label={social.alt}
                  className="focus:outline-none"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
  
          {/* Middle and right columns */}
          <div className="flex flex-col md:flex-row gap-y-10 md:w-[792px] items-center justify-between w-screen">
            {/* Contact Us column */}
            <div className="flex h-[240px] gap-y-10 font-normal flex-col items-center lg:items-start self-stretch order-3 md:order-2">
              <h3 className="font-bold text-[#1f1f1f] text-lg leading-[24.3px]">
                Contact Us
              </h3>
              <div className="flex flex-col lg:items-start items-center justify-between flex-1 self-stretch w-full">
                <p className="font-normal text-[#1f1f1f] text-base leading-6">
                  {contactInfo.phone}
                </p>
                <p className="font-normal text-[#1f1f1f] text-base leading-6">
                  {contactInfo.email}
                </p>
                <p className="font-normal text-[#1f1f1f] text-base leading-[25.6px] whitespace-pre-line">
                  {contactInfo.address}
                </p>
              </div>
            </div>
  
            {/* Company links column */}
            <div className="flex flex-col items-center md:items-start gap-8 relative self-stretch order-4 md:order-3">
              <h3 className="font-bold text-[#1f1f1f] text-lg leading-[24.3px]">
                Company
              </h3>
              <div className="flex flex-col items-center w-[118px] gap-4 md:items-start justify-between flex-1">
                {footerLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.link}
                    className="font-normal text-[#1f1f1f] text-base leading-6 hover:underline"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
  
            {/* Get In Touch column */}
            <div className="flex flex-col px-4 gap-y-10 md:w-[323px] md:text-left items-center md:items-start justify-between relative self-stretch order-2 md:order-4">
              <h2 className="font-bold text-[#1f1f1f] text-[32px] leading-[43.2px]">
                Get In Touch
              </h2>
              <p className="font-normal text-[#1f1f1f] text-base leading-[25.6px]">
                Whether you're looking for design advice, product details, or just
                want to say hello, we're just a message away.
              </p>
              <div className="flex items-center justify-between w-full bg-[#ffffff9d] rounded-[10px] border-2 border-solid border-[#d9d9d9] overflow-hidden 
              pt-2 pb-2 pl-2 pr-5 ">
                <Input
                  className="border-0 bg-transparent pl-3 text-[#bfbfbf] focus-visible:ring-0 focus-visible:ring-offset-0 font-['Inter'] text-[16px]"
                  placeholder="Your mail adress"
                />
                <Button className="bg-[#fe37a3] w-[81px] hover:bg-[#e62e92] text-white font-bold rounded-[5px] h-[35px] px-[32px]">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer bottom */}
        <div className="w-full">
          <Separator className="bg-[#1f1f1f]" />
          <div className="flex items-end justify-between py-5">
            <p className="font-normal text-[#1f1f1f] text-base leading-6">
              ©2025 CALCOS. All rights reserved
            </p>
          </div>
        </div>
  
        {/* Background text */}
        <div className=" text-[80px] h-fit font-bold text-[#1a1a1a] md:text-[250px] md:leading-[280px] ">
            CALCOS
        </div>
      </footer>
    );
  };
  export default Footer;
  