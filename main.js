var tien = new Intl.NumberFormat("vn-VN");
var tien1 = new Intl.NumberFormat("en-US");
var my_val = 0;
$("#monney").keyup(function () {
    if ($("#monney").val().length >= 1) {
        my_val = ($("#monney").val()).split(",").join("");
        $("#monney").val(tien.format(my_val));
    }
});
document.getElementById("btn1").onclick = function () {
    var n = document.getElementById("name").value;
    var m = document.getElementById("monney").value; console.log(isNaN(m))
    if ((n == "") ||(m == "")) { document.getElementById("thue").innerHTML = "Thông tin không hợp lệ"; }
    else {
        m = parseInt(m.split(",").join(""));
        var p = parseInt(document.getElementById("people").value) || 0;
        var tncn = 0;
        n = n.split(" ").pop();
        if ((m > 0) && (m <= 60000000)) { tncn = 0.05; }
        if ((m > 60000000) && (m <= 120000000)) { tncn = 0.1; }
        if ((m > 120000000) && (m <= 210000000)) { tncn = 0.15; }
        if ((m > 210000000) && (m <= 384000000)) { tncn = 0.2; }
        if ((m > 384000000) && (m <= 624000000)) { tncn = 0.25; }
        if ((m > 624000000) && (m <= 960000000)) { tncn = 0.3; }
        if (m > 960000000) { tncn = 0.2; }
        var tien_thue = ((m - 4000000 - (p * 1600000)) * tncn);        
        if (tien_thue <= 0) { document.getElementById("thue").innerHTML = "Tiền thuế của " + n + " là : 0 VND"; }
        else { document.getElementById("thue").innerHTML = "Tiền thuế của " + n + " là : " + tien.format(tien_thue) + " VND"; }
        
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var phi1 = 0, phi2 = 0, phi3 = 0, sokenh, check;
function ANHIEN() {
    check = document.getElementById("client").value;
    if (check == 1) { document.getElementById("vip").classList.add('block'); }
    else { document.getElementById("vip").classList.remove('block'); }
}
document.getElementById("btn2").onclick = function () {
    var mkh = document.getElementById("mkh").value;
    check = document.getElementById("client").value;
    sokenh = document.getElementById("sk2").value;
    if (check == 0) {
        phi1 = 4.5;
        phi2 = 20.5;
        phi3 = parseFloat(7.5 * (sokenh));
        var tong = tien1.format(phi1 + phi2 + phi3);
        document.getElementById("tien_cap").innerHTML = "Khách hàng: " + mkh + " <br>Tiền cáp là: " + tong + " $";
    }
    if (check == 1) {
        var sokenhvip = document.getElementById("sk1").value;
        phi1 = 15;
        phi3 = parseFloat(50 * (sokenh));
        if (sokenhvip > 10) { phi2 = 75 + 5 * (sokenhvip - 10); }
        else { phi2 = 75; }
        var tong = tien1.format(phi1 + phi2 + phi3);
        document.getElementById("tien_cap").innerHTML = "Khách hàng: " + mkh + " <br>Tiền cáp là: " + tong + " $";
    }
    if ((check == "x") || (mkh == "")) { document.getElementById("tien_cap").innerHTML = "Không hợp lệ"; }

    console.log(tong);

}


































//////////////////////////////////////////////////////////////////////////////////////////

// document.getElementById("btn3").onclick = function () {
//     var m1 = parseInt(document.getElementById("month1").value);
//     var y1 = parseInt(document.getElementById("year1").value);
//     var songay = 0;
//     if ((m1 == 1) || (m1 == 3) || (m1 == 5) || (m1 == 7) || (m1 == 8) || (m1 == 10) || (m1 == 12)) {
//         songay = 31;
//         document.getElementById("check2").value = "Tháng này có " + songay + " ngày";
//     }
//     if ((y1 % 4) == 0) {
//         document.getElementById("check1").value = "Yes";
//         if (m1 == 2) {
//             songay = 29;
//             document.getElementById("check2").value = "Tháng này có " + songay + " ngày";
//         }
//     }
//     else {
//         document.getElementById("check1").value = "No";
//         if (m1 == 2) {
//             songay = 28;
//             document.getElementById("check2").value = "Tháng này có " + songay + " ngày";
//         }
//     }
//     if ((m1 == 4) || (m1 == 6) || (m1 == 9) || (m1 == 11)) {
//         songay = 30;
//         document.getElementById("check2").value = "Tháng này có " + songay + " ngày";
//     }
//     if ((m1 > 12) || (m1 < 1)) { document.getElementById("check2").value = "Tháng này không tồn tại"; }
// };

// //////////////////////////////////////////////////////////////////////////////////////////
// function dich(so) {
//     switch (so) {
//         case 0:
//             return "";
//         case 1:
//             return " một";
//         case 2:
//             return " hai";
//         case 3:
//             return " ba";
//         case 4:
//             return " bốn";
//         case 5:
//             return " năm";
//         case 6:
//             return " sáu";
//         case 7:
//             return " bảy";
//         case 8:
//             return " tám";
//         case 9:
//             return " chín";
//         // default: return "";
//     }
// }
// document.getElementById("btn4").onclick = function () {
//     var number = (document.getElementById("number3").value);
//     var tram = Math.floor(number / 100);
//     var donvi = number % 10;
//     var chuc = (number - (tram * 100) - donvi) / 10;
//     var tram1 = dich(tram);
//     var chuc1 = dich(chuc);
//     var donvi1 = dich(donvi);
//     if ((donvi == 1) && (chuc > 1)) { donvi1 = " mốt"; }
//     tram1 = tram1 + " trăm";
//     if (chuc == 0) { chuc1 =  " lẻ";}
//     else {
//             if (chuc == 1) { chuc1 = " mười"; }
//             if ((chuc != 0)&&(chuc != 1)) { chuc1 = chuc1 + " mươi"; }
//         }
//     document.getElementById("check3").value = tram1 + chuc1 + donvi1;

// }



// //////////////////////////////////////////////////////////////////////////////////////////


//   document.getElementById("btn7").onclick = function () {
//     var KD = (document.getElementById("KD").value);
//     var VD = (document.getElementById("VD").value);
//     var KD1 = (document.getElementById("KD1").value);
//     var VD1 = (document.getElementById("VD1").value);
//     var KD2 = (document.getElementById("KD2").value);
//     var VD2 = (document.getElementById("VD2").value);
//     var KD3 = (document.getElementById("KD3").value);
//     var VD3 = (document.getElementById("VD3").value);
//     var L1 = Math.sqrt((KD1*KD1)-(KD*KD))+((VD1*VD1)-(VD*VD));
//     var L2 = Math.sqrt((KD2*KD2)-(KD*KD))+((VD2*VD2)-(VD*VD));
//     var L3 = Math.sqrt((KD3*KD3)-(KD*KD))+((VD3*VD3)-(VD*VD));
//     if ((L1 > L2)&&(L1 > L3)) { document.getElementById("check7").value = "SV1 ở xa trường nhất" ;}
//     if ((L3 > L2)&&(L3 > L1)) { document.getElementById("check7").value = "SV3 ở xa trường nhất" ;}
//     if ((L2 > L1)&&(L2 > L3)) { document.getElementById("check7").value = "SV2 ở xa trường nhất" ;}
//   }

