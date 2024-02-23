import { useSelector } from "react-redux";
import { AppState } from "../store";

export const useRegState = () =>{
    const selector = useSelector((globalState: AppState) => globalState.reg)
    return selector
}



