export const AmazonLogo = "/images/amazonLogo.png";

export const productApi = async ()=>{
    const res = await fetch ("https://dummyjson.com/products");
    const result=await res.json();
    return result;
    
}
