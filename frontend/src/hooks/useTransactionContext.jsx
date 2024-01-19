import { TransactionContext } from "../contexts/TransactionContext";
import { useContext } from "react";

export const useTransactionContext = () =>{
    const context = useContext(TransactionContext);

    if(!context){
        throw Error('Must be used within context');
    }

    return context;
}