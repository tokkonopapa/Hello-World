$(function() {
	$.ajax({
		type: "GET",
		url: "/gh/get/response.html/tokkonopapa/Hello-World/tree/master/Demo/",
		data: {
			"delay": 3
		},
		dataType: "html"
	}).success(function(data, textStatus, jqXHR) {
		$("#demo").html(data);
	});
});
