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
    idTiket: string;
    setIdTiket: (idTiket: string) => void;
    jadwalInfo: [number, number, Date, string];
    planetariumId: string;
}

export interface RegistrationProps {
    finalData: [string, string, string | undefined, number, string];
    setFinalData: (finalData: [string, string, string | undefined, number, string]) => void;
    setIsFormValid: (isValid: boolean) => void;
    setJumlahTiket: (jumlahTiket: number) => void;
}

export interface RequestProps {
    finalData: [string, string, string, string, string, string | undefined, number, string];
    setFinalData: (finalData: [string, string, string, string, string, string | undefined, number, string]) => void;
    setIsFormValid: (isValid: boolean) => void;
}

export interface ConfirmationProps {
    finalData: [string, string, string, string, string, string | undefined, number, string];
}

export interface PaymentProps {
    setPaymentMethod: (payment: string) => void;
}