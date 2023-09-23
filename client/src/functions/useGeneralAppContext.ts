import { GeneralAppContext } from "../contexts/generalAppContext";
import { useContext } from 'react'

export function useGeneralAppContext(){
    return useContext(GeneralAppContext)
}