

function cerrar() {
    const collection = document.getElementsByClassName('more');
    for(let i = 0; i < collection.length; i++){
            if(collection[i].style.display = "block"){
            let modal = collection[i].id
            document.getElementById(modal).style.display = "none"

        }
    }
}

function abrir(elId) {
    const collection = document.getElementsByClassName('more');
    for(let i = 0; i < collection.length; i++){
            if(elId == collection[i].id){
            let modal = collection[i].id
            document.getElementById(modal).style.display = "block"
            break
        }
    }
}

 window.onclick = function(event) {
    const collection = document.getElementsByClassName('more');
    for(let i = 0; i < collection.length; i++){
        let modal = document.getElementById(collection[i].id)
        if (event.target == modal) {
         modal.style.display = "none";
     }
   }
}
 


