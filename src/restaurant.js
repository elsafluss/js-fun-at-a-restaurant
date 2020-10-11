function createRestaurant(restaurantNameValue) {
  var myRestaurant = {
    name: restaurantNameValue,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  }
  return myRestaurant
}

function addMenuItem(myRestaurant, menuItemName) {
  if (myRestaurant.menus[menuItemName.type].includes(menuItemName) === false) {
    myRestaurant.menus[menuItemName.type].push(menuItemName)
  }
  return myRestaurant
}

function removeMenuItem(myRestaurant, menuItemName, menuType) {
  if (myRestaurant.menus[menuType].some((element) => element.name === menuItemName)) {
    myRestaurant.menus[menuType].splice(menuItemName.type, 1)
    return `No one is eating our ${menuItemName} - it has been removed from the ${menuType} menu!`
  } else {
    return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}