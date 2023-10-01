import { GeneralAppContext } from "../contexts/GeneralAppContext";
import { useContext } from 'react'

export function useGeneralAppContext(){
    return useContext(GeneralAppContext)
}