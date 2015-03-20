// $('#get_url').on('click',function(){
//   var url = $('#url').val();
//   ytdl.getInfo(url,{},function(err,info){
//     // $('#youtube_url').html(info.formats[0].url);
//     $('#video_preview').attr('src', info.formats[0].url);
//     console.log(info.formats[0].url);
//   });
// });
var query = {active:true,currentWindow:true};

angular.module('youtube_download_app',[])
  .controller('DownloadLinksController',
    function($scope){
    	chrome.tabs.query(query, function(tabs){
    		ytdl.getInfo(
    			tabs[0].url, {
    			downloadURL:true
    		}, function(err,info){
    			$scope.err = err;
    			$scope.info = info;
    			$scope.$apply();
    		});
    	});
    	$scope.downloadVideo = function(index){
    		chrome.downloads.download({
    			url: $scope.info.formats[index].url,
    			filename: 
    				escape($scope.info.title) + 
    				'.' +
    				$scope.info.formats[index].container 
    		});
    	}
    });