import React, { useState } from 'react';


export const DashboardPage = () => (
  <div className="p-8">
    <div className="space-y-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      {/* To Complete Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: "Needs Scheduled", count: 0, color: "blue" },
          { title: "Needs Created", count: 0, color: "green" },
          { title: "Needs Delivered", count: 1, color: "blue" },
          { title: "Needs Paid", count: 0, color: "green" }
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

      {/* Today & Tomorrow Metrics Section */}
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
              ].map((metric) => (
                <div key={metric} className="flex justify-between items-center">
                  <span className="text-gray-600">{metric}</span>
                  <span className="font-medium">0</span>
                </div>
              ))}
            </div>
          </div>
        ))}
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
);

// Reusable page wrapper component
const PageWrapper = ({ title, children }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">{title}</h1>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {children}
    </div>
  </div>
);

export const OrdersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = [
    'All (Uses Date Submitted for searching)',
    'Appointment Drafts',
    'Cancelled (Automatically, Client & Admin)',
    'Confirmed',
    'Deleted Orders',
    'Delivery Phase (In Progress/Complete)',
  ];

  return (
    <PageWrapper title="Orders">
      <div className="orders-page">
        <h1>Orders</h1>
        <p>You have 0 orders</p>
        <p>Dec 7, 2024 - Dec 21, 2024</p>

        <div className="filters">
          <label htmlFor="filter-dropdown">Filter: </label>
          <select
            id="filter-dropdown"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            {filters.map((filter, index) => (
              <option key={index} value={filter}>
                {filter}
              </option>
            ))}
          </select>
        </div>

        <div className="search-section">
          <label htmlFor="date-picker">Search Date: </label>
          <input
            id="date-picker"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />

          <label htmlFor="search-input">Search: </label>
          <input
            id="search-input"
            type="text"
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <table className="orders-table">
          <thead>
            <tr>
              <th>Address</th>
              <th>Rush Order</th>
              <th>Agent</th>
              <th>Status</th>
              <th>Date Scheduled</th>
              <th>Time Scheduled</th>
              <th>Date Submitted</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="8" className="no-records">
                No record found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
};

export const ListingsPage = () => (
  <PageWrapper title="Listings">
    <div style={styles.container}>
      <h2>Your Listings</h2>
      <p>You have 0 listings</p>

      <div style={styles.createListingButton}>
        <button style={styles.button}>Create Listing</button>
      </div>

      {/* Search Bar */}
      <div style={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Search listings..."
          style={styles.searchBar}
        />
      </div>

      {/* Listings Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Address</th>
            <th>Thumbnail</th>
            <th>Rushed</th>
            <th>Listing Price</th>
            <th>Date Shot</th>
            <th>Shot by</th>
            <th>Agent/Client</th>
            <th>Status</th>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        
      </table>
    </div>
  </PageWrapper>
);

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  createListingButton: {
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  searchBarContainer: {
    marginBottom: '20px',
  },
  searchBar: {
    padding: '10px',
    width: '100%',
    maxWidth: '400px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '14px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  thumbnail: {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
};


export const TaskManagerPage = () => {
  const [status, setStatus] = useState('');
  const [taskCategory, setTaskCategory] = useState('');
  const [assignee, setAssignee] = useState('');
  const [completion, setCompletion] = useState(0);

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTaskCategory(event.target.value);
  };

  const handleAssigneeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAssignee(event.target.value);
  };

  const handleCompletionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompletion(Number(event.target.value));
  };

  return (
    <PageWrapper title="Task Manager">
      <div style={styles.container}>
        <h2>Task Manager</h2>
        <p>You have 0 incomplete tasks out of 0 tasks</p>

        {/* Filter Options */}
        <div style={styles.filterContainer}>
          <div style={styles.filterItem}>
            <label>Status:</label>
            <select value={status} onChange={handleStatusChange} style={styles.dropdown}>
              <option value="Pending">Pending</option>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Checking Files">Checking Files</option>
              <option value="File Check Over">File Check Over</option>
              <option value="Merge Fleet Error">Merge Fleet Error</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          
          <div style={styles.filterItem}>
            <label>Task Category:</label>
            <select value={taskCategory} onChange={handleCategoryChange} style={styles.dropdown}>
              <option value="Vip Client">Vip Client</option>
              <option value="New Client">New Client</option>
              <option value="Reshoot">Reshoot</option>
              <option value="Rush">Rush</option>
            </select>
          </div>

          <div style={styled.filterItem}>
            <label>Assignee:</label>
            <select value={assignee} onChange={handleAssigneeChange} style={styles.dropdown}>
              <option value="John Doe">John Doe</option>
              <option value="Jane Smith">Jane Smith</option>
              <option value="Tom Brown">Tom Brown</option>
            </select>
          </div>
        </div>

        {/* Task Table */}
        <table style={styled.table}>
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Task Category</th>
              <th>Assignee</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" /> Task 1
              </td>
              <td>{status}</td>
              <td>{taskCategory}</td>
              <td>{assignee}</td>
              <td>
                <button style={styled.button}>Cancel</button>
                <button style={styled.button}>Apply</button>
              </td>
            </tr>
         
          </tbody>
        </table>

        {/* Task Progress */}
        <div style={styled.progressContainer}>
          <label>Progress: {completion}%</label>
          <input
            type="range"
            min="0"
            max="100"
            value={completion}
            onChange={handleCompletionChange}
            style={styled.progressBar}
          />
        </div>
      </div>
    </PageWrapper>
  );
};

