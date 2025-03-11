import React, { createContext, useState } from 'react';

const TablesContext = createContext();

const TablesProvider = ({ children }) => {
    const [tables, setTables] = useState({});
    
    const [categoryIdx, setCategoryIdx] = useState(0);
    const [targetIdx, setTargetIdx] = useState(0);
    

    return (
        <TablesContext.Provider value={{ 
            tables, 
            setTables, 
            categoryIdx,
            setCategoryIdx,
            targetIdx,
            setTargetIdx
        }}>
            {children}
        </TablesContext.Provider>
    );
};

export { TablesContext, TablesProvider };