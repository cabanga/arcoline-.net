function ChartData(url) {
    
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function (data) {
            PieChart(data)
            PolarChart(data)
            TimeLineChart(data)
        }
    });
}

Chart.defaults.global.legend.position = 'top';

function PieChart(data) {
    var ctx = document.getElementById('cetim-chartjs-pie').getContext('2d')
    ctx.height = 300

    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: data.data.AreaName,
            datasets: [{
                data: data.data.NumberCandidatures,
                backgroundColor: [
                    '#63534a',
                    '#7d5e499e',
                    '#d4b39c9e',
                    '#ffdec79e'
                ],
                legend: {
                    position: "top",
                    align: "start"
                }
            }]
        },
        options: {
            responsive: true,
        }

    });
}

function PolarChart(data) {
    var ctx = document.getElementById('cetim-chartjs-polar').getContext('2d')
    ctx.height = 300

    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: data.data.StatusText,
            datasets: [{
                data: data.data.StatusValues,
                backgroundColor: [
                    '#63534a',
                    '#7d5e499e',
                    '#d4b39c9e'

                ]
            }]
        },
        options: {
            responsive: true,
        }

    });
}

function TimeLineChart(data) {
    var ctx = document.getElementById('cetim-chartjs-timeLine').getContext('2d')

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.data.Months,
            datasets: [
                {
                    label: 'Aprovados',
                    backgroundColor: '#21150d9e',
                    fill: true,
                    data: data.data.monthsAprovados
                },
                {
                    label: 'Em revisao',
                    backgroundColor: '#7d5e499e',
                    fill: true,
                    data: data.data.monthsEmRevisao
                },
                {
                    label: 'Rejeitados',
                    backgroundColor: '#d4b39c9e',
                    fill: true,
                    data: data.data.monthsRejeitados
                }
            ]
        },
        options: {
            responsive: true,
            legend: {
                //display: false,
            }
        }

    });
}