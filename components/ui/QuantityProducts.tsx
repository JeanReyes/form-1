import React, { useEffect, useState } from 'react';

interface Props {
    quantity: number;
    name: string;
    header: string
    onQuantityProduct: ( quantity: number, name: string ) => void;
    onChangeRadioOneProduct: (name: string, header: string) => void
}

export const QuantityProducts = ({ quantity, name, header, onQuantityProduct, onChangeRadioOneProduct }: Props) => {

    const initQuantity = quantity;
    const [ quantityProduct, setQuantityProduct ] = useState(quantity);

    const handleMoreProducts = () => {
        setQuantityProduct((prev) => {
            return prev + 1
        }) 
        
    }

    const handleFewerProducts = () => {
        setQuantityProduct((prev) => {
            if (prev - 1 < 0) return 0;  
            return prev - 1
        })
    }

    useEffect(() => {
        onQuantityProduct(quantityProduct, name);
        if(quantityProduct === 1) onChangeRadioOneProduct(name, header); // enviar el header padre del product
    }, [quantityProduct])

    //TODO: cuando la catindad llegue a 1 desmarcar check

    return (
        <div>
            <button disabled={  quantityProduct === 0 ? true : false } onClick={ () =>  handleFewerProducts()}>-</button>
                { quantityProduct }
            <button disabled={ initQuantity ===  quantityProduct ? true : false } onClick={ () => handleMoreProducts()}>+</button>
        </div>
    )
}
