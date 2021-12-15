// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional

var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1

/* Per llegir l'arxiu json
fetch("/products.json")
    .then (response => response.json())
    .then (json => console.log(json))

const products = JSON.parse(products);
*/


function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

            for (let i=0; i<products.length; i++){
                if(products[i].id == id){
                   cartList.push(products[i])
                }
             }
}
//console.log(cartList);
console.log('cartList:', cartList);

// Exercise 2   
function cleanCart(cartList) {
    cartList.length = 0;
    
    /* Si tenim moltes propietats
    for(let key in subtotal){
        //console.log(`${subtotal[key].value = 0} i ${subtotal[key].discount = 0}`) 
        //No es necessari fer un console.log
        subtotal[key].value = 0;
        subtotal[key].discount = 0;
    }
    */

    subtotal.grocery.value = 0;
    subtotal.grocery.discount = 0;
    subtotal.beauty.value = 0;
    subtotal.beauty.discount = 0;
    subtotal.clothes.value = 0;
    subtotal.clothes.discount = 0;
    

    return console.log(cartList);
}


// Exercise 3
function calculateSubtotals(cartList) {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes

    for(let i=0; i<cartList.length; i++){
            switch(cartList[i].type){
                case 'grocery':
                    subtotal.grocery.value += cartList[i].price;
                    break;

                case 'beauty':
                    subtotal.beauty.value += cartList[i].price;
                    break;
    
                case 'clothes':
                    subtotal.clothes.value += cartList[i].price;
                    break;
            }
    }

    return console.log(subtotal);
}



// Exercise 4
function calculateTotal(cartList) {
    // Calculate total price of the cart either using the "cartList" array

        let totalPrice=0;
        for(let indexArray in cartList) {
                totalPrice += cartList[indexArray].price;
        }

        console.log(totalPrice);
}



// Exercise 5
    function generateCart(cartList) {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    console.log('cartList:', cartList);

        for(let i=0; i<cartList.length; i++){
                let filterCart = cart.filter(ncart => {ncart===cartList[i]})
                console.log('filterCart', filterCart);

                if(filterCart.length===0){
                    cartList[i].quantity=1;
                    cartList[i].subtotal=0;
                    cartList[i].subtotalWithDiscount=0;
                    cart.push(cartList[i])

                }else if (filterCart!==0){
                    for(let j=0; j<cart.length; j++){
                        if(cartList[i].id === cart[j].id){
                            cart[j]['quantity']=cart[j]['quantity']+1

                }
                }
            }
        }
        console.log('cart', cart)


    /*
    cartList.map(elementcartList => {
        elementcartList.quantity=1;
        elementcartList.subtotal=0;
        elementcartList.subtotalWithDiscount=0;

        console.log('cartListQuantitySubtotals', cartList);

        if(cart.length===0){
            elementcartList.quantity=0;
            cart.push(elementcartList);
        }
        console.log('cart', cart)
           
        for (let i=0; i<cart.length; i++){

                    if(elementcartList.id === cart[i].id){
                        cart[i]['quantity']=cart[i]['quantity']+1
                    
                    }else if (elementcartList.id !== cart[i].id){
                        cart.push(elementcartList)
                    }
            }        
    })

    */
}
    console.log('cart:', cart);

/*

    var productsInCart = [];

    function generateCart (cartList) {

    cartList.map(elementcartList => {
        

        elementcartList.quantity=1;
        elementcartList.subtotal=0;
        elementcartList.subtotalWithDiscount=0;


        for (let i=0; i<=productsInCart.length; i++){

            if(elementcartList !== productsInCart[i]){
                productsInCart.push(elementcartList)
                cart.push(elementcartList)

            }else{
                cart.push(elementcartList.quantity++)
            }
    }
        
    })
    
    console.log(cart);
    console.log(productsInCart);

}
*/
/*
var productsInCart = [];

function generateCart(cartList) {

cartList.map(elementcartList => {
    
    elementcartList.quantity=0;
    elementcartList.subtotal=0;
    elementcartList.subtotalWithDiscount=0;

    if(productsInCart.length===0){
        elementcartList['quantity'] = elementcartList['quantity']+1;
        console.log(`elementcartList quan productsInCart.length=0  ${elementcartList}`)
        productsInCart.push(elementcartList);
        cart.push(elementcartList);
    }

    for (let i=0; i<productsInCart.length; i++){

        if(elementcartList.id !== productsInCart[i].id){
            elementcartList['quantity'] = elementcartList['quantity']+1;
            productsInCart.push(elementcartList);
            cart.push(elementcartList);

        }else if(elementcartList.id===productsInCart[i].id && elementcartList.quantity!==productsInCart[i].quantity){
            cart.push(elementcartList.quantity+1)
        }
    }
    
    return console.log(cart, productsInCart);
    //console.log(productsInCart);
})




console.log(cart);
console.log(productsInCart);

}

*/

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}



/*
El array cart contendrá los productos sin repetir junto con las correspondientes propiedades de quantity, etc.

1. Crea un array llamado productsInCart que tendrá los nombres de los productos que has ido añadiendo al array cart.
2. Recorre el array cartList y evalúa si el nombre del producto sobre el que estás iterando está presente en productsInCart.
3. Si no está presente, debes añadir un nuevo producto con los valores de quantity = 1, etc. al array cart. También debemos añadir el nombre del producto al array productsInCart, para que si vuelve a salir un producto con el mismo nombre, se meta por el else del if, que gestionaremos en el siguiente paso. Como este paso es más sencillo que el siguiente, asegúrate de crear un array cart en el que a pesar de haber productos repetidos en cartList, en el array cart el quantity siempre será 1. Completa y comprueba este paso antes de hacer el siguiente.
4. Si está presente será porque ya hemos añadido el producto a la variable Cart y debemos modificar el objeto correspondiente en el array cart, incrementando los valores de quantity, etc










*/ 