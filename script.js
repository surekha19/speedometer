window.onload = main;

function main() {
    var options = {
        renderTo: "gauge",
        height: 350,
        width: 500,
        units: "Km/h",
        minValue: 0,
        maxValue: 220,
        majorTicks: ["0","20","40","60","80","100","120", "140", "160", "180","200","220"],
        minorTicks:5,
        highlights: [
            {
                "from": 160,
                "to": 220,
                "color": "rgba(200, 50, 50, .75)"
            }
        ],
        colorPlate: "#fff",
        borderShadowWidth: 0,
        borders: false,
        needleType: "arrow",
        needleWidth: 2,
        needleCircleSize: 5,
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 200,
        animationRule: "linear",
       

    };
    
  

    var gauge = new RadialGauge(options).draw();
    gauge.value = 20;
    let value = 0;
    
    setInterval(()=>{
        axios.get('https://speedometer-demo.herokuapp.com/get-value').then((res)=>{
            console.log(res);
            gauge.value = res.data.value;
        });
     },1000);
}