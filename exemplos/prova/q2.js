//2
var campi;
(function (campi) {
    campi[campi["parnamirim"] = 0] = "parnamirim";
    campi[campi["s\u00E3o gon\u00E7alo"] = 1] = "s\u00E3o gon\u00E7alo";
    campi[campi["ead"] = 2] = "ead";
    campi[campi["natal central"] = 3] = "natal central";
    campi[campi["natal zn"] = 4] = "natal zn";
    campi[campi["cid alta"] = 5] = "cid alta";
})(campi || (campi = {}));
;
console.log(campi);
var serv1 = ['Valério', 33333, 'professor', campi[0]];
var serv2 = ['Bruno', 44444, 'professor', campi[1]];
var serv3 = ['Giva', 55555, 'professor', campi[3]];
console.log("Servidor 1: " + serv1);
console.log(("Servidor 2: " + serv2));
console.log(("Servidor 3: " + serv3));
