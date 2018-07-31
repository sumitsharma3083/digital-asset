 
  var body = document.querySelector('#home-body');
  var newyorkdescription = document.querySelector('#newyork-description');
  var londondescription = document.querySelector('#london-description');
  var delhidescription = document.querySelector('#delhi-description');
  body.onscroll = function(){
   
      if(Math.trunc(pageYOffset) > 206)
      {
          setTimeout(() => {
            newyorkdescription.className = 'newyork-description-anim';
          }, 500);
      }
      if(Math.trunc(pageYOffset) > 359)
      {
        setTimeout(() => {
            londondescription.className = 'london-description-anim';
          }, 500);
      }
     if(Math.trunc(pageYOffset) > 538)
     {
         setTimeout(() => {
            delhidescription.className = 'delhi-description-anim';
         },500);
     }
  }

 
  // THE animation effect on the form element in more page