import { createContext } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let T: any;

export const StepperContext = createContext<{ 
    userData: string; 
    setUserData: React.Dispatch<React.SetStateAction<string>>; 
    finalData: never[]; 
    setFinalData: React.Dispatch<React.SetStateAction<never[]>>; 
}>(T);