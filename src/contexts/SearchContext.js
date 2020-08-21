import React, {useState} from 'react'

export const SearchContext = React.createContext();

export const SearchContextProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('');
    let test = false
    const store = {
        test,
        searchTerm: [searchTerm, setSearchTerm],
        
    }
    
    return <SearchContext.Provider value={store}>{children}</SearchContext.Provider>
}

