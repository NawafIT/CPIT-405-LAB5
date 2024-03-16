const container = document.getElementById("container")
const inOut = 1.5
// create and attach an image to the DOM tree
function handleImageSelect(event) {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = function (event) {
        // Create an image element
        let imgElm = document.createElement("img")
        imgElm.src = event.target.result
        imgElm.width = "400"
        imgElm.height = "250"
        

        // Append the new image to the container
        container.appendChild(imgElm)

        // create a delete button the image 

        const DeleteButton = document.createElement("button")
        DeleteButton.innerText = "Delete"
        container.appendChild(DeleteButton)


        // zooming 
        let zoomInBtn = document.createElement("button")
        zoomInBtn.innerText = "+"

        container.appendChild(zoomInBtn)

        zoomInBtn.addEventListener("click", function () {
            imgElm.width *= inOut
            imgElm.height *= inOut

        })

        let zoomOutBtn = document.createElement("button")

        zoomOutBtn.innerText = "-"
        container.appendChild(zoomOutBtn)
        zoomOutBtn.addEventListener("click", function () {
            imgElm.width /= inOut
            imgElm.height /= inOut
        })


        //delete All 
        DeleteButton.addEventListener("click", function () {
            imgElm.remove()
            zoomInBtn.remove()
            zoomOutBtn.remove()
            this.remove()
        })
    }

    reader.readAsDataURL(file)
    
}

// Add event listener to the file input
const imageInput = document.getElementById('imageInput')
imageInput.addEventListener('change', handleImageSelect)









