import { Linkedin, Twitter, Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import LogoWhite from '@/assets/logowhite.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  let year = new Date().getFullYear();
  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#team' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
    ],
    services: [
      { label: 'Feasibility Studies', href: '#' },
      { label: 'Market Research', href: '#' },
      { label: 'Financial Analysis', href: '#' },
      { label: 'Strategic Planning', href: '#' },
    ],
    resources: [
      { label: 'Blog', href: '#insights' },
      { label: 'Case Studies', href: '#' },
      { label: 'FAQs', href: '#faq' },
      { label: 'Privacy Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-navy text-white py-8 lg:py-5">
      <div className="xl:container mx-auto px-4 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 mb-12">
          {/* Logo & Description */}
          <div className='pt-0 lg:pt-6'>
            {/* <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center">
                <span className="text-white font-serif text-lg">P</span>
              </div>
              <span className="text-white font-sans text-sm font-medium tracking-wide">
                Platform01<br />
                <span className="text-xs opacity-80">Consulting</span>
              </span>
            </a> */}
            <Link to='/'>
              <img src={LogoWhite} alt="Logo" className='w-44 h-[70px] pb-1 mb-1.5' />
            </Link>
            <hr className='opacity-50' />
            <p className="text-white pt-2 font-sans text-sm max-w-sm leading-relaxed mb-6">
              Platform01 Consulting is a premium Management Consulting firm partnering with visionary leaders across Corporations, Investment firms, Public Institutions, and other organizations seeking bespoke, high-impact services.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className='px-0 lg:px-4 pt-0 lg:pt-6'>
            <div className='flex justify-between'>
              <p className='text-2xl font-bold'>Kingdom of</p>
              <p className='text-xl font-bold'>بلاتفورم 01</p>
            </div>
            <div className='flex justify-between pb-4'>
              <p className='text-2xl font-bold'>Saudi Arabia</p>
              <p className='text-xl font-bold'>كونسلتينغ أرابيا</p>
            </div>
            <hr className='opacity-50' />
            <div className='flex flex-col gap-y-2 text-sm'>
              <p className='flex pt-2'><MapPin size={60} className='pr-2' />Floor 5, 4055 King Fahd Road,
                Samama Holding Tower, P.O. Box 12333,
                Riyadh, Kingdom of Saudi Arabia</p>
              <a className='flex cursor-pointer items-center' href="tel://+966114149349"><Phone size={30} className='pr-2'
              />+966 11 414 9349</a>
              <a className='flex cursor-pointer items-center' href="mailto://info@p01cglobal.com"><Mail size={30} className='pr-2'
              />info@p01cglobal.com</a>
            </div>
          </div>


        </div>

        {/* Bottom Bar */}
        <hr className='opacity-50' />
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm font-sans">
            ©{year} Platform01 Consulting. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white text-sm font-sans transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/40 hover:text-white text-sm font-sans transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
