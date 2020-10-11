class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }
  // function createRestaurant(restaurantNameValue) {
  //   var myRestaurant = { **this.restaurant**
  //     name: restaurantNameValue,
  //     menus: {
  //       breakfast: [foodItem.something],
  //       lunch: [],
  //       dinner: [],
  //     },
  //   }
  //   return myRestaurant
  // }
  // function addMenuItem(myRestaurant, menuItemName) {
  //   if(myRestaurant.menus[menuItemName.type].includes(menuItemName) === false) {
  //     myRestaurant.menus[menuItemName.type].push(menuItemName)
  //   }
  //   return myRestaurant
  // }
  greetCustomer(customerName, isMorning) {
    if(isMorning) {
      return `Good morning, ${customerName}!`
    }
    return `Hello, ${customerName}!`
  }
  checkForFood(foodItem) {
    if(this.restaurant.menus[foodItem.type].includes(foodItem)) {
      return `Yes, we're serving ${foodItem.name} today!`
    }
    return `Sorry, we aren't serving ${foodItem.name} today.`
  }
}


module.exports = Chef;