WebFont.load({
    google: {
      families: ['Arvo', 'Open+Sans' , 'Merriweather' , 'Special+Elite']
    }
  });


function loadDate(){

    var dateObject = new Date();
        
    var year = dateObject.getFullYear();
    
    document.getElementById("year").innerHTML = year; 
    document.getElementById("lastModified").innerHTML +=  document.lastModified;
    }