'use strict';
;(function(){

angular.module('ui.transitionize', [])

/**
 * Transitionize 0.0.1
 * https://github.com/abpetkov/transitionize
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
 * Expose `Transitionize`.
 */

  .factory('transitionize', ['$document', '$window', function ($document, $window) {

    /**
     * Initialize new Transitionize.
     *
     * @param {Object} element
     * @param {Object} props
     * @api public
     */

    return function (element, props) {
        var that = {};

        /**
         * Detect if Safari.
         *
         * @returns {Boolean}
         * @api private
         */

        that.isSafari = function() {
          return (/Safari/).test(navigator.userAgent) && (/Apple Computer/).test(navigator.vendor);
        };

        /**
         * Loop though the object and push the keys and values in an array.
         * Apply the CSS3 transition to the element and prefix with -webkit- for Safari.
         *
         * @api private
         */

        that.init = function() {
          var transitions = [];

          for (var key in this.props) {
            transitions.push(key + ' ' + this.props[key]);
          }

          this.element.style.transition = transitions.join(', ');
          if (this.isSafari()) this.element.style.webkitTransition = transitions.join(', ');
        };

         that.element = element;
         that.props = props || {};
         that.init();
    };
  }]);

angular.module('ui.switchery', ['ui.transitionize'])

  .factory('switchery', ['$document', '$window', 'transitionize', function ($document, $window, transitionize) {

/**
 * Switchery 0.3.5
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
     * Set Switchery default values.
     *
     * @api public
     */

    var defaults = {
        color          : '#64bd63'
      , secondaryColor : '#dfdfdf'
      , className      : 'switchery'
      , disabled       : false
      , disabledOpacity: 0.5
      , speed          : '0.4s'
    };

    /**
     * Create Switchery object.
     *
     * @param {Object} element
     * @param {Object} options
     * @api public
     */

    return function (element, options) {
        var that = {};

        that.element = element;
        that.options = options || {};

        for (var i in defaults) {
            if (that.options[i] == null) {
              that.options[i] = defaults[i];
            }
        }

        /**
         * Hide the target element.
         *
         * @api private
         */

        that.hide = function() {
          this.element.style.display = 'none';
        };

        /**
         * Show custom switch after the target element.
         *
         * @api private
         */

        that.show = function() {
          var switcher = this.create();
          this.insertAfter(this.element, switcher);
        };

        /**
         * Create custom switch.
         *
         * @returns {Object} this.switcher
         * @api private
         */

        that.create = function() {
          this.switcher = document.createElement('span');
          this.jack = document.createElement('small');
          this.switcher.appendChild(this.jack);
          this.switcher.className = this.options.className;

          return this.switcher;
        };

        /**
         * Insert after element after another element.
         *
         * @param {Object} reference
         * @param {Object} target
         * @api private
         */

        that.insertAfter = function(reference, target) {
          reference.parentNode.insertBefore(target, reference.nextSibling);
        };

        /**
         * See if input is checked.
         *
         * @returns {Boolean}
         * @api private
         */

        that.isChecked = function() {
          return this.element.checked;
        };

        /**
         * See if switcher should be disabled.
         *
         * @returns {Boolean}
         * @api private
         */

        that.isDisabled = function() {
          return this.options.disabled || this.element.disabled;
        };

        /**
         * Set switch jack proper position.
         *
         * @param {Boolean} clicked - we need this in order to uncheck the input when the switch is clicked
         * @api private
         */

        that.setPosition = function (clicked) {
          var checked = this.isChecked()
            , switcher = this.switcher
            , jack = this.jack;

          if (clicked && checked) checked = false;
          else if (clicked && !checked) checked = true;

          if (checked === true) {
            this.element.checked = true;

            if (window.getComputedStyle) jack.style.left = parseInt(window.getComputedStyle(switcher).width) - jack.offsetWidth + 'px';
            else jack.style.left = parseInt(switcher.currentStyle['width']) - jack.offsetWidth + 'px';

            if (this.options.color) this.colorize();
            this.setSpeed();
          } else {
            jack.style.left = 0;
            this.element.checked = false;
            this.switcher.style.boxShadow = 'inset 0 0 0 0 ' + this.options.secondaryColor;
            this.switcher.style.borderColor = this.options.secondaryColor;
            this.switcher.style.backgroundColor = '';
            this.setSpeed();
          }
        };

        /**
         * Set speed.
         *
         * @api private
         */

        that.setSpeed = function() {
          var switcherProp = {}
            , jackProp = { 'left': this.options.speed.replace(/[a-z]/, '') / 2 + 's' };

          if (this.isChecked()) {
            switcherProp = {
                'border': this.options.speed
              , 'box-shadow': this.options.speed
              , 'background-color': this.options.speed.replace(/[a-z]/, '') * 3 + 's'
            };
          } else {
            switcherProp = {
                'border': this.options.speed
              , 'box-shadow': this.options.speed
            };
          }

          transitionize(this.switcher, switcherProp);
          transitionize(this.jack, jackProp);
        };

        /**
         * Copy the input name and id attributes.
         *
         * @api private
         */

        that.setAttributes = function() {
          var id = this.element.getAttribute('id')
            , name = this.element.getAttribute('name');

          if (id) this.switcher.setAttribute('id', id);
          if (name) this.switcher.setAttribute('name', name);
        };

        /**
         * Set switch color.
         *
         * @api private
         */

        that.colorize = function() {
          this.switcher.style.backgroundColor = this.options.color;
          this.switcher.style.borderColor = this.options.color;
          this.switcher.style.boxShadow = 'inset 0 0 0 16px ' + this.options.color;
        };

        /**
         * Handle the onchange event.
         *
         * @param {Boolean} state
         * @api private
         */

        that.handleOnchange = function(state) {
          var eve = new Event("click");
          this.element.dispatchEvent(eve);

          if (typeof Event === "function") {
            var event = new Event("change", {cancelable: true});
            this.element.dispatchEvent(event);
          } else {
            this.element.fireEvent("onchange");
          }
        };

        /**
         * Handle the switch click event.
         *
         * @api private
         */

        that.handleClick = function() {
          var $this = this
            , switcher = this.switcher;

          if (this.isDisabled() === false) {
            if (switcher.addEventListener) {
              switcher.addEventListener('click', function() {
                $this.setPosition(true);
                $this.handleOnchange($this.element.checked);
              });
            } else {
              switcher.attachEvent('onclick', function() {
                $this.setPosition(true);
                $this.handleOnchange($this.element.checked);
              });
            }
          } else {
            this.element.disabled = true;
            this.switcher.style.opacity = this.options.disabledOpacity;
          }
        };

        /**
         * Initialize Switchery.
         *
         * @api private
         */

        that.init = function() {
          this.hide();
          this.show();
          this.setPosition();
          this.setAttributes();
          this.handleClick();
        };

      if (that.element.type == 'checkbox') that.init();
    };

  }]);

})();