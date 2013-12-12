/**
 * Switchery 1.0
 * http://abpetkov.github.io/switchery/
 *
 * Authored by Alexander Petkov
 * https://github.com/abpetkov
 *
 * Copyright 2013, Alexander Petkov
 * License: The MIT License (MIT)
 * http://opensource.org/licenses/MIT
 *
 */

/**
 * Expose `Switchery`.
 */

module.exports = Switchery;

/**
 * Set Switchery default values.
 *
 * @api public
 */

var defaults = {
    color    : '#64bd63'
  , className: 'switchery'
  , disabled : false
  , speed    : '0.1s'
}

/**
 * Create Switchery object.
 *
 * @param {Object} element
 * @param {Object} options
 * @api public
 */

function Switchery(element, options) {
  if (!(this instanceof Switchery)) return new Switchery(options);

  options = options || {};

  for (var i in defaults) {
    if (!(i in options)) {
      options[i] = defaults[i];
    }
  }

  this.init();
}

/*
 * Hide the target element.
 *
 * @api private
 */

Switchery.prototype.hide = function() {
  this.element.display = 'none';
};

/**
 * Initialize Switchery.
 *
 * @api private
 */

Switchery.prototype.init = function() {

};