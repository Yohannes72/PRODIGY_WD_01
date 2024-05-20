import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // You can adjust the scroll threshold as needed
      if (scrollTop >=100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`relative ${isScrolled ? 'bg-blac' : ''}`}>
      <div className={`flex text-[FFFFFF] text-lime-50 items-center mx-auto px-4 h-24 ${isScrolled ? 'bg-black' : 'bg-[#0356D3]'}  fixed right-0 left-0 top-0`}>
        <div className='ml-12'>
          <Link to={"/"}><img className='' src={"https://prodigyinfotech.dev/assets/images/logo/logo.svg"} alt="" /></Link>
        </div>
        <div className='items-center ms-auto'>
          <div className='flex mr-60'>
            <Link to={"/"}><p className='pr-20 pl-25 hover:text-green-200'>Home</p></Link>
            <Link to={"/About"}><p className='pr-20 hover:text-green-200'>About</p></Link>
            <Link to={"/intern"}><p className='pr-20 hover:text-green-200'>Internships</p></Link>
            <p className='pr-20 hover:text-green-200'>FAQs</p>
            <p className='pr-20 hover:text-green-200'>Verify</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
