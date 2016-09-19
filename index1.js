$(document).ready(function() {
    var randomQuote;
    var randomNum;
    var randomAuthor;
    var quotes;
    var author;

    function getquotes() {

        quotes = ["It is not enough that we do our best; sometimes we must do what is required.", 
                  "If I only had three words of advice, they would be, Tell the Truth. If got three more words, I'd add, all the time.", 
                  "Experience is the best teacher.",
                  "The best listeners listen between the lines.", 
                  "The best preparation for tomorrow is doing your best today.",
                  "The best is the enemy of good.",
                  "The only way you can be the best at something is to be the best you can be.",
                  "Drunken men give some of the best pep talks.",
                  "Being a one of a kind means we are automatically the best in the world at what we do.",
                  "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind",
                  "Imitation is suicide",
                  "Do what you feel in your heart to be right, for you'll be criticized anyway",
                  "Whenever you find yourself on the side of the majority, it is time to pause and reflect",
                  "I will not let anyone walk through my mind with their dirty feet",
                  "Don't look for society to give you permission to be yourself",
                  "If things go wrong, don'y go with them",
                  "Remember to always be yourself. Unless you suck",
                  "There came a time when the risk to remain tight in the bud was more painful than the risk it took to blossom",
                  "If you seek authenticity for authenticity's sake you are no longer authentic",
                  "This above all: to thine own self be true"];
        
        author = ["Winston S. Churchill", 
                  "Randy Pausch", 
                  "Penelope Douglas", 
                  "Nina Malkin", 
                  "H. Jackson Brown Jr.", 
                  "Voltaire", 
                  "Susan Beth Pfeffer",
                  "Criss Jami",
                  "Victor WIlliamson",
                  "Dr. Seuss",
                  "Ralph Waldo Emerson",
                  "Eleanor Roosevelt",
                  "Mark Twain",
                  "Mahatma Gandhi",
                  "Steve Maraboli",
                  "Roger Babson",
                  "Joss Whedon",
                  "Anais Nin",
                  "Jean Paul Sartre",
                  "William Shakespeare"];
        
        colour = ["#0ff", 
                  "#7ed", 
                  "#abc", 
                  "#13f", 
                  "#fab", 
                  "#666", 
                  "#7ab",
                  "#123",
                  "#456",
                  "#789",
                  "#916",
                  "#111",
                  "#222",
                  "#333",
                  "#444",
                  "#555",
                  "#777",
                  "#888",
                  "#999",
                  "#aaa"];
        randomNum = Math.floor(Math.random() * quotes.length);
        console.log(randomNum);
        randomQuote = quotes[randomNum];
        randomAuthor = author[randomNum];
        var randomColour = colour[randomNum];
        $(".quote").text(randomQuote);
        $(".author").text("-"+randomAuthor);
        $("body").css("background-color", randomColour);
    }
    $("#newQuote").on("click", function() {
        getquotes();
    });
    $("#tweet").on("click", function() {
        window.open("https://twitter.com/intent/tweet?text=" + randomQuote +"-"+ randomAuthor);
    });

});