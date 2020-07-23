window.onload = function() {
    let transition1 = document.getElementById('transition1');
    let transition2 = document.getElementById('transition2');
    let transition3 = document.getElementById('transition3');
    transition1.addEventListener('click', changeClass, false);
    transition2.addEventListener('click', changeClass, false);
    transition3.addEventListener('click', changeClass, false);
  }
  
  function changeClass(){
    let a = document.getElementById('moveBody')
    let b = document.getElementById('moveFace')

    if (a.className == 'move'){
      a.className = 'still';
      b.className = 'still';
      
    }else if (a.className == 'still'){
      a.className = 'move';
      b.className = 'move';
      
    }
  }