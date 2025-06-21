// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne = (inputNumber) => {
    let total = 0
    for (let index = 1; index <= inputNumber.length; index++) {
        if(index % 2 === 0){
            total = total + index
        }
    }
    return total
}
console.log(resultOne(numbers), "==> INI LINE 12 (SOAL 1)")

const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo = (inputNumber) => {
    let total = 0
    for (let index = 1; index <= inputNumber.length; index++) {
        if (index % 2 !== 0) {
            total = total + index
        }
    }
    return total
}
console.log(resultTwo(numbersTwo), "==> INI LINE 25 (SOAL 2)")

// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"]
let resultThree = []
students.forEach((el) => {
    resultThree.push(el.toUpperCase())
})
console.log(resultThree, "==> INI LINE 33 (SOAL3)")

// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
    { name: 'Andi', age: 17 },
    { name: 'Tito Alexsta', age: 20 },
    { name: 'Bostang', age: 22 },
    { name: 'Cici', age: 17 }
];
let resultFour = []
people.forEach((el) => {
    if(el.age > 18){
        if(el.name.length > 5){
            resultFour.push(el.name)
        }
    }
})
console.log(resultFour, "==> INI LINE 51 (SOAL4)")

// Hitung total harga semua barang
const items = [
    { name: 'Book', price: 10000 },
    { name: 'Pen', price: 5000 },
    { name: 'Pencil', price: 3000 },
];
let resultFive = 0
items.forEach((el) => {
    resultFive = resultFive + el.price
})
console.log(resultFive , "==> INI LINE 63 (SOAL 5)")

//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];
let resultSix = []
let angkaPertama = 0
numbersThree.forEach((el) => {
    if (el !== angkaPertama) {
        resultSix.push(el)
        angkaPertama = el
    }
})
console.log(resultSix, "==> INI LINE 75 (SOAL 6)")

// Ambil nama produk dengan harga tertinggi
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];
let angkaKedua = 0
let resultSeven = ""
products.forEach((el) => {
    if (el.price > angkaKedua) {
        resultSeven = el.name
        angkaKedua = el.price
    }
})
console.log(resultSeven, "==> INI LINE 91 (SOAL 7)")

// Buat kalimat dari array kata.
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];
let resultEight = ""
words.forEach((el, index) => {
    if(index === 0){
        resultEight = el
    } else{
        resultEight = `${resultEight} ${el}`
    }
})
console.log(resultEight, "==> INI LINE 103 (SOAL 8)")

// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];
let resultNine = []
for (let index = 0; index < names.length; index++) {
    if(names[index].toLowerCase().includes('a')){
        resultNine.push(names[index])
    }
    if(resultNine.length === 3){
        break
    }
}
console.log(resultNine, "==> INI LINE 116 (SOAL 9)");

// Hitung total karakter dari semua nama dalam array.
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter
let resultTen = 0
namesTwo.forEach((el) => {
    resultTen = resultTen + el.length
})
console.log(resultTen, "==> INI LINE 124 (SOAL 10)")

// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];
let resultEleven = []
peopleTwo.forEach((el) => {
    if(el.age > 21){
        resultEleven.push(`${el.name} ${el.age}`)
    }
})
console.log(resultEleven, "==> INI LINE 139 (SOAL 11)")