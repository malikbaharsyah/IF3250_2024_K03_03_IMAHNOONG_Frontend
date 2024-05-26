import { createContext } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let T: any;

export const StepperContext = createContext<{ 
    userData: string; 
    setUserData: React.Dispatch<React.SetStateAction<string>>; 
    finalData: [string, string, string | undefined, number, string]; 
    setFinalData: React.Dispatch<React.SetStateAction<[string, string, string | undefined, number, string]>>; 
}>(T);

export const StepperContextReq = createContext<{ 
    userData: string; 
    setUserData: React.Dispatch<React.SetStateAction<string>>; 
    finalData: [string, string, string, string, string, string | undefined, number, string]; 
    setFinalData: React.Dispatch<React.SetStateAction<[string, string, string, string, string, string | undefined, number, string]>>; 
}>(T);