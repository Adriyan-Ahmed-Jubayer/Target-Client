import { useForm, Controller } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthenticationProvider';
import { LuListTodo } from "react-icons/lu";
import { VscRefresh } from "react-icons/vsc";
import { GrCompliance } from "react-icons/gr";
import { MdOutlineSubtitles } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { FaHourglassStart } from "react-icons/fa";
import { TbFileDescription } from "react-icons/tb"
import { MdOutlineLowPriority } from "react-icons/md";
import { toast } from 'react-toastify';


const currentDate = new Date();

// Format the date to YYYY-MM-DD
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const day = String(currentDate.getDate()).padStart(2, '0');

// Format the time to HH:mm
const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');

const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;


const Tasks = () => {

    const { User } = useContext(AuthContext);

    const [usersData, setUserData] = useState([])

    const bringData = () => {
        if (User) {
            fetch(`http://localhost:5000/tasks?email=${User?.email}`)
                .then(res => res.json())
                .then(data => setUserData(data))
        }
    }

    useEffect(() => {
       bringData()
    }, [User])


    const email = User?.email;

    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const onSubmit = (data) => {
        const status = 'To-Do'
        const NewTask = { ...data, status, email }
        fetch(`http://localhost:5000/tasks`, {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(NewTask)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast.success('Congratulations ! Your Task Added Successfully.')
                ModalClose()
                bringData()
            } else {
                toast.error('Something is wrong')
            }
        })
    };

    const ModalClose = () => {
        const modal = document.getElementById('addTaskModal');
        if (modal) {
            modal.close();
        }
    }

    return (
        <div className="h-[100svh]">
            <button className="py-3 px-7 lg:py-4 lg:px-9 text-sm md:text-base lg:text-lg bg-gradient-to-l from-[#924AEF] to-[#A827E4] font-bold rounded-md hover:bg-white hover:scale-90 duration-300 text-white"
                onClick={() => document.getElementById('addTaskModal').showModal()}
            >
                Add Task
            </button>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 mt-4 gap-5'>
                <div className=" rounded-xl">
                    <div className='py-4 text-center bg-[#924AEF] rounded-t-xl '>
                        <h2 className='flex items-center gap-3 font-bold justify-center text-white'><LuListTodo className='text-5xl text-white bg-[#E328AF] p-3 rounded-lg' />TO-DO</h2>
                    </div>
                    <div className='p-4 border-2 border-[#924AEF] rounded-b-xl h-96 overflow-y-auto scrollbar-to-do space-y-4'>
                        {
                            usersData.map(data => data.status === 'To-Do' ? <div key={data._id} className='p-3 border-2 border-[#924AEF] rounded-md'>
                                <h1 className='text-lg flex items-center gap-3 font-semibold'><MdOutlineSubtitles className='text-xl' />{data.title}</h1>
                                <div className='flex items-center justify-between'>
                                    <p className='flex items-center gap-3 font-semibold'><MdOutlineDateRange />{data.deadline}</p>
                                    <p className='flex items-center gap-3 font-semibold'>{data?.startDate ? <FaHourglassStart /> : <></>}{data?.startDate}</p>
                                </div>
                                <p className='flex items-center gap-3 font-semibold'>{data?.priority ? <MdOutlineLowPriority /> : <></>} Priority : {data?.priority}</p>
                                <p className='flex items-start gap-3 font-medium'>{data?.description ? <TbFileDescription className='text-3xl' /> : <></>}{data?.description}</p>
                            </div> : <></>)
                        }
                    </div>
                </div>
                <div className=" rounded-xl">
                    <div className='py-4 text-center bg-[#5ECFFF] rounded-t-xl '>
                        <h2 className='flex items-center gap-3 font-bold justify-center text-white'><VscRefresh className='text-5xl text-white bg-[#924AEF] p-3 rounded-lg' />ON GOING</h2>
                    </div>
                    <div className='p-4 border-2 border-[#924AEF] rounded-b-xl h-96 overflow-y-auto scrollbar-to-do space-y-4'>
                        {
                            usersData.map(data => data.status === 'Ongoing' ? <div key={data._id} className='p-3 border-2 border-[#924AEF] rounded-md'>
                                <h1 className='text-lg flex items-center gap-3 font-semibold'><MdOutlineSubtitles className='text-xl' />{data.title}</h1>
                                <div className='flex items-center justify-between'>
                                    <p className='flex items-center gap-3 font-semibold'><MdOutlineDateRange />{data.deadline}</p>
                                    <p className='flex items-center gap-3 font-semibold'>{data?.startDate ? <FaHourglassStart /> : <></>}{data?.startDate}</p>
                                </div>
                                <p className='flex items-center gap-3 font-semibold'>{data?.priority ? <MdOutlineLowPriority /> : <></>} Priority : {data?.priority}</p>
                                <p className='flex items-start gap-3 font-medium'>{data?.description ? <TbFileDescription className='text-3xl' /> : <></>}{data?.description}</p>
                            </div> : <></>)
                        }
                    </div>
                </div>
                <div className=" rounded-xl">
                    <div className='py-4 text-center bg-[#E328AF] rounded-t-xl '>
                        <h2 className='flex items-center gap-3 font-bold justify-center text-white'><GrCompliance className='text-5xl text-white bg-[#5ECFFF] p-3 rounded-lg' />COMPLETED</h2>
                    </div>
                    <div className='p-4 border-2 border-[#924AEF] rounded-b-xl h-96 overflow-y-auto scrollbar-to-do space-y-4'>
                        {
                            usersData.map(data => data.status === 'Completed' ? <div key={data._id} className='p-3 border-2 border-[#924AEF] rounded-md'>
                                <h1 className='text-lg flex items-center gap-3 font-semibold'><MdOutlineSubtitles className='text-xl' />{data.title}</h1>
                                <div className='flex items-center justify-between'>
                                    <p className='flex items-center gap-3 font-semibold'><MdOutlineDateRange />{data.deadline}</p>
                                    <p className='flex items-center gap-3 font-semibold'>{data?.startDate ? <FaHourglassStart /> : <></>}{data?.startDate}</p>
                                </div>
                                <p className='flex items-center gap-3 font-semibold'>{data?.priority ? <MdOutlineLowPriority /> : <></>} Priority : {data?.priority}</p>
                                <p className='flex items-start gap-3 font-medium'>{data?.description ? <TbFileDescription className='text-3xl' /> : <></>}{data?.description}</p>
                            </div> : <></>)
                        }
                    </div>
                </div>
            </div>
            {/* modal for adding task */}
            <dialog id="addTaskModal" className="modal modal-bottom sm:modal-middle bg-opacity-100 backdrop-blur-lg">
                <div className="modal-box  bg-white bg-opacity-90 backdrop-blur-lg">
                    <h3 className="font-bold text-4xl text-center">Add New Task</h3>
                    <div className="modal-action">
                        <form
                            method="dialog"
                            className='w-full'
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="w-full form-control mb-5">
                                <label className="label">
                                    <span className="text-lg text-black duration-300 font-semibold">TITLE</span>
                                </label>
                                <input
                                    {...register("title", { required: true })}
                                    type="text"
                                    name="title"
                                    className="input input-bordered  w-full mb-3 bg-white duration-300"
                                />
                                {errors.title && <span className='text-red-600'>Title is required</span>}
                                <div className="flex items-center justify-between w-[97%] gap-4">
                                    <div className='w-1/2'>
                                        <label className="label">
                                            <span className="text-lg text-black  duration-300 font-semibold">START DATE</span>
                                        </label>
                                        <input
                                            {...register("startDate", { required: true })}
                                            type="datetime-local"
                                            name="startDate"
                                            className="input input-bordered  w-full mb-3 bg-white duration-300"
                                        />
                                        {errors.startDate && <span className='text-red-600'>Start Date is required</span>}
                                    </div>
                                    <div className='w-1/2'>
                                        <label className="label">
                                            <span className="text-lg text-black  duration-300 font-semibold">DEADLINE</span>
                                        </label>
                                        <input
                                            {...register("deadline", { required: true })}
                                            type="datetime-local"
                                            name="deadline"
                                            className="input input-bordered  w-full mb-3 bg-white duration-300"
                                        />
                                        {errors.deadline && <span className='text-red-600'>Deadline is required</span>}
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <label className="label">
                                        <span className="text-lg text-black duration-300 font-semibold">PRIORITY</span>
                                    </label>
                                    <label className="rounded-lg">
                                        <Controller
                                            name="priority"
                                            control={control}
                                            rules={{ required: "Priority is required" }}
                                            render={({ field }) => (
                                                <select
                                                    {...field}
                                                    className="input input-bordered  w-full bg-white dark:text-gray-400 duration-300"
                                                >
                                                    <option value="" disabled selected>
                                                        Select Priority
                                                    </option>
                                                    <option value="Low">Low</option>
                                                    <option value="Moderate">Moderate</option>
                                                    <option value="High">High</option>
                                                </select>
                                            )}
                                        />
                                    </label>
                                    {errors.priority && (
                                        <span className='text-red-600'>{errors.priority.message}</span>
                                    )}
                                </div>


                                <div className="form-control mb-5">
                                    <label className="label">
                                        <span className="text-lg text-black duration-300 font-semibold">DESCRIPTION</span>
                                    </label>
                                    <label className="rounded-lg">
                                        <textarea
                                            {...register("description", { required: true })}
                                            name="description"
                                            className="input input-bordered  w-full h-40 bg-white duration-300"
                                        />
                                        {errors.description && <span className='text-red-600'>Description is required</span>}
                                    </label>
                                </div>
                                <div className="flex items-center justify-between">
                                    <button type="submit" className="py-3 px-7 lg:py-4 lg:px-9 text-sm md:text-base lg:text-lg bg-gradient-to-l from-[#924AEF] to-[#A827E4] font-bold rounded-md hover:bg-white hover:scale-90 duration-300 text-white">
                                        Add Task
                                    </button>
                                    <button
                                        type="button"
                                        className="py-3 px-7 lg:py-4 lg:px-9 text-sm md:text-base lg:text-lg border-[#924AEF] border-2 font-bold rounded-md hover:bg-white hover:scale-90 duration-300 text-[#924AEF]"
                                        onClick={() => ModalClose()}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Tasks;