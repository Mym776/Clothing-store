

const body = document.querySelector('body')
const main = document.querySelector('main')
const sold_amount = document.querySelector('.sold_amount')
const bar_graph = document.querySelector('.bar_grapgh')
const revenue = document.querySelector('.revenue_amount')

function dashboard(info,data){

    sold_amount.textContent = info.sold
    revenue.textContent = info.revenue +'$'

    const bars_graph = document.querySelector('.bar_graph')
    let ctx = document.createElement('canvas')
    ctx.width= '100%' 
    ctx.classList.add('gragh')

    new Chart(ctx,   {
      type: 'bar',
      data: {
        labels: data.map(row => row.name),
        datasets: [
          {
            label: 'Sold Products',
            data: data.map(row => row.sold)
          }
        ]
      }
    }
  );
  // window.addEventListener('resize',()=>{
  //   console.log(window.innerWidth)
  //   if (window.innerWidth < 768){
  //    ctx.width="100%"
  //   }else{
  //    ctx.width="50%"
  //   }
  // })
 
  bars_graph.appendChild(ctx)
   
    

}

info = {
    sold: 150,
    revenue: 2000
}

//default value for sold amount
sold_amount.textContent = 0

 const data = [
    { name: 'savage shirt', sold: 9 },
    { name: 'disavage shorts', sold: 10 },
    { name: 'flying hat', sold: 7 },
    { name: 'swimming shoes', sold: 11 },
    { name: 'back hide', sold: 4 },
    { name: 'savage shirt', sold: 9 },
    { name: 'disavage shorts', sold: 10 },
    { name: 'flying hat', sold: 7 },
    { name: 'swimming shoes', sold: 11 },
    { name: 'back hide', sold: 4 },
    { name: 'back hide', sold: 4 },
   
    ]

dashboard(info,data)


function gragh_scaler(graph){

}