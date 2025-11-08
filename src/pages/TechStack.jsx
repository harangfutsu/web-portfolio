import DescriptionIcon from '@mui/icons-material/Description';

const TechStack = () => {
    return (
        <div className="flex-1 flex-col px-8 py-5 md:py-8 bg-slate-950 min-h-full flex justify-center items-center text-left ">
            <div className="flex flex flex-col gap-15">
                <div className="flex flex-col gap-3">
                <h2 className="text-white text-2xl sm:text-3xl font-bold"> <span className="md:underline decoration-wavy decoration-yellow-400 underline-offset-135">My Resume </span><span className="text-yellow-400">/ </span>CV</h2>
                <div className="text-base text-gray-300 sm:text-lg flex flex-col gap-1">
                <p >I'm highly skilled full-stack engineer with more than 8 years of</p>
                <p >experience in building web applications. On this page, you can learn.</p>
                <p>more about my knowledge stack and my previous work experience.</p>
                <span className='hidden md:inline'>&nbsp;</span>
                </div>

                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-white font-bold text-lg sm:text-xl">Skills</p>
                    <div className="text-base text-gray-300 sm:text-lg flex flex-col gap-1">
                        <p>Here are the frameworks, libraries, services, and runtimes I Have experience</p>
                        <p>with. This is not a complete list! I'm constantly gaining new skills, and hence it</p>
                        <p>can be little bit outdated.</p>
                    </div>
                    <div className='text-sm text-gray-200 sm:text-base flex flex-col gap-1'>
                        <span className='flex flex-row gap-5'><button>React</button><button>Node.js</button></span>
                        <span className='flex flex-row gap-5'><button>JavaScript</button><button>Express</button></span>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-white font-bold text-lg sm:text-xl">Work History</p>
                    <div className="text-base text-gray-300 sm:text-lg flex flex-col gap-1">
                        <p>Below you will find a summary of my past employment experience.</p>
                        <p>Additionally, if you require, you can <span className="underline decoration-yellow-400 underline-offset-8 font-bold text-white">download my resume</span>&nbsp;<DescriptionIcon sx={{ fontSize: 18 , color: 'white' }}/></p>
                    </div>
                    <span></span>
                    <div className='text-base text-gray-300 sm:text-lg flex flex-col gap-1 mx-10'>

                            <p className='font-bold text-white'>Lead Front-end Engineer</p>
                            <p className='flex flex-row gap-5'><span className='underline decoration-yellow-400 underline-offset-6'>Constult</span>&#x2022;<span>United Kingdom</span>&#x2022;<span>Full-Time</span></p>
                            <p className='text-sm md:text-base'>Mar 2023&nbsp;&nbsp;-&nbsp;&nbsp;Present</p>
                            <div className='text-sm md:text-base mx-3 flex flex-col gap-1'>
                                <p>&#x2022;&nbsp;&nbsp;Led the front-end work from the project inception.</p>
                                <p>&#x2022;&nbsp;&nbsp;Maintained a browser extension, widget, and web appliations a monorepo.</p>
                                <p>&#x2022;&nbsp;&nbsp;Architected a highly complex real-estate map service.</p>
                                <p>&#x2022;&nbsp;&nbsp;Implemented a shopisticated data grid of property comparables.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TechStack