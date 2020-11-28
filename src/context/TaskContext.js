import React from 'react';

export const TaskContext = React.createContext({
    tasks: [],
    addItem: (item) => {},
    removeItem: (item) => {},
    updateItem: (item) => {},
    toggleNewTask:() =>{}
});