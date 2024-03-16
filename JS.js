const container = document.getElementById("container")
const inOut = 1.5
// create and attach an image to the DOM tree
let imgElm = document.createElement("img")
imgElm.src = "image.png"

container.appendChild(imgElm)
imgElm.width = "400"
imgElm.height = "250"

// create a delete button the image 

const DeleteButton = document.createElement("button")
DeleteButton.innerText = "Delete"
container.appendChild(DeleteButton)


// zooming 

let zoomInBtn = document.createElement("button")
zoomInBtn.innerText = "+"

container.appendChild(zoomInBtn)

zoomInBtn.addEventListener("click", function(){
    imgElm.width *= inOut
    imgElm.height *= inOut

})

let zoomOutBtn = document.createElement("button")

zoomOutBtn.innerText = "-"
container.appendChild(zoomOutBtn)
zoomOutBtn.addEventListener("click", function(){
    imgElm.width /= inOut
    imgElm.height /= inOut
})


//delete All 

DeleteButton.addEventListener("click", function(){
    imgElm.remove()
    zoomInBtn.remove()
    zoomOutBtn.remove()
    this.remove()
})







