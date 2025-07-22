

// Bular backend dan malumot olish, yaratish, o'chiris xamda o'zgartirish uchun ishlaydi

// c ----> create ----> post bu beckendga zapros yuborish malumot yaratish
// r ----> read -----> get bu beckenddan malumot olib kelish 
// u ----> update ----> put, patch bu malumotni o'zgartirish
// d ----> delete ----> bu malumotlarni o'chirish

// bytes b ---> "64" yani ma'lumotlarni ascii jadvalida qaytaradi yani shifrlab qaytaradi
// blob malumotlarni {  } array formatida qaytaradi 
// formdata rasm, videolarni formdataga o'tqizib beradi 
// json {"salom": "1"} json bu keyni xam valueni xam string o'tqizadi
// json.stringify bu oddiy obyektni string tipiga o'tqizadi 
// json,parse bu stringify dagi malumotlarni yechib beradi

// Back enddan MALUMOT OLISH 
// fetch ("https://fakestoreapi.com/products",{
// method:"GET",
// headers:{
// "content-type":"application/json"
// },
// })
// .then( (response)=> response.json())
//  then ((data)=> {
    // console.log(data,"back enddan malumot keldi");
    //})