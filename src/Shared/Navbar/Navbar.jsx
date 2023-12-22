import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthenticationProvider";
import { IoHomeOutline } from "react-icons/io5";
import { VscDashboard } from "react-icons/vsc";

const Navbar = () => {
    const { User, LogOutAccount } = useContext(AuthContext)
    return (
        <>
            <div className="navbar py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-square bg-gradient-to-l from-[#924AEF] to-[#A827E4] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-lg w-52 space-y-2">
                            <li>
                                <NavLink className={({ isActive }) => isActive ? `bg-[#F6EEFF]  py-2 md:py-2.5 px-3 md:px-5 lg:px-5 font-bold text-xs md:text-sm  rounded  text-[#924AEF] flex items-center gap-4` : `bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded flex items-center gap-4 px-5`} to='/' ><IoHomeOutline className="text-xl" />HOME</NavLink>
                            </li>
                            {
                                User ? <li>
                                <NavLink className={({ isActive }) => isActive ? `bg-[#F6EEFF]  py-2 md:py-2.5 px-3 md:px-5 lg:px-5 font-bold text-xs md:text-sm  rounded  text-[#924AEF] flex items-center gap-4` : `bg-transparentS py-2 px-5 font-bold text-xs md:text-sm rounded flex items-center gap-4`} to='/dashboard' ><VscDashboard className="text-xl" />Dashboard</NavLink>
                            </li> :
                            <></>
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn text-4xl font-bold bg-gradient-to-l from-[#924AEF] to-[#A827E4] text-white">T</a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                    {
                        User ? <>
                                  <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-square avatar">
                            <div className="w-10 rounded-lg">
                                <img alt="Tailwind CSS Navbar component" src={User.photoURL} />
                            </div>
                        </div>
                        <nav tabIndex={0} className="menu menu-sm  mt-3 z-[1] dropdown-content p-2 shadow bg-base-100 rounded-s w-52 space-y-3">
                            <img className="w-10 rounded-lg mx-auto" src={User.photoURL} alt="" />
                            <h1 className="text-center font-bold">{User.displayName}</h1>
                            <button onClick={LogOutAccount} className="py-3 px-5 lg:py-3 lg:px-7 text-xs md:text-sm lg:text-base bg-gradient-to-l from-[#924AEF] to-[#A827E4] font-bold rounded-md hover:bg-white hover:scale-90 duration-300 text-white" to='/login w-full text-center'>
                                LOGOUT
                            </button>
                        </nav>
                    </div>
                    </> : 
                    <NavLink className="py-3 px-5 lg:py-4 lg:px-7 text-xs md:text-sm lg:text-base bg-gradient-to-l from-[#924AEF] to-[#A827E4] font-bold rounded-md hover:bg-white hover:scale-90 duration-300 text-white" to='/login'>
                        LOGIN
                    </NavLink>
                    }
                    
                </div>
            </div>
        </>
    );
};

export default Navbar;