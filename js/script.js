$(document).ready(function () {
    $("#genderform").submit(function (event) {
        event.preventDefault();
        const gender = $("select#gender").val();
        const nameInput = $("input#uname").val();

        if (gender === 'male') {
            alert("Welcome " + nameInput);
            window.location = "./male.html"
        } else {
            alert("Welcome " + nameInput);
            window.location = "./female.html"
        }
    });


    $('#male-form').submit(function (event) {
        event.preventDefault();
        const personality = $("select#personality").val();
        const colourInput = $("select#colour").val();
        const shapeInput = $("select#shape").val();
        const petInput = $("select#pet").val();
        const heightInput = $("select#height").val();
        const skinInput = $("select#skin").val();

        if (personality === "introvert" && colourInput === "blue" && petInput === "cat" && shapeInput === "curvy" && heightInput === "tall" && skinInput === "black") {
            $("#male-form").hide();
            $(".match1").show(1000);
        } else if (personality === "extrovert" && colourInput === "black" && petInput === "dog" && shapeInput === "slim" && heightInput === "average" && skinInput === "black") {
            $("#male-form").hide();
            $(".match2").show(1000);
        } else if (personality === "introvert" && colourInput === "white" && petInput === "dog" && shapeInput === "slim" && heightInput === "short" && skinInput === "white") {
            $("#male-form").hide();
            $(".match11").show(1000);
        } else if (personality === "extrovert" && colourInput === "blue" && petInput === "dog" && shapeInput === "slim" && heightInput === "tall" && skinInput === "white") {
            $("#male-form").hide();
            $(".match10").show(1000);
        } else if (personality === "introvert" && colourInput === "white" && petInput === "cat" && shapeInput === "curvy" && heightInput === " average" && skinInput === "black") {
            $("#male-form").hide();
            $(".match8").show(1000);
        } else if (personality === "introvert" && colourInput === "black" && petInput === "cat" && shapeInput === "curvy" && heightInput === "short" && skinInput === " white") {
            $("#male-form").hide();
            $(".match12").show(1000);
        } else if (personality === "extrovert" && colourInput === "blue" && petInput === "cat" && shapeInput === "curvy" && heightInput === "tall" && skinInput === "black") {
            $("#male-form").hide();
            $(".match5").show(1000);
        } else if (personality === "introvert" && colourInput === "black" && petInput === "cat" && shapeInput === "curvy" && heightInput === "average" && skinInput === "black") {
            $("#male-form").hide();
            $(".match7").show(1000);
        } else if (personality === "extrovert" && colourInput === "white" && petInput === "dog" && shapeInput === "slim" && heightInput === "short" && skinInput === "black") {
            $("#male-form").hide();
            $(".match3").show(1000);
        } else if (personality === "extrovert" && (colourInput === "black" || colourInput === "blue" || colourInput === "white") && petInput === "cat" && shapeInput === "slim" && heightInput === "short" && skinInput === "black") {
            $("#male-form").hide();
            $(".match6").show(1000);
        } else if (personality === "introvert" && colourInput === "black" && petInput === "dog" && shapeInput === "slim" && heightInput === "tall" && skinInput === "black") {
            $("#male-form").hide();
            $(".match4").show(1000);
        } else {
            $("#male-form").hide();
            $(".match9").show(1000);
        }
    });

    $("#female-form").submit(function (event) {
        event.preventDefault();
        const attribute = $("select#personality").val();
        const faveColour = $("select#colour").val();
        const favePet = $("select#pet").val();
        const buildInput = $("select#build").val();
        const inputtedHeight = $("select#height").val();
        const complexionInput = $("select#skin").val();

        if (attribute === "introvert" && faveColour === "pink" && favePet === "cat" && buildInput === "muscular" && inputtedHeight === "tall" && complexionInput === "black") {
            $("#female-form").hide();
            $(".match1").show(1000);
        } else if (attribute === "extrovert" && faveColour === "yellow" && favePet === "dog" && buildInput === "slim" && inputtedHeight === "average" && complexionInput === "black") {
            $("#female-form").hide();
            $(".match2").show(1000);
        } else if (attribute === "introvert" && faveColour === "orange" && favePet === "dog" && buildInput === "slim" && inputtedHeight === "average" && complexionInput === "white") {
            $("#female-form").hide();
            $(".match11").show(1000);
        } else if (attribute === "extrovert" && faveColour === "pink" && favePet === "dog" && buildInput === "slim" && inputtedHeight === "tall" && complexionInput === "white") {
            $("#female-form").hide();
            $(".match10").show(1000);
        } else if (attribute === "introvert" && faveColour === "orange" && favePet === "cat" && buildInput === "muscular" && inputtedHeight === " average" && complexionInput === "black") {
            $("#female-form").hide();
            $(".match8").show(1000);
        } else if (attribute === "introvert" && faveColour === "yellow" && favePet === "cat" && buildInput === "muscular" && inputtedHeight === " average" && complexionInput === " white") {
            $("#female-form").hide();
            $(".match12").show(1000);
        } else if (attribute === "extrovert" && faveColour === "pink" && favePet === "cat" && buildInput === "muscular" && inputtedHeight === "short" && complexionInput === "black") {
            $("#female-form").hide();
            $(".match5").show(1000);
        } else if (attribute === "introvert" && faveColour === "yellow" && favePet === "cat" && buildInput === "muscular" && inputtedHeight === "tall" && complexionInput === "black") {
            $("#female-form").hide();
            $(".match7").show(1000);
        } else if (attribute === "extrovert" && faveColour === "orange" && favePet === "dog" && buildInput === "slim" && inputtedHeight === " average" && complexionInput === "black") {
            $("#female-form").hide();
            $(".match3").show(1000);
        } else if (attribute === "extrovert" && faveColour === "orange" && favePet === "cat" && buildInput === "slim" && inputtedHeight === "average" && complexionInput === "black") {
            $("#female-form").hide();
            $(".match6").show(1000);
        } else if (attribute === "introvert" && faveColour === "yellow" && favePet === "dog" && buildInput === "slim" && inputtedHeight === "tall" && complexionInput === "black") {
            $("#female-form").hide();
            $(".match4").show(1000);
        } else if (attribute === "extrovert" && faveColour === "pink" && favePet === "dog" && buildInput === "muscular" && inputtedHeight === "short" && complexionInput === "black") {
            $("#female-form").hide();
            $(".match9").show(1000);
        } else {
            $("#female-form").hide();
            $(".match10").show(1000);
        }
    });
});