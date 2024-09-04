


// index.html start
function Cari(){

const haragRute = {
    // Rute dari Indonesia
    "Indonesia - Singapura": 1200,
    "Indonesia - Malaysia": 2200,
    "Indonesia - Cambodia": 3300,
    "Indonesia - Russia": 4500,
    "Indonesia - England": 5300,
    "Indonesia - America": 6800,
    "Indonesia - Roma": 7500,
    "Indonesia - Vatikan": 8100,
    "Indonesia - Yunani": 9200,
    "Indonesia - England": 10500,

    // Rute dari Singapura
    "Singapura - Indonesia": 1100,
    "Singapura - Malaysia": 1500,
    "Singapura - Cambodia": 2500,
    "Singapura - Russia": 4700,
    "Singapura - England": 5200,
    "Singapura - America": 6600,
    "Singapura - Roma": 7800,
    "Singapura - Vatikan": 8200,
    "Singapura - Yunani": 9000,
    "Singapura - England": 10300,

    // Rute dari Malaysia
    "Malaysia - Indonesia": 2100,
    "Malaysia - Singapura": 1700,
    "Malaysia - Cambodia": 2900,
    "Malaysia - Russia": 4600,
    "Malaysia - England": 5400,
    "Malaysia - America": 7000,
    "Malaysia - Roma": 7300,
    "Malaysia - Vatikan": 8600,
    "Malaysia - Yunani": 9400,
    "Malaysia - England": 10800,

    // Rute dari Cambodia
    "Cambodia - Indonesia": 3200,
    "Cambodia - Singapura": 2600,
    "Cambodia - Malaysia": 3100,
    "Cambodia - Russia": 4900,
    "Cambodia - England": 5600,
    "Cambodia - America": 6900,
    "Cambodia - Roma": 7600,
    "Cambodia - Vatikan": 8900,
    "Cambodia - Yunani": 9200,
    "Cambodia - England": 10900,

    // Rute dari Russia
    "Russia - Indonesia": 4800,
    "Russia - Singapura": 5000,
    "Russia - Malaysia": 5200,
    "Russia - Cambodia": 5100,
    "Russia - England": 5700,
    "Russia - America": 7200,
    "Russia - Roma": 7400,
    "Russia - Vatikan": 8800,
    "Russia - Yunani": 9300,
    "Russia - England": 11200,

    // Rute dari England
    "England - Indonesia": 5200,
    "England - Singapura": 5300,
    "England - Malaysia": 5500,
    "England - Cambodia": 5800,
    "England - Russia": 6000,
    "England - America": 7500,
    "England - Roma": 7700,
    "England - Vatikan": 8300,
    "England - Yunani": 9500,
    "England - America": 11000,

    // Rute dari America
    "America - Indonesia": 6700,
    "America - Singapura": 6800,
    "America - Malaysia": 6900,
    "America - Cambodia": 7100,
    "America - Russia": 7200,
    "America - England": 7400,
    "America - Roma": 8000,
    "America - Vatikan": 8700,
    "America - Yunani": 9900,
    "America - England": 12000,

    // Rute dari Roma
    "Roma - Indonesia": 7400,
    "Roma - Singapura": 7500,
    "Roma - Malaysia": 7700,
    "Roma - Cambodia": 7800,
    "Roma - Russia": 8000,
    "Roma - England": 8200,
    "Roma - America": 8300,
    "Roma - Vatikan": 9000,
    "Roma - Yunani": 9400,
    "Roma - England": 13000,

    // Rute dari Vatikan
    "Vatikan - Indonesia": 8100,
    "Vatikan - Singapura": 8200,
    "Vatikan - Malaysia": 8300,
    "Vatikan - Cambodia": 8400,
    "Vatikan - Russia": 8500,
    "Vatikan - England": 8600,
    "Vatikan - America": 8800,
    "Vatikan - Roma": 9000,
    "Vatikan - Yunani": 9500,
    "Vatikan - England": 14000,

    // Rute dari Yunani
    "Yunani - Indonesia": 9000,
    "Yunani - Singapura": 9100,
    "Yunani - Malaysia": 9200,
    "Yunani - Cambodia": 9300,
    "Yunani - Russia": 9400,
    "Yunani - England": 9500,
    "Yunani - America": 9600,
    "Yunani - Roma": 9700,
    "Yunani - Vatikan": 9800,
    "Yunani - England": 15000,
};



const BerangkatDari = document.getElementById("berangkatDari").value;
const TibaDari = document.getElementById("menujuKe").value;


const rute =  `${BerangkatDari} - ${TibaDari}`;
const infoHarga = document.getElementById("info_harga");
const popup = document.getElementById("popup");
const inputBerangkat = document.getElementById("input_berangkat");
const inputTiba = document.getElementById("input_tiba");
const inputharga = document.getElementById("harga") ;





if(haragRute[rute] !== undefined){
    infoHarga.innerText = haragRute[rute]
    popup.style.display = "block"
    inputBerangkat.innerHTML = BerangkatDari
    inputTiba.innerHTML = TibaDari
    inputharga.innerHTML = haragRute[rute]

} else{
    infoHarga.innerText = "Rute tidak ditemukan"
}








}
function closePopup(){

const BerangkatDari = document.getElementById("berangkatDari");
const TibaDari = document.getElementById("menujuKe");
const infoHarga = document.getElementById("info_harga");
const Bangku = document.getElementById("seat");
const Date = document.getElementById("date");


const username_localstorage = localStorage.getItem("name");
const gmail_localstorage = localStorage.getItem("gmail");

const popup = document.getElementById("popup");
popup.style.display = "none"

BerangkatDari.value = "";
TibaDari.value = "";

infoHarga.innerText = ""
Bangku.value = ""
Date.value = ""

localStorage.clear();

if(username_localstorage || gmail_localstorage){
    username_localstorage && localStorage.setItem("name", username_localstorage)
    gmail_localstorage &&  localStorage.setItem("gmail", gmail_localstorage)
}
}



