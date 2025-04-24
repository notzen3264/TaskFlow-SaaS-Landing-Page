import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg'

export const Header = () => {
  return (
    <header className='sticky top-0 z-50 backdrop-blur-[7.5px] border-black/10 border-b-[1px] mb-7'>
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className='text-white/60 hidden md:block'>Streamline your workflow and boost your productivity</p>
        <div className='inline-flex gap-1 items-center cursor-pointer'>
          <p>Get Started For Free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className='py-5'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <a href='#' className='relative w-10 h-10 inline-block'>
              <div className="flex justify-between items-center gap-3 magic-blur">
                <Image
                  src={Logo}
                  alt='Taskflow Logo'
                  height={40}
                  width={40}
                  draggable='false'
                  className='select-none cursor-pointer relative'
                />
                <div className='magic-blur'>
                  <span className='font-bold tracking-tighter text-2xl text-black/90 relative'>Taskflow</span>
                </div>
              </div>
            </a>

            <MenuIcon className='h-5 w-5 md:hidden cursor-pointer' />

            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              <a href='#'>About</a>
              <a href='#'>Features</a>
              <a href='#'>Customers</a>
              <a href='#'>Updates</a>
              <a href='#'>Help</a>
              <button className='btn btn-primary'>
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
};
