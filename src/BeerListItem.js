class BeerListItem{
    constructor(beer){
        const beerDiv = document.querySelector('#list-group')
        const li = document.createElement('li')
        li.className = "list-group-item"
        li.innerText = beer.name 
        beerDiv.append(li)

        beerDiv.addEventListener('click', function(e){
            e.preventDefault()
            console.log("clicked")


        //     const clickBeerDetails = function
        //     const beerDetail = document.querySelector('#beer-detail')
        //     const beerName = document.createElement('h1')
        //     beerName.innerText = beer.name
        //     beerDetail.append(beerName)

        //     const imgTag = document.createElement('img')
        //     imgTag.src = beer.image
        //     beerDetail.append(imgTag)

        //     const h3 = document.createElement('h3')
        //     h3.innerText = beer.tagline
        //     beerDetail.append(h3)

        //     const type = document.createElement('input')
        //     type.innerText = beer.description
        //     beerDetail.append(type)

        //     const editBtn = document.createElement('button')
        //     editBtn.id = "edit-beer"
        //     editBtn.class = "btn btn-info"
        //     editBtn.innerText = "Save"


            
         })
    }
    }

