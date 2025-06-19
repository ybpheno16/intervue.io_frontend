export const mockSocket = {
    emit: (event, data) => console.log('Socket emit:', event, data),
    on: (event, callback) => console.log('Socket on:', event),
    off: (event, callback) => console.log('Socket off:', event),
    id: 'mock-socket-id'
};
