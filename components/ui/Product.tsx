import React, { useContext, useEffect, useState } from 'react';
import { ProductFalseDeliveryId } from '@/interfaces';
import { InputCheck } from './InputCheck';
import { QuantityProducts } from './QuantityProducts';
import { FalseDeliveryContext } from '@/context/false-delivery';


interface Props {
    product: ProductFalseDeliveryId;
    header: string;
}

export const Product = ({ product, header }: Props) => {

    const { selectProducts, onQuantityProduct, onChangeRadioOneProduct } = useContext(FalseDeliveryContext);
    const [isSelected, setiIsSelected ]  = useState(false);
  
    useEffect(() => {
        const matchSelect = selectProducts.find((producSelect) => producSelect.id === product.id)
        setiIsSelected(matchSelect ? true : false);
    }, [selectProducts]);


    return (
        <div className='aling-div'>
            <InputCheck disable={product.enabled ? false : true} header={ header } name={product.id} product={ product }/>
            <div>
                { JSON.stringify(product.name) }
                <div>
                    {
                        isSelected && product.quantity !== 1 ?
                            <QuantityProducts 
                                name={ product.id }
                                header={header} 
                                quantity={ product.quantity }
                                onQuantityProduct={ onQuantityProduct } 
                                onChangeRadioOneProduct={onChangeRadioOneProduct}
                            /> 
                        : product.quantity
                    }
                </div>
            </div>

        </div>
    )
}
