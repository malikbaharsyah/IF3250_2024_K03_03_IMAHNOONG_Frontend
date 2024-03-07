/* eslint-disable @typescript-eslint/no-explicit-any */
import{ useEffect, useRef, useState } from "react";
    
interface StepperProps {
    steps: string[];
    currentStep: number;
}

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
            if (count < stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
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
    
    const displaySteps = newStep.map((step: any, index: any) => {
        return (
        <div key={index} className={index !== newStep.length-1 ? "flex w-full items-center" : "flex items-center "}>
            <div className="relative flex flex-col items-center text-color-4">
                <div className={`rounded-xl transition duration-500 ease-in-out h-12 w-12 flex items-center justify-center py-3 bg-gradient-to-b from-color-2 to-color-3 
                ${step.selected ? "from-green-600 text-white font-bold border-green-600": ""}`}>
                    {
                        step.completed ? (<span className="text-white font-bold text-xl">&#10003;</span>): (index + 1)
                    }
                    </div>
                    <div className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium ${step.highlighted ? "text-white" : "text-gray-400"}`}>
                        {step.description}
                    </div>
                </div>
            <div className={`flex-auto border-t-2 border-dotted  transition duration-500 ease-in-out w-fit ${step.completed ? "border-green-600" : "border-white"}`}></div>
        </div>
        )
    })
    return (
        <div className="w-1/2 mx-4 p-4 flex justify-between items-center pb-20">
           {displaySteps}
        </div>
    );
};

export default Stepper;