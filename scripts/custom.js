$(document).ready(function() {
    $(".title").lettering();

    lcount = 0;
    letterArray = ['char1', 'char2', 'char3', 'char4', 'char5', 'char6'];
    
    var letterAni = anime({
      targets: '.title .char1',
      opacity: 1,
      scale: [0, 1],
      delay: 0,
      elasticity: 10,
      duration: 300,
      direction: 'normal',
      loop: false,
      autoplay: false,
      complete: function(){
        lcount++;

        if( lcount > 7) {
          $('.first-half').addClass('hidden');
          $('.half').removeClass('hidden');
          ani1.play();
        }

        if( lcount > 6 ) {
          letterAni.play({
            targets: '.title',
            //translateX: [-$(window).width()],
            //translateY: [-$(window).height()/2],
            delay: 500,
            scale: 0,
            opacity: 0,
            duration: 300,
          });
          return;
        }
        letterAni.play({
          targets: '.title .'+letterArray[lcount]
        });
      }
    });

    letterAni.play();
});




var nameAni = anime({
  targets: '.name',
  opacity: [1],
  scale: [0,1],
  delay: [0],
  direction: 'normal',
  autoplay: false
});

var arrays = ['one', 'two', 'three', 'four', 'five'];
var nameArrays = ['name', 'tag', 'com', 'social', 'email'];
var count = 0;

var ani1 = anime({
  targets: '.p-one',
  opacity: 1,
  scale: {
    value: [.5, .7],
    delay: 500,
    duration: 250
  },
  translateX:
    {
      value: function(el, index){
        return [-$(window).width(), 0];
      },
      delay: 500,
      duration: 500
    },
  translateY: {
    value: [-$(window).height()*2, 0],
    delay: 500,
    duration: 500
  },
  rotate: [200],
  elasticity: 400,
  autoplay: false,
  delay: 0,
  borderRadius: 5,
  direction: 'normal',
  complete: function(){
    count++;

    if( count > 5 ) {
      aniAll.play();
      return;
    }

    nameAni.play({
      targets: '.'+nameArrays[count-1]
    });
    ani1.play({
      targets: '.p-'+arrays[count]
    });
  }
});

var colors = ['#B23A48', '#06D6A0', '#FFD166', '#E4FFE1', '#247BA0'];
var currColor = 1;
var prevColor = -1;
var aniAll = anime({
  targets: '.point',
  elasticity: 400,
  background: {
    value: function(el, index){
      return colors[4-index];
    },
    duration: 500,
    delay: function(el, index) {
      return index * anime.random(150, 80);
    }
  },
  rotate: [200, 560],
  scale: [.5, .7],
  duration: 1000,
  delay: function(el, index) {
    return index * anime.random(150, 80);
  },
  direction: 'alternate',
  loop: true,
  easings: 'easeInOutSine',
  autoplay: false
});

var click = 1;
$(document).click(function(e) {
    // Check for left button
    if (e.button == 0) {
        ( click%2 == 0 ) ?  aniAll.play() : aniAll.pause();
        click++;
    }
});
