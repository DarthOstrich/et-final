/*!
 * ET-Final
 * Emerging Technologies Final
 * 
 * @author Jared and Bridgett
 * @version 1.0.0
 * Copyright 2016. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FastShell
  });

})(jQuery, window, document);

$('.slide img:gt(0)').css({'opacity':'0'});

      function fade_slide() {

        $('.slide img:eq(1)')
          .delay(1000)
          .animate({'opacity':'1'}, 1000, fade_complete);
      }

      function fade_complete() {

        $('.slide img:eq(0)')
          .css({'opacity':'0'})
          .appendTo('.slide');

        fade_slide();
      }

      fade_slide();
