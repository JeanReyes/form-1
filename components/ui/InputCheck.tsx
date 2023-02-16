import React, { useContext, useEffect, useState } from 'react';
import { check } from './InputCheck.style';
import { FalseDeliveryContext } from '@/context/false-delivery';
import { ProductFalseDeliveryId } from '@/interfaces';

interface Props {
    name: string;
    header?: string;
    disable: boolean;
    checked?: boolean
    product?: ProductFalseDeliveryId;
}

export const InputCheck = ({ name, product, header, disable }: Props) => {

    const { onChangeRadioHeader, allOrder, selectProducts } = useContext(FalseDeliveryContext);
    const [ isChecked, setIsChecked ] = useState(false);

    useEffect(() => {
        const matchOrder = allOrder.find(order => order === header); // aprete el check de cabecera
        const match = selectProducts.find(product => product.id === name);// aprete el check de producto
        if(matchOrder) {
            if (!disable) {
                setIsChecked(true);
            } else {
                setIsChecked(false);
            }
        } else if (match) {
            if (!disable) {
                setIsChecked(true);
            } else {
                setIsChecked(false);
            }
        } else {
            setIsChecked(false);
        }
        
        
    }, [selectProducts])
    
    const handleChange = ( e: React.ChangeEvent<HTMLInputElement>) =>{
        onChangeRadioHeader(e.target.name, e.target.checked, header!, product);
    }

    return (
        //checked={true} 
        <div>
            <input type="checkbox" className={ disable ? 'input-bloqued' : ''} id={ name } disabled={ disable } checked={ isChecked } name={ name } onChange={ (e) => handleChange(e) }/>
            <label htmlFor={name} ></label>
            <style jsx>{ check }</style>
        </div>
    )
}
