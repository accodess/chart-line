const ctx = document.getElementById('myChart').getContext("2d");

let delayed;

let gradient = ctx.createLinearGradient(0,0,0,400);
gradient.addColorStop(0, 'rgba(249,206,238,1');
gradient.addColorStop(1, 'rgba(209,140,224,0.4');

const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Set',
    'Oct',
    'Nov',
    'Dec'
];

const data = {
    labels,
    datasets: [
        {
            data:[2, 3, 10, 8, 4, 3, 4, 3, 15, 7, 6, 5],
            label: 'Book Sales',
            fill: true,
            backgroundColor: gradient,
            borderColor: "#fff",
            pointBackgroundColor: "rgb(189, 195, 199)",
            //tension: 0.4,
        },
    ],
};

const config = {
    type: 'line',
    data: data,
    options: {
        radius: 5,
        hitRadius: 30,
        hoverRadius: 12,
        responsive: true,
        animation: {
            onComplete: () => {
                delay = true;
            },
            delay: (context) => {
                let delay = 0;
                if(context.type === "data" && context.mode === "default" && !delayed){
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
        scales: {
            y: {
                ticks: {
                    callback:function(value){
                        return "€" + value + "m";
                    },
                },
            },
        },
    },
};

const myChart = new Chart(ctx, config)