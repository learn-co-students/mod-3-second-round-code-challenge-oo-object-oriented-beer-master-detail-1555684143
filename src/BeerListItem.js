class BeersList{
    constructor (beers) {
        const  my_ul = document.querySelector('#list-group')
      const my_li = document.createElement('li')
      my_ul.append(my_li)
      my_li.append(beers.name)


      my_li.addEventListener('click', function(e){
        e.preventDefault()
     const my_div = document.querySelector('#beer-detail')
      const my_h1 = document.createElement('h1')
      my_div.append(my_h1)
      const my_image = document.createElement('img')
      my_div.innerHTML = ''
      my_div.append(my_image)
     
      my_image.src = beers.image_url
    
     const  my_h3 = document.createElement('h3')
   
      my_div.append(my_h3)
      
      my_h3.append(beers.name)
  
      const my_input = document.createElement('input')
  
      my_input.value = beers.description
      my_div.append(my_input)
      
      const my_button = document.createElement('button')
      my_button.innerText = 'Save'
      my_div.append(my_button)

      my_button.addEventListener('click', function(e){
       e.preventDefault()
       fetch(`http://localhost:3000/beers/${beers.id}` ,{
   method: 'PATCH',
   headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json' 
   },
   body: JSON.stringify({
    description: my_input.value
   })
})
   .then(function(res){
       return res.json()
   })
   .then(function(beers){
       console.log(beers)
   }) 
      })
    


    })
}
}