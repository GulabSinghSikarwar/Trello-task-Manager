import React, { useState } from 'react';

import { CiEdit } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import EditTaskForm from './EditTaskForm';


const TaskEditModal = ({ task }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = (result) => {
        if (result) {

            if (result.success) {
                toast.success("Created A Task !!")
            }
            if (result.error) {
                toast.error("Something Went Wrong")
            }
        }
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className=''>
                <div className='button-container '>
                    {/* <button
                        className=" text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                        onClick={toggleModal}
                        type="button"
                    >
                        <CiEdit size={25} /><span className='px-2'>Create Task</span>
                    </button> */}
                    <button
                        onClick={toggleModal}
                        className="common-button   text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                    ><CiEdit size={25} />
                        <span className='px-2'
                        >Edit </span>
                    </button>
                </div>
            </div>
            <ToastContainer
                position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false}
                pauseOnFocusLoss draggable pauseOnHover theme="dark" />
            {isOpen && (
                <div
                    id="task-creation-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                >
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                            <EditTaskForm toggleModal={toggleModal} task={task} />
                        </div>
                    </div>

                </div>
            )}
        </>
    );
};

export default TaskEditModal;
