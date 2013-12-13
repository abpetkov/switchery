/*
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

(function($) {

  /*
   * Attach the new method to jQuery.
   *
   * @param {Object} options
   * @returns {Object} elem
   * @api public
   */

  $.fn.switchery = function(options) {
    options = $.extend({}, $.fn.switchery.defaults, options);

    return this.each(function() {
      var elem = new Switchery(this, options);
    });
  };

  /*
   * Set the plugin default values.
   *
   * @api public
   */

  $.fn.switchery.defaults = {
    color    : '#64bd63',
    className: 'switchery',
    disabled : false,
    speed    : '0.1s'
  }

  /*
   * Create Switchery object.
   *
   * @param {Object} element
   * @param {Object} options
   * @api public
   */

  function Switchery(element, options) {
    this.element = $(element);
    this.options = options;
    if (this.element.is(':checkbox')) this.init();
  };

  /*
   * Hide the target element.
   *
   * @api private
   */

  Switchery.prototype.hide = function() {
    this.element.hide();
  };

  /*
   * Show custom switch after the target element.
   *
   * @api private
   */

  Switchery.prototype.show = function() {
    var switcher = this.create();
    this.element.after(switcher);
  };

  /*
   * Create custom switch.
   *
   * @returns {Object} switcher
   * @api private
   */

  Switchery.prototype.create = function() {
    return this.switcher = $('<span class="' + this.options.className + '"><small></small></span>');
  };

  /*
   * See if input is checked.
   *
   * @returns {Boolean} checked
   * @api private
   */

  Switchery.prototype.isChecked = function() {
    return checked = (this.element.prop('checked')) ? true : false;
  };

  /*
   * See if switcher should be disabled.
   *
   * @returns {Boolean} disabled
   * @api private
   */

  Switchery.prototype.isDisabled = function() {
    return disabled = this.options.disabled || this.element.prop('disabled');
  };

  /*
   * Get switch jack current position.
   *
   * @returns {Integer} left CSS property in pixels
   * @api private
   */

  Switchery.prototype.getPosition = function() {
    return parseInt(this.element.next(this.switcher).find('small').css('left'));
  }

  /*
   * Set switch jack proper position.
   *
   * @param {Boolean} clicked - we need this in order to uncheck the input when the switch is clicked
   * @api private
   */

  Switchery.prototype.setPosition = function (clicked) {
    var checked = this.isChecked()
      , switcher = this.element.next(this.switcher)
      , jack = switcher.find('small');

    if (clicked && checked) checked = false;
    else if (clicked && !checked) checked = true;

    if (checked == true) {
      this.element.prop('checked', true);
      jack.css('left', switcher.width() - jack.outerWidth());
      if (this.options.color) this.colorize();
    } else {
      jack.css('left', 0);
      this.element.prop('checked', false);
      this.switcher.css({
        backgroundColor: '',
        borderColor: ''
      });
    }
  }

  /*
   * Set speed.
   *
   * @api private
   */

  Switchery.prototype.setSpeed = function() {
    this.switcher.css('transition-duration', this.options.speed);
    this.switcher.find('small').css('transition-duration', this.options.speed);
  };

  /*
   * Copy the input name and id attributes.
   *
   * @api private
   */

  Switchery.prototype.setAttributes = function() {
    var id = this.element.attr('id')
      , name = this.element.attr('name');

    if (id) this.switcher.attr('id', id);
    if (name) this.switcher.attr('name', name);
  };

  /*
   * Set switch color.
   *
   * @api private
   */

  Switchery.prototype.colorize = function() {
    this.switcher.css({
      backgroundColor: this.options.color,
      borderColor: this.options.color
    });
  };

  /*
   * Handle the switch click event.
   *
   * @api private
   */

  Switchery.prototype.handleClick = function() {
    var $this = this
      , switcher = this.element.next(this.switcher);

    if (this.isDisabled() == false) {
      switcher.on('click', function() {
        $this.setPosition(true);
      });
    } else {
      this.element.prop('disabled', true);
    }
  };

  /*
   * Initialize switch.
   *
   * @api private
   */

  Switchery.prototype.init = function() {
    this.hide();
    this.show();
    this.setSpeed();
    this.setPosition();
    this.setAttributes();
    this.handleClick();
  };

}(jQuery));