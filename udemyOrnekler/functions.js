function sayiUret(){
    return Math.ceil(Math.random() * 49) //random 0 ile 1 arası rastgele sayı üretiyor. ceil ise en yakın yükseğe yuvarlıyor.
// return sayının dönmesini bi alt satıra geçmesini sağlıyor.
}

sayiUret()

var sayi1 = sayiUret()
var sayi2 = sayiUret()
var sayi3 = sayiUret()
var sayi4 = sayiUret()
var sayi5 = sayiUret()
var sayi6 = sayiUret()

console.log('Kolon : ' + sayi1 + ' ' + sayi2 + ' '+ sayi3 + ' '+ sayi4 + ' '+ sayi5 + ' '+ sayi6)



//1 ile 49 arasında 6 tane rastgele sayı üreten kod (sayısal loto)