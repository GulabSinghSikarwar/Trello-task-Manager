import React, { useState, useRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ card, index, onDeleteCard, onEditCard }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: '16px',
    margin: '0 0 8px 0',
    minHeight: '50px',
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
    <Draggable key={card.id} draggableId={card.id} index={index}>
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
              {card.content}
            </h5>
            <div className="flex mt-4 space-x-2">
              <button
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out"
                onClick={editCard}
              >
                Edit
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out"
                 
              >
                Close
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out"
                onClick={deleteCard}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
