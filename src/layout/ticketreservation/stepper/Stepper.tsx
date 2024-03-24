/* eslint-disable @typescript-eslint/no-explicit-any */
import{ useEffect, useRef, useState } from "react";
import { StepperProps } from "../../../interfaces/TicketReservation";

const Stepper: React.FC<StepperProps> = ({steps, currentStep}) => {
    const [newStep, setNewStep] = useState<any>([]);
    const stepRef = useRef<{
        description: string;
        completed: boolean;
        highlighted: boolean;
        selected: boolean;
    }[]>();
    const updateStep = (stepNumber: number, steps: any) => {
        const newSteps = [...steps];
        let count = 0;
        while (count < newSteps.length) {
            if (count === stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true
                };
                count++;
            } else if (count < stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: false,
                    completed: true,
                };
                count++;
            } else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false,
                };
                count++;
            }
        }
        return newSteps;
    };
    useEffect(() => {
        const stepsState = steps.map((step, index) => 
        Object.assign(
                {}, 
                {
                    description: step,
                    completed: false,
                    highlighted: index === 0 ? true : false,
                    selected: index === 0 ? true : false,
                }
            )
        );
        stepRef.current = stepsState;
        const current = updateStep(currentStep-1, stepRef.current);
        setNewStep(current);
    }, [steps, currentStep]);
    
    const displaySteps = newStep.map((step: any, index: number) => {
        return (
        <div key={index} className={index !== newStep.length-1 ? "flex w-full items-center" : "flex items-center "}>
            <div className="relative flex flex-col items-center text-color-4">
                <div className={`transition duration-500 ease-in-out ${currentStep === 1 ? "rounded-xl h-12 w-12" : "size-8 rounded-lg"} flex items-center font-medium justify-center py-3 text-2xl
                ${step.selected ? "bg-color-2 text-white font-bold": step.completed ? "bg-green-600": "bg-color-4 bg-opacity-60"}`}>
                    {
                        step.completed && !step.selected ? (<span className={`text-white ${currentStep === 1 ? "font-bold text-xl": "font-medium text-xl" }`}>&#10003;</span>): (index + 1)
                    }
                    </div>
                    <div className={`absolute top-0 text-center ${currentStep === 1 ? "mt-16":"mt-10"} w-40 font-medium text-base ${step.selected ? "text-color-4" : step.completed ? "text-green-600" : "text-color-4 text-opacity-60"}`}>
                        {step.description}
                    </div>
                </div>
            <div className={`flex-auto border-t-2 border-dotted transition duration-500 ease-in-out w-fit ${step.selected ? "border-color-4" : step.completed ? "border-green-600 " : "border-color-4"}`}></div>
        </div>
        )
    })
    return (
        <div className={`mx-4 p-4 flex justify-between items-center ${currentStep === 1 ? "w-1/2 pb-10" : "w-full p-0 pb-5"}`}>
           {displaySteps}
        </div>
    );
};

export default Stepper;