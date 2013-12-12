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
 * Module dependencies.
 */

var pend = require('pend');

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

  this.element = element;
  this.options = options || {};

  for (var i in defaults) {
    if (!(i in this.options)) {
      this.options[i] = defaults[i];
    }
  }

  if (this.element.type == 'checkbox') this.init();
}

/**
 * Hide the target element.
 *
 * @api private
 */

Switchery.prototype.hide = function() {
  this.element.style.display = 'none';
};

/**
 * Show custom switch after the target element.
 *
 * @api private
 */

Switchery.prototype.show = function() {
  var switcher = this.create();
  pend(this.element.parentNode).append(switcher);
};

/**
 * Create custom switch.
 *
 * @returns {Object} switcher
 * @api private
 */

Switchery.prototype.create = function() {
  return this.switcher = '<span class="' + this.options.className + '"><small></small></span>';
};

/**
 * See if input is checked.
 *
 * @returns {Boolean} checked
 * @api private
 */

Switchery.prototype.isChecked = function() {
  return checked = this.element.checked;
};

/**
 * See if switcher should be disabled.
 *
 * @returns {Boolean} disabled
 * @api private
 */

Switchery.prototype.isDisabled = function() {
  return disabled = this.options.disabled;
};

/**
 * Initialize Switchery.
 *
 * @api private
 */

Switchery.prototype.init = function() {
  this.hide();
  this.show();
  this.setPosition();
};