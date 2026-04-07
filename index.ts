import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator"

function handleApiCall() {
    
    // fetchProductCatalog
    fetchProductCatalog()
        .then((products) => { console.log("Product list:", products) })
        .catch((error) => { console.error("Error: ", error) })
        .finally(() => { console.log("fetchProductCatalog API call has been attempted") })

    //fetchProductReviews
    fetchProductReviews(2)
        .then((product) => { console.log("Reviews For Product: ", product) })
        .catch((error) => { console.log(error) })
        .finally(() => { console.log("fetchProductReviews API call has been attempted") })

    fetchProductReviews(7)
        .then((product) => { console.log("Reviews For Product: ", product) })
        .catch((error) => { console.log(error) })
        .finally(() => { console.log("fetchProductReviews API call has been attempted") })

    // fetchSalesReport
    fetchSalesReport()
        .then((salesReport) => { console.log("Sales Report: ", salesReport) })
        .catch((error) => { console.log(error) })
        .finally(() => { console.log("fetchSalesReport API call has been attempted") })
}

handleApiCall()