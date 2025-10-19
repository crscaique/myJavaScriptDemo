import { getStockData } from './fakeStockAPI.js';

setInterval(function(){
  const stockData = getStockData()
  renderStockTicker(stockData)
}, 1500)


let initialPrice = null

function renderStockTicker(stockData) {   
  const stockDisplayName = document.getElementById('name')
  const stockDisplaySymbol = document.getElementById('symbol')
  const stockDisplayPrice = document.getElementById('price')
  const stockDisplayTime = document.getElementById('time') 
  const stockDisplayPriceIcon = document.getElementById('price-icon')    
       
    const {name, sym, price, time} = getStockData()
        
    const priceDirectionIcon = price > initialPrice ? 'green.svg' : 
      price < initialPrice ? 'red.svg' : 'grey.svg'
    
      const priceIconElement = document.createElement('img')
        priceIconElement.src = `svg/${priceDirectionIcon}`
        priceIconElement.alt = 'Price direction icon'
        stockDisplayPriceIcon.innerHTML = ''
        stockDisplayPriceIcon.appendChild(priceIconElement)
                  
          stockDisplayName.textContent = name
          stockDisplaySymbol.textContent = sym
          stockDisplayPrice.textContent = price
          stockDisplayTime.textContent = time
  
            initialPrice = price
}


