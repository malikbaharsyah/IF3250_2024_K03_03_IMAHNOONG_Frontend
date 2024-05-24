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
    finalDataReg: [string, string, string | undefined, number, string];
    finalDataReq: [string, string, string, string, string, string | undefined, number, string]
    condition: {
        isFormValid: boolean,
        paymentMethod: string,
    }
}

export interface RegistrationProps {
    finalData: [string, string, string | undefined, number, string];
    setFinalData: (finalData: [string, string, string | undefined, number, string]) => void;
    setIsFormValid: (isValid: boolean) => void;
}

export interface RequestProps {
    finalData: [string, string, string, string, string, string | undefined, number, string];
    setFinalData: (finalData: [string, string, string, string, string, string | undefined, number, string]) => void;
    setIsFormValid: (isValid: boolean) => void;
}

export interface PaymentProps {
    setPaymentMethod: (payment: string) => void;
}