import React, { useState } from 'react';
import TaskForm from './TaskForm';
import { ToastContainer, toast } from 'react-toastify';
import { IoMdAdd } from "react-icons/io";


const TaskCreationModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = ({ success, error, }) => {
        if (success) {
            toast.success("Created A Task !!")
        }
        if (error) {
            toast.error("Something Went Wrong")
        }
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='container mx-auto p-4'>
                <div className='p-2'>
                    <button
                        onClick={toggleModal}
                        className="flex items-center block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                    >
                        <IoMdAdd /><span className='px-2'>Create Task</span>
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

                            <TaskForm toggleModal={toggleModal} />
                        </div>
                    </div>

                </div>
            )}
        </>
    );
};

export default TaskCreationModal;
