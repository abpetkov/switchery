# Switchery

## Description

Switchery is a simple jQuery plugin that helps you turn your default HTML checkbox inputs into beautiful iOS 7 style switches in just few simple steps. You can easily customize switches, so that they match your design perfectly.

Works with jQuery 1.7.0+. Supported by all modern browsers: Chrome, Firefox, Opera, Safari, IE7+

[Live Preview](http://abpetkov.github.io/switchery/)

## Setup

Once you've downloaded the source code, include the necessary CSS and JS files in your HTML.

#### Include CSS

```html
<!-- Put this in your <head> tag -->
<link rel="stylesheet" href="PATH_TO_FILE/jquery.switchery.css" />
```

#### Include JS

```html
<!-- Put this right after the jQuery library -->
<script src="PATH_TO_FILE/jquery.switchery.js"></script>
```

## Default Usage

Invoke the plugin in a self-invoking anonimous function right before the closing &lt;/body&gt; tag or in a $(document).ready(function() {}); in the &lt;head&gt; tag.

```js
(function() {
  $('.js-switch').switchery();
})();
```

## Settings and Defaults

```js
defaults = {
  color    : '#64bd63',
  className: 'switchery',
  disabled : false,
  speed    : '0.1s'
}
```

- `color` : color of the switch element (HEX or RGB value)
- `className` : class name for the switch element (by default styled in jquery.switchery.css)
- `disabled` : enable or disable click events and changing the state of the switch (boolean value)
- `speed` : length of time that the transition will take (format: {digit}s)

## Examples

### Checked

Only thing you need is to add a `checked` attribute to your checkbox input. Simple as that.

```html
<input type="checkbox" class="js-switch-checked" checked />
```

### Multiple switches

You can add as many switches as you like, as long as their corresponding checkboxes have the same class.

```html
<input type="checkbox" class="js-switch-multiple" />
<input type="checkbox" class="js-switch-multiple" />

$('.js-switch-multiple').switchery();
```

### Disabled

Use the `disabled` option to make your switch active or inactive.

```js
$('.js-switch-disabled').switchery({ disabled: true });
```

### Coloured

You can colorize the switch to fit your site perfectly:

```js
$('.js-switch-blue').switchery({ color: '#41b7f1' });
```

### Checking state

Checking the current state of the checkbox for JavaScript or jQuery form validation is quite easy:

```js
// jQuery
$('.js-check-state').prop('checked');

// JavaScript
document.getElementById('js-check-state').checked;
```

## Contact

If you like this plugin, share your appreciation by following me in [Twitter](https://twitter.com/abpetkov), [GitHub](https://github.com/abpetkov) or [Dribbble](http://dribbble.com/apetkov).

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