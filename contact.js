
document.getElementById("formButton").addEventListener("click", function(event) {
    event.preventDefault()
    document.getElementById("message").innerText = "Merci pour votre contribution !"
    document.getElementById("form").reset()
  
})

//ajouter success message style "merci mon gars"
