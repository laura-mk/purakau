/* eslint-disable */
import $ from 'jquery';
/* eslint-enable */

export default function () {

  $( document ).ready(function() {
    $('html')
      .removeClass('no-js')
      .addClass('js');
  });

}
