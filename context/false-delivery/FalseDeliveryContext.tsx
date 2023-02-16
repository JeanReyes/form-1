import { createContext } from 'react';
import { DataFalseDeliveryId, ProductFalseDeliveryId } from '@/interfaces';
import { TypeStep } from './FalseDeliveryProvider';

interface ContextProps {
   step: string;
   allOrder: string[];
   dataApi: DataFalseDeliveryId[];
   selectProducts: ProductFalseDeliveryId[];
   changeStep: (value: TypeStep) => void;
   onChangeRadioHeader: (name: string, checked: boolean, header: string, product?: ProductFalseDeliveryId) => void;
   onQuantityProduct: (quantity: number, name: string) => void;
   onChangeRadioOneProduct: (name: string, header: string) => void;
}

export const FalseDeliveryContext = createContext({} as ContextProps);