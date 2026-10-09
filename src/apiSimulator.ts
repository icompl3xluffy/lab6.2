export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
        ]);
        } else {
        reject("Failed to fetch product catalog");
        }
    }, 1000);
    });
    
};

export interface review{
    productId: number; 
    name: string; 
    price: number;
    reviewInfo:string

}
export const fetchProductReviews=(productId: number): Promise<Array<review>> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
         resolve([
                {productId: productId, name: "Laptop", price: 1200, reviewInfo:"Great Item"},
                { productId: productId, name: "Headphones", price: 200, reviewInfo:"good item: short charge time"},
            ]);
        } else {
        reject(`Failed to fetch reviews for product ID ${productId}`);
        }
    }, 1500);
    });  
};


export const fetchSalesReport = (): Promise<{totalSales: number; unitsSold: number; averagePrice: string |number;}> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve( 
            {totalSales: 7000, unitsSold: 10, averagePrice: 700}
        );
        } else {
        reject("Failed to fetch sales report");
        }
    }, 1000);
    });
    
};

