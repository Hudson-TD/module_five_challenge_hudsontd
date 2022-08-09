// Array of objects to loop into page elements //
var workDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "AM"
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "AM"
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "AM"
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "PM"
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        meridiem: "PM"
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        meridiem: "PM"
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        meridiem: "PM"
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridiem: "PM"
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        meridiem: "PM"
    },
    
]
var currentHour = moment().format("HH");

// Displaying current date in the header //
function getTodaysDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do, YYYY');
    $("#currentDay").text(currentHeaderDate);
}

// Evoking function to pull today's date //
getTodaysDate();

// Initialzing fundamental functions //
function initialize () {
    displayRows ();
    showLocalStorage();
}

// Evoking function on page open //
initialize();

// Creating time blocks for business hours //
function displayRows () {
    for(var i = 0; i < workDay.length; i++) {
        var containerRow = $("<form>").attr({
            "class": "row"
        })

        $(".container").append(containerRow);

        var hourSection = $("<div>").attr({
            "class": "col-1 hour"
        })

        hourSection.text(workDay[i].hour + workDay[i].meridiem);

        containerRow.append(hourSection)

        let textSection = $("<textarea>").attr({
            "id": i
        });
        containerRow.append(textSection);
    
        var saveSection = $("<button>").attr({
            "class": " col-1 saveBtn"
        })
    // Floppy disk emoji to insinuate the save button functionality //
        saveSection.text("💾")
        containerRow.append(saveSection);
    
    // Color coding time blocks based on current hour //
    if(workDay[i].time < currentHour) {
        textSection.attr({
            "class":"past col-9 description"
        })
    }else if(workDay[i].time == currentHour) {
        textSection.attr({
            "class":"present col-9 description"
        })
    }else if(workDay[i].time > currentHour) {
        textSection.attr({
            "class":"future col-9 description"
        })
    }
}};

// On click event listener to log user inserted text as key value pair in local storage //
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var rowOne = document.getElementById("0").value;
    window.localStorage.setItem("todo1", rowOne);
    var rowTwo = document.getElementById("1").value;
    localStorage.setItem("todo2", rowTwo);
    var rowThree = document.getElementById("2").value;
    localStorage.setItem("todo3", rowThree);
    var rowFour = document.getElementById("3").value;
    localStorage.setItem("todo4", rowFour);
    var rowFive = document.getElementById("4").value;
    localStorage.setItem("todo5", rowFive);
    var rowSix = document.getElementById("5").value;
    localStorage.setItem("todo6", rowSix);
    var rowSeven = document.getElementById("6").value;
    localStorage.setItem("todo7", rowSeven);
    var rowEight = document.getElementById("7").value;
    localStorage.setItem("todo8", rowEight);
    var rowNine = document.getElementById("8").value;
    localStorage.setItem("todo9", rowNine);
});

// Calling local storage to insert stored values from the save function above //
function showLocalStorage () {
    document.getElementById("0").value = (localStorage.getItem("todo1"));
    document.getElementById("1").value = (localStorage.getItem("todo2"));
    document.getElementById("2").value = (localStorage.getItem("todo3"));
    document.getElementById("3").value = (localStorage.getItem("todo4"));
    document.getElementById("4").value = (localStorage.getItem("todo5"));
    document.getElementById("5").value = (localStorage.getItem("todo6"));
    document.getElementById("6").value = (localStorage.getItem("todo7"));
    document.getElementById("7").value = (localStorage.getItem("todo8"));
    document.getElementById("8").value = (localStorage.getItem("todo9"));
}