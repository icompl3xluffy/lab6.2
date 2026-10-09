export declare const fetchProductCatalog: () => Promise<{
    id: number;
    name: string;
    price: number;
}[]>;
export interface review {
    productId: number;
    name: string;
    price: number;
    reviewInfo: string;
}
export declare const fetchProductReviews: (productId: number) => Promise<Array<review>>;
export declare const fetchSalesReport: () => Promise<{
    totalSales: number;
    unitsSold: number;
    averagePrice: string | number;
}>;
//# sourceMappingURL=apiSimulator.d.ts.map