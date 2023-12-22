import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineHome } from "react-icons/ai";
import { AuthContext } from "../../Context/AuthenticationProvider";
import { GrTasks } from "react-icons/gr";

const Dashboard = () => {
    const { User, LogOutAccount } = useContext(AuthContext);
    return (
        <section className="lg:container mx-auto">
            <div className="xl:hidden py-4 px-5">
                <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden"><RiMenu4Line /></label>
            </div>
            <div className="lg:drawer-open lg:flex lg:flex-row-reverse gap-8  max-w-[1920px] mx-auto mt-10">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <main className="max-w-[1920px] w-full mx-auto space-y-16 md:space-y-24 lg:space-y-32 xl:space-y-48 lg:flex-[3]">
                    {/* Page content here */}
                    <Outlet></Outlet>
                </main>
                <div className="drawer-side rounded-lg">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <nav className="p-4 w-80 min-h-full bg-base-200 roboto space-y-8">
                        <div className="text-center space-y-6 mt-6">
                            <div className="w-24 h-24 mx-auto">
                                <img className="w-full h-full rounded-full" src={User?.photoURL} alt="Profile" />
                            </div>
                            <div>
                                <h1 className="text-xl roboto font-bold">{User?.displayName}</h1>
                            </div>
                        </div>
                        {/* Sidebar content here */}
                        <div className="space-y-4">
                            <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/dashboard" ><GrTasks className="text-xl"></GrTasks> MY TASKS</NavLink>                             
                            
                            <hr />
                            <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/" ><AiOutlineHome className="text-xl"></AiOutlineHome>HOME</NavLink>
                        </div>
                    </nav>

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default Dashboard;