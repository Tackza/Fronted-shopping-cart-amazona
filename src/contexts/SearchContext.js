import React, {useState} from 'react'

export const SearchContext = React.createContext();

export const SearchContextProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const store = {
        searchTerm: [searchTerm, setSearchTerm]
        
    }
    
    return <SearchContext.Provider value={store}>{children}</SearchContext.Provider>
}

