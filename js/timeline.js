am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv4", am4plugins_timeline.SerpentineChart);
    chart.curveContainer.padding(50, 20, 50, 20);
    chart.levelCount = 4;
    chart.yAxisRadius = am4core.percent(25);
    chart.yAxisInnerRadius = am4core.percent(-25);
    chart.maskBullets = false;

    var colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.5;

    chart.data = [{
            "category": "finding the virus",
            "start": "2019-12-20",
            "end": "2019-12-27",
            "color": colorSet.getIndex(1),
            "task": "Wuhan found unknow cases"
        },
        {
            "category": "finding the virus",
            "start": "2019-12-27",
            "end": "2019-12-30",
            "color": colorSet.getIndex(3),
            "task": "Dr. Li find it related to SARS"
        },
        {
            "category": "finding the virus",
            "start": "2019-12-31",
            "end": "2020-01-03",
            "color": colorSet.getIndex(4),
            "task": "China report 44 cases. "
        },
        {
            "category": "identify the virus",
            "start": "2020-1-1",
            "end": "2020-01-12",
            "color": colorSet.getIndex(6),
            "task": "China sharing gene sequence information. "
        }, {
            "category": "control the virus",
            "start": "2020-01-20",
            "end": "2020-01-30",
            "color": colorSet.getIndex(8),
            "task": "WHO declared PHEIC"
        },
        {
            "category": "control the virus",
            "start": "2020-01-20",
            "end": "2020-01-24",
            "color": colorSet.getIndex(9),
            "task": "support team arrive Wuhan"
        },
        {
            "category": "control the virus",
            "start": "2019-12-20",
            "end": "2020-02-12",
            "color": colorSet.getIndex(11),
            "task": "recorded 15000 cases with 254 death"
        },
        {
            "category": "lives affacted",
            "start": "2020-01-24",
            "end": "2020-02-12",
            "color": colorSet.getIndex(2),
            "task": "No outgoing travel allowed for Wuhan"
        },

    ];

    chart.dateFormatter.dateFormat = "yyyy-MM-dd";
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    chart.fontSize = 10;

    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.paddingRight = 25;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.innerRadius = -60;
    categoryAxis.renderer.radius = 60;

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 1, timeUnit: "day" };
    dateAxis.renderer.tooltipLocation = 0;
    dateAxis.startLocation = -0.5;
    dateAxis.renderer.line.strokeDasharray = "1,4";
    dateAxis.renderer.line.strokeOpacity = 0.6;
    dateAxis.tooltip.background.fillOpacity = 0.2;
    dateAxis.tooltip.background.cornerRadius = 5;
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    dateAxis.tooltip.label.paddingTop = 7;

    var labelTemplate = dateAxis.renderer.labels.template;
    labelTemplate.verticalCenter = "middle";
    labelTemplate.fillOpacity = 0.7;
    labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor("background");
    labelTemplate.background.fillOpacity = 1;
    labelTemplate.padding(7, 7, 7, 7);

    var series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
    series.columns.template.height = am4core.percent(20);
    series.columns.template.tooltipText = "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

    series.dataFields.openDateX = "start";
    series.dataFields.dateX = "end";
    series.dataFields.categoryY = "category";
    series.columns.template.propertyFields.fill = "color"; // get color from data
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.strokeOpacity = 0;

    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 3;
    bullet.circle.strokeOpacity = 0;
    bullet.propertyFields.fill = "color";
    bullet.locationX = 0;


    var bullet2 = series.bullets.push(new am4charts.CircleBullet());
    bullet2.circle.radius = 3;
    bullet2.circle.strokeOpacity = 0;
    bullet2.propertyFields.fill = "color";
    bullet2.locationX = 1;


    var imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet1.disabled = true;
    imageBullet1.propertyFields.disabled = "disabled1";
    imageBullet1.locationX = 1;
    imageBullet1.circle.radius = 20;
    imageBullet1.propertyFields.stroke = "color";
    imageBullet1.background.propertyFields.fill = "color";
    imageBullet1.image = new am4core.Image();
    imageBullet1.image.propertyFields.href = "image1";

    var imageBullet2 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet2.disabled = true;
    imageBullet2.propertyFields.disabled = "disabled2";
    imageBullet2.locationX = 0;
    imageBullet2.circle.radius = 20;
    imageBullet2.propertyFields.stroke = "color";
    imageBullet2.background.propertyFields.fill = "color";
    imageBullet2.image = new am4core.Image();
    imageBullet2.image.propertyFields.href = "image2";


    var eventSeries = chart.series.push(new am4plugins_timeline.CurveLineSeries());
    eventSeries.dataFields.dateX = "eventDate";
    eventSeries.dataFields.categoryY = "category";
    eventSeries.data = [
        { category: "finding the virus", eventDate: "2019-12-27", letter: "A", description: "Wuhan is doing research on the unknow virus." },
        { category: "finding the virus", eventDate: "2020-01-01", letter: "B", description: "Huanan Seafood Wholesale Market shut down." },
        { category: "identify the virus", eventDate: "2020-1-09", letter: "C", description: "a 61-year-old male died of the diease." },
        { category: "identify the virus", eventDate: "2020-01-20", letter: "D", description: "confirmed transmitting between humans with more than 200 cases" },
        { category: "control the virus", eventDate: "2020-01-23", letter: "E", description: "Wuhan announced a lockdown" },
        { category: "control the virus", eventDate: "2020-01-24", letter: "F", description: "The Chinese New Year Eve" },
        { category: "control the virus", eventDate: "2020-02-11", letter: "G", description: "WHO gave an official name :COVID-19." }
    ];
    eventSeries.strokeOpacity = 0;

    var flagBullet = eventSeries.bullets.push(new am4plugins_bullets.FlagBullet())
    flagBullet.label.propertyFields.text = "letter";
    flagBullet.locationX = 0;
    flagBullet.tooltipText = "{description}";

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.align = "center"
    chart.scrollbarX.width = am4core.percent(85);

    var cursor = new am4plugins_timeline.CurveCursor();
    chart.cursor = cursor;
    cursor.xAxis = dateAxis;
    cursor.yAxis = categoryAxis;
    cursor.lineY.disabled = true;
    cursor.lineX.strokeDasharray = "1,4";
    cursor.lineX.strokeOpacity = 1;

    dateAxis.renderer.tooltipLocation2 = 0;
    categoryAxis.cursorTooltipEnabled = false;

    var title = chart.titles.create();
    title.text = "Timeline Traceback"
    title.fontSize = 20;
    title.marginTop = 20;
    title.marginBottom = 20;
    title.marginLeft = 10;
    title.wrap = true;


});