fetch('http://localhost:3000/beers')
.then(function(res){
    return res.json()
})
.then(function(beersList){
    console.log(beersList)
    beersList.forEach(function(beers){
       new BeersList(beers)
    

  
})
})
