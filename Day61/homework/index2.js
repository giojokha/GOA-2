function isValidCoupon(couponCode, totalAmount) {
    const isSaleOrBigSale = (couponCode === "SALE" || couponCode === "BIGSALE") && totalAmount >= 50;
    
    const isLilSale = couponCode === "LILSALE";

    return isSaleOrBigSale || isLilSale;
}

console.log(isValidCoupon("SALE", 60));  
console.log(isValidCoupon("BIGSALE", 50));
console.log(isValidCoupon("SALE", 40));
console.log(isValidCoupon("LILSALE", 30)); 
console.log(isValidCoupon("OTHER", 30));
