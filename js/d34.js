d3.selectAll(".p4").style("fill", "blue");


var travel = [{
    date: "2019-1-26",
    capacity: 38.9
}, {
    date: "2019-1-27",
    capacity: 40.1
}, {
    date: "2019-1-28",
    capacity: 51.4
}, {
    date: "2019-1-29",
    capacity: 65.9
}, {
    date: "2019-1-30",
    capacity: 83.6
}];
var myColorScale = d3.scaleLinear().domain([10, 25, 100]).range(["	FireBrick", "	LimeGreen", "GhostWhite"]);
var svg = d3.select("svg");
var circles = d3.selectAll(".p4");
circles.data(travel);
circles.attr("r", function(d) {
    return d.capacity / 2;
});
circles.style("fill", function(d) {
    return myColorScale(d.capacity);
});


function showToolTip() {
    var tooltip = d3.select("#tooltip");
    var title = d3.select("#title");
    var subtitle = d3.select("#subtitle");

    circles
        .on("mouseover", function(d) {
            tooltip.style("display", "block");

            subtitle.text(d.date);
            title.text(d.capacity + "billion of people travelled");
        })
        .on("mouseout", function() {
            tooltip.style("display", "none");
        })
        .on("mousemove", function() {
            tooltip
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 100) + "px");
        });

        
}

showToolTip();
svg.append("g")
    .attr("transform", "translate(0," + 450 + ")")
    .call(d3.axisBottom(myScale));