export interface StepProps {
    currentStep: number;
}

export interface StepperProps {
    steps: string[];
    currentStep: number;
}

export interface StepperControlProps {
    handleClick: (direction: string) => void;
    currentStep: number;
    steps: string[];
    type: number;
}