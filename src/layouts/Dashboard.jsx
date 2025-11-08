import { useNavigate } from "react-router"
import { Outlet } from "react-router"
import { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContrastIcon from '@mui/icons-material/Contrast';
import smallMenu from "../assets/smallMenu.png"

const Dashboard = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    const headerMenu = [
        {
            title : "RESUME",
            page : "/resume"
        },
        {
            title : "PROJECT",
            page : "/project"
        }
    ]

    const footerMenu = [
        {
            title : "Uses",
            page : "/"
        },
        {
            title : "Tech Stack",
            page : "/tech"

        }
    ]

    return (
        <div className="flex flex-col min-h-screen">

            <div>
                <div className="hidden md:flex flex-row justify-between items-center py-5 px-8 bg-slate-950 border-1 border-b-slate-800">
                    <div>
                        <span className="cursor-pointer text-white font-semibold text-3xl" onClick={() => navigate('/')}><span className="text-yellow-400">//</span> Giyu Tomioka</span>
                    </div>
                    <div className="flex flex-row gap-15 font-semibold text-white text-sm antialiased">
                        {headerMenu.map((item, index) => (
                            <button className="cursor-pointer" key={index}
                            onClick={() => navigate(item.page)}
                            >{item.title}</button>
                        ))}
                        <div className="flex flex-row gap-6 justify-center items-center">
                            <a href="https://linkedin.com/in/budiwputra" target="_blank" rel="noopener noreferrer" >
                                <LinkedInIcon sx={{ fontSize: 23, color: 'white' }} />
                            </a>
                            <a href="https://github.com/budiwputra" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon sx={{ fontSize: 20, color: 'white' }}/>
                            </a>
                            <ContrastIcon sx={{ fontSize: 20, color: 'white' }}/>
                        </div>
                    </div>
                </div>
                <div className="md:hidden flex flex-row justify-between items-center py-5 px-8 bg-slate-950">
                    <span className="text-white font-semibold text-2xl" onClick={() => navigate('/')}><span className="text-yellow-400">//</span> Giyu</span>
                    <img className="cursor-pointer" onClick={() => setOpen(!open)} src={smallMenu} alt="Menu" />
                </div>
            </div>
            { open && (
                <div className="absolute sm:hidden top-[74px] right-0 shadow-md z-50 w-full">
                    <ul className="flex flex-col bg-slate-950 divide-y divide-slate-800 border-1 border-b-slate-800 ">
                        <li className="flex items-center py-5 px-8 hover:bg-gray-100 text-white"><button onClick={() => navigate('/resume')}>Resume</button>
                        </li>
                        <li className="flex items-center py-5 px-8 hover:bg-gray-100 text-white"><button onClick={() => navigate('/project')}>Project</button>
                        </li>
                        <li className="flex items-center py-5 px-8 hover:bg-gray-100 text-white"><button onClick={() => navigate('/tech')}>Tech Stack</button>
                        </li>                        
                        <li className="flex items-center py-5 px-8 hover:bg-gray-100 text-white"><button onClick={() => navigate('/uses')}>Uses</button>
                        </li>                                              
                    </ul>
                </div>
            )}

            <div className="flex-1 overflow-auto flex flex-col">
                <Outlet/>
            </div>

            <div className="flex flex-row justify-between px-8 py-5 items-center bg-slate-950 border border-1 border-t-slate-800 ">
                <div>
                    <span className="text-gray-200 text-sm">&copy; 2025 Built with &#129505;  by Giyu Tomioka</span>
                </div>
                <div className="hidden sm:flex flex-row justify-end gap-15">
                    {footerMenu.map((item, index) => (
                        <button key={index}
                        className="text-sm text-gray-200 cursor-pointer"
                        onClick={() => navigate(item.page)}
                        >{item.title}</button>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Dashboard