
// ALTERANDO HUMOR DO PERSONAGEM 

var h4 = document.querySelector('#situ-atual')
console.log(h4.innerHTML)




function mudarHumor() {

    if (h4.innerHTML === "Situação: Simples Humano") {
        document.querySelector("#banner-hulk").src="HULKI.png";
        h4.innerHTML = "Situação: Hulk Esmaga"
    } else if ((h4.innerHTML === "Situação: Simples Humano") || (h4.innerHTML === "Situação: Hulk Esmaga")){
         h4.innerHTML = "Situação: Hulk Nerdão"
         document.querySelector("#banner-hulk").src="HULKA.png";
    } else {
        h4.innerHTML = "Situação: Simples Humano"
        document.querySelector("#banner-hulk").src="BRUCIN.png";
    }

    

    


}





