const req = new XMLHttpRequest();

req.onload = function(){
    console.log("IT WORKED");
    console.log(this);
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price)
}

req.onerror = function(){
    console.log("Request Failed :(");
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
req.send()