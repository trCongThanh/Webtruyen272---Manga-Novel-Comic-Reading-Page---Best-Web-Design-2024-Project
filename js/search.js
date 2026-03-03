
    
    document.addEventListener("DOMContentLoaded", function() {
      var button = document.querySelector('.actionbtn'); 
      // Gán sự kiện onclick cho nút
      if(button){
      button.addEventListener('click', function(event) {
        window.location.href="testsearch.html?datachoose=Action";
      });
                }
    });
    document.addEventListener("DOMContentLoaded", function() {
      var button = document.querySelector('.adventurebtn'); 
      // Gán sự kiện onclick cho nút
      if(button){
      button.addEventListener('click', function(event) {
        window.location.href="testsearch.html?datachoose=Adventure";
      });
                }
    });
    document.addEventListener("DOMContentLoaded", function() {
      var button = document.querySelector('.mysterybtn'); 
      // Gán sự kiện onclick cho nút
      if(button){
      button.addEventListener('click', function(event) {
        window.location.href="testsearch.html?datachoose=Mystery";
      });
                }
    });
    document.addEventListener("DOMContentLoaded", function() {
      var button = document.querySelector('.morebtn'); 
      // Gán sự kiện onclick cho nút
      if(button){
      button.addEventListener('click', function(event) {
        window.location.href="chontheloai.html";
      });
                }
    });
    function makeDiv()
    {
        
        var element = document.querySelector('.search-bar-container');
        element.addEventListener('animationend', function(event) {
            if (event.animationName === 'grow') {
             
            console.log('Animation ended!');
            var nav = document.querySelector('nav');
            var newDiv = document.createElement("div");
            newDiv.style.width="400px";
            newDiv.style.height="100px";
            newDiv.style.position = "absolute";
            newDiv.style.top = "80px";
            newDiv.style.left = "39%";
            newDiv.classList.add('divgrow');
            newDiv.classList.add('type');
            newDiv.addEventListener('animationend', function(event)
              {
                var images = [
               { url: 'https://lh3.google.com/u/0/d/1qq3xcbNEaL2OLSdZAn7VfcoVGTweLko5=k', text: 'Action' },
               { url: 'https://lh3.google.com/u/0/d/1b3MBlIFQllMOSh0EPdqaJWbupwHISz-N=k', text: 'Adventure' },
               { url: 'https://lh3.google.com/u/0/d/1nPOgvYPF6ptc8AC4f8wsfVW0pT11LBfJ=k', text: 'Comedy' },
               { url: 'https://lh3.google.com/u/0/d/1TlrXsO4kvd3cX5F3kBYpk1S1tbNadQVP=k', text: 'Fantasy' },
               { url: 'https://lh3.google.com/u/0/d/17AvNHLcP9LARIaC0TnB0xkpGEF2M5_wY=k', text: 'Mystery' },
               { url: 'https://lh3.google.com/u/0/d/1vP2_-ofhGtvFl9oT0IelPDPiwsWNMMLL=k', text: 'Romace' }
                ];
                var parentContainer = document.querySelector('.type');


                images.forEach(function(imageData) {
                var hinhanhDiv = document.createElement('div');
                hinhanhDiv.classList.add('hinhanh');
                hinhanhDiv.style.backgroundImage = "url('" + imageData.url + "')";
                hinhanhDiv.classList.add('hoverdiv')
                hinhanhDiv.id=imageData.text;
                hinhanhDiv.addEventListener('click', () => {
                  window.location.href="testsearch.html?datachoose="+hinhanhDiv.id+"&category=All";
              });
                

    // Create div element for text
               var textDiv = document.createElement('div');
                            textDiv.classList.add('text');
                            textDiv.textContent = imageData.text;

    // Append textDiv to hinhanhDiv
                           hinhanhDiv.appendChild(textDiv);

    // Append hinhanhDiv to parent container
                        parentContainer.appendChild(hinhanhDiv);
                      });
                      });
            nav.appendChild(newDiv);
            
            }
            });
           
    }
    function searchlistener()
    {
      var body = document.querySelector('body'); 
      var nav = document.querySelector('header'); 
      var header = document.querySelector('nav'); 
      var searchbar = document.querySelector('.search-bar-container');
      searchbar.addEventListener("click",function(event)
            { let windowWidth = window.innerWidth;
              if (windowWidth > 774) {
              body.classList.add('animation');
             nav.classList.add('animation');
             header.classList.add('animation');}
            });
    }
    document.addEventListener("DOMContentLoaded", function() {
        reverse();
        searchlistener();
        makeDiv();   
    });
    function reverse()
    {
      
      var search = document.querySelector('.search-bar-container');
      var home = document.querySelector('.Home');
    document.documentElement.addEventListener('click', function(event) {
        if (!search.contains(event.target)) {
            console.log('ok');
            var newDiv = document.querySelector(".type");
            newDiv.remove();
        var all = document.querySelectorAll('*');
        all.forEach(function(element) {
            element.classList.remove('animation');
            element.classList.add('reverse');
        });
        home.addEventListener('animationend', function(event) {
      var event = new Event('reverseCompleted');
      document.dispatchEvent(event);
      });}
    });
    }
    document.addEventListener('reverseCompleted', function(){
      var all = document.querySelectorAll('*');
        all.forEach(function(element) {
            element.classList.remove('reverse');})
    });