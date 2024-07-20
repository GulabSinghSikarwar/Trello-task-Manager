export const url = 'http://localhost:8000'

export const tableColumn = {
  hostedZoneRecords: {
    RECORD_NAME: 'Record Name',
    TYPE: 'Type',
    ROUTING_POLICY: 'Routing Policy',
    DIFFERENTIATOR: 'Differentiator',
    ALIAS: 'Alias',
    VALUE_ROUTE: 'Value/Route Traffic to',
    TTL_SECONDS: 'TTL in seconds',
    HEALTH_CHECK_ID: 'Health Check ID',
    EVALUATE_TARGET_HEALTH: 'Evaluate Target Health',
    RECORD_ID: 'Record ID',
    ACTION: 'Action'
  },

}
export const errorCodes = {
  Unauthorized: 401
}
// export const initialTaskData = {
//     cards: {
//       'card-1': { id: 'card-1', content: 'Task 1' },
//       'card-2': { id: 'card-2', content: 'Task 2' },
//       'card-3': { id: 'card-3', content: 'Task 3' },
//       'card-4': { id: 'card-4', content: 'Task 4' },
//       'card-5': { id: 'card-5', content: 'Task 5' },
//     },
//     columns: {
//       'column-1': {
//         id: 'column-1',
//         title: 'To Do',
//         cardIds: ['card-1', 'card-2', 'card-3'],
//       },
//       'column-2': {
//         id: 'column-2',
//         title: 'In Progress',
//         cardIds: ['card-4'],
//       },
//       'column-3': {
//         id: 'column-3',
//         title: 'Done',
//         cardIds: ['card-5'],
//       },
//     },
//     columnOrder: ['column-1', 'column-2', 'column-3'],
//   };

export const initialTaskData = {
  tasks: [
    {
      _id: "669b9320f254c3ea78f73190",
      title: "Learn Mongoose2 ",
      content: "Learn how to use Mongoose to interact with MongoDB",
      status: "Pending",
      userId: "6698b26fcad0e5d3eac85894",
      createdAt: "2024-07-20T10:36:16.707Z",
      updatedAt: "2024-07-20T10:36:16.707Z",
      __v: 0
    },
    // ...
  ],
  status: [
    {
      tasks: [
        {
          _id: "669bc38d37fdb56c0037f087",
          title: "Learn Mongoose 4  ",
          content: "Learn how to use Mongoose to interact with MongoDB",
          status: "In Process",
          userId: "6698b26fcad0e5d3eac85894",
          createdAt: "2024-07-20T14:02:53.886Z",
          updatedAt: "2024-07-20T14:02:53.886Z",
          __v: 0
        },
        {
          _id: "669bc39637fdb56c0037f08a",
          title: "Learn DB  4  ",
          content: "Learn how to use Mongoose to interact with MongoDB",
          status: "In Process",
          userId: "6698b26fcad0e5d3eac85894",
          createdAt: "2024-07-20T14:03:02.031Z",
          updatedAt: "2024-07-20T14:03:02.031Z",
          __v: 0
        }
      ],
      columnId: "In Process",
      title: "In Progress"
    },
    {
      tasks: [
        {
          _id: "669bc3a837fdb56c0037f08d",
          title: "Learn NSNS 4  ",
          content: "Learn how to use Mongoose to interact with MongoDB",
          status: "Completed",
          userId: "6698b26fcad0e5d3eac85894",
          createdAt: "2024-07-20T14:03:20.523Z",
          updatedAt: "2024-07-20T14:03:20.523Z",
          __v: 0
        },
        {
          _id: "669bc3ad37fdb56c0037f090",
          title: "Learn ENG 4  ",
          content: "Learn how to use Mongoose to interact with MongoDB",
          status: "Completed",
          userId: "6698b26fcad0e5d3eac85894",
          createdAt: "2024-07-20T14:03:25.970Z",
          updatedAt: "2024-07-20T14:03:25.970Z",
          __v: 0
        },
        {
          _id: "669bf4659e44bcbfaf93b3fe",
          title: "Learn ENG 4  ",
          content: "Learn how to use Mongoose to interact with MongoDB",
          status: "Completed",
          userId: "6698b26fcad0e5d3eac85894",
          createdAt: "2024-07-20T17:31:17.398Z",
          updatedAt: "2024-07-20T17:31:17.399Z",
          __v: 0
        }
      ],
      columnId: "Completed",
      title: "Done"
    },
    {
      tasks: [
        {
          _id: "669b9320f254c3ea78f73190",
          title: "Learn Mongoose2 ",
          content: "Learn how to use Mongoose to interact with MongoDB",
          status: "Pending",
          userId: "6698b26fcad0e5d3eac85894",
          createdAt: "2024-07-20T10:36:16.707Z",
          updatedAt: "2024-07-20T10:36:16.707Z",
          __v: 0
        },
        // ...
      ],
      columnId: "Pending",
      title: "To Do"
    }
  ]
};