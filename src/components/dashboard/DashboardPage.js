import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PageWrapper from './PageWrapper'; // Correct import path

export const DashboardPage = () => {
  const [data, setData] = useState({
    needsScheduled: 0,
    needsCreated: 0,
    needsDelivered: 0,
    needsPaid: 0,
    todayMetrics: {
      confirmed: 0,
      scheduled: 0,
      cancelled: 0,
      rescheduled: 0,
      scheduleCancelled: 0,
    },
    tomorrowMetrics: {
      confirmed: 0,
      scheduled: 0,
      cancelled: 0,
      rescheduled: 0,
      scheduleCancelled: 0,
    },
    photographers: [
      { name: 'Photographer A', weekCount: 0, monthCount: 0 },
      { name: 'Photographer B', weekCount: 0, monthCount: 0 },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/dashboard');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Needs Scheduled", count: data.needsScheduled, color: "blue" },
            { title: "Needs Created", count: data.needsCreated, color: "green" },
            { title: "Needs Delivered", count: data.needsDelivered, color: "blue" },
            { title: "Needs Paid", count: data.needsPaid, color: "green" },
          ].map(({ title, count, color }) => (
            <div
              key={title}
              className={`bg-${color}-500 p-6 rounded-lg shadow-lg text-white flex flex-col items-center`}
            >
              <h3 className="font-medium text-lg">{title}</h3>
              <p className="text-4xl font-bold mt-2">{count}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['Today', 'Tomorrow'].map(period => (
            <div key={period} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">{period} Metrics</h2>
              <div className="space-y-4">
                {[
                  `Jobs confirmed ${period.toLowerCase()}`,
                  `Jobs scheduled ${period.toLowerCase()}`,
                  `Order cancelled ${period.toLowerCase()}`,
                  `Jobs rescheduled ${period.toLowerCase()}`,
                  `Schedule cancelled ${period.toLowerCase()}`,
                ].map((metric, index) => (
                  <div key={metric} className="flex justify-between items-center">
                    <span className="text-gray-600">{metric}</span>
                    <span className="font-medium">
                      {period === 'Today' ? Object.values(data.todayMetrics)[index] : Object.values(data.tomorrowMetrics)[index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Basic Count Reports</h2>
          <table className="w-full text-sm text-gray-700">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left">Photographer</th>
                <th className="py-2 text-left">Week Count</th>
                <th className="py-2 text-left">Month Count</th>
              </tr>
            </thead>
            <tbody>
              {data.photographers.map((photographer) => (
                <tr key={photographer.name}>
                  <td className="py-2">{photographer.name}</td>
                  <td className="py-2">{photographer.weekCount}</td>
                  <td className="py-2">{photographer.monthCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;