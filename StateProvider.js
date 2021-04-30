import React,{createContext,useContext,useReducer} from 'react'

//preparing the data layer 
export const StateContext = createContext();

//wrap our component nd provide the provider
export const StateProvider = ({reducer,initailState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initailState)}>
        {children}
    </StateContext.Provider>
)

//this is how can we use  it inside of component
 export const useStateValue = () =>useContext(StateContext);