function Konfirmasi(){
    const haragRute = {
        // Rute dari Indonesia
        "Indonesia - Singapura": 1200,
        "Indonesia - Malaysia": 2200,
        "Indonesia - Cambodia": 3300,
        "Indonesia - Russia": 4500,
        "Indonesia - England": 5300,
        "Indonesia - America": 6800,
        "Indonesia - Roma": 7500,
        "Indonesia - Vatikan": 8100,
        "Indonesia - Yunani": 9200,
        "Indonesia - England": 10500,
    
        // Rute dari Singapura
        "Singapura - Indonesia": 1100,
        "Singapura - Malaysia": 1500,
        "Singapura - Cambodia": 2500,
        "Singapura - Russia": 4700,
        "Singapura - England": 5200,
        "Singapura - America": 6600,
        "Singapura - Roma": 7800,
        "Singapura - Vatikan": 8200,
        "Singapura - Yunani": 9000,
        "Singapura - England": 10300,
    
        // Rute dari Malaysia
        "Malaysia - Indonesia": 2100,
        "Malaysia - Singapura": 1700,
        "Malaysia - Cambodia": 2900,
        "Malaysia - Russia": 4600,
        "Malaysia - England": 5400,
        "Malaysia - America": 7000,
        "Malaysia - Roma": 7300,
        "Malaysia - Vatikan": 8600,
        "Malaysia - Yunani": 9400,
        "Malaysia - England": 10800,
    
        // Rute dari Cambodia
        "Cambodia - Indonesia": 3200,
        "Cambodia - Singapura": 2600,
        "Cambodia - Malaysia": 3100,
        "Cambodia - Russia": 4900,
        "Cambodia - England": 5600,
        "Cambodia - America": 6900,
        "Cambodia - Roma": 7600,
        "Cambodia - Vatikan": 8900,
        "Cambodia - Yunani": 9200,
        "Cambodia - England": 10900,
    
        // Rute dari Russia
        "Russia - Indonesia": 4800,
        "Russia - Singapura": 5000,
        "Russia - Malaysia": 5200,
        "Russia - Cambodia": 5100,
        "Russia - England": 5700,
        "Russia - America": 7200,
        "Russia - Roma": 7400,
        "Russia - Vatikan": 8800,
        "Russia - Yunani": 9300,
        "Russia - England": 11200,
    
        // Rute dari England
        "England - Indonesia": 5200,
        "England - Singapura": 5300,
        "England - Malaysia": 5500,
        "England - Cambodia": 5800,
        "England - Russia": 6000,
        "England - America": 7500,
        "England - Roma": 7700,
        "England - Vatikan": 8300,
        "England - Yunani": 9500,
        "England - America": 11000,
    
        // Rute dari America
        "America - Indonesia": 6700,
        "America - Singapura": 6800,
        "America - Malaysia": 6900,
        "America - Cambodia": 7100,
        "America - Russia": 7200,
        "America - England": 7400,
        "America - Roma": 8000,
        "America - Vatikan": 8700,
        "America - Yunani": 9900,
        "America - England": 12000,
    
        // Rute dari Roma
        "Roma - Indonesia": 7400,
        "Roma - Singapura": 7500,
        "Roma - Malaysia": 7700,
        "Roma - Cambodia": 7800,
        "Roma - Russia": 8000,
        "Roma - England": 8200,
        "Roma - America": 8300,
        "Roma - Vatikan": 9000,
        "Roma - Yunani": 9400,
        "Roma - England": 13000,
    
        // Rute dari Vatikan
        "Vatikan - Indonesia": 8100,
        "Vatikan - Singapura": 8200,
        "Vatikan - Malaysia": 8300,
        "Vatikan - Cambodia": 8400,
        "Vatikan - Russia": 8500,
        "Vatikan - England": 8600,
        "Vatikan - America": 8800,
        "Vatikan - Roma": 9000,
        "Vatikan - Yunani": 9500,
        "Vatikan - England": 14000,
    
        // Rute dari Yunani
        "Yunani - Indonesia": 9000,
        "Yunani - Singapura": 9100,
        "Yunani - Malaysia": 9200,
        "Yunani - Cambodia": 9300,
        "Yunani - Russia": 9400,
        "Yunani - England": 9500,
        "Yunani - America": 9600,
        "Yunani - Roma": 9700,
        "Yunani - Vatikan": 9800,
        "Yunani - England": 15000,
    }
    
    const BerangkatDari = document.getElementById("berangkatDari").value;
    const TibaDari = document.getElementById("menujuKe").value;
    const Bangku = document.getElementById("seat").value;
    const harga = document.getElementById("harga");
    const rute = `${BerangkatDari} - ${TibaDari}`;
    const Date = document.getElementById("date").value;

    const berangkat_dari_value = localStorage.setItem("berangkat_dari", BerangkatDari);
    const TibaDari_value = localStorage.setItem("Tiba_dari", TibaDari);
    const Bangku_value = localStorage.setItem("Bangku", Bangku);
    const Dates = localStorage.setItem("dates", Date)



    const username_localstorage = localStorage.getItem("name");
    const gmail_localstorage = localStorage.getItem("gmail");


    if(!username_localstorage || !gmail_localstorage){

        alert("login dulu ngab")

    } else if (haragRute[rute] !== undefined && Bangku > 0 ){
        const TotalHarga = Bangku * haragRute[rute];
        harga.innerHTML = `${TotalHarga.toLocaleString('id-ID')}` 
        Date.value;
        BerangkatDari.innerHTML = berangkat_dari_value;
        TibaDari.innerHTML = TibaDari_value;
        Bangku.innerHTML = Bangku_value;
        Date.innerHTML = Dates;
    } else{
        alert("username dan email belum tersedia")
    }



   


}



