
// BUDGET CONTROLLER
var budgetController = (function () {

  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp:0,
      inc: 0
    }
  };
  
  return {
    addItem: function(type, des, val) {
      var newItem, ID;
      if (data.allItems[type].length === 0) {
        ID = data.allItems[type].id = 0;
      } else {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1
      }

      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }

      data.allItems[type].push(newItem);
      
      return newItem;
    },
    testing: function() {
      console.log(data);
    }
  };

})();

// UI CONTROLLER
var UIController = (function() {
  var DOMstrings = {
    inputType: '.add__type',
    descriptionType: '.add__description',
    valueType: '.add__value',
    inputBtn: '.add__btn'
  };

  return {
    getinput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.descriptionType).value,
        value: document.querySelector(DOMstrings.valueType).value
      }
    },
    addListItem: function() {
      // Create HTML string with placeholder text

      html = '<div class="item clearfix" id="income-0"> <div class="item__description">Salary</div> <div class="right clearfix"> <div class="item__value">+ 2,100.00</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'

      // Replace the placeholder text with some actual data

      // Insert the HTML into the DOM
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  };
  
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function() {
    // 1. Get input data from field.
    var input = UICtrl.getinput();

    // 2. Add item to budget controller.
    var newItem = budgetCtrl.addItem(input.type, input.description, input.value);

    // 3. Add item to the UI
  };

 return {
   init: function() {
      console.log('Application has started!');
      setupEventListeners();
   }
 };

})(budgetController, UIController);

controller.init();