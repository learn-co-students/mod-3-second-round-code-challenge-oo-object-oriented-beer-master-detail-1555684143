document.addEventListener('DOMContentLoaded',()=>{
    fetch ('http://localhost:3000/beers')
        .then ((res)=>res.json())
        .then((listItem)=>{
            listItem.forEach(listItem => {
                let newListItem = new BeerListItem (listItem)
                newListItem.renderNewListItem()
            })
        })

    fetch ('http://localhost:3000/beers')
        .then ((res)=>res.json())
        .then((beerDetails)=>{
            beerDetails.forEach(beerDetails => {
                let newBeerDetails = new BeerDetails (beerDetails)
                newBeerDetails.renderNewDetails()
            })
        })










})