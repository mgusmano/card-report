import React from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Market Share of Web Servers",
    plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
    showlegend: "1",
    showpercentvalues: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "Apache",
      value: "32647479"
    },
    {
      label: "Microsoft",
      value: "22100932"
    },
    {
      label: "Zeus",
      value: "14376"
    },
    {
      label: "Other",
      value: "18674221"
    }
  ]
};

class Pie extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="pie2d"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default Pie
