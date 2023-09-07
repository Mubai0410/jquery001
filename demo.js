$(function () {
    $("#start").on("click", function () {
        $("#score").show();
        $(this).fadeOut("slow");
        getWord();
    });
    $("body").scroll(false)
    function getWord() {
        let color = $color();
        //A-Z
        let wordNo = Math.floor(Math.random() * 26) + 65;
        let word = String.fromCharCode(wordNo);
        //总宽高
        let wid = screen.width - 400;
        let het = screen.height - 400;
        //出现位置
        let top = Math.floor(Math.random() * het);
        let left = Math.floor(Math.random() * wid);
        let $span = `<span class="letter letter${wordNo}" style="left: ${left}px;top:${top}px;background-color: #${color}">${word}</span>`;
        $("body").append($span);
        setTimeout(getWord, 1000);
    }
    function $color() {
        let clr = "";
        let arr = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for (let i = 0; i < 6; i++) {
            clr += arr[Math.floor(Math.random() * 15)];
        }
        return clr;
    }
    let sc = parseInt($("#score").text());
    $(document).keydown(function (e) {
        var jf = $(".letter" + e.keyCode).animate({ "top": screen.height + "px" }, 1000, function () {
            sc += 20;
            $("#score").html(sc);
            $(this).remove();
        });
        if (jf.length == 0) {
            sc -= 20;
            $("#score").html(sc);
        }
        // let w = String.fromCharCode(e.keyCode);
        // let qq = $("span").text();
        // let q = $.inArray(w, qq)
        // if (q != -1) {
        //     //$("span")[q].remove();
        //     sc += 20;
        // } else {
        //     sc -= 20;
        // }
    });
});