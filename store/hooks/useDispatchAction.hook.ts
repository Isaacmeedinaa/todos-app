import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

const useDispatchAction = () => useDispatch<AppDispatch>();
export default useDispatchAction;
