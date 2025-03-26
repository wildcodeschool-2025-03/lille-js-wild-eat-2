
document.getElementById("formButton").addEventListener("click", function(event) {
    event.preventDefault()
    document.getElementById("message").innerText = "Merci et bienvenue !"
    document.getElementById("form").reset()
    //reset le formulaire 
})

//ajouter success message style "merci mon gars"