const styled = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  filterContainer: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
  },
  filterItem: {
    width: '30%',
  },
  dropdown: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '14px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  tableHeader: {
    backgroundColor: '#f1f1f1',
  },
  button: {
    padding: '6px 12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  progressContainer: {
    marginTop: '20px',
  },
  progressBar: {
    width: '100%',
    marginBottom: '10px',
  },
};




export const OnsiteTrackingPage = () => {
  const [serviceArea, setServiceArea] = useState('');
  const [photographers, setPhotographers] = useState('');
  const [jobStatus, setJobStatus] = useState({
    done: 0,
    pendingConfirmation: 0,
    inProgress: 0,
  });

  const handleServiceAreaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setServiceArea(event.target.value);
  };

  const handlePhotographersChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPhotographers(event.target.value);
  };

  const handleMarkDayAsCompleted = () => {
    // Implement functionality to mark the day as completed
    console.log('Day marked as completed');
  };

  return (
    <PageWrapper title="Onsite Tracking">
      <div style={sitali.container}>
        <h2>Onsite Tracking</h2>
        <p>Dec 21, 2024</p>

        {/* Table for Service Areas and Photographers */}
        <table style={sitali.table}>
          <thead>
            <tr>
              <th>Filter</th>
              <th>Selection</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>All Service Areas:</strong></td>
              <td>
                <select value={serviceArea} onChange={handleServiceAreaChange} style={sitali.dropdown}>
                  <option value="All Service Areas">All Service Areas</option>
                  <option value="Default Service Area">Default Service Area</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><strong>All Photographers:</strong></td>
              <td>
                <select value={photographers} onChange={handlePhotographersChange} style={sitali.dropdown}>
                  <option value="All Photographers">All Photographers</option>
                  {/* Add more photographers as needed */}
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Job Status Table */}
        <table style={sitali.table}>
          <thead>
            <tr>
              <th>Status</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Done:</strong></td>
              <td>{jobStatus.done} Jobs</td>
            </tr>
            <tr>
              <td><strong>Pending Confirmation:</strong></td>
              <td>{jobStatus.pendingConfirmation} Jobs</td>
            </tr>
            <tr>
              <td><strong>Currently in Progress:</strong></td>
              <td>{jobStatus.inProgress} Jobs</td>
            </tr>
          </tbody>
        </table>

        {/* No Appointments */}
        <div style={sitali.noAppointments}>
          <p>No appointments found</p>
        </div>

        {/* Mark Day as Completed Button */}
        <button onClick={handleMarkDayAsCompleted} style={sitali.markButton}>
          <span style={sitali.icon}>✔</span> Mark Day as Completed
        </button>
      </div>
    </PageWrapper>
  );
};

const sitali = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  dropdown: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '14px',
  },
  noAppointments: {
    marginTop: '20px',
    fontSize: '16px',
    color: '#999',
  },
  markButton: {
    marginTop: '20px',
    padding: '15px 30px',
    backgroundColor: 'red',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  icon: {
    marginRight: '10px',
    fontSize: '18px',
  },
};


export const ClientsPage = () => (
  <PageWrapper title="Clients">
    <p>Clients Page content goes here.</p>
  </PageWrapper>
);

export const InvoicesPage = () => (
  <PageWrapper title="Invoices">
    <p>Invoices Page content goes here.</p>
  </PageWrapper>
);

export const MapSchedulerPage = () => (
  <PageWrapper title="Map Scheduler">
    <p>Map Scheduler Page content goes here.</p>
  </PageWrapper>
);

export const MergeFleetPage = () => (
  <PageWrapper title="Merge Fleet">
    <div style={fleet.container}>
      <button style={fleet.startButton}>+ Start a Project</button>
      <p>You have 0 projects</p>
      <p>No project to show, press "Start" to create one.</p>
    </div>
  </PageWrapper>
);

const fleet = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  startButton: {
    backgroundColor: '#FF3B30',  // Red color
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginBottom: '20px',
    borderRadius: '5px',
    display: 'block',
  },
};

