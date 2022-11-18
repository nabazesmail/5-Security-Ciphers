// Gets counts of each letter in a string
function getLetterCounts(input)
{
    // Cleanse string of bad characters.
    var stringInput = input.toString().replace(/\W/ig, "").toUpperCase();
    var result = new Map();

    // Setup map
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(e => {
        result.set(e, 0);
    });

    // Count the number of each letter
    stringInput.split("").forEach(e => {
        result.set(e, result.get(e) + 1);
    });

    return result;
}

// Creates the chart and places it on the page.
function createChart(context, input)
{
    freqs = getLetterCounts(input);

    new Chart(context, {
        type: "bar",
        data:
        {
            labels: Array.from(freqs.keys()),
            datasets: 
            [{
                label: "Occurences",
                data: Array.from(freqs.values()),
                backgroundColor: "rgba(210, 210, 210, .7)"
            }]
        },
        options: 
        {
            legend: 
            {
                display: false
            },
            scales: 
            {
                yAxes: 
                [{
                    ticks: 
                    {
                        beginAtZero: true
                    }
                }]                
            }
        }
    });
}
