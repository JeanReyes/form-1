import { FalseDeliveryContext } from '@/context/false-delivery';
import React, { useContext } from 'react';

export const FalseDelivery = () => {

    const { step, dataApi, changeStep } = useContext(FalseDeliveryContext);

    const handleChangeStep = (value: string) => {
        changeStep(value);
    }

    // manejo de statos de step

    return (
        <>
            {/* header mas phone */}
            {/* tarjeta mas description */}
            {/* button  */}
            <div>ComponentFalseDelivery { step }</div>
            <div>Data API { JSON.stringify(dataApi) }</div>
            <button onClick={ () => handleChangeStep('init') }>init</button>
            <button onClick={ () => handleChangeStep('medium') }>medium</button>
            <button onClick={ () => handleChangeStep('finish') }>finish</button>
        </>
    )
}
