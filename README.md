## Description

AryShoes is an SPA to simulate a fake shoes store with cart funcionality to handdle the products, including API connection, stock verification and final value operations.

## Tecnologies used
* ReactJS
* Redux
* Redux Saga
* React Hooks

## Usage 

After running the API, you can add the shoes to the cart, and change the quantity of them. After click in <b>Add to cart</b> the screen will redirect you to the cart window, showing the curent products in the cart.  
<br>
<p align="center">
<img src="https://user-images.githubusercontent.com/31252524/73498678-b9d62600-439c-11ea-9b13-b6eeaa7767fa.png" width="500" align="middle">
</p>
<br>
If a quantity reach a value that is greater than what is in stock amount, the aplication will return a warning message.
<br>
<p align="center">
<img src="https://user-images.githubusercontent.com/31252524/73498750-ee49e200-439c-11ea-89db-66d2d9c310b9.png" width="500" align="middle">
</p>
<br>
The cart screen will show the quantity of the shoes selected and the total sum of the products listed, simulating a real e-commerce.
<br>
<p align="center">
<img src="https://user-images.githubusercontent.com/31252524/73498837-349f4100-439d-11ea-9f53-7f52005787a6.png" width="500" align="middle">
</p>

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn json-server server.json -p 3333`
Runs the fake API on port 3333 of your computer, containing the images and the data of the product.
This command needs to be running concurrently with the aplication.
