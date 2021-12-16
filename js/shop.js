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
                let filterCart = cart.filter(ncart => ncart===cartList[i])
                console.log('filterCart', filterCart);

                if(filterCart.length===0){
                    cartList[i].quantity=1;
                    cartList[i]['subtotal']=cartList[i]['price']*cartList[i]['quantity'];
                    cartList[i]['subtotalWithDiscount']=cartList[i]['subtotal'];
                    cart.push(cartList[i])

                }else if (filterCart!==0){
                    for(let j=0; j<cart.length; j++){
                        if(cartList[i].id === cart[j].id){
                            cart[j]['quantity']=cart[j]['quantity']+1
                            cart[j]['subtotal']=cart[j]['price']*cart[j]['quantity'];
                            cart[j]['subtotalWithDiscount']=cart[j]['subtotal'];
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
