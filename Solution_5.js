function Product(name, catagory, price, stock){
    this.name = name;
    this.catagory = catagory;
    this.price = price;
    this.stock = stock;
}
function Inventory(){
    this.products = []
}
Inventory.prototype.addproduct = function(product){
    if (product instanceof  Product) {
        this.products.push(product);
        console.log(`Added ${product.name} to the Inventory`);
    }
    else{
        console.log("Invalid Product, Please provide a valid product");
    }
}
Inventory.prototype.deleteProduct = function(productName){
    const index = this.products.findIndex(product => product.name === productName);
    if(index != -1){
        this.products.splice(index, 1)
        console.log(`Deleted ${productName} from the inventory`);
    }
    else{
        console.log(`${productName} is not fount in Inventory`);
    }
}

const inventory = new Inventory()

const product1 = new Product('Laptop', 'Electronics', 50000, 10);
const product2 = new Product('Table', 'Furniture', 3000, 50);
const product3 = new Product('Cargo Pant', 'Garments', 3000, 50);

inventory.addproduct(product1)
inventory.addproduct(product2)
inventory.addproduct(product3)

inventory.deleteProduct('Cargo Pant')