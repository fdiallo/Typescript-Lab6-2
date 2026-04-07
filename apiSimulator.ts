import { DataError } from ".";
import { NetworkError } from ".";

export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            } else {
                //reject("Failed to fetch product catalog");
                reject(new NetworkError("Failed to fetch product catalog"))
            }
            console.log("------------------------------------------------------------------")

        }, 500);

    });
};

export const fetchProductReviews = (productId: number):
    Promise<{ id: number; name: string; price: number }[]> => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const produtcts = [
                { id: 1, name: "Laptop", price: 1200 },
                { id: 2, name: "Headphones", price: 200 },
                { id: 3, name: "TV", price: 1000 },
            ]
            const findProduct = produtcts.find(product => product.id === productId)

            if (findProduct) {
                resolve([{ id: productId, name: findProduct.name, price: findProduct.price }])
            } else {
                //reject("Failed to fetch product catalog");
                reject(new DataError("Failed to fetch product reviews"))
            }

            console.log("------------------------------------------------------------------")

        }, 1500)
    })
}


export const fetchSalesReport = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const produtcts = [
                { id: 1, name: "Laptop", price: 1200 },
                { id: 2, name: "Headphones", price: 200 },
                { id: 3, name: "TV", price: 1000 },
            ]

            const totalSales = produtcts.reduce((acc, curr) => acc + curr.price, 0)
            const unitsSold = produtcts.length
            const averagePrice = produtcts.reduce((acc, curr) => acc + curr.price, 0) / produtcts.length
            if (Math.random() < 0.8) {
                resolve(`Total Sales: ${totalSales}, Unit Sold: ${unitsSold}, Average Price: ${averagePrice}`)
            } else {
                reject(new DataError("Failed to fetch sales report"))
            }

            console.log("------------------------------------------------------------------")

        }, 1000)
    })
}
