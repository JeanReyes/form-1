import React, { useContext, useEffect } from 'react';
import { FalseDeliveryContext, TypeStep } from '@/context/false-delivery';
import { FinishFalseDelivery, InitFalseDelivery, MediumFalseDelivery } from './';


export const FalseDelivery = () => {

    const { step, dataApi, changeStep } = useContext(FalseDeliveryContext);
    
    const handleChangeStep = (value: TypeStep) => {
        changeStep(value);
    }

    // manejo de statos de step
    useEffect(() => {
        if(dataApi.length === 1) {
            changeStep('medium');
        }     
    }, [])

    /**
     * ProductSelection
     * CaseConfirmation
     * ResponseFalseDelivery
    */
    
    return (
        
        <div>
            { step === 'init' && <InitFalseDelivery orders={ dataApi }/> }
            { step === 'medium' && <MediumFalseDelivery/> }
            { step === 'finish' && <FinishFalseDelivery/> }
        </div>
    )
}
