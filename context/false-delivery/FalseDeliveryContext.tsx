import { DataFalseDelivery } from '@/interfaces';
import { createContext } from 'react';

interface ContextProps {
   step: string;
   dataApi: DataFalseDelivery[];
   changeStep: (value: string) => void;
}

export const FalseDeliveryContext = createContext({} as ContextProps);