
$(function() {
  $('#forms3upload').on('submit', uploadfiletos3);
});

function uploadfiletos3(e) {
  e.preventDefault();

  var url = $('#txtsignedurl').val();
  var filedata = $('#files3object').get()[0].files[0];
  console.log(url);

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": url,
    "data": filedata,
    "processData": false,
    "contentType": "image/png",
    "method": "PUT"
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });



  return false;
}
