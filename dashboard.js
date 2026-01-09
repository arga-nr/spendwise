let stuffName, price; 

document.getElementById("submit"). onclick = function() {

    stuffName = document.getElementById("transaction-name").value;
    price = parseFloat(document.getElementById("transaction-price").value);

    console.log(stuffName, typeof stuffName);
    console.log(price, typeof price);

}