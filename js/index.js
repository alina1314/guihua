var dom;
$(document).ready(function () {
    $("#place div").hide();
    $("#place i.boxShadow").hide();

    //3个类别控制亮点动画
    $(".plan_list a").click(function () {
        var thisIndex=$(this).parents("li").index();
        if(dom == thisIndex){
            dom=null;
            $(".plan_list .tit").removeClass("select");
            $(".plan_list_state .state  div").css("display","block");
            $(".plan_list_state .state  div span").css("display","none");
            $(".plan_list_alert .alert").find(".hidden").css({display:"none"});
        }else{
            dom = thisIndex;
            $(".plan_list_alert .alert").find(".hidden").css({display:"none"})
            $(".plan").find("li").eq(thisIndex).find("a").addClass("select").parents("li").siblings().find("a").removeClass("select");
            var thisIndex1=$(".plan_list_state").find(".state").eq(thisIndex).index();
            $(".plan_list_state .state  div").css("display","block");
            $(".plan_list_state .state  div span").css("display","none");
            $(".plan_list_state .state").eq(thisIndex1).find("div").find("span").css({display:"block" });
           $(".plan_list_state .state").eq(thisIndex1).siblings(".state").find("div").css("display","none");
        }
    });
    //5个区域对应地板块
    $("#place a.pla").click(function () {
        $(".plan_list_alert .alert").find(".hidden").css({display:"none"});
        $(".plan_list .tit").removeClass("select");
        $(".plan_list_state .state  div span").css("display","none");
        $(".plan_list_state .state").find("div").css("display","block");
        $("#place i.boxShadow").show();
        $(this).addClass("select");
        $(this).siblings("a.tit").removeClass("select");
        $("#place div").hide();
        var activeTab = $(this).attr("href");
        $(activeTab).fadeIn();
        return false;
    });
    $("#place a.select").click(function(){
        $("#place i.boxShadow").hide();
    });
    $(".placeImg").click(function(e) {
        // e?e.stopPropagation():event.cancelBubble = true;
        stopBubble(e);
    });

    $(document).click(function() {
        $("#place .placeImg").hide();
        $("#place i.boxShadow").hide();
        $("#place a.pla").removeClass("select");
    });
});
$(".state div").click(function(){
    var thisIndex2=$(this).index();//点
    var thisIndex3=$(this).parents(".state").index();
	//  thisIndex2--;
    ($(".plan_list_alert .alert").eq(thisIndex3)).find(".hidden").eq(thisIndex2).css("display","block");
    ($(".plan_list_alert .alert").eq(thisIndex3)).find(".hidden").eq(thisIndex2).siblings(".hidden").css("display","none");
    ($(".plan_list_alert .alert").eq(thisIndex3)).siblings(".alert").find(".hidden").css("display","none");
});
//电站弹框自身点击消失
$(".hidden").click(function(){
    	$(this).css({display:"none"})
});
// 兼容ie低版本阻止冒泡函数
function stopBubble(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        window.event.cancelBubble = true;
    }
};