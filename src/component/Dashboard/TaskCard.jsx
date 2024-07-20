import React, { useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ card, index }) => {
  const getItemStyle = (isDragging, draggableStyle) => ({
    // Basic styles to make the items look nicer
    userSelect: "none",
    padding: '16px',
    margin: '0 0 8px 0',
    minHeight: '50px',
    backgroundColor: isDragging ? "lightgreen" : "grey",
    color: 'white',
    // Styles we need to apply on draggables
    ...draggableStyle,
  });

  useEffect(() => {
    console.log("Card Component Rendered: ", card);
  }, [card]);

  return (
    <Draggable key={card.id} draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white p-4 mb-2 shadow-md"
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          {card.content}
        </div>
      )}
    </Draggable>
  );
};

export default Card;
