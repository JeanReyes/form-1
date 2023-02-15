import { FalseDeliveryContext, TypeStep } from '@/context/false-delivery';
import React, { useContext, useEffect } from 'react';
import { FinishFalseDelivery, InitFalseDelivery, MediumFalseDelivery } from './';


export const FalseDelivery = () => {

    const { step, selectProducts, allOrder, dataApi, changeStep } = useContext(FalseDeliveryContext);
    
    const handleChangeStep = (value: TypeStep) => {
        changeStep(value);
    }

    // manejo de statos de step
    useEffect(() => {
        if(dataApi.length === 1) {
            // changeStep('medium');
        }     
    }, [])
    
    return (
        
        <div>
            { step === 'init' && <InitFalseDelivery orders={ dataApi }/> }
            { step === 'medium' && <MediumFalseDelivery/> }
            { step === 'finish' && <FinishFalseDelivery/> }
            {
                selectProducts.map((prod)=> (
                    <div key={prod.id}>{prod.id } / </div>
                ))
            }
        </div>
    )
}
