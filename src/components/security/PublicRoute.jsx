import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export const PublicRoute = ({children}) => {
  const user = useContext(UserContext);
  if(user != null){
    return 
  }
}
