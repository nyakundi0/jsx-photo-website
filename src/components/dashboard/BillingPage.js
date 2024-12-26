import React, { useState } from 'react';
import PageWrapper from './PageWrapper'; // Correct import path
import { CreditCard, ChevronDown, ChevronUp } from 'lucide-react';

const BillingPage = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [activePage, setActivePage] = useState('Billing');

  const toggleItem = (item) => {
    setExpandedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const createChildItem = (label, parent) => ({
    label,
    onClick: () => setActivePage(parent),
  });

  return (
    <PageWrapper title="Billing">
      <div>
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
    </PageWrapper>
  );
};

const MenuItem = ({ icon: Icon, label, isActive, onClick, isExpanded, onToggle, children }) => (
  <div className={`p-4 cursor-pointer hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`} onClick={onClick}>
    <Icon className="inline-block mr-2" />
    {label}
    {children && (
      <>
        <span onClick={onToggle} className="float-right">
          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </span>
        {isExpanded && (
          <div className="pl-4">
            {children.map((child, index) => (
              <div key={index} className="p-2 cursor-pointer hover:bg-gray-600" onClick={child.onClick}>
                {child.label}
              </div>
            ))}
          </div>
        )}
      </>
    )}
  </div>
);

export default BillingPage;