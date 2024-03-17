import './Banner.css'

const Banner = () => {
  return (
    <div className="container mx-auto mb-8 lg:mb-10">
      <div className="pic w-[100%] lg:w-auto h-[600px] flex justify-center">
        
        <div className='flex flex-col justify-center items-center text-white'>
        <div className='mb-[20px] lg:mb-[40px]'>
          <h2 className='w-[350px] lg:w-[897px] text-[18px] lg:text-[52px] font-bold leading-[35px] lg:leading-[76px] text-center mb-4 lg:mb-6'>Discover an exceptional cooking class tailored for you!</h2>
          <p className='w-[350px] lg:w-[933px] text-center text-[15px] lg:text-lg leading-[20px] lg:leading-[30px]'>Discover the magic of cooking with our personalized classes, where you'll learn to create culinary delights that reflect your unique style.</p>
        </div>
        <div className='flex gap-4 lg:gap-6'>
          <button className='text-black bg-[#0BE58A] h-[60px] lg:h-[65px] w-[160px] lg:w-[187px] rounded-[50px] text-[18px] lg:text-[20px] font-semibold'>Explore Now</button>
          <button className='bg-transparent border-[1px] border-white text-white w-[165px] lg:w-[201px] h-[60px] lg:h-[65px] rounded-[50px] text-[18px] lg:text-[20px]'>Our Feedback</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;