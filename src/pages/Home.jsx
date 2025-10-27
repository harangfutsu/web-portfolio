import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {

    return (
        <div className="flex-1 flex-col px-8 py-5 bg-slate-950 min-h-full flex justify-center items-center text-left ">
            <div className="flex flex flex-col gap-10 sm:gap-15">
                <div className="text-white flex flex-col gap-3">
                <h2 className="text-2xl sm:text-3xl font-bold"> <span className="sm:underline decoration-wavy decoration-yellow-400 underline-offset-120">Hey, I'm </span><span className="text-yellow-400">Giyu Tomioka</span>!</h2>
                <div className="text-base sm:text-lg">
                <p >A Freelance full-stack engineer based in Wraclaw, Swiss.</p>
                <p >I specialize in developing application using React ecosystem.</p>
                <p> Currently, I'm leading the front-end team at Propbar.</p>
                <span>&nbsp;</span>
                </div>

                </div>
                <div className="text-white flex flex-col gap-3">
                    <p className="font-bold text-lg sm:text-xl">Find me on</p>
                    <div className="text-base sm:text-lg flex flex-row gap-5">
                    <span className='flex items-center gap-1.5'><LinkedInIcon sx={{ fontSize: 23    , color: 'white' }}/>Linkedin</span>
                    <span className="flex items-center gap-1.5"><GitHubIcon sx={{ fontSize: 20, color: 'white' }}/>GitHub</span>

                    </div>
                </div>
                <div className="text-white flex flex-col gap-3">
                    <p className="font-bold text-lg sm:text-xl">Contact</p>
                    <p className="text-base sm:text-lg">You can reach me out anytime at <span className="underline decoration-yellow-400 underline-offset-8">giyu@tech.dev</span> </p>
                </div>
            </div>
        </div>
    )
}

export default Home