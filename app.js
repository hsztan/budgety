
// BUDGET CONTROLLER
var budgetController = (function () {



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
    console.log (input);
  };

 return {
   init: function() {
      console.log('Application has started!');
      setupEventListeners();
   }
 };

})(budgetController, UIController);

controller.init();