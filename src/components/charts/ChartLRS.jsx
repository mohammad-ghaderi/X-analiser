import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const ChartLRST = () => {
    return (
        <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <LineChart
                    width={700}
                    height={500}
                    data={data}
                    style={{
                        border: "1px solid #e1e1e1",
                        padding: "1rem",
                    }}
                >
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

// ChartLRST.demoUrl = 'https://codes andbox.io/p/sandbox/tiny-line-chart-5f5vq6';

export default ChartLRST;
