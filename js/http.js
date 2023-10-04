const urlProducts = "http://localhost:3000/products";

function getProduct() {
 return fetch(urlProducts).then((response)=>{
    return response.json();
  })
  .catch(error => {
    console.log("Error Loading Data.", error);
    throw error;
});  
}

export { getProduct };