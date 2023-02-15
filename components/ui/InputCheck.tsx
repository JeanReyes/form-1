import React, { useContext, useEffect, useState } from 'react';
import { check } from './InputCheck.style';
import { FalseDeliveryContext } from '@/context/false-delivery';
import { ProductFalseDeliveryId } from '@/interfaces';

interface Props {
    name: string;
    header?: string;
    checked?: boolean
    product?: ProductFalseDeliveryId
}

export const InputCheck = ({ name, product, header }: Props) => {

    const { onChangeRadioHeader, allOrder, selectProducts } = useContext(FalseDeliveryContext);
    const [ isChecked, setIsChecked ] = useState(false);
        
    // useEffect(() => {
    //     const match = allOrder.find(order => order === header);
   
    //     if (match) {
    //         setIsChecked(true)
    //     } else {
    //         setIsChecked(false)
    //     }
        
    // }, [allOrder]);

    useEffect(() => {
        const matchOrder = allOrder.find(order => order === header);
        const match = selectProducts.find((product) => product.id === name);

        console.log("matchOrder", matchOrder);
        console.log("match", match);
    

        if(matchOrder) {
            setIsChecked(true)
        } else if(!matchOrder && match){
            setIsChecked(true)
        } else if(matchOrder && match){
            setIsChecked(true)
        }else {
            setIsChecked(false)
        }
        
    }, [selectProducts])

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement>) =>{
        onChangeRadioHeader(e.target.name, e.target.checked, product)
    }

    return (
        //checked={true} 
        <div>
            <input type="checkbox" id={name} checked={isChecked} name={ name } onChange={(e) => handleChange(e)}/>
            <label htmlFor={name} ></label>
            <style jsx>{ check }</style>
        </div>
    )
}
