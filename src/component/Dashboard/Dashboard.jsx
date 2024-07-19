import React from 'react'
import { initialTaskData } from '../utils/constant'
import { useState } from 'react'
import {DragDropContext,Draggable,Droppable} from 'react-beautiful-dnd'

function Dashboard() {
  const [state, setState] = useState(initialData);
  
  return (
    <div class="container mx-auto p-4">
      <div class="flex flex-wrap lg:flex-nowrap">
        <div class="w-full lg:w-1/3 p-2">
          <div class="bg-blue-500 p-4 text-white">Column 1</div>
        </div>
        <div class="w-full lg:w-1/3 p-2">
          <div class="bg-green-500 p-4 text-white">Column 2</div>
        </div>
        <div class="w-full lg:w-1/3 p-2">
          <div class="bg-red-500 p-4 text-white">Column 3</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard