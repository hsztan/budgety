
// BUDGET CONTROLLER
var budgetController = (function () {



})();

// UI CONTROLLER
var UIController = (function() {



})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  document.querySelector('.add__btn').addEventListener('click', function() {
    console.log('Button was clicked!')
  });

  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {

    }
    
  });

})(budgetController, UIController);
