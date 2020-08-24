let regexString = /^[A-Z]$/
let string = 'haLo ini Tes'
let result = regexString.test(string)
console.log(result);

if (result) {
    console.log('Huruf pertama adalah huruf besar')
} else {
    console.log('Huruf pertama adalah huruf kecil')
}

//

let regexNumber = /\d{10,12}/;
let phoneNumber = 0809899999;
console.log(regexNumber.test('phoneNumber'));

//

let search1 = /^Bagaimana cara memulai usaha bisnis$/;
console.log(search1.test('Bagaimana cara memulai usaha bisnis'));

let search2 = /^Bootcamp impact byte$/;
console.log(search2.test('Bootcamp impact byte'));

let search3 = /^Status covid hari ini$/;
console.log(search3.test('Status covid hari ini'));