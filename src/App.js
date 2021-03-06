import { useState } from "react";
import { Tabs, Tab, TabPanel } from "./components/tabs/Tabs";
import BarChart from "./components/barchart/BarChart";
import LineChart from "./components/linechart/LineChart";
import PieChart from "./components/piechart/PieChart";
import styled from "styled-components";
import "./App.css";

const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
  border-bottom: 1px solid #505050;
`;

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [lineChartId, setLineChartId] = useState("linechart");
  const [barChartId, setBarChartId] = useState("barchart");
  const [pieChartId, setPieChartId] = useState("piechart");
  const [data, setData] = useState(
    Array.from({ length: Math.floor(Math.random() * 24) + 8 }, () =>
      Math.round(Math.random() * 100)
    )
  );
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(400);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <>
      <header>
        <h1 className="title">Individual Project | Data Visualizations</h1>
        <TabsContainer>
          <Tabs selectedTab={activeTab} onChange={handleChange}>
            <Tab label="Line Chart" value={0}></Tab>
            <Tab label="Bar Chart" value={1}></Tab>
            <Tab label="Pie Chart" value={2}></Tab>
          </Tabs>
        </TabsContainer>
      </header>
      <main>
        <TabPanel value={activeTab} selectedIndex={0}>
          <LineChart
            data={data}
            width={width}
            height={height}
            id={lineChartId}
          />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <BarChart data={data} width={width} height={height} id={barChartId} />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <PieChart
            data={Array.from({ length: 3 }, () =>
              Math.round(Math.random() * 100)
            )}
            width={width}
            height={height}
            id={pieChartId}
          />
        </TabPanel>
      </main>
    </>
  );
}

export default App;
