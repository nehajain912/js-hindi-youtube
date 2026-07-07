const myNums = [1,2,3];

// const myTotal = myNums.reduce( function(accumulator,currentValue) {
//     console.log(`accumulator: ${accumulator}, current value: ${currentValue}`);
//     return accumulator+currentValue
// },0 )


const myTotal = myNums.reduce( (accumulator,currentValue) => accumulator+currentValue,0  )

console.log(myTotal);


const shoppingcart = [
    {
        itemName:"js course",
        price:2999
    },
     {
        itemName:"python course",
        price:3999
    },
     {
        itemName:"mobile dev course",
        price:5999
    },
     {
        itemName:"data science course",
        price:12999
    },
]

const pricetoPay=shoppingcart.reduce( (acc,item) => acc+item.price,0)
console.log(pricetoPay);
