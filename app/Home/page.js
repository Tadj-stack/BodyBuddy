'use client'
import React from "react";
import { Chart, registerables } from "chart.js";
import Link from "next/link";

import { GiSushis } from "react-icons/gi";
import { GiNightSleep } from "react-icons/gi";
import { Suspense } from "react";
import loading from "../Components/loading/loading";
import { FaPersonRunning } from "react-icons/fa6";
import { FaHeartbeat, FaFireAlt } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import Sidebar from "@/app/Components/Sidebar";
import Title from "@/app/Components/Head";
Chart.register(...registerables);

function Home() {
  // Exemple de données 
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

  return (
    <div className="splitter">
      <Title />
      <Sidebar />

      <main className="main-container">
        <div className="main-title">
          <h3>PANNEAU DE CONTRÔLE</h3> {/* Titre du panneau de contrôle */}
        </div>

        <div className="main-cards">
          <div className="card">
            <div className="card-inner">
              <div>
                <CgGym size={110} />
                <h2>6 Exercices</h2> {/* 6 Exercices */}
              </div>
              <div style={{ width: 140, height: 140, margin: 10 }}>
                <CircularProgressbar
                  value={70}
                  text={`${70}%`}
                  strokeWidth={11}
                  styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: "butt",
                    textSize: "20px",
                    pathTransitionDuration: 0.5,
                    pathColor: `#10B3CB`,
                    textColor: "#fFFFFF",
                    trailColor: "#FFFFFF",
                    backgroundColor: "#C0C0C0",
                  })}
                />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div>
                <GiSushis size={110} />
                <h2>6 Repas</h2> {/* 6 Repas */}
              </div>
              <div style={{ width: 140, height: 140, margin: 10 }}>
                <CircularProgressbar
                  value={40}
                  text={`${40}%`}
                  strokeWidth={11}
                  styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: "butt",
                    textSize: "20px",
                    pathTransitionDuration: 0.5,
                    pathColor: `#FF527A`,
                    textColor: "#fFFFFF",
                    trailColor: "#FFFFFF",
                    backgroundColor: "#C0C0C0",
                  })}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="charts">
          <ResponsiveContainer width="100%" height="100%">

            <Suspense fallback={<p>Fetching data...</p>}>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
            </Suspense>
           
          </ResponsiveContainer>
          <div className="main-cards-2">
            <div className="card cardb">
              <div className="card-inner">
                <h3>Calories</h3> {/* Calories */}
                <FaFireAlt size={30} />
              </div>
              <h1>300</h1>
            </div>
            <div className="card cardb">
              <div className="card-inner">
                <h3>Rythme Cardiaque</h3> {/* Rythme Cardiaque */}
                <FaHeartbeat size={30} />
              </div>
              <h1>12</h1>
            </div>
            <div className="card cardb  ">
              <div className="card-inner">
                <h3>Pas</h3> {/* Pas */}
                <FaPersonRunning size={30} />
              </div>
              <h1>33</h1>
            </div>
            <div className="card cardb">
              <div className="card-inner">
                <h3>Sommeil</h3> {/* Sommeil */}
                <GiNightSleep size={30} />
              </div>
              <h1>42</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
