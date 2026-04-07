import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator"

function handleApiCall() {

    // fetchProductCatalog
    fetchProductCatalog()
        .then((products) => { console.log("Product list:", products) })
        .catch((error) => {
            if (error instanceof NetworkError) {
                console.error("Network Error: ", error.message)
            } else {
                console.error("Unknown Error:", error.message);
            }
        })
        .finally(() => { console.log("fetchProductCatalog API call has been attempted") })

    //fetchProductReviews
    fetchProductReviews(2)
        .then((product) => { console.log("Reviews For Product: ", product) })
        .catch((error) => {
            if (error instanceof DataError) {
                console.log("Data Error: ", error.message)
            } else {
                console.log("Unknown Error:", error.message)
            }
        })
        .finally(() => { console.log("fetchProductReviews API call has been attempted") })

    fetchProductReviews(7)
        .then((product) => { console.log("Reviews For Product: ", product) })
        .catch((error) => {
            if (error instanceof DataError) {
                console.log("Data Error: ", error.message)
            } else {
                console.log("Unknown Error:", error.message)
            }
        })
        .finally(() => { console.log("fetchProductReviews API call has been attempted") })

    // fetchSalesReport
    fetchSalesReport()
        .then((salesReport) => { console.log("Sales Report: ", salesReport) })
        .catch((error) => {
            if (error instanceof DataError) {
                console.log("Data Error: ", error.message)
            } else {
                console.log("Unknown Error:", error.message)
            }
        })
        .finally(() => { console.log("fetchSalesReport API call has been attempted") })
}

handleApiCall()

export class NetworkError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "NetworkError"
    }
}

export class DataError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "DataError"
        Object.setPrototypeOf(this, DataError.prototype);
    }
}