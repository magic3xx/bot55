import React, { useState } from 'react';
import { License } from './types/License';
import { LicenseTable } from './components/LicenseTable';
import { AddLicenseForm } from './components/AddLicenseForm';
import { ResetKeyForm } from './components/ResetKeyForm';

// Sample data - replace with actual API calls
const initialLicenses: License[] = [
  {
    id: 1,
    key: "SAMPLE-KEY-123",
    active: true,
    expiration_date: "2024-12-31",
    subscription_type: "1 Month",
    support_name: "John Doe",
    device_id: "DEVICE-001",
    activated: true,
    key_type: "restricted"
  }
];

function App() {
  const [licenses, setLicenses] = useState<License[]>(initialLicenses);

  const handleToggleActive = (id: number) => {
    setLicenses(licenses.map(license =>
      license.id === id ? { ...license, active: !license.active } : license
    ));
  };

  const handleDelete = (id: number) => {
    setLicenses(licenses.filter(license => license.id !== id));
  };

  const handleAddLicense = (formData: FormData) => {
    // Implement API call here
    console.log('Adding license:', Object.fromEntries(formData));
  };

  const handleResetKey = (key: string) => {
    // Implement API call here
    console.log('Resetting key:', key);
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-4xl font-bold text-red-600 text-center mb-8">MAGIC TRADING</h1>

      <LicenseTable
        licenses={licenses}
        onToggleActive={handleToggleActive}
        onDelete={handleDelete}
      />

      <AddLicenseForm onSubmit={handleAddLicense} />
      <ResetKeyForm onSubmit={handleResetKey} />

      <footer className="text-center text-white mt-12">
        <hr className="border-gray-700 mb-6" />
        <p className="font-bold mb-2"># MAGIC TRADING #</p>
        <p className="mb-2">LETS LIFE SURPRISE YOU</p>
        <p>--------------------------------------------</p>
      </footer>
    </div>
  );
}

export default App;