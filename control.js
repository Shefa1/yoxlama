var s;
var a=5;
var b=10;
var y = (a<b); //true kimidir, ve daha sonra bundan istifade elemek olar.
if(5<10 || 5!==4){
     s = '<hr> AAA';
}else if(a>b && b>0){
     s = '<hr> BBB';
}
document.write(s);

//switch
a = 'shefa';
switch (a){
    case 'joker':
        str = 'Hello Joker';
        break;
    default:
        str = 'tapilmadi';
}
document.write(str);
