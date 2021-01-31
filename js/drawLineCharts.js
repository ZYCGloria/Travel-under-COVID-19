am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdivl", am4charts.XYChart);

    var title = chart.titles.create();
    title.text = "2020 Flights Situation Compared with 2019";
    title.fontSize = 20;
    title.marginTop = 30;
    
    chart.data = [{ date: "2020-01-01", open: 17700, close: 14400 },
    { date: "2020-01-15", open: 15100, close: 13000 },
    { date: "2020-02-01", open: 10100, close: 12000 },
    { date: "2020-02-15", open: 6000, close: 14500 },
    { date: "2020-03-01", open: 4200, close: 13000 },
    { date: "2020-03-15", open: 3000, close: 11500 },
    { date: "2020-04-01", open: 2200, close: 12300 },
    { date: "2020-04-15", open: 1700, close: 14200 }]
    
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 60;
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    
    // only for the legend
    var iconSeries = chart.series.push(new am4charts.ColumnSeries())
    iconSeries.fill = am4core.color("#ec0800");
    iconSeries.strokeOpacity = 0;
    iconSeries.stroke = am4core.color("#ec0800");
    iconSeries.name = "Events";
    iconSeries.dataFields.dateX = "date";
    iconSeries.dataFields.valueY = "v";
    
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "Year2020: {openValueY.value} Year2019: {valueY.value}";
    series.sequencedInterpolation = true;
    series.stroke = am4core.color("#1b7cb3");
    series.strokeWidth = 2;
    series.name = "Passengers monthly";
    series.stroke = chart.colors.getIndex(0);
    series.fill = series.stroke;
    series.fillOpacity = 0.8;
    
    var bullet = series.bullets.push(new am4charts.CircleBullet())
    bullet.fill = new am4core.InterfaceColorSet().getFor("background");
    bullet.fillOpacity = 1;
    bullet.strokeWidth = 2;
    bullet.circle.radius = 4;
    
    var series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.dateX = "date";
    series2.dataFields.valueY = "open";
    series2.sequencedInterpolation = true;
    series2.strokeWidth = 2;
    series2.tooltip.getFillFromObject = false;
    series2.tooltip.getStrokeFromObject = true;
    series2.tooltip.label.fill = am4core.color("#000");
    series2.name = "international passengers 2020";
    series2.stroke = chart.colors.getIndex(7);
    series2.fill = series2.stroke;
    
    var bullet2 = series2.bullets.push(new am4charts.CircleBullet())
    bullet2.fill = bullet.fill;
    bullet2.fillOpacity = 1;
    bullet2.strokeWidth = 2;
    bullet2.circle.radius = 4;
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.scrollbarX = new am4core.Scrollbar();
    
    var negativeRange;
    
    // create ranges
    var negativeRange;
    
    // create ranges
    chart.events.on("datavalidated", function() {
      series.dataItems.each(function(s1DataItem) {
        var s1PreviousDataItem;
        var s2PreviousDataItem;
    
        var s2DataItem = series2.dataItems.getIndex(s1DataItem.index);
    
        if (s1DataItem.index > 0) {
          s1PreviousDataItem = series.dataItems.getIndex(s1DataItem.index - 1);
          s2PreviousDataItem = series2.dataItems.getIndex(s1DataItem.index - 1);
        }
    
        var startTime = am4core.time.round(new Date(s1DataItem.dateX.getTime()), dateAxis.baseInterval.timeUnit, dateAxis.baseInterval.count).getTime();
    
        // intersections
        if (s1PreviousDataItem && s2PreviousDataItem) {
          var x0 = am4core.time.round(new Date(s1PreviousDataItem.dateX.getTime()), dateAxis.baseInterval.timeUnit, dateAxis.baseInterval.count).getTime() + dateAxis.baseDuration / 2;
          var y01 = s1PreviousDataItem.valueY;
          var y02 = s2PreviousDataItem.valueY;
    
          var x1 = startTime + dateAxis.baseDuration / 2;
          var y11 = s1DataItem.valueY;
          var y12 = s2DataItem.valueY;
    
          var intersection = am4core.math.getLineIntersection({ x: x0, y: y01 }, { x: x1, y: y11 }, { x: x0, y: y02 }, { x: x1, y: y12 });
    
          startTime = Math.round(intersection.x);
        }
    
        // start range here
        if (s2DataItem.valueY > s1DataItem.valueY) {
          if (!negativeRange) {
            negativeRange = dateAxis.createSeriesRange(series);
            negativeRange.date = new Date(startTime);
            negativeRange.contents.fill = series2.fill;
            negativeRange.contents.fillOpacity = 0.8;
          }
        }
        else {
          // if negative range started
          if (negativeRange) {
            negativeRange.endDate = new Date(startTime);
          }
          negativeRange = undefined;
        }
        // end if last
        if (s1DataItem.index == series.dataItems.length - 1) {
          if (negativeRange) {
            negativeRange.endDate = new Date(s1DataItem.dateX.getTime() + dateAxis.baseDuration / 2);
            negativeRange = undefined;
          }
        }
      })
    })
    
    }); // end am4core.ready()