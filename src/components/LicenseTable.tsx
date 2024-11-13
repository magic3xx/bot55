import React from 'react';
import { License } from '../types/License';

interface LicenseTableProps {
  licenses: License[];
  onToggleActive: (id: number) => void;
  onDelete: (id: number) => void;
}

export function LicenseTable({ licenses, onToggleActive, onDelete }: LicenseTableProps) {
  return (
    <table className="w-full border-collapse mb-8 bg-white shadow-lg">
      <thead>
        <tr>
          <th className="p-4 text-left bg-[#870808] text-white">ID</th>
          <th className="p-4 text-left bg-[#870808] text-white">Key</th>
          <th className="p-4 text-left bg-[#870808] text-white">Active</th>
          <th className="p-4 text-left bg-[#870808] text-white">Expiration Date</th>
          <th className="p-4 text-left bg-[#870808] text-white">Subscription Type</th>
          <th className="p-4 text-left bg-[#870808] text-white">Support Name</th>
          <th className="p-4 text-left bg-[#870808] text-white">Device ID</th>
          <th className="p-4 text-left bg-[#870808] text-white">Activated</th>
          <th className="p-4 text-left bg-[#870808] text-white">Key Type</th>
          <th className="p-4 text-left bg-[#870808] text-white">Actions</th>
        </tr>
      </thead>
      <tbody>
        {licenses.map((license) => (
          <tr key={license.id} className="hover:bg-gray-100">
            <td className="p-4 border-b">{license.id}</td>
            <td className="p-4 border-b">{license.key}</td>
            <td className="p-4 border-b">{license.active ? 'Yes' : 'No'}</td>
            <td className="p-4 border-b">{license.expiration_date}</td>
            <td className="p-4 border-b">{license.subscription_type}</td>
            <td className="p-4 border-b">{license.support_name || 'N/A'}</td>
            <td className="p-4 border-b">{license.device_id || 'N/A'}</td>
            <td className="p-4 border-b">{license.activated ? 'Yes' : 'No'}</td>
            <td className="p-4 border-b">{license.key_type}</td>
            <td className="p-4 border-b">
              <button
                onClick={() => onToggleActive(license.id)}
                className="text-blue-600 hover:underline mr-2"
              >
                {license.active ? 'Deactivate' : 'Activate'}
              </button>
              <button
                onClick={() => {
                  if (window.confirm('Are you sure you want to delete this license?')) {
                    onDelete(license.id);
                  }
                }}
                className="text-blue-600 hover:underline"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}