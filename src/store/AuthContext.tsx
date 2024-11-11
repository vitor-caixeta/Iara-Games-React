import { createContext, useState } from "react";

interface AuthContextProps {
    isAuthenticated : boolean, 
    setIsAuthenticatedHandler : ()=> void
}

export const AuthContext = createContext({} as AuthContextProps)


export const AuthContextProvider : React.FC<{children:JSX.Element}> = (props) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function setIsAuthenticatedHandler(){
      setIsAuthenticated(!isAuthenticated)
  }


  return (
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticatedHandler}}>{props.children}</AuthContext.Provider>
  )
}
