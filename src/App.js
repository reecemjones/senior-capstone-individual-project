import "./App.css";
import { useState } from "react";
import { Tabs, Tab, TabPanel } from "./components/tabs/Tabs";
import BarChart from "./components/barchart/BarChart";
import LineChart from "./components/linechart/LineChart";
import styled from "styled-components";

const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
  border-bottom: 1px solid #505050;
`;

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [lineChartId, setLineChartId] = useState("linechart");
  const [lineChartData, setLineChartData] = useState([
    25, 30, 45, 60, 20, 65, 75,
  ]);
  const [barChartId, setBarChartId] = useState("barchart");
  const [barChartData, setBarChartData] = useState([
    { name: "Simon", score: 80 },
    { name: "Mary", score: 98 },
    { name: "Simon", score: 60 },
    { name: "Dylan", score: 92 },
    { name: "Bob", score: 75 },
  ]);

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
            <Tab label="Pie Graph" value={2}></Tab>
          </Tabs>
        </TabsContainer>
      </header>
      <main>
        <TabPanel value={activeTab} selectedIndex={0}>
          <LineChart
            data={lineChartData}
            width="700"
            height="300"
            id={lineChartId}
          />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <BarChart
            data={barChartData}
            width="800"
            height="400"
            id={barChartId}
          />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <h1>Tab 3</h1>
        </TabPanel>
      </main>
    </>
  );
}

export default App;