function BuyNow(){

    const BuyTiket = document.getElementById("buyTiket");
    const PopUp = document.getElementById("popup");
    BuyTiket.style.display = "block";
    PopUp.style.display = "none";


    // mengambil id dari buyNow
    const BerangkatDariTiket = document.getElementById("BerangkatDariTiket");
    const TibaKeTiket = document.getElementById("TibaKeTiket");
    const seat_Localhost = document.getElementById("seat_Localhost");
    const date_localhost= document.getElementById("date_localhost");
    const username_Localhost= document.getElementById("username_Localhost");



    // mengambil dari localstorage
    const berangkatDari = localStorage.getItem("berangkat_dari");
    const tibaDari = localStorage.getItem("Tiba_dari");
    const Bangku = localStorage.getItem("Bangku");
    const name = localStorage.getItem("name");
    const dates = localStorage.getItem("dates")

    BerangkatDariTiket.innerHTML = berangkatDari;
    TibaKeTiket.innerHTML = tibaDari;
    seat_Localhost.innerHTML = `${Bangku} Seat People`;
    username_Localhost.innerHTML = name;
    date_localhost.innerHTML = dates;



}







function BatalTiket(){

    const BerangkatDari = document.getElementById("berangkatDari");
    const TibaDari = document.getElementById("menujuKe");
    const infoHarga = document.getElementById("info_harga");
    const Bangku = document.getElementById("seat");
    const Date = document.getElementById("date");


    const username_localstorage = localStorage.getItem("name");
    const gmail_localstorage = localStorage.getItem("gmail");

    const popup = document.getElementById("popup");
    popup.style.display = "none"

    BerangkatDari.value = "";
    TibaDari.value = "";

    infoHarga.innerText = ""
    Bangku.value = ""
    Date.value = ""


    const buyTiket = document.getElementById("buyTiket");
    buyTiket.style.display = "none"


}


