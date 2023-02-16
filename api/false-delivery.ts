import { DataFalseDelivery } from "@/interfaces";

export const dataFake = [ // ejemplo respuesta api
    {
        "subOrder": "11111111",
        "sellerName": "Falabella",
        "products": [
            {
                "image": "http://asdasdasd.com",
                "name": "lavadora",
                "formatedPrice": "$300.000",
                "brand": "samsung",
                "quantity": 3,
                "enabled": false            
            },
            {
                "image": "http://asdasdasd.com",
                "name": "MAC",
                "formatedPrice": "$300.000",
                "brand": "samsung",
                "quantity": 1,
                "enabled": true            
            }
        ]
    },
    {
        "subOrder": "22222222",
        "sellerName": "Falabella",
        "products": [
            {
                "image": "http://asdasdasd.com",
                "name": "lavadora",
                "formatedPrice": "$300.000",
                "brand": "samsung",
                "quantity": 3,
                "enabled": true            
            }
        ]
    },
    {
        "subOrder": "33231231231",
        "sellerName": "Sodimac",
        "products": [
            {
                "image": "http://asdasdasd.com",
                "name": "lavadora",
                "formatedPrice": "$300.000",
                "brand": "samsung",
                "quantity": 3,
                "enabled": true            
            },
            {
                "image": "http://asdasdasd.com",
                "name": "lavadora",
                "formatedPrice": "$300.000",
                "brand": "samsung",
                "quantity": 3,
                "enabled": false           
            },{
                "image": "http://asdasdasd.com",
                "name": "lavadora",
                "formatedPrice": "$300.000",
                "brand": "samsung",
                "quantity": 3,
                "enabled": true            
            }
        ]
    }
];


export const apiFake = () => {
    return dataFake.map((order, indexOrder) => {
        return  {
            id: `order-${indexOrder + 1}`,
            ...order,
            products: order.products.map((product, indexProduct) => ({ 
                id: `order-${indexOrder + 1}-product-${indexProduct + 1}`,
                order: order.subOrder, 
                ...product
            })),
        }
    });
}



