// Array of objects to loop into page elements //
var workDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "AM",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "AM",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "AM",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        meridiem: "PM",
        reminder: ""
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

        hourSection.text(workDay[i].hour +workDay[i].meridiem);

        containerRow.append(hourSection)

        var textSection = $("<textarea>").attr({
            "class": "description "
        })

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
            "class":"past col-9"
        })
    }else if(workDay[i].time == currentHour) {
        textSection.attr({
            "class":"present col-9"
        })
    }else if(workDay[i].time > currentHour) {
        textSection.attr({
            "class":"future col-9"
        })
    }
}}

// Need to move into an init function later, keeping this here so I can see it //
displayRows();

// Saving data to local storage //
function saveReminders() {
    localStorage.setItem("workDay", JSON.stringify(workDay));
}