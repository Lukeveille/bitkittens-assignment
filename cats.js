document.addEventListener('DOMContentLoaded', function() {
  var kittyButton = document.querySelector('.summon-cats');
  kittyButton.addEventListener('click', function() {
    axios({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'get',
      dataType: 'text'
    }).then(function(response) {
      var kitties = response.data.cats;
      // kitties.forEach(function(kitty) {
      for (var i = 0; i < kitties.length; i++) {
        let img = document.createElement('img');
        img.src = kitties[i].photo;
        img.alt = 'Photo of ' + kitties[i].name;
        let catBox = document.querySelector('#cat' + (i+1));
        catBox.innerHTML = ''
        catBox.append(img);
      }

      // });
      console.log(kitties);
    });
  });
});