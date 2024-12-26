import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Home, ShoppingCart, FileText, Users, Calendar, Map,
  Settings, CreditCard, LogOut, ChevronDown, ChevronUp,
  Truck, ClipboardList, BarChart2, CheckSquare
} from 'lucide-react';

// Import all pages individually
import DashboardPage from './DashboardPage';
import OrdersPage from './OrdersPage';
import ListingsPage from './ListingsPage';
import TaskManagerPage from './TaskManagerPage';
import OnsiteTrackingPage from './OnsiteTrackingPage';
import ClientsPage from './ClientsPage';
import InvoicesPage from './InvoicesPage';
import MapSchedulerPage from './MapSchedulerPage';
import MergeFleetPage from './MergeFleetPage';
import CalendarViewPage from './CalendarViewPage';
import ShoppingCartPage from './ShoppingCartPage';
import TeamPage from './TeamPage';
import MetricsReportsPage from './MetricsReportsPage';
import SettingsPage from './SettingsPage';
import BillingPage from './BillingPage';

const ChevronDownIcon = () => <span className="text-gray-500 text-xs"><ChevronDown size={14} /></span>;
const ChevronUpIcon = () => <span className="text-gray-500 text-xs"><ChevronUp size={14} /></span>;

const MenuItem = ({ icon: Icon, label, children, isExpanded, onToggle, isActive, onClick }) => {
  const hasChildren = children && children.length > 0;

  return (
    <div className="w-full">
      <div
        className={`flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150
          ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700'} 
          ${isExpanded ? 'bg-gray-50' : ''}`}
        onClick={() => {
          if (hasChildren) {
            onToggle();
          }
          if (onClick) {
            onClick();
          }
        }}
      >
        <span className={`w-6 h-6 flex items-center justify-center mr-3
          ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
          {typeof Icon === 'string' ? Icon : <Icon size={20} />}
        </span>
        <span className={`text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'}`}>
          {label}
        </span>
        {hasChildren && (
          <span className="ml-auto transform transition-transform duration-150">
            {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </span>
        )}
      </div>

      {hasChildren && isExpanded && (
        <div className="bg-gray-50">
          {children.map((child) => (
            <div
              key={child.label}
              className={`pl-12 pr-4 py-2 text-sm cursor-pointer transition-colors duration-150
                ${child.isActive ? 'text-blue-600 bg-blue-50 font-medium' : 'text-gray-600'} 
                hover:bg-gray-100`}
              onClick={() => child.onClick && child.onClick()}
            >
              {child.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const NavigationSidebar = ({ activePage, setActivePage, navigate }) => {
  const [expandedItems, setExpandedItems] = useState({
    clients: false,
    invoices: false,
    team: false,
    settings: false,
    shoppingCart: false,
    billing: false
  });

  const toggleItem = (key) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const createChildItem = (label, parentLabel) => ({
    label,
    isActive: activePage === label,
    onClick: () => setActivePage(label)
  });

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col shadow-lg">
      <div className="p-4 border-b border-gray-200">
        <div className="text-lg font-semibold text-gray-800">Photography CRM</div>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <div className="py-2">
          <MenuItem
            icon={Home}
            label="Dashboard"
            isActive={activePage === 'Dashboard'}
            onClick={() => setActivePage('Dashboard')}
          />
          <MenuItem
            icon={ShoppingCart}
            label="Orders"
            isActive={activePage === 'Orders'}
            onClick={() => setActivePage('Orders')}
          />
          <MenuItem
            icon={ClipboardList}
            label="Listings"
            isActive={activePage === 'Listings'}
            onClick={() => setActivePage('Listings')}
          />
          <MenuItem
            icon={CheckSquare}
            label="Task Manager"
            isActive={activePage === 'Task Manager'}
            onClick={() => setActivePage('Task Manager')}
          />
          <MenuItem
            icon={Truck}
            label="Onsite Tracking"
            isActive={activePage === 'Onsite Tracking'}
            onClick={() => setActivePage('Onsite Tracking')}
          />

          <MenuItem
            icon={Users}
            label="Clients"
            isExpanded={expandedItems.clients}
            onToggle={() => toggleItem('clients')}
            isActive={activePage === 'Clients'}
            children={[
              createChildItem('Companies', 'Clients'),
              createChildItem('Agents', 'Clients')
            ]}
          />

          <MenuItem
            icon={FileText}
            label="Invoices"
            isExpanded={expandedItems.invoices}
            onToggle={() => toggleItem('invoices')}
            isActive={activePage === 'Invoices'}
            children={[
              createChildItem('Clients', 'Invoices'),
              createChildItem('Photographers', 'Invoices')
            ]}
          />

          <MenuItem
            icon={Map}
            label="Map Scheduler"
            isActive={activePage === 'Map Scheduler'}
            onClick={() => setActivePage('Map Scheduler')}
          />
          <MenuItem
            icon={Truck}
            label="Merge Fleet"
            isActive={activePage === 'Merge Fleet'}
            onClick={() => setActivePage('Merge Fleet')}
          />
          <MenuItem
            icon={Calendar}
            label="Calendar View"
            isActive={activePage === 'Calendar View'}
            onClick={() => setActivePage('Calendar View')}
          />

          <MenuItem
            icon={ShoppingCart}
            label="Shopping Cart"
            isExpanded={expandedItems.shoppingCart}
            onToggle={() => toggleItem('shoppingCart')}
            isActive={activePage === 'Shopping Cart'}
            children={[
              createChildItem('Order Pages', 'Shopping Cart'),
              createChildItem('Services', 'Shopping Cart'),
              createChildItem('Questions', 'Shopping Cart')
            ]}
          />

          <MenuItem
            icon={Users}
            label="Team"
            isExpanded={expandedItems.team}
            onToggle={() => toggleItem('team')}
            isActive={activePage === 'Team'}
            children={[
              createChildItem('Admins', 'Team'),
              createChildItem('Photographers', 'Team'),
              createChildItem('Time Off', 'Team'),
              createChildItem('Editors', 'Team')
            ]}
          />

          <MenuItem
            icon={BarChart2}
            label="Metrics & Reports"
            isActive={activePage === 'Metrics & Reports'}
            onClick={() => setActivePage('Metrics & Reports')}
          />

          <MenuItem
            icon={Settings}
            label="Settings"
            isExpanded={expandedItems.settings}
            onToggle={() => toggleItem('settings')}
            isActive={activePage === 'Settings'}
            children={[
              createChildItem('My Company', 'Settings'),
              createChildItem('Task Builder', 'Settings'),
              createChildItem('Assignment Queue', 'Settings'),
              createChildItem('Shopping Cart', 'Settings'),
              createChildItem('Scheduling', 'Settings'),
              createChildItem('Service Areas', 'Settings'),
              createChildItem('Photographers', 'Settings'),
              createChildItem('Invoicing', 'Settings'),
              createChildItem('Entry Methods', 'Settings'),
              createChildItem('Integrations', 'Settings'),
              createChildItem('Service Categories', 'Settings'),
              createChildItem('SMS Templates', 'Settings'),
              createChildItem('Email Templates', 'Settings'),
              createChildItem('Price Override', 'Settings'),
              createChildItem('Duration Override', 'Settings'),
              createChildItem('Webhooks', 'Settings')
            ]}
          />

          <MenuItem
            icon={CreditCard}
            label="Billing"
            isExpanded={expandedItems.billing}
            onToggle={() => toggleItem('billing')}
            isActive={activePage === 'Billing'}
            children={[
              createChildItem('Current Usage', 'Billing'),
              createChildItem('Invoices', 'Billing'),
              createChildItem('Payment Method', 'Billing')
            ]}
          />
        </div>
      </nav>

      <div className="mt-auto border-t border-gray-200">
        <div className="p-4">
          <MenuItem
            icon={LogOut}
            label="Logout"
            onClick={() => { localStorage.removeItem('token'); navigate('/login'); }}
          />
        </div>
        <div className="px-4 pb-4 text-sm text-gray-500">
          Version 1.0.0
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [activePage, setActivePage] = useState('Dashboard');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect to login if not logged in
    }
  }, [navigate]);

  const renderPage = () => {
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
    <div className="flex h-screen bg-gray-100">
      <NavigationSidebar activePage={activePage} setActivePage={setActivePage} navigate={navigate} />
      <main className="flex-1 overflow-auto">
        {renderPage()}
      </main>
    </div>
  );
};

export default Dashboard;