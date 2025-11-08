import DescriptionIcon from '@mui/icons-material/Description';

const Resume = () => {

    return (
        <div className="flex-1 flex-col px-8 py-5 md:py-8 bg-slate-950 min-h-full flex justify-center items-center text-left">
            <div className="flex flex flex-col gap-10 md:gap-15">
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
                    <p className="text-white font-bold text-lg sm:text-xl">Work History</p>
                    <div className="text-base text-gray-300 sm:text-lg flex flex-col gap-1">
                        <p>Below you will find a summary of my past employment experience.</p>
                        <p>Additionally, if you require, you can <span className="underline decoration-yellow-400 underline-offset-8 font-bold text-white">download my resume</span>&nbsp;<DescriptionIcon sx={{ fontSize: 18 , color: 'white' }}/></p>
                    </div>
                    <span></span>
                    <div className='text-base text-gray-300 sm:text-lg flex flex-col gap-1 '>

                            <p className='font-bold text-white'>Lead Front-end Engineer</p>
                            <p className='hidden md:flex flex-row gap-5'>Deloitte Consulting&nbsp;&nbsp;&#x2022;&nbsp;&nbsp;Jakarta&nbsp;&nbsp;&#x2022;&nbsp;&nbsp;Full-Time</p>
                            <p className='md:hidden flex flex-row gap-5'>Deloitte Consulting&nbsp;&#x2022;&nbsp;Jakarta&nbsp;&#x2022;&nbsp;Full-Time</p>
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
export default Resume