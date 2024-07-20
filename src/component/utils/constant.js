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
export const initialTaskData = {
    cards: {
      'card-1': { id: 'card-1', content: 'Task 1' },
      'card-2': { id: 'card-2', content: 'Task 2' },
      'card-3': { id: 'card-3', content: 'Task 3' },
      'card-4': { id: 'card-4', content: 'Task 4' },
      'card-5': { id: 'card-5', content: 'Task 5' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'To Do',
        cardIds: ['card-1', 'card-2', 'card-3'],
      },
      'column-2': {
        id: 'column-2',
        title: 'In Progress',
        cardIds: ['card-4'],
      },
      'column-3': {
        id: 'column-3',
        title: 'Done',
        cardIds: ['card-5'],
      },
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
  };
  
