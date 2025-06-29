'use client';
import React, { createContext, useContext, useReducer } from "react";


type User = {
    name: string;
    age: number;
    email: string;
};

type Records = {
    userRecords: User[];
};

type ActionType = { type: 'add', payload: User } | { type: 'reset' } | { type: 'del', payload: number } | { type: 'update'; payload: { index: number, data: User } };

type ContextType = {
    state: Records;
    dispatch: React.Dispatch<ActionType>;
};

const DataContext = createContext<ContextType>({} as ContextType);

export const useData = () => {
    return useContext(DataContext);
}

const is: Records = {
    userRecords: []
};

const reducer = (state: Records, action: ActionType): Records => {

    switch (action.type) {
        case "add": const rcds = [...state.userRecords];
            rcds.push(action.payload);
            return { userRecords: rcds };

        case "del": const myArr = [...state.userRecords];
            myArr.splice(action.payload, 1);
            return { userRecords: myArr };

        case "update": const newArr = [...state.userRecords];
            newArr[action.payload.index] = action.payload.data;
            return { userRecords: newArr };
        case "reset": return is;

        default: return state;
    }
}


const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, is);
    return (
        <DataContext value={{ state, dispatch }}>
            {children}
        </DataContext>
    );
}
export default DataProvider;