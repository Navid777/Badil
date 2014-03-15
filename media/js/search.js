$(document).ready(function() {
   var $searchbox = $("#searchbox");
   var $search_input = $("#search-input");
    $searchbox.text('جست‌وجو');
   $searchbox.on('focus', function() {
       $searchbox.text('');
       $search_input.toggleClass('active');
   });
   $searchbox.on('blur', function() {
       $searchbox.text('');
       setTimeout(function() { $searchbox.text('جست‌وجو'); }, 300);
       $search_input.toggleClass('active');
   });
});