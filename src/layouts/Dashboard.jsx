import { useNavigate } from "react-router"
import { Outlet } from "react-router"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContrastIcon from '@mui/icons-material/Contrast';

const Dashboard = () => {
    const navigate = useNavigate()

    const headerMenu = [
        {
            title : "RESUME",
            page : "/resume"
        },
        {
            title : "CONTACT",
            page : "/contact"
        }
    ]

    const footerMenu = [
        {
            title : "Uses",
            page : "/uses"
        },
        {
            title : "Tech Stack",
            page : "/tech"

        }
    ]

    return (
        <div className="flex flex-col min-h-screen bg-white border-1">

            <div className="flex flex-row justify-between items-center py-5 px-8 bg-slate-950 border border-b-slate-800 ">
                <div>
                    <span className="text-white font-semibold text-3xl" onClick={() => navigate('/')}><span className="text-yellow-400">//</span> Giyu Tomioka</span>
                </div>
                <div className="flex flex-row gap-15 font-semibold text-white text-sm antialiased ">
                    {headerMenu.map((item, index) => (
                        <button key={index}
                        onClick={() => navigate(item.page)}
                        >{item.title}</button>
                    ))}
                    <div className="flex flex-row gap-6 justify-center items-center">
                    <LinkedInIcon sx={{ fontSize: 23, color: 'white' }} />
                    <GitHubIcon sx={{ fontSize: 20, color: 'white' }}/>
                    <ContrastIcon sx={{ fontSize: 20, color: 'white' }}/>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-auto flex flex-col">
                <Outlet/>
            </div>

            <div className="flex flex-row justify-between px-8 py-5 items-center bg-slate-950 border border-t-slate-800">
                <div>
                    <span className="text-white text-sm">&copy; 2025 Built with &#129505;  by Giyu Tomioka</span>
                </div>
                <div className="flex flex-row justify-end gap-15">
                    {footerMenu.map((item, index) => (
                        <button key={index}
                        className="text-sm text-stone-200"
                        onClick={() => navigate(item.page)}
                        >{item.title}</button>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Dashboard