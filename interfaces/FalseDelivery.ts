export type FormCase = { type: 'FCOM-false-delevery', value: 'Falsa Entrega' }
| { type: 'FCOM-other-form-2', value: 'Other form 2'  }
| { type: 'FCOM-other-form-3', value: 'Other form 3'  }

export interface DataFalseDelivery {
    subOrder:   string;
    sellerName: string;
    products:   ProductFalseDelivery[];
}

export interface ProductFalseDelivery {
    image:         string;
    name:          string;
    formatedPrice: string;
    brand:         string;
    quantity:      number;
    enabled:       boolean;
}

export interface DataFalseDeliveryId {
    id:         string;
    subOrder:   string;
    sellerName: string;
    products:   ProductFalseDeliveryId[];
}

export interface ProductFalseDeliveryId {
    id:            string;
    image:         string;
    name:          string;
    formatedPrice: string;
    brand:         string;
    quantity:      number;
    enabled:       boolean;
}

export interface RequestFalseDelivey {
    order:       string;
    nameForm:    string;
    description: string;
    products:    ProductRequest[];
}

export interface ProductRequest {
    name:            string;
    price:           number;
    quantity:        number;
    quantityOrdered: string;
    sku:             string;
}
