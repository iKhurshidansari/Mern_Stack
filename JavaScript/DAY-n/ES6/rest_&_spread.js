//  ........  spread/rest

// var a = [1,2,3,4,5,6,7,8,9];
// var b = [...a];

//spread ka matlab hai element ke saare values ko us jagah par bikher dena
// console.log(a);
// console.log(b);

//spread use hota hai copy ya fir us location par kisi aur ki values bikherne k liye
//rest use hota hai jab aapko bache hue values ek variable mei daalne ho

function abcd(a,b,c,...d){
    console.log(a,b,c,d);
}

abcd(1,2,3,4,5,6,7,8,9);