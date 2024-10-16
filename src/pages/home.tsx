const HomePage = () => {
  return (
    <div className='bg-subtle min-h-screen py-6 sm:py-12'>
      <div className='mx-auto max-w-4xl p-6 sm:p-8'>
        <div className='border border-muted bg-neutral p-8 rounded'>
          <span className='uppercase text-xs leading-4 tracking-wider text-muted'>
            Special Deal
          </span>
          <h1 className='text-3xl font-bold leading-9 mt-1 mb-4 text-copy'>
            Opportunity of a lifetime
          </h1>
          <p className='text-subtle'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            sint dicta quas explicabo rem quisquam consectetur aperiam facere
            temporibus aut. Voluptatibus minus nesciunt qui voluptas fugiat
            voluptate repudiandae error asperiores.
          </p>
          <button className='px-4 py-2 rounded bg-bold text-inverted hover:bg-grey-100 font-normal text-sm mt-6'>
            Learn more
          </button>
        </div>
        <div className='flex gap-8 mt-8'>
          <div className='px-8 py-12 rounded bg-highlight text-center flex-1'>
            <span className='uppercase text-sm tracking-wide leading-5 text-copy'>
              Conversion rate
            </span>
            <h1 className='text-6xl leading-[60px] font-black text-copy'>
              98.6%
            </h1>
          </div>
          <div className='px-8 py-12 rounded bg-accesent text-center flex-1'>
            <span className='uppercase text-sm tracking-wide leading-5 text-inverted'>
              customers
            </span>
            <h1 className='text-6xl leading-[60px] text-inverted font-black'>
              1M+
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
