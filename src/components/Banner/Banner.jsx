import './Banner.css'

const Banner = () => {
  return (
    <div className="container mx-auto mb-10">
      <div className="pic w-auto h-[600px] flex justify-center">
        
        <div className='flex flex-col justify-center items-center text-white'>
        <div className='mb-[40px]'>
          <h2 className='w-[897px] text-[52px] font-bold leading-[76px] text-center mb-6'>Discover an exceptional cooking class tailored for you!</h2>
          <p className='w-[933px] text-center text-lg leading-[30px]'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
        </div>
        <div className='flex gap-6'>
          <button className='text-black bg-[#0BE58A] h-[65px] w-[187px] rounded-[50px] text-[20px] font-semibold'>Explore Now</button>
          <button className='bg-transparent border-[1px] border-white text-white w-[201px] h-[65px] rounded-[50px]'>Our Feedback</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;