import { createSlice } from '@reduxjs/toolkit';
import { status } from '../../component/utils/app.enum';
import { addTaskAsync, updateTaskAsync } from '../thunkStore/tasks.thunk'

const initialState = {
  tasks: [],
  columns: {
    Pending: { tasks: [], columnId: 'Pending', title: 'To Do' },
    InProcess: { tasks: [], columnId: 'In Process', title: 'In Progress' },
    Completed: { tasks: [], columnId: 'Completed', title: 'Done' },
  },
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      const { tasks, columns } = action.payload;
      state.tasks = tasks;
      state.columns = columns;
    },
    addTask: (state, action) => {
      const { columnId, task } = action.payload;
      // state.tasks.push(task);
      console.log("state columns : ", state.columns);

      // if (!state.columns[columnId]) {
      //   state.columns[columnId] = { tasks: [], columnId, title: columnId };
      // }
      // state.columns[columnId].tasks.push(task);
    },
    updateTask: (state, action) => {
      const { taskId, newTask } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === taskId);
      if (taskIndex >= 0) {
        state.tasks[taskIndex] = newTask;
      }
    },
    deleteTask: (state, action) => {
      const { columnId, taskId } = action.payload;
      state.tasks = state.tasks.filter(task => task.id !== taskId);
      state.columns[columnId].tasks = state.columns[columnId].tasks.filter(id => id !== taskId);
    },
    moveTask: (state, action) => {
      const { source, destination, draggableId } = action.payload;
      if (!destination) {
        return
      }

      // Handle dragging within the same column
      if (destination.droppableId === source.droppableId) {
        if (source.index === destination.index) {
          return
        }

        const startColumn = state.columns[source.droppableId];
        const newTaskIds = Array.from(startColumn.tasks);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, startColumn.tasks[source.index]);

        const newColumn = {
          ...startColumn,
          tasks: newTaskIds
        };

        const newState = {
          ...state,
          columns: {
            ...state.columns,
            [source.droppableId]: newColumn
          }
        };

        state.tasks = newState.tasks
        state.columns = newColumn.columns
      } else {
        // Handle dragging between different columns
        const startColumn = state.columns[source.droppableId];
        const finishColumn = state.columns[destination.droppableId];

        const startTaskIds = Array.from(startColumn.tasks);
        const [movedTask] = startTaskIds.splice(source.index, 1);
        const finishTaskIds = Array.from(finishColumn.tasks);
        finishTaskIds.splice(destination.index, 0, movedTask);

        const newStartColumn = {
          ...startColumn,
          tasks: startTaskIds
        };

        const newFinishColumn = {
          ...finishColumn,
          tasks: finishTaskIds
        };

        const newState = {
          ...state,
          columns: {
            ...state.columns,
            [newStartColumn.columnId]: newStartColumn,
            [newFinishColumn.columnId]: newFinishColumn
          }
        };

        // setState(newState);
        state.tasks = newState.tasks;
        state.columns = newState.columns;

        // Update the task status in the database
        // try {
        //   const user = JSON.parse(localStorage.getItem('USER'));
        //   const userId = user['_id']
        //   const body = { status: destination.droppableId, userId, taskId: draggableId }
        //   await updateTaskStatus(body);
        //   toast.success("Task status updated successfully");
        // } catch (error) {
        //   toast.error("Failed to update task status");
        // }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTaskAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        const task = action.payload;
        console.log("Task: ", task); // Here you can handle the task response
        console.log("State: ", state);

        // Add the new task to the tasks object using its _id as the key
        state.tasks[task._id] = task;

        // Ensure the status column exists
        if (!state.columns[task.status]) {
          state.columns[task.status] = { tasks: [], columnId: task.status, title: task.status };
        }

        // Add the task to the corresponding column's tasks array
        state.columns[task.status].tasks.push(task);
      })
      .addCase(addTaskAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        throw Error('Something Went Wrong ')
      }).addCase(updateTaskAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateTaskAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const updatedTask = action.payload.data;
        state.tasks[updatedTask._id] = updatedTask;
console.log("data : ",action.payload);
        // Update the columns if the status has changed
        Object.keys(state.columns).forEach((columnId) => {
          const column = state.columns[columnId];
          const taskIndex = column.tasks.indexOf(updatedTask._id);
          if (taskIndex > -1) {
            column.tasks.splice(taskIndex, 1);
          }
        });
        if (!state.columns[updatedTask.status]) {
          state.columns[updatedTask.status] = { tasks: [], columnId: updatedTask.status, title: updatedTask.status };
        }
        state.columns[updatedTask.status].tasks.push(updatedTask);
      })
      .addCase(updateTaskAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setTasks, addTask, updateTask, deleteTask, moveTask } = tasksSlice.actions;

export default tasksSlice.reducer;
