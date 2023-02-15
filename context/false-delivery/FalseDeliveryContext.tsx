import { DataFalseDeliveryId, ProductFalseDeliveryId } from '@/interfaces';
import { createContext } from 'react';
import { TypeStep } from './FalseDeliveryProvider';

interface ContextProps {
   step: string;
   allOrder: string[];
   dataApi: DataFalseDeliveryId[];
   selectProducts: ProductFalseDeliveryId[];
   changeStep: (value: TypeStep) => void;
   onChangeRadioHeader: (name: string, checked: boolean, header: string, product?: ProductFalseDeliveryId) => void;
}

export const FalseDeliveryContext = createContext({} as ContextProps);