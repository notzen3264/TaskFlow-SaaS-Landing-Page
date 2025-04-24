import Logo from '@/assets/logosaas.png';
import X from '@/assets/social-x.svg';
import Instagram from '@/assets/social-insta.svg';
import LinkedIn from '@/assets/social-linkedin.svg';
import Pinterest from '@/assets/social-pin.svg';
import YouTube from '@/assets/social-youtube.svg';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="magic-blur">
          <a href="#">
            <Image
              src={Logo}
              draggable="false"
              width={40}
              height={40}
              className='select-none cursor-pointer relative'
              alt='Logo'
            />
          </a>
        </div>
        <nav className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          <a href="#" className="text-[#BCBCBC]">About</a>
          <a href="#" className="text-[#BCBCBC]">Features</a>
          <a href="#" className="text-[#BCBCBC]">Customers</a>
          <a href="#" className="text-[#BCBCBC]">Pricing</a>
          <a href="#" className="text-[#BCBCBC]">Help</a>
          <a href="#" className="text-[#BCBCBC]">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <a href="#"><X className="active:scale-95"/></a>
          <a href="#"><Instagram className="active:scale-95"/></a>
          <a href="#"><LinkedIn className="active:scale-95"/></a>
          <a href="#"><Pinterest className="active:scale-95"/></a>
          <a href="#"><YouTube className="active:scale-95"/></a>
        </div>
        <p className="mt-6">&copy; {new Date().getFullYear()} Taskflow Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
