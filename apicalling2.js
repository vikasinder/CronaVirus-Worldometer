var dt = new Date();
var totalcases;
const todaydate = ((dt.getDate() - 1) + "-" + (dt.getMonth() + 1) + "-" + dt.getFullYear());

$(document).ready(function () {
    console.log(todaydate)

    $.getJSON('https://api.opencovid.ca/timeseries?stat=cases&loc=prov&date=' + todaydate, function (data) {
        var states = [];
        var confirmed = [];


        $.each(data.cases, function (id, obj) {
            states.push(obj.province);
            confirmed.push(obj.cases);
        });
        console.log(states);
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',

            data: {
                labels: states,
                datasets: [
                    {
                        label: "Yesterday's Confirmed Cases Canada",
                        data: confirmed,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 2
                    }
                ]
            },
            // data: {
            //     labels: states,
            //     datasets: [{
            //         label: 'Canada"S StateWise Cases Yesterday',
            //         data: [12, 19, 3, 5, 2, 3],
            //         backgroundColor: [
            //             'rgba(255, 99, 132, 0.2)',
            //             'rgba(54, 162, 235, 0.2)',
            //             'rgba(255, 206, 86, 0.2)',
            //             'rgba(75, 192, 192, 0.2)',
            //             'rgba(153, 102, 255, 0.2)',
            //             'rgba(255, 159, 64, 0.2)'
            //         ],
            //         borderColor: [
            //             'rgba(255, 99, 132, 1)',
            //             'rgba(54, 162, 235, 1)',
            //             'rgba(255, 206, 86, 1)',
            //             'rgba(75, 192, 192, 1)',
            //             'rgba(153, 102, 255, 1)',
            //             'rgba(255, 159, 64, 1)'
            //         ],
            //         borderWidth: 1
            //     }]
            // },

        });
    });

});
