var car=new Array(3) 
// ("BMW","Volvo","Saab","Ford");
car[0]="Ford";
car[1]="Volvo";
car[2]="BMW";
var car2=["BMW","Volvo","Saab","Ford"];
var car3=["BMW","Volvo","Saab","Ford"];
document.write(car);
car2.push("Audi");
document.write("<br>"+car2);
car2.pop();
document.write("<br>"+car2);
var data=car2.concat(car3);
document.write("<br>"+data);
