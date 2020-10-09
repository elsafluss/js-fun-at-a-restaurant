function takeOrder(newOrder, orderList) {
  if(orderList.length >= 3) {
    orderList
  } else {
    orderList.push(newOrder)
  }
}

function refundOrder(removeOrder, orderNumber) {
  orderNumber.splice((removeOrder - 1), 1)
}

function listItems(deliveryOrders, orderItemName) {
  var output = ""
  for(var i = 0; i < deliveryOrders.length - 1; i++) {
    var currentElement = deliveryOrders[i].item
    output += (currentElement + ", ")
  }
  output += deliveryOrders[deliveryOrders.length - 1].item
  return output
} //array.join, array.split

function searchOrder(orderList, orderName) {
  for(var i = 0; i < orderList.length; i++) {
    if(orderList[i].item === orderName) {
      return true
    }
  }
  return false
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}