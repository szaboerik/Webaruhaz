$(function () {

    //jason filebol beolvasas
    //ha egy részt akarunk frissíteni nem kell az egész oldalt ujratölteni
    $("article").on("click", "th", rendez);
    $("#ok").click(mentes);
    $.ajax(
            {url: "termekek.json",
                success: function (result) {
                    termekekTomb = result;
                    kiir();
                }
            }




    );


});
var termekekTomb = [];
function mentes() {
    var termekObjektum = {
        név: $("#nev").val(),
        db: $("#db").val(),
        cikkszám: $("#cikkszam").val(),
        ar: $("#ar").val(),
        mirelit: true
    };
    termekekTomb.push(termekObjektum);
    kiir();
}
var irany = true;
function rendez() {
    var mezo = $(this).attr("id");

    if (mezo === "nev") {
        // rendezzük a tömb kor szerint!
        if (irany) {
            termekekTomb.sort(
                    function (a, b) {
                        return a[mezo] - b[mezo];
                    }
            );
        } else {
            termekekTomb.sort(
                    function (a, b) {
                        return b[mezo] - a[mezo];
                    }
            );

        }

    } else {
        //rendezzük név szerint
        if (irany) {
            termekekTomb.sort(
                    function (a, b) {
                        return Number(a[mezo] > b[mezo]) - 0.5;
                    }
            );
        } else {
            termekekTomb.sort(
                    function (a, b) {
                        return Number(a[mezo] < b[mezo]) - 0.5;
                    }
            );
        }

    }
    irany = !irany;
    console.log("aktuális objektum " + JSON.stringify(termekekTomb));
    kiir();
}
function rendezesek() {
    var tomb = ["Hamburger", "Pizza"];
    tomb.sort();

    $("article").append(tomb.join(" ; ") + "<br>");
    var szamTomb = [2, 1];
    szamTomb.sort();
    $("article").append(szamTomb.join(" ; ") + "<br>");

    szamTomb.sort(
            function (a, b) {
//                console.log("a: "+a+" b: "+b+" a-b:"+(a-b));

                return b - a;
            }
    );


    $("article").append(szamTomb.join(" ; ") + "<br>");
    //véleltlen sorrend generálása
    tomb.sort(
            function (a, b) {
                console.log(Math.random() - 0.5);
                return Math.random() - 0.5;
            }
    );
    $("article").append(tomb.join(" ; ") + "<br>");

    szamTomb.sort(
            function (a, b) {
                console.log(Math.random() - 0.5);
                return Math.random() - 0.5;
            }
    );
    $("article").append(szamTomb.join(" ; ") + "<br>");
    szamTomb.sort(
            function (a, b) {
                console.log(Math.random() - 0.5);
                return Math.random() - 0.5;
            }
    );
    $("article").append(szamTomb.join(" ; ") + "<br>");
}




function kiir() {




    $("article").empty();
    $("article").append("<table>");
    $("article table").append("<tr></tr>");
    for (var item in termekekTomb[1]) {
        $("article table tr").append("<th id='" + item + "'>" + item + " </th>");



    }

    for (var i = 0; i < termekekTomb.length; i++) {
        $("article table").append("<tr>");
        for (var item in termekekTomb[i]) {

            $("article table tr").eq(i + 1).append("<td>" + termekekTomb[i][item] + " </td>");



        }
        ;
    }

    $("article th").hover(kiemel);



}
;
function kiemel() {
    $(this).toggleClass("kiemel");
}