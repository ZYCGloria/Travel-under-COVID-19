am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create map instance
    var chart = am4core.create("chartdivm", am4maps.MapChart);

    var title = chart.titles.create();
    title.text = "Countries tighten entry restrictions on China";
    title.fontSize = 20;
    title.marginTop = 30;
    
    // Set map definition
    chart.geodata = am4geodata_worldLow;
    
    // Set projection
    chart.projection = new am4maps.projections.Miller();
    
    // Series for World map
    var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
    worldSeries.exclude = ["AQ"];
    worldSeries.useGeodata = true;
    
    var polygonTemplate = worldSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = chart.colors.getIndex(0);
    polygonTemplate.nonScalingStroke = true;
    
    // Hover state
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");
    
    worldSeries.data = [{
        "id": "AF",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "AL",
        "fill": am4core.color("#FF5733")
      },{
        "id": "AR",
        "fill": am4core.color("#FF5733")
      },{
        "id": "AO",
        "fill": am4core.color("#FF5733")
      },{
        "id": "AM",
        "fill": am4core.color("#FF5733")
      },{
        "id": "AT",
        "fill": am4core.color("#FF5733")
      },{
        "id": "AU",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "AZ",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "BH",
        "fill": am4core.color("#FF5733")
      },{
        "id": "BD",
        "fill": am4core.color("#FF5733")
      },{
        "id": "BT",
        "fill": am4core.color("#FF5733")
      },{
        "id": "ES",
        "fill": am4core.color("#FF5733")
      },{
        "id": "PT",
        "fill": am4core.color("#FF5733")
      },{
        "id": "AD",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "AL",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "BA",
        "fill": am4core.color("#FF5733")
      },{
        "id": "BG",
        "fill": am4core.color("#FF5733")
      },{
        "id": "BY",
        "fill": am4core.color("#FF5733")
      },{
        "id": "BI",
        "fill": am4core.color("#FF5733")
      },{
        "id": "BR",
        "fill": am4core.color("#FF5733")
      },{
        "id": "BN",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "BE",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "BW",
        "fill": am4core.color("#FF5733")
      },{
        "id": "BF",
        "fill": am4core.color("#FF5733")
      },{
        "id": "BH",
        "fill": am4core.color("#FF5733")
      },{
        "id": "BJ",
        "fill": am4core.color("#FF5733")
      },{
        "id": "BI",
        "fill": am4core.color("#FF5733")
      },{
        "id": "CM",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "CA",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "CV",
        "fill": am4core.color("#FF5733")
      },{
        "id": "CF",
        "fill": am4core.color("#FF5733")
      },{
        "id": "CD",
        "fill": am4core.color("#FF5733")
      },{
        "id": "CL",
        "fill": am4core.color("#FF5733")
      },{
        "id": "PS",
        "fill": am4core.color("#FF5733")
      },{
        "id": "CO",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "CG",
        "fill": am4core.color("#FF5733")
      },{
        "id": "CU",
        "fill": am4core.color("#FF5733")
      },{
        "id": "DK",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "DJ",
        "fill": am4core.color("#FF5733")
      },{
        "id": "DO",
        "fill": am4core.color("#FF5733")
      },{
        "id": "DE",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "GL",
        "fill": am4core.color("#FF5733")
      },{
        "id": "SV",
        "fill": am4core.color("#FF5733")
      },{
        "id": "EG",
        "fill": am4core.color("#FF5733")
      },{
        "id": "PT",
        "fill": am4core.color("#FF5733")
      },{
        "id": "KZ",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "IE",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "ZA",
        "fill": am4core.color("#FF5733")
      },{
        "id": "LK",
        "fill": am4core.color("#FF5733")
      },{
        "id": "HR",
        "fill": am4core.color("#FF5733")
      },{
        "id": "GR",
        "fill": am4core.color("#FF5733")
      },{
        "id": "SD",
        "fill": am4core.color("#FF5733")
      },{
        "id": "XK",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "MK",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "ME",
        "fill": am4core.color("#FF5733")
      },{
        "id": "RW",
        "fill": am4core.color("#FF5733")
      },{
        "id": "RS",
        "fill": am4core.color("#FF5733")
      },{
        "id": "AT",
        "fill": am4core.color("#FF5733")
      },{
        "id": "CZ",
        "fill": am4core.color("#FF5733")
      },{
        "id": "FR",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "HU",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "LI",
        "fill": am4core.color("#FF5733")
      },{
        "id": "PL",
        "fill": am4core.color("#FF5733")
      },{
        "id": "SI",
        "fill": am4core.color("#FF5733")
      },{
        "id": "GA",
        "fill": am4core.color("#FF5733")
      },{
        "id": "FI",
        "fill": am4core.color("#FF5733")
      },{
        "id": "GY",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "SE",
        "fill": am4core.color("#FF5733")
      },{
        "id": "NA",
        "fill": am4core.color("#FF5733")
      },{
        "id": "DK",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "SE",
        "fill": am4core.color("#FF5733")
      },{
        "id": "NO",
        "fill": am4core.color("#FF5733")
      },{
        "id": "LT",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "LV",
        "fill": am4core.color("#FF5733")
      },{
        "id": "EE",
        "fill": am4core.color("#FF5733")
      },{
        "id": "MD",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "US",
        "fill": am4core.color("#FF5733")
      },{
        "id": "RO",
        "fill": am4core.color("#FF5733")
      },{
        "id": "IN",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "ID",
        "fill": am4core.color("#FF5733")
      },{
        "id": "UA",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "UZ",
        "fill": am4core.color("#FF5733")
      },{
        "id": "RU",
        "fill": am4core.color("#FF5733")
      }, {
        "id": "SS",
        "fill": am4core.color("#FF5733")
      }];
      
      polygonTemplate.propertyFields.fill = "fill";
    
    // Hover state
    //var hs = usPolygonTemplate .states.create("hover");
    //hs.properties.fill = am4core.color("#367B25");
    
    }); // end am4core.ready()