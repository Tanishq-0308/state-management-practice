import { createContext, useContext } from "react";

export const MathContext = createContext({
    count:0,
    increase:()=>{},
    decrease:()=>{},
    reset:()=>{}
});

export const MathContextProvider= MathContext.Provider;

export default function useTheme(){
    return useContext(MathContext);
}