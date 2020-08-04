// Storage Controller

// Item Controller
const ItemCtrl = (function () {
  // Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure / State
  const data = {
    items: [
      { id: 0, name: "Steak Dinner", Calories: 1200 },
      { id: 0, name: "Cookie", Calories: 400 },
      { id: 0, name: "Eggs", Calories: 300 },
    ],
    currentItem: null,
    totalCalories: 0,
  };

  // Public Methods
  return {
    getItems: function () {
      return data.items;
    },
    logData: function () {
      return data;
    },
  };
})();

// UI Controller
const UICtrl = (function () {
  // Public Methods
  return {};
})();

// App Controller
const App = (function (ItemCtrl, UICtrl) {
  //Public methods
  return {
    init: function () {
      console.log("Initializing App...");
    },
  };
})(ItemCtrl, UICtrl);

// Initializing App
App.init();
