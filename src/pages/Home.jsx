import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {

    return (
        <div className="flex-1 flex-col px-8 py-5 md:py-8 bg-slate-950 min-h-full flex justify-center items-center text-left ">
            <div className="flex flex flex-col gap-10 md:gap-15">
                <div className="flex flex-col gap-3">
                <h2 className="text-white text-2xl sm:text-3xl font-bold"> <span className="md:underline decoration-wavy decoration-yellow-400 underline-offset-135">Hey, I'm </span><span className="text-yellow-400">Giyu Tomioka</span>!</h2>
                <div className="text-base text-gray-200 sm:text-lg flex flex-col gap-1">
                <p>A Full-Stack Web Developer dedicated building modern web apps.</p>
                <p>Passionate about clean code, scalability, and user-focused design.</p>
                <p>Continuously learning and building impactful web projects.</p>
                <span className='hidden md:inline'>&nbsp;</span>
                </div>

                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-white font-bold text-lg sm:text-xl">Find me on</p>
                    <div className="text-base text-gray-200 sm:text-lg flex flex-row gap-5">
                        <a href="https://linkedin.com/in/budiwputra" target="_blank" rel="noopener noreferrer">
                            <span className='flex items-center gap-1.5'><LinkedInIcon sx={{ fontSize: 23    , color: 'white' }}/>Linkedin</span>
                        </a>
                        <a href="https://github.com/budiwputra" target="_blank" rel="noopener noreferrer">
                            <span className="flex items-center gap-1.5"><GitHubIcon sx={{ fontSize: 20, color: 'white' }}/>GitHub</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-white font-bold text-lg sm:text-xl">Contact</p>
                    <p className="text-base sm:text-lg text-gray-200">You can reach me out anytime at&nbsp;
                        <a href="mailto:budiwputra@gmail.com" className="underline decoration-yellow-400 underline-offset-8 font-bold">
                            giyu@tech.dev
                        </a> 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home