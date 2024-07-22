// src/components/Card.js
import { MdDeleteOutline } from "react-icons/md";
import TaskEditModal from './Utils/EditTask.Modal';
import React, { useState, useRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ card, index, onDeleteCard, onEditCard }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  const deleteCard = () => {
    onDeleteCard(card.id);
    setIsDropdownOpen(false); // Close dropdown after action
  };

  const editCard = () => {
    onEditCard(card.id);
    setIsDropdownOpen(false); // Close dropdown after action
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
            <div className="flex flex-col items-center pb-10">
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {card.title}
              </h5>
              <div className="button-container flex mt-4 space-x-2">
                <TaskEditModal task={card} />
                <button
                  className="common-button text-gray-700 hover:text-white border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-500 dark:focus:ring-gray-800"
                >
                  Close
                </button>
                <button
                  className="common-button text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-800"
                  onClick={deleteCard}
                >
                  <MdDeleteOutline size={20} /> <span className='px-2'>Delete</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default Card;
