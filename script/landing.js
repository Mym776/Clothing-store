const body = document.querySelector('body')
const main = document.querySelector('main')
const productScroll = document.querySelector('.Product_scroll')


function tile_factory(product){
    
    let tile = document.createElement('article')
    let tile_image = document.createElement('img')
    let tile_name = document.createElement('span')
    let price = document.createElement('span')

    tile.classList.add('Product_box')
    tile_image.classList.add('Productimg')
    tile_image.src = product.image
    tile_name.textContent = product.name 
    price.textContent = product.price 

    tile.addEventListener('click', ()=>{
        window.location.href = '/products?id='+product.id
    })

    tile.appendChild(tile_image)
    tile.appendChild(tile_name)
    tile.appendChild(price)
    productScroll.appendChild(tile)
    console.log('success')
}

product = {
    name: "savage",
    id:100,
    price:200,
    image: 'sample/shirt.jpg'
}
tile_factory(product)
