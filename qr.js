let qrgen=document.querySelector("#qrgen");
let textqr=document.querySelector("#textqr");
function generator(){
    qrgen.href="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+textqr.value;
}