export const CalendarViewPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Function to get the start of the month (Sunday)
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  // Function to get the total days in the month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to generate the calendar grid
  const generateCalendar = (year: number, month: number) => {
    const firstDay = getFirstDayOfMonth(year, month);
    const daysInMonth = getDaysInMonth(year, month);

    // Create an array of all days in the month, filling the previous and next month's days if necessary
    const daysArray = [];
    let day = 1;

    // Add empty cells before the first day of the month (for previous month's days)
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(null);
    }

    // Add the current month's days
    for (let i = firstDay; i < 7; i++) {
      daysArray.push(day++);
    }

    // Fill the rest of the calendar
    while (day <= daysInMonth) {
      for (let i = 0; i < 7; i++) {
        if (day <= daysInMonth) {
          daysArray.push(day++);
        } else {
          break;
        }
      }
    }

    // Split the array into rows of 7 days (for the weeks)
    const weeks = [];
    for (let i = 0; i < daysArray.length; i += 7) {
      weeks.push(daysArray.slice(i, i + 7));
    }

    return weeks;
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const weeks = generateCalendar(currentYear, currentMonth);

  return (
    <PageWrapper title="Calendar View">
      <div style={calendar.container}>
        <h2>{months[currentMonth]} {currentYear}</h2>
        
        {/* Calendar Table */}
        <table style={calendar.table}>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, index) => (
              <tr key={index}>
                {week.map((day, idx) => (
                  <td key={idx} style={calendar.cell}>
                    {day || ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Buttons Section */}
        <div style={calendar.buttonsContainer}>
          <button style={calendar.button}>🔄 Refresh</button>
          <button style={calendar.button}>📅 Today</button>
          <button style={calendar.button}>📌 Reserve</button>
          <button style={calendar.button}>⚙️ Settings</button>
        </div>
      </div>
    </PageWrapper>
  );
};

const calendar = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  cell: {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
    height: '60px',
    verticalAlign: 'middle',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#FF3B30',  // Red color for buttons
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    width: '120px',
  },
};

export const ShoppingCartPage = () => (
  <PageWrapper title="Shopping Cart">
    <p>Shopping Cart Page content goes here.</p>
  </PageWrapper>
);

export const TeamPage = () => (
  <PageWrapper title="Team">
    <p>Team Page content goes here.</p>
  </PageWrapper>
);

export const MetricsReportsPage = () => (
  <PageWrapper title="Metrics & Reports">
    <div style={metrics.container}>
      {/* Data Timestamp */}
      <div style={metrics.timestamp}>
        Data current as of 09:04 AM, Dec 21, 2024
      </div>
      
      {/* Monthly Report */}
      <div style={metrics.monthContainer}>
        <h2>Dec 2024</h2>
        <div style={metrics.card}>
          <h4>Revenue</h4>
          <p>MTD: $0.00</p>
          <p>YTD: $0.00</p>
        </div>
        <div style={metrics.card}>
          <h4>Cash Collected</h4>
          <p>MTD: $0.00</p>
          <p>YTD: $0.00</p>
        </div>
        <div style={metrics.card}>
          <h4>Number of Jobs</h4>
          <p>MTD: 0</p>
          <p>YTD: 0</p>
        </div>
        <div style={metrics.card}>
          <h4>Average Order Value</h4>
          <p>MTD: $0.00</p>
          <p>YTD: $0.00</p>
        </div>
      </div>

      {/* Yearly Report */}
      <div style={metrics.reportContainer}>
        <h3>Revenue</h3>
        <table style={metrics.table}>
          <thead>
            <tr>
              <th>Month</th>
              <th>Current (2023)</th>
              <th>Previous (2022)</th>
              <th>Goal</th>
            </tr>
          </thead>
          <tbody>
            {['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'].map(month => (
              <tr key={month}>
                <td>{month}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Client Metrics */}
      <div style={metrics.clientContainer}>
        <div style={metrics.card}>
          <h4>New Clients</h4>
          <p>MTD: 0</p>
          <p>YTD: 0</p>
        </div>
        <div style={metrics.card}>
          <h4>Unique Clients</h4>
          <p>MTD: 0</p>
          <p>YTD: 0</p>
        </div>
        <div style={metrics.card}>
          <h4>Market Share</h4>
          <p>MTD: 0</p>
          <p>YTD: 0</p>
        </div>
        <div style={metrics.card}>
          <h4>Revenue Per Client</h4>
          <p>MTD: N/A</p>
          <p>YTD: N/A</p>
        </div>
      </div>

      {/* Orders Metrics */}
      <div style={metrics.ordersContainer}>
        <div style={metrics.card}>
          <h4>No Orders in Last X Days</h4>
          <p>1</p>
        </div>
        <div style={metrics.card}>
          <h4>30 Days - Non VIPs</h4>
          <p>0</p>
        </div>
        <div style={metrics.card}>
          <h4>15 Days - VIPs</h4>
          <p>0</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

const metrics = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  timestamp: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '20px',
  },
  monthContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  card: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  reportContainer: {
    marginBottom: '30px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #ddd',
  },
  clientContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  ordersContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
};
export const SettingsPage = () => (
  <PageWrapper title="Settings">
    <p>Settings Page content goes here.</p>
  </PageWrapper>
);

export const BillingPage = () => (
  <PageWrapper title="Billing">
    <p>Billing Page content goes here.</p>
  </PageWrapper>
);