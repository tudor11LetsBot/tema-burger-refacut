function se_duce_la_rezervari(){
const sectiune= document.getElementById('rezervari')
sectiune.scrollIntoView({behavior:'smooth'})
}

function afiseaza_mesaj(){
    const nume= document.getElementById("nume").value; 
     const prenume= document.getElementById("prenume").value;
      const data= document.getElementById("data").value;
       const ora= document.getElementById("ora").value;
     alert(`rezervare facuta pentru ${nume} ${prenume} pe data de ${data} la ora${ora}`)
}