switchie = document.createElement('input')
switchie.id = 'js-switch'
switchie.type = 'checkbox'

document.body.appendChild(switchie);

var Switchery = require('../switchery');
var elem = document.querySelector('#js-switch');
var init = new Switchery(elem);