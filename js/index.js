
$(function(){

	recommendSelect();
	hotLessonTab();

});




//推荐课程的选项
function recommendSelect(){
	//问答
	$(".recommend .start-list li.remove-question").hover(
		function(){
			$(".recommend .start-list").hide();
			$(".recommend .tab-box").show();
			$(".recommend .tab-box .type-list li").removeClass("active");
			$(".recommend .tab-box .type-list li.question").addClass("active");
			$(".recommend .tab-box .content .tab-item").hide();
			$(".recommend .tab-box .content .tab-item.question-content").show();
		},
		function(){
			$(".recommend .tab-box").hide();
			$(".recommend .start-list").show();
		}
	);

	//wiki
	$(".recommend .start-list li.remove-wiki").hover(
		function(){
			$(".recommend .start-list").hide();
			$(".recommend .tab-box").show();
			$(".recommend .tab-box .type-list li").removeClass("active");
			$(".recommend .tab-box .type-list li.wiki").addClass("active");
			$(".recommend .tab-box .content .tab-item").hide();
			$(".recommend .tab-box .content .tab-item.wiki-content").show();
		},
		function(){
			$(".recommend .tab-box").hide();
			$(".recommend .start-list").show();
		}
	);

	//课程
	$(".recommend .start-list li.remove-lesson").hover(
		function(){
			$(".recommend .start-list").hide();
			$(".recommend .tab-box").show();
			$(".recommend .tab-box .type-list li").removeClass("active");
			$(".recommend .tab-box .type-list li.lesson").addClass("active");
			$(".recommend .tab-box .content .tab-item").hide();
			$(".recommend .tab-box .content .tab-item.lesson-content").show();
		},
		function(){
			$(".recommend .tab-box").hide();
			$(".recommend .start-list").show();
		}
	);

	//社群
	$(".recommend .start-list li.remove-group").hover(
		function(){
			$(".recommend .start-list").hide();
			$(".recommend .tab-box").show();
			$(".recommend .tab-box .type-list li").removeClass("active");
			$(".recommend .tab-box .type-list li.group").addClass("active");
			$(".recommend .tab-box .content .tab-item").hide();
			$(".recommend .tab-box .content .tab-item.group-content").show();
		},
		function(){
			$(".recommend .tab-box").hide();
			$(".recommend .start-list").show();
		}
	);

	//tab选项卡
	$(".recommend .tab-box .type-list li").hover(function(){
		$(".recommend .tab-box .type-list li").removeClass("active");
		$(this).addClass("active");
		$(".recommend .tab-box .content .tab-item").hide();
		$(".recommend .tab-box .content .tab-item:eq("+$(this).index()+")").show();
	});

	//鼠标移走选项卡区域时，显示开始列表，选项卡区域隐藏
	$(".recommend .tab-box").hover(
		function(){
			$(".recommend .start-list").hide();
			$(".recommend .tab-box").show();
		},
		function(){
			$(".recommend .start-list").show();
			$(".recommend .tab-box").hide();
		}
	);
}




// 热门课程模块的选项卡
function hotLessonTab(){
	$(".hot-lesson .hot-lesson-type li").hover(function(){
		$(this).siblings().removeClass("on");
		$(this).addClass("on");
		$(".hot-lesson .hot-lesson-box .lesson-list").hide();
		$(".hot-lesson .hot-lesson-box .lesson-list:eq("+$(this).index()+")").show();
	});
}

