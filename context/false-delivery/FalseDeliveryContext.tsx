import { DataFalseDelivery } from '@/interfaces';
import { createContext } from 'react';
import { TypeStep } from './FalseDeliveryProvider';

interface ContextProps {
   step: string;
   dataApi: DataFalseDelivery[];
   changeStep: (value: TypeStep) => void;
}

export const FalseDeliveryContext = createContext({} as ContextProps);