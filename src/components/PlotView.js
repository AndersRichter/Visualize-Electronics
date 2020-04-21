import React, { Component } from "react";
import Plotly from './customPlotly';
import createPlotlyComponent from 'react-plotly.js/factory';

class PlotView extends Component {
  state = {
    count: 0
  };

  render() {
    const Plot = createPlotlyComponent(Plotly);

    return (
      <div>
        <h2>Plot</h2>
        <Plot
          data={[
            {
              type: "scatterpolar",
              mode: "lines",
              r: [0, 1.5, 1.5, 0, 2.5, 2.5, 0],
              theta: [0, 10, 20, 30, 20, 10, 0],
              fill: "toself",
              fillcolor: '#709BFF',
              line: {
                color: 'black'
              }
            },
            {
              type: "scatterpolar",
              mode: "lines",
              r: [0, 3.5, 3.5, 0],
              theta: [0, 55, 75, 0],
              fill: "toself",
              fillcolor: '#E4FF87',
              line: {
                color: 'black'
              }
            },
            {
              type: "scatterpolar",
              mode: "lines",
              r: [0, 4.5, 4.5, 0, 4.5, 4.5, 0],
              theta: [0, 100, 120, 0, 305, 320, 0],
              fill: "toself",
              fillcolor: '#FFAA70',
              line: {
                color: 'black'
              }
            },
            {
              type: "scatterpolar",
              mode: "lines",
              r: [0, 4, 4, 0],
              theta: [0, 165, 195, 0],
              fill: "toself",
              fillcolor: '#FFDF70',
              line: {
                color: 'black'
              }
            },
            {
              type: "scatterpolar",
              mode: "lines",
              r: [0, 3, 3, 0],
              theta: [0, 262.5, 277.5, 0],
              fill: "toself",
              fillcolor: '#B6FFB4',
              line: {
                color: 'black'
              },
              opacity: 0.2
            }
          ]}
          layout={{
            polar: {
              radialaxis: {
                visible: true,
                range: [0, 5]
              }
            },
          }}
          config={{
            scrollZoom: true,
            displayModeBar: true,
            displaylogo: false,
            locale: 'ru'
          }}
        />
      </div>
    );
  }
}

export default PlotView;
