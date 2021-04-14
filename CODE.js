$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickForm").on("submit", countClick);
    $("#ageForm").on("submit", checkAge);
    $("#taxForm").on("submit", calcSalesTax);
    $("#catForm").on("submit", recommendFood);
    $("#cardForm").on("submit", drawCard);
});

//created  DO THIS:
let counter = 0;

function countClick(event) {
    event.preventDefault();

    // Increment a variable that tracks the
    // number of button clicks DO THIS:
    counter++;

    // Print the current number of clicks to the
    // <p> with ID "clickCountOutput" DO THIS:
    $("p#clickCountOutput").text(counter);

    // When the count gets to 10, reset it to 0  DO THIS:
    if(counter === 11)
    {
       counter = 0;
    }


}


function checkAge(event) {
    event.preventDefault();

    // Get the user's birth year from the text
    // box with ID of "birthYear"
    let birthYear = parseInt($("input#birthYear").val());

    let age = 2021 - birthYear;

    // If they are currently under 18, print "Child"
    // to the <p> with ID of "birthYearOutput"

    // If they are 18 or over, print "Adult" instead

    if(age <= 17)
    {
        $("p#birthYearOutput").text("Child");
    }
    else
    {
        $("p#birthYearOutput").text("Adult");
    }

}

function calcSalesTax(event) {
    event.preventDefault();

    // Get the purchase amount from the text
    // box with ID of "purchaseAmount"
    let amount = parseFloat($("input#purchaseAmount").val());


    // Get the state from the text box with ID "state"
    let state = $("input#state").val();

    // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%
    // Calculate the sales tax amount and print to
    // the <p> with ID of "salesTaxOutput"
    if (state === "WI")
    {
        let tax = 0.05 * amount;
        $("p#salesTaxOutput").text(tax);
    }
    else if (state === "IL")
    {
        let tax = 0.08 * amount;
        $("p#salesTaxOutput").text(tax);
    }
    else if (state === "MN")
    {
        let tax = 0.075 * amount;
        $("p#salesTaxOutput").text(tax);
    }
    else if (state === "MI")
    {
        let tax = 0.055 * amount;
        $("p#salesTaxOutput").text(tax);
    }

    // If the user enters a state not listed above,
    // print "Error" instead

    else
        $("p#salesTaxOutput").text("Error");
}

function recommendFood(event) {
    event.preventDefault();

    // Get the cat's age from the text box with
    // ID of "catAge"
    let catAge = $("input#catAge").val();

    // Cats under 2 get "kitten chow", between 2 and 10
    // get "adult chow", and over 10 get "senior chow"

    if(catAge < 2)
    {
        $("p#catAgeOutput").text("Kitten chow");
    }
    else if(catAge < 10)  //jQuery doesn't have a way to write (2 < catAge < 10)
    {
        $("p#catAgeOutput").text("Adult chow");
    }
    else
    {
        $("p#catAgeOutput").text("Senior chow");
    }
    // Print the food recommendation to the <p> with
    // ID of "catAgeOutput"
}

function drawCard(event) {
    event.preventDefault();

    // Generate a random card face value (1 - 13)
    let faceValue = Math.floor(Math.random() * 13) + 1;

    // Generate a random suit (1 - 4)
    let suit = Math.floor(Math.random() * 4) + 1;


    // Declare a variable to hold the description
    // of the card, for example "King of Spades"
    // or "2 of Hearts"

    let description = faceValue + " of " + suit;
    
    // For face values 2 - 10, you can just print the number.
    // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
    // and 13 is "King"

    // For the suits, 1 is "Clubs", 2 is "Spades",
    // 3 is "Hearts", 4 is "Diamonds"

    if (faceValue === 1)
    {
        faceValue = "Ace";
        if(suit === 1)
        {
            suit = "Clubs";
        }
        else if (suit === 2)
        {
            suit = "Spades";
        }
        else if ( suit === 3)
        {
            suit = "Hearts";
        }
        else
        {
            suit = "Diamonds";
        }

    }
    else if (faceValue == 11)
    {
        faceValue = "Jack";
        if(suit === 1)
        {
            suit = "Clubs";
        }
        else if (suit === 2)
        {
            suit = "Spades";
        }
        else if ( suit === 3)
        {
            suit = "Hearts";
        }
        else
        {
            suit = "Diamonds";
        }

    }
    else if (faceValue == 12)
    {
        faceValue = "Queen";
        if(suit === 1)
        {
            suit = "Clubs";
        }
        else if (suit === 2)
        {
            suit = "Spades";
        }
        else if ( suit === 3)
        {
            suit = "Hearts";
        }
        else
        {
            suit = "Diamonds";
        }

    }
    else if (faceValue == 13) {
        faceValue = "King";
        if (suit === 1) {
            suit = "Clubs";
        } else if (suit === 2) {
            suit = "Spades";
        } else if (suit === 3) {
            suit = "Hearts";
        } else {
            suit = "Diamonds";
        }
    }
    else
    {
        if(suit === 1)
        {
            suit = "Clubs";
        }
        else if (suit === 2)
        {
            suit = "Spades";
        }
        else if ( suit === 3)
        {
            suit = "Hearts";
        }
        else
        {
            suit = "Diamonds";
        }
    }

    // Print the card's description to the <p> with
    // ID of "drawCardOutput"
    //$("p#drawCardOutput").text(description);
    $("p#drawCardOutput").text(faceValue + " of " + suit);
}
