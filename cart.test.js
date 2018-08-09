const cart = require('./cart');
let cars = require('./data/cars');

describe("tests for Cart Properties", () => {
    afterEach(function () {
        cart.cart = [];
    })
    test("cart should be empty", () => {
        expect(Array.isArray(cart.cart)).toEqual(true);
        expect(cart.cart.length).toEqual(0);
    })
    test("total should be 0", () => {
        expect(cart.total).toBe(0);
    })
})

describe("tests for Cart Methods", () => {
    afterEach(function () {
        cart.cart = [];
        cart.total = 0;
    })

    test("addToCart() should add a car to the cart array", () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);

        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[1]);
    })
    test("removeFromCart() should remove a cart from the cart array", () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[2]);
        cart.addToCart(cars[4]);
        cart.addToCart(cars[6]);
        cart.addToCart(cars[8]);

        cart.removeFromCart(2, cars[4].price);
        cart.removeFromCart(2, cars[6].price);

        expect(cart.cart).toEqual([cars[0], cars[2], cars[8]]);
        expect(cart.cart.length).toEqual(3);
        expect(cart.total).toEqual(cars[0].price + cars[2].price + cars[8].price);
    })
    test("checkout() should empty the cart arr and set total to 0", () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);

        cart.checkout();
        expect(cart.cart.length).toEqual(0);
        expect(cart.total).toEqual(0);
    })
})