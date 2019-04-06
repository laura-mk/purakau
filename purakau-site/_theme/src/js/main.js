// Define globally exposed module objects
/* eslint-disable */
// Define dependency imports
// import popper from 'popper.js/dist/esm/popper';
//import transition from 'bootstrap/assets/javascripts/bootstrap/transition';
// import collapse from 'bootstrap/js/dist/collapse';
// import dropdown from 'bootstrap/js/dist/dropdown';
// import util from 'bootstrap/js/dist/util';
// import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js"
// import bootstrap from "bootstrap/dist/js/bootstrap.min.js"
// import carousel from 'bootstrap/js/dist/carousel';
// import tooltip from 'bootstrap/js/dist/tooltip';
// import popover from 'bootstrap/js/dist/popover';
// import modal from 'bootstrap/js/dist/modal';
// import tab from 'bootstrap/js/dist/tab';
// import highlight from 'jquery-highlight/jquery.highlight';

// Define local components
// import navigation from './components/navigation';
// import content from './components/content';
// import sitemap from './components/sitemap';
// import search from './components/search';
// import form from './components/form';
// import img from './components/img';
//
// navigation();
// content();
// sitemap();
// search();
// form();
// img();


// local components
import global from './components/global';

global();

$('.collapse').collapse()

/* eslint-enable */


$(function () {
  $('[data-toggle="popover"]').popover()
})
