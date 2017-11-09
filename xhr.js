
========
jQuery
========
$.get( __FILE_INDEX__, { mynum: 77711144} , function( data ) {
  console.log(JSON.parse(data));
});

========
axios
========
axios.post(__FILE_INDEX__, { mynum: 44})
  .then(function (response) {
    console.log(response.data.foo);
  })
