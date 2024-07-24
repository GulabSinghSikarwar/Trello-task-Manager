
// src/components/Card.js
import { MdDeleteOutline } from "react-icons/md";
import TaskEditModal from './Utils/EditTask.Modal';
import React, { useState, useRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { CiEdit } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import { deleteTask } from "../../service/task.service";
import { deleteTask as deleteTaskAction } from '../../store/slices/tasks.slice'
import { useDispatch } from "react-redux";
import MoreIcon from '../../icons/moreIcon.svg'
import ButtonOptions from "./Utils/ButtonOptions";
const Card = ({ card, index, onDeleteCard, onEditCard }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const dispatch = useDispatch()

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: '16px',
    margin: '0 0 8px 0',
    backgroundColor: isDragging ? "lightgreen" : "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    color: '#333',
    ...draggableStyle,
  });

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const deleteCard = async () => {
    try {
      const response = await deleteTask(card);
      dispatch(deleteTaskAction(response))
      toast.success("Deleted A Task !!")

    } catch (error) {
      toast.error("Something Went Wrong")
    }
  };

  const editCard = () => {
    onEditCard(card.id);
    setIsDropdownOpen(false); // Close dropdown after action
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (result) => {
    if (result) {

      if (result.success) {
        toast.success(" Task Updated  !!")
      }
      if (result.error) {
        toast.error("Something Went Wrong")
      }
    }
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  return (
    <>
      <Draggable key={card._id} draggableId={card._id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex flex-col w-auto  pb-10 px-2 text-left" >
              <div className="flex justify-between items-center w-full  pr-2">
                <h5 className="mb-1   text-[14px]  font-medium dark:text-white capitalize bg-titleBlueBg rounded-full px-4 py-2  text-pendingBlueText ">
                  {card.title}
                </h5>
                <div>
                  <ButtonOptions button={MoreIcon} />
                </div>
              </div>

              <div>
                <p className="text-[14px]  font-medium dark:">
                  {
                    card.content
                  }
                </p>
              </div>

              <div className="button-container flex mt-4 space-x-2">
                <TaskEditModal task={card} isOpen={isOpen} toggleModal={toggleModal} />


                <button
                  className="common-button w-full-sm text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-800"
                  onClick={deleteCard}
                >
                  <MdDeleteOutline size={20} /> <span className='px-2'>Delete</span>
                </button>
                <button
                  className="common-button w-full-sm text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                  onClick={toggleModal}
                >
                  <CiEdit size={20} /><span className='px-2'>Edit </span>
                </button>
              </div>
            </div>
            <ToastContainer containerId={"TaskCard"}
              position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false}
              pauseOnFocusLoss draggable pauseOnHover theme="dark" />
          </div>
        )}
      </Draggable>
    </>
  );
};

export default Card;
