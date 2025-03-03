import React, { createContext, useState } from 'react';

const TablesContext = createContext();

const TablesProvider = ({ children }) => {
    const [tables, setTables] = useState({});

    return (
        <TablesContext.Provider value={{ tables, setTables }}>
            {children}
        </TablesContext.Provider>
    );
};

export { TablesContext, TablesProvider };