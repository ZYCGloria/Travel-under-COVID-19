am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);

    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdiv5", am4charts.XYChart);
    var title = chart.titles.create();
    title.text = "Passager capacity compared to 2019's figure"
    title.fontSize = 20;
    title.marginTop = 20;
    title.marginBottom = 20;
    title.marginLeft = 10;
    title.wrap = true;
    chart.numberFormatter.numberFormat = "#.#'%'";

    // Add data
    chart.data = [{
            "date": "2020-01-10",
            "value": 4
        },
        {
            "date": "2020-01-11",
            "value": 7
        },
        {
            "date": "2020-01-12",
            "value": 13
        },
        {
            "date": "2020-01-13",
            "value": 9
        },
        {
            "date": "2020-01-14",
            "value": 13
        },
        {
            "date": "2020-01-15",
            "value": 17
        },
        {
            "date": "2020-01-16",
            "value": 21
        },
        {
            "date": "2020-01-17",
            "value": 19
        },
        {
            "date": "2020-01-18",
            "value": 17
        },
        {
            "date": "2020-01-19",
            "value": 13
        },
        {
            "date": "2020-01-20",
            "value": 11
        },
        {
            "date": "2020-01-21",
            "value": 7
        },
        {
            "date": "2020-01-22",
            "value": 3
        },
        {
            "date": "2020-01-23",
            "value": 4
        },
        {
            "date": "2020-01-24",
            "value": -39
        },
        {
            "date": "2020-01-25",
            "value": -60
        },
        {
            "date": "2020-01-26",
            "value": -66
        },
        {
            "date": "2020-01-27",
            "value": -69
        },
        {
            "date": "2020-01-28",
            "value": -72
        },
        {
            "date": "2020-01-29",
            "value": -75
        },
        {
            "date": "2020-01-30",
            "value": -76
        },
        {
            "date": "2020-02-01",
            "value": -80
        },
        {
            "date": "2020-02-02",
            "value": -81
        },
        {
            "date": "2020-02-03",
            "value": -84
        },
        {
            "date": "2020-02-04",
            "value": -87
        },
        {
            "date": "2020-02-05",
            "value": -84
        },
        {
            "date": "2020-02-07",
            "value": -85
        }

    ];

    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "{value}"
    series.strokeWidth = 2;
    series.minBulletDistance = 15;

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";

    // Make bullets grow on hover
    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");

    var bullethover = bullet.states.create("hover");
    bullethover.properties.scale = 1.3;

    // Make a panning cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panXY";
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;

    // Create vertical scrollbar and place it before the value axis
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.parent = chart.leftAxesContainer;
    chart.scrollbarY.toBack();

    // Create a horizontal scrollbar with previe and place it underneath the date axis
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    chart.scrollbarX.series.push(series);
    chart.scrollbarX.parent = chart.bottomAxesContainer;

    dateAxis.start = 0.79;
    dateAxis.keepSelection = true;


});