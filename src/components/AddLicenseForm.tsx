import React from 'react';

interface AddLicenseFormProps {
  onSubmit: (formData: FormData) => void;
}

export function AddLicenseForm({ onSubmit }: AddLicenseFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-6">Add New Key</h2>
      
      <div className="mb-4">
        <label htmlFor="key" className="block font-bold mb-2">Key:</label>
        <input
          type="text"
          id="key"
          name="key"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="days" className="block font-bold mb-2">Duration (Days):</label>
          <input
            type="number"
            id="days"
            name="days"
            min="0"
            defaultValue="0"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="hours" className="block font-bold mb-2">Duration (Hours):</label>
          <input
            type="number"
            id="hours"
            name="hours"
            min="0"
            defaultValue="0"
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="subscription_type" className="block font-bold mb-2">
          Subscription Type:
        </label>
        <select
          id="subscription_type"
          name="subscription_type"
          required
          className="w-full p-2 border rounded"
        >
          <option value="1 Week">1 Week</option>
          <option value="1 Month">1 Month</option>
          <option value="3 Months">3 Months</option>
          <option value="6 Months">6 Months</option>
          <option value="1 Year">1 Year</option>
          <option value="Free Trial">Free Trial</option>
          <option value="Hours">Hours</option>
          <option value="Days">Days</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="support_name" className="block font-bold mb-2">
          Support Name (optional):
        </label>
        <input
          type="text"
          id="support_name"
          name="support_name"
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="key_type" className="block font-bold mb-2">Key Type:</label>
        <select
          id="key_type"
          name="key_type"
          required
          className="w-full p-2 border rounded"
        >
          <option value="restricted">Restricted</option>
          <option value="unrestricted">Unrestricted</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Add Key
      </button>
    </form>
  );
}