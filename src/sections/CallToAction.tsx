import ArrowRight from '@/assets/arrow-right.svg';
import Star from '@/assets/star.png';
import Spring from '@/assets/spring.png';
import Image from 'next/image';

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-details-wrapper relative">
          <h2 className="title text-center text-3xl md:text-[54px] md:leading-[60px] mt-5">Sign up for free now</h2>
          <p className="description text-center text-[22px] leading-[30px] mt-5">
            Join thousands of satisfied users today and boost your productivity to the next level.
          </p>
          <Image
            src={Star}
            alt="Star"
            width={360}
            height={360}
            className="absolute -left-[350px] -top-[137px] select-none"
            draggable="false"
          />
          <Image
            src={Spring}
            alt="Spring"
            width={360}
            height={360}
            className="absolute -right-[331px] -top-[19px] select-none"
            draggable="false"
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">
            Get Started
          </button>
          <button className="btn btn-text gap-1">
            <span>
              Book a Demo
            </span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
