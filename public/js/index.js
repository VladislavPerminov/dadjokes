$(document).ready(() => {
    const $joke = $("#joke");
    const $punchline = $("#punchline");
    const $jokeList = $(".list-container .list-group");
    const $jokeItem = $(".joke-item")
    const currentRating = $("#current-ratings")
    const $punchlineBtn = $("#punchlineBtn")
    console.log($jokeList)
    $jokeItem.on("click", function (event) {
        event.preventDefault()
        let jokeid = $(this).data("jokeid");
        let jokename = $(this).data("jokename")
        let jokepunchline = $(this).data("jokepunchline")
        let jokeRating = $(this).data("jokerating")
        console.log(jokeid)
        console.log(jokename)
        $joke.text(jokename);
        $punchline.text(jokepunchline);
        $joke.attr("readonly", false);
        $punchline.attr("readonly", false);
        $punchline.hide()
        currentRating.text(jokeRating);
    });
    $punchlineBtn.on("click", function (event) {
        console.log("punchline test")
        event.preventDefault()
        $punchline.show()
    });
})