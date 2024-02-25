

const Progress = () => {
    return (
        <div>
            <div>
                <div className="w-[80%] mx-auto mt-6">
                <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="grid grid-rows-1 text-2xl  font-medium">
        <label>
        Professionally
       <div>
       <progress className="progress progress-primary w-[280px] md:w-80" value="80" max="100"></progress>
       </div>
        </label>
        <label>
        Food Ordering
        <div>
       <progress className="progress progress-primary  w-[280px] md:w-80" value="80" max="100"></progress>
       </div>
        </label>
        <label>
        Experience and Quality
        <div>
        <progress className="progress progress-primary  w-[280px] md:w-80" value="90" max="100"></progress>
        </div>
        </label>
        <label>
        Guarantee
        <div>
       <progress className="progress progress-primary w-[280px] md:w-80" value="80" max="100"></progress>
       </div>
        </label>
    </div>
    <div className="ml-[40px]">
      <h1 className="text-5xl font-bold">Explore our Event Services</h1>
      <p className="py-6 text-xl   font-semibold">Help Us to make your event more meaningful & memorable</p>
      
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default Progress;