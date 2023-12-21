
const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-around bg-gradient-to-r from-[#6418C3] to-[#D0AAFF] py-14" >
            <div className="md:flex-1 text-white ">
                <div className="px-4 text-center md:text-left md:px-0 md:w-11/12 xl:w-9/12 mx-auto space-y-4 md:space-y-6 lg:space-y-12">
                    <h1 className="text-3xl lg:text-5xl font-bold leading-snug">Welcome to SCC Technovision Inc.</h1>
                    <p className="leading-loose font-medium text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">Welcome to SCC Technovision Inc.! Elevate your productivity with our Task Management Platform. Effortlessly create, track, and complete tasks. Collaborate seamlessly with your team, utilizing features like detailed task information, priority levels, and intuitive workflows.</p>
                    <button className="py-3 px-5 lg:py-4 lg:px-7 text-xs md:text-sm lg:text-base bg-gradient-to-l from-[#924AEF] to-[#A827E4] font-bold rounded-md hover:bg-white hover:scale-90 duration-300">
                        LET'S EXPLORE
                    </button>
                </div>
            </div>
            <div className="md:flex-1">
                <img className="xl:w-9/12" src="https://i.ibb.co/NNrNbpk/time-management-marketers-teamwork-media-planning-media-representation-control-reach-your-client-bes.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;