import { DataFalseDeliveryId, ProductFalseDeliveryId } from '@/interfaces';
import { createContext } from 'react';
import { TypeStep } from './FalseDeliveryProvider';

interface ContextProps {
   step: string;
   allOrder: string[];
   selectProducts: ProductFalseDeliveryId[];
   dataApi: DataFalseDeliveryId[];
   changeStep: (value: TypeStep) => void;
   onChangeRadioHeader: (name: string, checked: boolean, product?: ProductFalseDeliveryId) => void;
}

export const FalseDeliveryContext = createContext({} as ContextProps);