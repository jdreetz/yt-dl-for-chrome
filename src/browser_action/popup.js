$('#get_url').on('click',function(){
  var url = $('#url').val();
  ytdl.getInfo(url,{},function(err,info){
    // $('#youtube_url').html(info.formats[0].url);
    $('#video_preview').attr('src', info.formats[0].url);
    console.log(info.formats[0].url);
  });
});

// var model = {
//   url: ko.observable(''),
//   youtube_url: ko.observable(''),
//   get_url: function(data,event){
//     ytdl.getInfo(model.url(), function(err, info){
//       // model.youtube_url(info.)
//       console.log(info);
//     });
//   }
// };

// ko.applyBindings(model);