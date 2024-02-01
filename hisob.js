// hisob js degan fayl yasab uni ozimizga export qilamiz 
// **       sample

let hisob = {}; // object  yozvolamiz 

hisob.kopaytir = (a,b) => {
    return a * b;
};

hisob.qoshish = (a,b) => {
    return a + b;
};

hisob.bolish = (a,b) => {
    return a / b;
};

hisob.ayrish = (a,b) => {
    return a - b;
};

module.exports = hisob; //export qilish 




