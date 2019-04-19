class BeerListItem {

    constructor(listItem){

        this.listItem = listItem

        this.div = document.querySelector('#list-group')
        let lineItem = document.createElement('li')

        lineItem.classname="list-group-item"
        lineItem.innerText = `${this.listItem.name}`

        lineItem.addEventListener('click', function(e){
            e.preventDefault()
            let newBeerDetail = new BeerDetails (listItem)
            newBeerDetail.renderNewDetails()
        })
        this.div.append(lineItem)

    }
    render(){
        return this.div
    }

    renderNewListItem(){
        this.render()
    }

}