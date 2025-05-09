export type Action = {
    id: string;
    position: {
        store: { 
            id: string;
            latitude: number; 
            longitude: number 
        };
        warehouse: { 
            id: string; 
            latitude: number; 
            longitude: number 
        };
    },
    products: T[];
}