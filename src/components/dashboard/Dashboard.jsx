import React, { useState } from 'react';
import {
  Home,
  ShoppingCart,
  FileText,
  Users,
  Calendar,
  Map,
  Settings,
  CreditCard,
  LogOut,
  ChevronDown,
  Truck,
  ClipboardList,
  BarChart2
} from 'lucide-react';

// Import all pages
import {
  DashboardPage,
  OrdersPage,
  ListingsPage,
  TaskManagerPage,
  OnsiteTrackingPage,
  ClientsPage,
  InvoicesPage,
  MapSchedulerPage,
  MergeFleetPage,
  CalendarViewPage,
  ShoppingCartPage,
  TeamPage,
  MetricsReportsPage,
  SettingsPage,
  BillingPage
} from './DashboardPages'; // Adjust path if necessary

const Dashboard = () => {
  const [activePage, setActivePage] = useState('Dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'Dashboard':
        return <DashboardPage />;
      case 'Orders':
        return <OrdersPage />;
      case 'Listings':
        return <ListingsPage />;
      case 'Task Manager':
        return <TaskManagerPage />;
      case 'Onsite Tracking':
        return <OnsiteTrackingPage />;
      case 'Clients':
        return <ClientsPage />;
      case 'Invoices':
        return <InvoicesPage />;
      case 'Map Scheduler':
        return <MapSchedulerPage />;
      case 'Merge Fleet':
        return <MergeFleetPage />;
      case 'Calendar View':
        return <CalendarViewPage />;
      case 'Shopping Cart':
        return <ShoppingCartPage />;
      case 'Team':
        return <TeamPage />;
      case 'Metrics & Reports':
        return <MetricsReportsPage />;
      case 'Settings':
        return <SettingsPage />;
      case 'Billing':
        return <BillingPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Left Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <span>Dashboard</span>
          </div>

          <div className="nav-items">
            {[{ icon: <Home size={20} />, label: 'Dashboard' },
              { icon: <ShoppingCart size={20} />, label: 'Orders' },
              { icon: <ClipboardList size={20} />, label: 'Listings' },
              { icon: <FileText size={20} />, label: 'Task Manager' },
              { icon: <Truck size={20} />, label: 'Onsite Tracking' },
              { icon: <Users size={20} />, label: 'Clients' },
              { icon: <FileText size={20} />, label: 'Invoices' },
              { icon: <Map size={20} />, label: 'Map Scheduler' },
              { icon: <Truck size={20} />, label: 'Merge Fleet' },
              { icon: <Calendar size={20} />, label: 'Calendar View' },
              { icon: <ShoppingCart size={20} />, label: 'Shopping Cart' },
              { icon: <Users size={20} />, label: 'Team' },
              { icon: <BarChart2 size={20} />, label: 'Metrics & Reports' },
              { icon: <Settings size={20} />, label: 'Settings' },
              { icon: <CreditCard size={20} />, label: 'Billing' }].map(item => (
              <div
                key={item.label}
                className={`nav-item ${activePage === item.label ? 'active' : ''}`}
                onClick={() => setActivePage(item.label)}
              >
                <div className="nav-item-content">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {/* Optionally add sub-menu indicator */}
                {item.hasSubmenu && <ChevronDown size={16} />}
              </div>
            ))}
          </div>

          <div className="nav-footer">
            <div className="logout-button">
              <LogOut size={20} />
              <span>Logout</span>
            </div>
            <div className="version-info">
              Version 1.0.0
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;
