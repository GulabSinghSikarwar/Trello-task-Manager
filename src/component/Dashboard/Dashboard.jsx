import React from 'react'
import { initialTaskData } from '../utils/constant'
import { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Columns1 from './ActionColumns/Columns1';
import Column2 from './ActionColumns/Column2';
import Column3 from './ActionColumns/Column3';

function Dashboard() {
  const [state, setState] = useState(initialTaskData);

  const onDragEnd = (result) => {
    console.log("Result : ",result);
    /**
       * {
    "draggableId": "card-2",
    "source": {
    " droppableId": "column-1",
      "index": 1
    },
    " destination": {
    "droppableId": "column-2",
      "index": 0
    }
  }

     */

    const { source, destination, draggableId } = result;
    //  If no desitnation ,then do nothing  
    if (!destination) {
      return
    }

    if (destination.droppableId == source.droppableId) {
      // Dropeed Dropped in the same columns 
      if (source.index == destination.index) {
        // if position are same then do nothing 
        return
      }
      // Now Extract the original Columns 

      const startColumns = state.columns[source.droppableId]
      const finishColumns = state.columns[source.droppableId];
      if (startColumns == finishColumns) {
        // create  a new modified cards columns 
        const newCardIds = Array.from(startColumns.cardIds)
        newCardIds.splice(source.index, 1)
        newCardIds.splice(destination.index, 0, draggableId)

        // Now lets create the new Columns 
        const newColumns = {
          ...startColumns,
          cardIds: newCardIds
        }

        const newState = {
          ...state,
          columns: {
            ...state.columns,
            [source.droppableId]: newColumns
          }
        }

        // Now Update the state 
        setState(newState);


      }

    }
    // LOGIC FOR SAME COUMNS END HERE 


    // NOW lets Handle For Different Columns 
    const startColumns = state.columns[source.droppableId];
    const finishColumns = state.columns[destination.droppableId];

    const newStartCardIds = Array.from(startColumns.cardIds);
    const newFinishCardIds = Array.from(finishColumns.cardIds);

    newStartCardIds.splice(source.index, 1);
    newFinishCardIds.splice(destination.index, 0, draggableId)

    const newStartColumn = {
      ...startColumns,
      cardIds: newStartCardIds
    }

    const newFinishColumns = {
      ...finishColumns,
      cardIds: newFinishCardIds
    }

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumns.id]: newFinishColumns
      }
    }


    setState(newState);

  }

  const getCards = (column) => {
    console.log("column : ", column);
    const cardsInfo = []
    column.cardIds.forEach((cardId) => {
      const card = state.cards[cardId];
      if (card) {
        cardsInfo.push(card);
      }
    })
    console.log("CARDS : ", cardsInfo);
    return cardsInfo
  }
  return (
    <DragDropContext onDragEnd={onDragEnd} >
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap lg:flex-nowrap">

          <Columns1 column={state.columns['column-1']} cards={getCards(state.columns['column-1'])} />
          <Column2 column={state.columns['column-2']} cards={getCards(state.columns['column-2'])} />
          <Column3 column={state.columns['column-3']} cards={getCards(state.columns['column-3'])} />

        </div>
      </div>
    </DragDropContext>
  )
}

export default Dashboard