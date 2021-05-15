$(function () {
    var termekek = [];
    termekek = JSON.parse(termekekJson);
    console.log(termekek);
    termekek[0].ertekeles = 5;
    termekek[1].ertekeles = 2;
    $("article").append(termekek + "<br>");
    $("article").append(termekek[0]["név"] + "<br>");
    //nagy s ez a konvenci, átalakítja szöveggé az objektumot
//    var termekekSzovegesen = JSON.stringify(termekek);
//    $("article").append(termekekSzovegesen + "<br>");
//    console.log(termekekSzovegesen);
//    $("article").append(termekekSzovegesen[0] + "<br>");
//    $("article").append(termekek[0]["osszErtek"]+"<br>");
//    $("article").append(termekek[0].osszErtek+"<br>");
//    $("article").append(termekek[0].osszErtek()+"<br>");

});

//var termekekJson ='[{"név":"Hamburger","db":2,"cikkszám":101,"ar":1000,"mirelit":true,"ertekeles":5},{"név":"Pizza","db":1,"cikkszám":201,"ar":1200,"mirelit":true,"ertekeles":2}]';

//var termekek = [
//    {
//        név: "Hamburger",
//        db: 2,
//        cikkszám: 101,
//        ar: 1000,
//        mirelit: true,
//        osszErtek:function(){return this.ar*this.db;}
//    },
//    {
//        név: "Pizza",
//        db: 1,
//        cikkszám: 201,
//        ar: 1200,
//        mirelit: true,
//        osszErtek:function(){return this.ar*this.db;}
//    }
//
//
