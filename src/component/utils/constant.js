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
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Column 1',
            cardIds: ['card-1', 'card-2']
        },
        'column-2': {
            id: 'column-2',
            title: 'Column 2',
            cardIds: []
        },
        'column-3': {
            id: 'column-3',
            title: 'Column 3',
            cardIds: []
        }
    },
    cards: {
        'card-1': { id: 'card-1', content: 'Card 1' },
        'card-2': { id: 'card-2', content: 'Card 2' }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
};
