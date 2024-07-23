import React, { useEffect } from 'react'
import { Droppable } from 'react-beautiful-dnd';
import Card from '../TaskCard';
import './columns.css'

function Columns1({ column, cards }) {
    const getListStyle = isDraggingOver => ({
        background: isDraggingOver ? "lightblue" : "#d9dbf1",
        width: "100%"

    });
    useEffect(() => {
        console.log("Recvied : ", column, "CARDS : ", cards);
    }, [])
    return (
        <div className="w-full md:w-1/3 lg:w-1/3 p-2">
      <div className="column-header bg-inProcessHeading text-white p-4">
        Column 1: {column.title}
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
    )
}

export default Columns1