// index.html end

// cetak pdf

function cetakTiket(){

    const DataLocalIsi = "hello world";
    var TiketArray = JSON.parse(localStorage.getItem("dataLokal")) || [];
    TiketArray.push(DataLocalIsi)
    localStorage.setItem("dataLokal", JSON.stringify(TiketArray));



    const {jsPDF} = window.jspdf;
    const DataUser = {
        nameUser: localStorage.getItem("name"),
        date: localStorage.getItem("dates"),
        seat: localStorage.getItem("Bangku"),
        BerangkatDari: localStorage.getItem("berangkat_dari"),
        TibaDari: localStorage.getItem("Tiba_dari")

    }


    localStorage.setItem("dataUser", JSON.stringify(DataUser));



    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.setFont("bold")
    doc.text("Travel Together", 10,10);
    doc.setFontSize(12);
    doc.text(`Name: ${DataUser.nameUser}`, 10, 20);
    doc.text(`Date: ${DataUser.date}`, 10, 30)
    doc.text(`Seat: ${DataUser.seat}`, 10, 40)
    doc.text(`Departure: ${DataUser.BerangkatDari}`, 10, 50)
    doc.text(`Arrival: ${DataUser.TibaDari}`, 10, 60)



    doc.save("Flying Together.pdf")




    window.location.reload()
}






function HapusNotif(){

   localStorage.removeItem("dataLokal");
    const konten_notif = document.getElementById("konten_notif");
    const notif_kecil = document.getElementById("notif_kecil");

    if(konten_notif){
        konten_notif.innerHTML = "";
    } if(notif_kecil){
        notif_kecil.remove()
    }
    
}




function cekStatusNotifikasi(){
    const TiketArray = JSON.parse(localStorage.getItem("dataLokal"));

    if(TiketArray && TiketArray.length > 0){
        document.getElementById("notif_kecil").style.display = "block"
    }
}





const booking = document.getElementById("booking");
const KontenBookingh = document.getElementById("container_notifikasi");

booking.addEventListener("click", function(){
    if(KontenBookingh.style.display === "none"){
        KontenBookingh.style.display = "block"
        KontenNotif()
    } else{
        KontenBookingh.style.display = "none"
    }
});


function KontenNotif(){
    const TiketArray = JSON.parse(localStorage.getItem("dataLokal")) || [];
    const count = TiketArray.filter(item => item === "hello world").length;

    const konten_notif = document.getElementById("konten_notif");
    konten_notif.style.display = "block";
    
    // Hapus elemen kloning yang sebelumnya dibuat
    const clonedElements = document.querySelectorAll(".cloned");
    clonedElements.forEach(element => element.remove());

    // Loop untuk klonasi elemen
    for(let i = 1; i < count; i++){
        let clone = konten_notif.cloneNode(true);
        clone.classList.add("cloned");
        document.getElementById("container_notifikasi").appendChild(clone);
    }
}




    



window.onload = function(){
    cekStatusNotifikasi()
}