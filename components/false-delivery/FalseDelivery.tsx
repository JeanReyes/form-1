import { FalseDeliveryContext, TypeStep } from '@/context/false-delivery';
import React, { useContext, useEffect } from 'react';
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
    

    return (
        <div className='container-view'>
            { step === 'init' && <InitFalseDelivery/> }
            { step === 'medium' && <MediumFalseDelivery/> }
            { step === 'finish' && <FinishFalseDelivery/> }

            <button onClick={() => handleChangeStep('init')}>init</button>
            <button onClick={() => handleChangeStep('medium')}>medium</button>
            <button onClick={() => handleChangeStep('finish')}>finish</button>
        </div>
    )
}
