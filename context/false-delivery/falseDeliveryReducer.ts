
import { FalseDeliveryState } from './';

export type ActionStep = { type: 'upd-step', payload: string }
//| { type: 'upd-step', payload: string } ejemplo

export const falseDeliveryReducer = (state: FalseDeliveryState, action: ActionStep): FalseDeliveryState => {
    switch(action.type) {
        case 'upd-step': 
            return {
                ...state,
                step: action.payload
            }
    
        default: return state;
    }
}