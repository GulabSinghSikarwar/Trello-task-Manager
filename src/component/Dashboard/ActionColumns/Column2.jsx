import { React, useEffect } from 'react'
import Card from '../TaskCard'
import { Droppable } from 'react-beautiful-dnd';
import './columns.css'
function Column2({ column, cards }) {
    const getListStyle = isDraggingOver => ({
        background: isDraggingOver ? "lightblue" : "#d9dbf1",
        width: "100%"
    });
    useEffect(() => {
        console.log("Recvied : ", column, "CARDS : ", cards);
    }, [])
    return (
        <div className="w-full md:w-1/3  lg:w-1/3 p-2">
            <div className="column-header bg-inProcessHeading text-white p-4 ">Column 1 : {column.title}</div>
            {/* <h2 className="text-xl font-bold mb-4">{column.title}</h2> */}
            <Droppable droppableId={column.id}>
                {
                    (provided, snapshot) => (<div ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                        {...provided.droppableProps}
                        className="bg-statusBg p-4 min-h-[200px]"
                    >
                        {cards.map((card, index) => (
                            <Card key={card.id} card={card} index={index} />
                        ))}
                        {
                            provided.placeholder
                        }
                    </div>)
                }

            </Droppable>
        </div>
    )
}

export default Column2
