![Switchery](http://i.imgur.com/xJAM3Jq.png)

## Description

Switchery is a simple component that helps you turn your default HTML checkbox inputs into beautiful iOS 7 style switches in just few simple steps. You can easily customize switches, so that they match your design perfectly.

Supported by all modern browsers: Chrome, Firefox, Opera, Safari, IE8+

![Preview](http://i.imgur.com/0PcuTbO.jpg)

[Live Preview](http://abpetkov.github.io/switchery/)

## Installation

##### Standalone:

```html
<link rel="stylesheet" href="standalone/switchery.css" />
<script src="standalone/switchery.js"></script>
```

##### Component:

```shell
$ component install abpetkov/switchery
```

##### Bower:

```shell
$ bower install switchery
```

## Usage

```js
var Switchery = require('switchery');
var elem = document.querySelector('.js-switch');
var init = new Switchery(elem);
```

## Settings and Defaults

```js
defaults = {
    color    : '#64bd63'
  , className: 'switchery'
  , disabled : false
  , speed    : '0.1s'
};
```

- `color` : color of the switch element (HEX or RGB value)
- `className` : class name for the switch element (by default styled in switchery.css)
- `disabled` : enable or disable click events and changing the state of the switch (boolean value)
- `speed` : length of time that the transition will take (format: {digit}s)

## Examples

##### Checked

Only thing you need is to add a `checked` attribute to your checkbox input. Simple as that.

```html
<input type="checkbox" class="js-switch" checked />
```

##### Multiple switches

You can add as many switches as you like, as long as their corresponding checkboxes have the same class. Select them and make new instance of the Switchery class for every of them.

```js
var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

elems.forEach(function(html) {
  var switchery = new Switchery(html);
});
```

![Multiple](http://i.imgur.com/Ip4xy4s.jpg)

##### Disabled

Use the `disabled` option to make your switch active or inactive.

```js
var switchery = new Switchery(elem, { disabled: true });
```

##### Colored

You can colorize the switch to fit your design perfectly:

```js
var switchery = new Switchery(elem, { color: '#41b7f1' });
```

![Colored](http://i.imgur.com/qO0Pzub.jpg)

##### Legacy browsers

If you are an adventurer and like to use legacy browsers, like IE8 and IE7, apply your favourite fix for rounded corners and box shadows and try a slightly different approach.

```js
var elems = document.querySelectorAll('.js-switch');

for (var i = 0; i < elems.length; i++) {
  var switchery = new Switchery(elems[i]);
}
```

## Contact

If you like this component, share your appreciation by following me in [Twitter](https://twitter.com/abpetkov), [GitHub](https://github.com/abpetkov) or [Dribbble](http://dribbble.com/apetkov).

## License

The MIT License (MIT)

Copyright (c) 2013 Alexander Petkov

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.