function nameMenuItem(name) {
  return menuItemName = `Delicious ${name}`
};

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type,
  }
};

function addIngredients(item, ingredients) {
  if (ingredients.includes(item)) {
    return ingredients
  } else {
    return ingredients.push(item)
  }
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
  return (price * .9)
}

function createRecipe(title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type,
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}