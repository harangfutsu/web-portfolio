import DescriptionIcon from '@mui/icons-material/Description';

const TechStack = () => {
    return (
        <div className="flex-1 flex-col px-8 py-5 md:py-8 bg-slate-950 min-h-full flex justify-center items-center text-left ">
            <div className="flex flex flex-col gap-10 md:gap-15">
                <div className="flex flex-col gap-3">
                <h2 className="text-white text-2xl sm:text-3xl font-bold"> <span className="md:underline decoration-wavy decoration-yellow-400 underline-offset-135">Tech </span><span className="text-yellow-400">Stack</span>!</h2>
                <div className="text-base text-gray-300 sm:text-lg flex flex-col gap-1">
                <p>I'm a passionate Full-Stack Web Developer who enjoys building modern</p>
                <p>web apps using React and Node.js. On this page, you can explore my technical</p>
                <p>skills and the real-world projects I've built during my learning journey.</p>
                <span className='hidden md:inline'>&nbsp;</span>
                </div>

                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-white font-bold text-lg sm:text-xl">Skills</p>
                    <div className="text-base text-gray-300 sm:text-lg flex flex-col gap-1">
                        <p>Here are the frameworks, libraries, and tools I've been learning and</p>
                        <p>using through real-world projects. This list keeps growing as I continue to</p>
                        <p>explore and sharpen my skills in web development.</p>
                    </div>
                    <div className='text-sm text-gray-200 sm:text-base flex flex-col gap-1'>
                        <span className='flex flex-row gap-5'><button>React</button><button>Node.js</button></span>
                        <span className='flex flex-row gap-5'><button>JavaScript</button><button>Express</button></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TechStack