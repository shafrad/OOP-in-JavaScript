class constructorBook {
    constructor(price, amount_left, discount) {
        var _price = price; 
        var _amount_left = amount_left;
        var _discount = discount;
    }
    set price(price) {
        this._price = price;
    }
    get price() {
        return this._price;
    }
    add_amount(amount_left) {
        this._amount_left = amount_left;
    }
    sell(sell) {
        this._amount_left = this._amount_left - sell;
    }
    check_amount() {
        return this._amount_left;
    }
    set discount(discount) {
        this._discount = discount;
    }
    get discount() {
        return this._discount;
    }
    get_net_price(price, discount) {
        this.res = (100-discount)/100 * price;
        return this.res;
    }
}

const obj = new constructorBook(8000, 5, 10);
var a = obj.get_net_price(8000,10)
// var amount_1 = obj.add_amount(5);
obj.add_amount(5);
obj.sell(1);
var amount_1 = obj.check_amount();
console.log(obj.check_amount());
console.log(obj.get_net_price(8000,10));

const obj1 = new constructorBook(10000, 5, 10);
var b = obj1.get_net_price(10000,10)
obj1.add_amount(5)
var amount_2 = obj1.check_amount();
console.log(obj1.check_amount());
console.log(obj1.get_net_price(10000,10));

const obj2 = new constructorBook(15000, 5, 10);
var c = obj2.get_net_price(15000,10)
obj2.add_amount(5)
var amount_3 = obj2.check_amount();
console.log(obj2.check_amount());
console.log(obj2.get_net_price(15000,10));

class total {
    constructor(a, b, c, amount_1, amount_2, amount_3) {
        this._a = a;
        this._b = b;
        this._c = c;
        this._amount_1 = amount_1;
        this._amount_2 = amount_2;
        this._amount_3 = amount_3;
    }
    get_total_amount_left(_amount_1, _amount_2, _amount_3) {
        this.res_amount = this._amount_1 + this._amount_2 + this._amount_3;
        return this.res_amount;
    }
    get_total_net_price(a, b, c) {
        this.res = this._a + this._b + this._c;
        return this.res;
    }
}
const obj3 = new total(a, b, c, amount_1, amount_2, amount_3);
console.log(obj3.get_total_amount_left(amount_1, amount_2, amount_3));
console.log(obj3.get_total_net_price(a, b, c));