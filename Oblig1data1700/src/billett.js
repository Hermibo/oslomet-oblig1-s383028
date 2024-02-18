let billettRegister=[];

function validerFornavn(fornavn){
    const regexp = /^[a-zA-ZæøåÆØÅ.\-]{2,20}$/;
    const ok = regexp.test(fornavn);
    if(!ok) {
        ("feilFornavn").html("Navnet må bestå av 2 til 20 bokstaver");
        return false;
    } else {
        ("feilFornavn").html("");
        return true;
    }
}
function validerEtternavn(etternavn){
    const regexp = /^[a-zA-ZæøåÆØÅ.\-]{2,20}$/;
    const ok = regexp.test(etternavn);
    if(!ok) {
        ("feilEtternavn").html("Navnet må bestå av 2 til 20 bokstaver");
        return false;
    } else {
        ("feilEtternavn").html("");
        return true;
    }
}
function validerAntall(antall){
    const regexp = /^[0-9]{1,99}$/;
    const ok = regexp.test(antall);
    if(!ok) {
        ("feilAntall").html("Antall billetter må være et tall mellom 1 og 99");
        return false;
    } else {
        ("feilAntall").html("");
        return true;
    }
}
function validerTelefonnr(telefonnr){
    const regexp = /^[0-9]{8}$/;
    const ok = regexp.test(telefonnr);
    if(!ok) {
        ("feilTelefonnr").html("Telefon nummeret må være 9 siffer og kun siffer");
        return false;
    } else {
        ("feilTelefonnr").html("");
        return true;
    }
}
function validerEpost(epost){
    const regexp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const ok = regexp.test(epost);
    if(!ok) {
        ("feilEpost").html("Epost må være valid");
        return false;
    } else {
        ("feilEpost").html("");
        return true;
    }
}
function visBillettRegister(){
    let ut = "<table><tr>"
    for (let p of billettRegister){
        ut+="<tr>";
        ut+="<td>"+p.film+"</td><td>"+p.antall+"</td><td>"+p.fornavn+"</td><td>"+p.etternavn+"</td><td>"+p.telefonnr+"</td><td>"+p.epost+"</td>";
        ut+="</tr>";
    }
    document.getElementById("billettRegister").innerHTML=ut;
}
function registrer(){
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const epost = document.getElementById("epost").value;
    const antall = document.getElementById("antall").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const film = document.getElementById("film").value;

    const billett = {
        antall : antall,
        fornavn : fornavn,
        etternavn : etternavn,
        telefonnr : telefonnr,
        epost : epost,
        film : film
    };
    billettRegister.push(billett);
    document.getElementById("film").value="";
    document.getElementById("antall").value="";
    document.getElementById("fornavn").value="";
    document.getElementById("etternavn").value="";
    document.getElementById("telefonnr").value="";
    document.getElementById("epost").value="";
    visBillettRegister()}
function slettBillett(){
    let tom = "<table><tr>";
    document.getElementById("billettRegister").innerHTML=tom;
    billettRegister = [];
}