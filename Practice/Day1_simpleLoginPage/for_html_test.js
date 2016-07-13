/**
 * Created by nonesome on 16/5/28.
 */
;(function(){
    var h2 = document.getElementsByTagName("h2")[0];
    //h2.addEventListener("mouseover", function(){
    //    h2.innerHTML="change !!!";
    //});
    //h2.addEventListener("mouseout", function(){
    //    h2.innerHTML="你好";
    //})
    h2.onclick= function(){
        h2.style.color="black";
    };
    var input = document.getElementsByClassName("text")[0];
    input.addEventListener("focus", function(){
        input.style.color = "orange";
        input.style.backgroundColor = "white";
    });
})();
