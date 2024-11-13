import React from 'react';

interface ResetKeyFormProps {
  onSubmit: (key: string) => void;
}

export function ResetKeyForm({ onSubmit }: ResetKeyFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const key = formData.get('key') as string;
    onSubmit(key);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-6">Reset Key</h2>
      
      <div className="mb-4">
        <label htmlFor="reset-key" className="block font-bold mb-2">Key:</label>
        <input
          type="text"
          id="reset-key"
          name="key"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Reset Key
      </button>
    </form>
  );
}