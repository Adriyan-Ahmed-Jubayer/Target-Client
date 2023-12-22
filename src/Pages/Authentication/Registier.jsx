import { Link, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs"
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthenticationProvider";

const Register = () => {

    const { CreateAccount, updatingProfile, GoogleLogin } = useContext(AuthContext);

    const track = useNavigate();

    const navigate = () => {
            track('/dashboard');
    }

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        const photo = form.photo.value;
        const name = form.name.value;
        CreateAccount(email, pass)
            .then(res => {
                if (res.user.email) {
                    updatingProfile(res, name, photo)
                    toast.success('Congratulations ! Registration completed Successfully ! 🤩💕')
                    form.reset();
                    navigate();
                }
            })
            .catch(err => {
                if (err.message == "Firebase: Error (auth/email-already-in-use).") {
                    toast.error("The Email already in use")
                    navigate()
                }
                else {
                    toast.error(err.message);
                }
            })

    }

    const handleGGLLoigin = () => {
        GoogleLogin()
            .then(res => {
                if (res) {
                    toast.success('Login successful! You now have access. 🎉😊', {
                        position: "top-center"
                    })
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
                    <img className="w-full" src="https://img.freepik.com/free-photo/3d-render-secure-login-password-illustration_107791-16640.jpg?w=826&t=st=1703168471~exp=1703169071~hmac=c00c59d01084c5cd68890477aa2925a569bf1271b12b6146403f6271e6597c69" alt="" />
                </div>
                <div className="flex-1">
                    <div className="w-9/12 md:w-11/12 lg:w-9/12 xl:w-7/12 mx-auto text-center space-y-3 md:space-y-5 lg:space-y-3">
                        <h4 className="text-sm md:text-base lg:text-lg font-bold text-design">R E G I S T E R</h4>
                        <h1 className="text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px] leading-tight font-bold">Join Our Task <span className="text-[#924AEF]">Network</span></h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium ">Unlock a World of Opportunities – Sign Up for Your JOB CRACKER Account Today! Job Seekers and Employers, Get Started Here.</p>
                    </div>
                    <div className="card-body w-11/12 md:w-full lg:w-10/12 xl:w-9/12 mx-auto">
                        <form onSubmit={handleRegister} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-gray-300">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-gray-300">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="Enter Your Photo URL" className="input input-bordered" required />
                            </div>
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
                                <button className="bg-gradient-to-l from-[#924AEF] to-[#A827E4]  py-3.5 md:py-4 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">CREATE ACCOUNT</button>
                            </div>
                            <h3 className="text-center mt-2">Don't Have an Accout ? <Link className="text-[#924AEF] font-bold" to='/login'>LOGIN </Link> </h3>
                            <div className="flex items-center gap-2 mt-3">
                                <div className="bg-gradient-to-l from-[#924AEF] to-[#A827E4] h-1 w-full"></div>
                                <h5>OR</h5>
                                <div className="bg-gradient-to-l from-[#924AEF] to-[#A827E4] h-1 w-full"></div>
                            </div>
                        </form>
                        <div className="form-control mt-6">
                            <button onClick={handleGGLLoigin} className=" btn-border py-3.5 md:py-4 px-3 md:px-6 lg:px-9 text-design font-bold text-xs md:text-sm  rounded flex items-center justify-center gap-2 text-[#924AEF] border-[#924AEF] border-2 "><BsGoogle className="text-[#924AEF] text-lg"></BsGoogle>GOOGLE</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;