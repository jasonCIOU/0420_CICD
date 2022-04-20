module.exports = {
//    add(a, b) {
//             return a + b;
//         },
//         subtract(a, b) {
//             return a - b;
//         },
//         multiply(a, b) {
//             return a * b;
//         },
//         divide(a, b) {
//             return a / b;
//         },

   prime(n){
    if (n > 2) {
        for (let i = 2;i < n;++i) {
            if (n % i === 0) {
                return false;
            }
        }
 
        return true;
    } else {
        return n === 2;
    }

}
};
