window.onload = function() {
  var transition1 = document.getElementById('transition1');
  var transition2 = document.getElementById('transition2');
  var transition3 = document.getElementById('transition3');
  transition1.addEventListener('click', changeClass, false);
  transition2.addEventListener('click', changeClass, false);
  transition3.addEventListener('click', changeClass, false);
}

function changeClass(){
  if (this.className == 'move'){
    this.className = 'still';
    
  }else if (this.className == 'still'){
    this.className = 'move';
    
  }
}


WebFont.load({
    google: {
      families: ['Arvo', 'Open+Sans' , 'Merriweather' , 'Special+Elite']
    }
  });
