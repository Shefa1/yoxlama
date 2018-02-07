var x, z, t, b, d, a, f, h;

a = men;
c = sen;
b = 23;
x = true;
t = 'hello';
z = [23,46, 'arif', 216, 'cem']; //array
document.write(z[2]);
d = Math.abs(-45);
f = Math.sqrt(3);
h = Math.random();
var n_1 = Math.round(n_1*10);     //10 gelmir 0 gelir
var n = Math.floor(n_1*10 + 1); //0 gelmir 10 gelir
var pi = Math.PI;
document.write('<hr>' + n_1);


//string functions


var str = 'Aida \'pis\' qizdi :P';
console.log(str.length);

//Tarix Funksiyalari

var str = new String(); //'';
var boo = new Boolen();
var num = new Number();

var tarix = new Date();
document.writeln('<hr>');
document.write('<hr>'+tarix.getDay());
document.write('<hr>'+tarix.getDate());
document.write('<hr>'+tarix.getMinutes());
document.write('<hr>'+tarix.getHours());

var saat,deqiqe,saniye,salise;
saat = tarix.getHours();
deqiqe = tarix.getMinutes();
saniye = tarix.getSeconds();
salise = tarix.getMilliseconds();

document.write(saat+':'+deqiqe+':'+saniye+':'+salise+);

