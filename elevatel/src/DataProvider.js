import React from 'react'

export const DataContext = React.createContext();

function DataProvider(){
    return <DataContext.Provider value="Hello World"></DataContext.Provider>
}

function useData(){
    const context = React.useContext(DataContext);
    if(!context){
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
}

export {DataProvider, useData};