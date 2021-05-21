
const phones = [
    { name: "iphone XX", priceHT: 900 },
    { name: "iphone X", priceHT: 700 },
    { name: "iphone B", priceHT: 200 },
  ];

const res = phones.reduce((acc, curr)=>{
    return (acc + curr.priceHT * 1.2)
}, 0);

console.log(res);

console.log((900 + 700 + 200) * 1.2) ;

const res2 = phones.reduce((acc, { priceHT } )=>{
    return (acc + priceHT * 1.2)
}, 0);

console.log(res2);


const res3 =phones
        .map( phone => phone.priceHT * 1.2 )
        .reduce((acc, curr) => acc + curr ) ;

console.log(res3);