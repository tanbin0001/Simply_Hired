

import React, { useEffect, useState } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const Statistics = () => {
    const students = [
        { id: 1, name: "New year new me", assignmentMarks: 55 },
        { id: 2, name: "G3-Architect", assignmentMarks: 58 },
        { id: 3, name: "Legal House", assignmentMarks: 59 },
        { id: 4, name: "Problem Solving", assignmentMarks: 60 },
        { id: 5, name: "Geometry Genius", assignmentMarks: 60 },
        { id: 6, name: "Ai Universe", assignmentMarks: 60 },
        { id: 7, name: "Quiz Hero", assignmentMarks: 60 },
    ];

    return (
        <div className=" flex justify-center  my-20 ">
            <div className="">
                <h1 className="text-2xl font-bold text-center my-20">Chart based on my previous 7 <span className="text-blue-600">Assignments</span> </h1>
                <div className="">
                    <AreaChart width={900} height={500} data={students}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />

                        <Area
                            type="monotone"
                            dataKey="assignmentMarks"
                            stroke="black"
                            fill="#00C49F"
                        />
                    </AreaChart>
                </div>
            </div>
        </div>
    );
};

export default Statistics;