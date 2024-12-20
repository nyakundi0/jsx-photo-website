import React from 'react';

// Dashboard Page
export const DashboardPage = () => (
  <div className="flex h-screen bg-gray-100 p-8">
    {/* Main Content */}
    <div className="flex-1 overflow-auto">
      <div className="space-y-6">

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

        {/* To Complete Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {["Needs Scheduled", "Needs Created", "Needs Delivered", "Needs Paid"].map((title, index) => (
            <div
              key={title}
              className={`bg-${index % 2 === 0 ? 'blue' : 'green'}-500 p-6 rounded-lg shadow-lg text-white flex flex-col items-center`}
            >
              <h3 className="font-medium text-lg">{title}</h3>
              <p className="text-4xl font-bold mt-2">{index === 2 ? "1" : "0"}</p>
            </div>
          ))}
        </div>

        {/* Today Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Today Metrics</h2>
            <div className="space-y-4">
              {[
                "Jobs confirmed today",
                "Jobs scheduled today",
                "Order cancelled today",
                "Jobs rescheduled today",
                "Schedule cancelled today",
              ].map((metric) => (
                <div key={metric} className="flex justify-between items-center">
                  <span className="text-gray-600">{metric}</span>
                  <span className="font-medium">0</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tomorrow Metrics Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Tomorrow Metrics</h2>
            <div className="space-y-4">
              {[
                "Jobs confirmed tomorrow",
                "Jobs scheduled tomorrow",
                "Order cancelled tomorrow",
                "Jobs rescheduled tomorrow",
                "Schedule cancelled tomorrow",
              ].map((metric) => (
                <div key={metric} className="flex justify-between items-center">
                  <span className="text-gray-600">{metric}</span>
                  <span className="font-medium">0</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Basic Count Reports Section */}
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
              {/* Sample Rows */}
              <tr>
                <td className="py-2">Photographer A</td>
                <td className="py-2">15</td>
                <td className="py-2">60</td>
              </tr>
              <tr>
                <td className="py-2">Photographer B</td>
                <td className="py-2">12</td>
                <td className="py-2">45</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>
);


// Orders Page
export const OrdersPage = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Orders</h2>
    <p>Orders Page content goes here.</p>
  </div>
);

// Listings Page
export const ListingsPage = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Listings</h2>
    <p>Listings Page content goes here.</p>
  </div>
);

// Task Manager Page
export const TaskManagerPage = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Task Manager</h2>
    <p>Task Manager Page content goes here.</p>
  </div>
);

// Onsite Tracking Page
export const OnsiteTrackingPage = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Onsite Tracking</h2>
    <p>Onsite Tracking Page content goes here.</p>
  </div>
);

// Clients Page
export const ClientsPage = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Clients</h2>
    <p>Clients Page content goes here.</p>
  </div>
);

// Invoices Page
export const InvoicesPage = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Invoices</h2>
    <p>Invoices Page content goes here.</p>
  </div>
);

// Map Scheduler Page
export const MapSchedulerPage = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Map Scheduler</h2>
    <p>Map Scheduler Page content goes here.</p>
  </div>
);

// Merge Fleet Page
export const MergeFleetPage = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Merge Fleet</h2>
    <p>Merge Fleet Page content goes here.</p>
  </div>
);

// Calendar View Page
export const CalendarViewPage = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Calendar View</h2>
    <p>Calendar View Page content goes here.</p>
  </div>
);

// Shopping Cart Page
export const ShoppingCartPage = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
    <p>Shopping Cart Page content goes here.</p>
  </div>
);

// Team Page
export const TeamPage = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Team</h2>
    <p>Team Page content goes here.</p>
  </div>
);

// Metrics & Reports Page
export const MetricsReportsPage = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Metrics & Reports</h2>
    <p>Metrics & Reports Page content goes here.</p>
  </div>
);

// Settings Page
export const SettingsPage = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Settings</h2>
    <p>Settings Page content goes here.</p>
  </div>
);

// Billing Page
export const BillingPage = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Billing</h2>
    <p>Billing Page content goes here.</p>
  </div>
);
