class BeerDetails {

    constructor(beerDetails){

        this.beerDetails = beerDetails

        this.div = document.querySelector('#beer-detail')
        this.div.innerHTML = ''

        const nameTag = document.createElement('h1')
        nameTag.innerText = `${this.beerDetails.name}`

        const imageTag = document.createElement('img')
        imageTag.innerText = `${this.beerDetails.image_url}`
        imageTag.src = beerDetails.image_url

        const taglineTag = document.createElement('h3')
        taglineTag.innerText = `${this.beerDetails.tagline}`

        const descriptionTag = document.createElement('INPUT')
        descriptionTag.value = `${this.beerDetails.description}`


        descriptionTag.setAttribute('type','text')

        const editButton = document.createElement('button')
        editButton.classname = 'btn btn-info'
        editButton.innerText = `Save`

        editButton.addEventListener('click', function(e){
            e.preventDefault()

                fetch(`http://localhost:3000/beers/${beerDetails.id}`,{
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                     body: JSON.stringify({
                        "description": descriptionTag.value

                })
             })

                .then(res=> res.json())
                    .then(function(beerDetails){
                        new BeerDetails(beerDetails)

                    })
        })

        this.div.append(nameTag, imageTag, taglineTag, descriptionTag, editButton)
    }
    render() {
    return this.div
}
    renderNewDetails(){
        this.render()
    }

}


