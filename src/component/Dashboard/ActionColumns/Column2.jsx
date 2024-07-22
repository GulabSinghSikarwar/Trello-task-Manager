import React, { useEffect } from 'react';
import Card from '../TaskCard';
import { Droppable } from 'react-beautiful-dnd';
import './columns.css';

function Column2({ column, cards }) {
  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "#d9dbf1",
    width: "100%",
    minHeight: 510, // Add a minimum height to the Droppable component
  });

  useEffect(() => {
    console.log("col id : ", column.columnId);
    console.log("Received: ", column, "CARDS: ", cards);
  }, [column, cards]);

  return (
    <div className="w-full md:w-1/3 lg:w-1/3 p-2">
      <div className="column-header bg-inProcessHeading text-white p-4">
        Column 2: {column.title}
      </div>
      <Droppable droppableId={column.columnId}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
            className="bg-statusBg column-body p-4 min-h-[200px]"
          >
            {cards && cards.length ? (
              cards.map((card, index) => (
                <Card key={card._id} card={card} index={index} />
              ))
            ) : (
              <div className="text-center p-4" key={"sss"} index={0}>No tasks in this column</div>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Column2;