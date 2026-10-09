import{fetchProductCatalog, fetchProductReviews, fetchSalesReport} from "./apiSimulator.js";

fetchProductCatalog()
    .then((product)=>{
        console.log(product)
    })

    const loadStoreData = () => {
  fetchProductCatalog()
    .then((products) => {
      console.log("Products:", products);

      let reviewPromises = [];

    for (const product of products) {
    const reviewPromise = fetchProductReviews(product.id);
    reviewPromises.push(reviewPromise);
  }
      return Promise.all(reviewPromises);
    })
    .then((reviews) => {
      console.log("Reviews:", reviews);
      return fetchSalesReport();
    })
    .then((report) => {
      console.log("Sales report:", report);
    })
    .catch((error) => {
      if (error instanceof NetworkError) {
        console.error("Network problem:", error.message);
      } else if (error instanceof DataError) {
        console.error("Data problem:", error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    })
    .finally(() => {
      console.log("All attempted");
    });
};

loadStoreData();