$(function(){
  // var imageURL = "https://hd.unsplash.com/photo-1458707926943-2226cddba8d4";

  var match = /img=([^&]*)/.exec(location.href);
  if(!match){
    // 404
  }
  else {
    var imgURL = match[1];
    $('#wallpaper').attr('src', imgURL);
  }
});
