import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardPage = () => {
  const [data, setData] = useState({
    needsScheduled: 0,
    needsCreated: 0,
    needsDelivered: 0,
    needsPaid: 0,
    todayMetrics: {
      confirmed: 0,
      pending: 0,
      cancelled: 0,
    },
  });

  useEffect(() => {
    // Fetch data from API
    axios.get('/api/dashboard-metrics')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching dashboard metrics:', error);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Needs Scheduled</h2>
          <p className="text-2xl">{data.needsScheduled}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Needs Created</h2>
          <p className="text-2xl">{data.needsCreated}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Needs Delivered</h2>
          <p className="text-2xl">{data.needsDelivered}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Needs Paid</h2>
          <p className="text-2xl">{data.needsPaid}</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Today's Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-2">Confirmed</h3>
          <p className="text-2xl">{data.todayMetrics.confirmed}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-2">Pending</h3>
          <p className="text-2xl">{data.todayMetrics.pending}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-2">Cancelled</h3>
          <p className="text-2xl">{data.todayMetrics.cancelled}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;