// get today's date
var options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    // hour: 'numeric', minute: 'numeric',
    hour12: false
  };
var today = new Date().toLocaleString('en-US', options)
document.getElementById('date').innerHTML = today.toLocaleString('en-US', options);

//randome food and drink query
$(document).ready(function(){
    function getQuote(){
      var food = ['cheese burger', 'steak', 'chioppino', 'fried chicken','spagetti', 'BBQ','sushi', 'ramen', 'Pecking duck', 'steamed veggies', 'boiling crab', 'lamb stew','pizza', 'tacos']; 
      var drink = ['coke', 'cabernet', 'chardonney','spirit','merlot', 'IPA', 'sake', 'plum wine', 'Er Guo Tou (Chinese hard liquor)', 'orange juice', 'corona', 'Malbec','iced water', 'horchata'];
      var num = Math.floor(Math.random()*food.length);
      var randomFood = food[num];
      var randomDrink = drink[num];
      $('.food').text(randomFood);
      $('.drink').text(randomDrink);
      
    };
  $('.btn').on("click", function(){
    getQuote();
  });
});