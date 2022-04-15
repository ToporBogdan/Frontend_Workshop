// // console.log("Hello World!") /*  seamana cu printf */
// // alert("Ce faci bai coinacule!")   /*un popup care printeaza doar chestii simple*/
// // var x = [1, 2, 4];
// // console.log(x);

// // const PI = 3.14;
// // console.log(PI)
// // PI = 41;
// // console.log(PI)

// var x = "test";
// console.log(x);
// x = "second";
// console.log(x);

// // let

// // va printa Undefined
// var Bogdan;
// console.log(Bogdan);
// Bogdan = "Lala";

//orice declarare de variabila va fi rulata la inceputul codului. Printeaza Lala pt ca se face hoisting pe declarare
// Bogdan = "Lala";
// console.log(Bogdan);
// var Bogdan;

// JS e limbaj slab tipat
// var x = 10;
// x = 31;
// x = "mama";
// x = false;
// var nrBiscuiti = 10;
// var ownerBiscuiti = "Bogdan";

// console.log(ownerBiscuiti + " are " + nrBiscuiti + "!!!")
// console.log(`${ownerBiscuiti} are ${nrBiscuiti}!`)

// var myObj = new Object()
// myObj.a = "b"
// console.log(myObj)

// var myArray = [1, 2, 10, 11]
// console.log(myArray)

// var fancyObj = 
// {
//     a: "b",
//     c: 
//     {
//         d: "e",
//         f: 
//         {
//             g: "h"
//         }
//     }
// }

// console.log(fancyObj)

function PrintString(givenString)
{
    console.log(givenString);
}

function GetString(givenString)
{
    return `${givenString} ${givenString}`
}

PrintString("cacanescu");
console.log(GetString("johnule"));



// console.log(document)
// console.log(window)

var relativeCEVAID = document.getElementById("relativeDIV")
console.log(relativeCEVAID)
relativeCEVAID.innerHTML = "M-am plictisit grav";
relativeCEVAID.style.backgroundColor = "green";

var boxModelREF = document.getElementsByClassName("boxModel")
console.log(boxModelREF)

for (var i = 0; i < boxModelREF.length; i++)
{
    boxModelREF[i].innerHTML = "test"
}

function LeftObjClick()
{
    console.log("You clicked LEFT Obj")
}

var boxModelRightREF = boxModelREF[1];
console.log(boxModelRightREF);

boxModelRightREF.addEventListener("click", function()
{
    console.log("You clicked RIGHT Obj")
});

function ButtonClick(clickedButton)
{
    console.log(clickedButton);
}

