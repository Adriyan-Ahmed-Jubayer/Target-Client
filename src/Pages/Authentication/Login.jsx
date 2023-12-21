import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs"
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthenticationProvider";
const Login = () => {
    const {LoginAccount, GoogleLogin} = useContext(AuthContext);

    const Location = useLocation();

    const navigation = useNavigate();

    const navigate = () => {
        console.log(Location.state);
         navigation(Location?.state ? Location.state : "/" )
    }


    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        LoginAccount(email, pass)
            .then(res => {
                if (res) {
                    toast.success('Login successful! You now have access. 🎉😊', {
                        position: "top-center"
                    })
                    form.reset();
                    navigate();
                }
            })
            .catch(err => {
                if (err.message == 'Firebase: Error (auth/network-request-failed).') {
                    toast.error('Your Network Connection is Too Slow!')
                }
                else {
                    toast.error(err.message, {
                        position: "top-center"
                    })

                }
            })
    }
    const handleGGLLogin = () => {
        GoogleLogin()
            .then(res => {
                if (res) {
                    toast.success('Login successful! You now have access. 🎉😊', {
                        position: "top-center"
                    })
                    navigate();
                }
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-center min-h-screen">
                <div className="flex-1">
                    <img className="w-full" src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?w=826&t=st=1703167353~exp=1703167953~hmac=632cd441e9bff794a1cc3bb51d56a8c49ae08617af605ef8fa56018646b12b0e" alt="" />
                </div>
                <div className="flex-1">
                    <div className="w-9/12 md:w-11/12 lg:w-9/12 xl:w-7/12 mx-auto text-center space-y-3 lg:space-y-6">
                        <h4 className="text-sm md:text-base lg:text-lg font-bold text-design">L O G I N</h4>
                        <h1 className="text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px] font-bold">Welcome Back!</h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium ">Log in to Your JOB CRACKER Account to Access Your Job Seeker or Employer Dashboard. Your Next Career Move Awaits!</p>
                    </div>
                    <div className="card-body w-11/12 md:w-full lg:w-10/12 xl:w-9/12 mx-auto">
                        <form onSubmit={handleLogin} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-gray-300">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter Your E-mail" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-gray-300">Password</span>
                                </label>
                                <input type="password" name="pass" placeholder="Enter Your Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-gradient-to-l from-[#924AEF] to-[#A827E4]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">LOGIN</button>
                            </div>
                            <h3 className="text-center mt-2">Don't Have an Accout ? <Link className="text-design font-bold text-[#924AEF]" to='/register'>REGISTER </Link> </h3>
                            <div className="flex items-center gap-2 mt-3">
                                <div className="bg-gradient-to-l from-[#924AEF] to-[#A827E4] h-1 w-full"></div>
                                <h5>OR</h5>
                                <div className="bg-gradient-to-l from-[#924AEF] to-[#A827E4] h-1 w-full"></div>
                            </div>
                        </form>
                        <div className="form-control mt-6">
                            <button onClick={handleGGLLogin} className=" btn-border py-2 md:py-3 px-3 md:px-6 lg:px-9 text-design font-bold text-xs md:text-sm  rounded flex items-center justify-center gap-2 text-[#924AEF] border-[#924AEF] border-2"><BsGoogle className="text-[#924AEF] text-lg"></BsGoogle>GOOGLE</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;