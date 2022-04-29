var tien = new Intl.NumberFormat("vn-VN");
var tien1 = new Intl.NumberFormat("en-US");
var my_val = 0;
document.getElementById("monney").addEventListener("keyup", function () {
    if ((document.getElementById("monney").value.length) >= 1) 
    {
        my_val = (document.getElementById("monney").value).split(",").join("");
        document.getElementById("monney").value = tien.format(my_val);
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


































