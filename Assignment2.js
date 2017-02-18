/**********************************
 *          ALL DATA              *
 *  write your CustomerDB Object  *
 *      BELOW this Object         *
 **********************************/

var allData = [
    {type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
    {type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
    {type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
    {type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
    {type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
    {type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
    {type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
    {type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},         
    {type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
    {type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
    {type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
    {type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
    {type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
    {type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
    {type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
    {type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
    {type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];

/*  Write your CustomerDB Object Here.  Do not forget to uncomment the "TEST DATA" section
     when you're ready.  Your code is required to run against these tests before you submit */

let CustomerDB = {
  customers: [], 
  address: [],
  stores: [],
  
  insertData: function(someData) {
    console.log(someData);
    for (let i = 0; i < someData.length; i++) {
      if(someData[i].type == "store") { this.addStore(someData[i].data); }
      else if(someData[i].type == "customer") { this.addCustomer(someData[i].data); }
      else if(someData[i].type == "address") { this.addAddress(someData[i].data); }
    }
  },
  
  // Get the customer's current time and push it to the array
  addCustomer: function(customerObj) {
    let currentTime = new Date();
    customerObj.add_date = currentTime;
    this.customers.push(customerObj.add_date);
  },
  
  // Take a customer id and spit their data out 
  outputCustomerById: function(customer_id) {
    console.log("All Customers");
    for (var i = 0; i < this.customers.length; i++) {
      if(customer_id == this.customers[i].data.customer_id) {
        console.log("Customer: " + customer_id + ": " + this.customers[i].data.first_name + " " + 
                    this.customers[i].data.last_name + " (" +
                    this.customers[i].data.email + ")");
        console.log(this.customers[i].data.address + " " + this.customers[i].data.city + ", " + this.customers[i].data.province + ". " + this.customers[i].data.postal_code);
        console.log("Joined: " + this.customers[i].data.add_date);
      }
    }
  },
  
// This method takes no parameters and simply outputs all customer data
  outputAllCustomers: function() {
    console.log("All Customers");
    for(var i = 0; i < customers.length; i++) {
        console.log("Customer " + customers[i].data.customer_id + " " + customers[i].data.first_name + " " + 
        customers[i].data.last_name + " (" + customers[i].data.email + ") ");
        console.log("Home Address: " + getAddressById(customers[i].address_id));
        // Also do join date
        console.log("Join date: " + " " + customers[i].data.add_date);
    }
  },
  
  // This method takes a store_id and outputs all of the customer data for the corresponding store_id from the "customers" array
  outputCustomersByStore: function(store_id) {
        for (var i = 0; i < customers.length; i++) {
          if(store_id == this.customers[i].data.store_id) {
            console.log('Customers in store ' + this.customers[i].data.name);
      }
    }
  },
  
  // Take a number representing a customer_id and searches through the customers array
  // to remove the customer with the matching customer_id property
  // Also make sure that the corresponding address is removed from the addresses array
  // only if there are no customer or store objects still using it
 removeCustomerById: function(customer_id){
    for (var i = 0; i < this.customer.length; i++) {
      if(customer_id == this.customer[i].customer_id) { this.customer.splice(i, 1); }
    }
  },
  
  // Add addressObj to the addresses array if its type is address
  addAddress: function(addressObj) {
    if(addressObj.type == "address") { this.address.push(addressObj); }
  },
  
  // Take a number representing address_id and search through the "addresses" array to find an address object that has a matching "address_id"
  getAddressById: function(address_id) {
    for (var i = 0; i < this.address.length; i++) {
      if(address_id == this.address[i].data.address_id) {
        return this.address[i].data.address_id + " in the city of " + this.address[i].data.city;
      }
    }
  },
  
  // Output all addresses
  outputAllAddresses: function() {
    console.log("All Addresses");
    for (var i = 0; i < this.address; i++) {
      console.log("Address " + this.address[i].data.address_id + ": " + this.address[i].data.address + " " + this.address[i].data.city
      + ", " + this.address[i].data.province + " " + this.address[i].data.postal_code);
    }
  },
  
  // Search through the address array and remove any address with a matching address_id only if
  // it isn't referenced by a customer object in the customers array or store object in the stores array
  removeAddressById: function(address_id) {
    // Use array.splice() to modify the values
  },
  
  // Add store object to array
  addStore: function(storeObj) {
    if(storeObj.type == "store") { this.stores.push(storeObj); }
  },
  
  // Check if ID matches and then output the store name
  getStoreById: function(store_id) {
    for (var i = 0; i < this.stores.length; i++) {
      if(store_id == this.stores[i].data.store_id) {
        console.log(stores[i].data.name);
      }
    }
  },
  
  // Output all stores
  outputAllStores: function() {
    console.log("All Stores");
    for (var i = 0; i < this.stores; i++) {
      console.log("Store " + stores[i].data.store_id + ": " + stores[i].data.name);
      console.log("Location: " + getAddressById(stores[i].data.address_id));
    }
  }
};

/**********************************
 *          TEST DATA             *
 *  write your CustomerDB Object  *
 *      ABOVE this code           *
 *                                *
 *  Uncomment this block of code  *
 *  when you're ready to test     *
 *  your CustomerDB Object        *
 *                                *
 *  You MUST Hand in your code    *
 *  with the test data            *
 *  uncommented, as this will     *
 *  help check your code for      *
 *  correctness                   *
 **********************************/



// Insert all Data into the Database

CustomerDB.insertData(allData);
/*
// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n"); 

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n"); 

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n"); 

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

*/
