(function() {

  const serverUrl = 'http://127.0.0.1:3000';
  
  $.ajax({
    url: serverUrl,
    type: 'GET',
    contentType: '?',
    success: function(data) {
      console.log('Success! ', data);
    },
    error: function(error) {
      console.error('Error getting data from the server: ', error);
    }
  });

})();
