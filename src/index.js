document.addEventListener('DOMContentLoaded', () => {
    console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
    
})
const newBeerListItem = function(beer){
 const beerDiv = document.querySelector('#list-group')
        const li = document.createElement('li')
        li.className = "list-group-item"
        li.innerText = beer.name 
        beerDiv.append(li)
        li.addEventListener('click', function(e){
            e.preventDefault()
             //console.log("clicked")
             

            // const clickBeerDetails = function
            const beerDetail = document.querySelector('#beer-detail')
            beerDetail.innerHTML = ''
            const beerName = document.createElement('h1')
            beerName.innerText = beer.name
            beerDetail.append(beerName)

            const imgTag = document.createElement('img')
            imgTag.src = beer.image_url
            beerDetail.append(imgTag)

            const h3 = document.createElement('h3')
            h3.innerText = beer.tagline
            beerDetail.append(h3)

            const type = document.createElement('input')
            type.innerText = beer.description
            beerDetail.append(type)

            const editBtn = document.createElement('button')
            editBtn.id = "edit-beer"
            editBtn.class = "btn btn-info"
            editBtn.innerText = "Save"
            beerDetail.append(editBtn)
            
            const input = beer.description.value
            
            editBtn.addEventListener('click', function(e){
                e.preventDefault()
                console.log("hi")

                fetch(`http://localhost:3000/beers/${beer.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    },
                body: JSON.stringify({
                    description: input
                })    
                })
             })


            
        })
        
        
        
        }


fetch('http://localhost:3000/beers')
    .then(function(response){
        return response.json()
    })
    .then(function(beerData){
        beerData.forEach(function(beer){
            //console.log(beerData)
            newBeerListItem(beer)
        })

    })
