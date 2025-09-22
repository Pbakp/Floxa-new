'use client';

import { useState } from 'react';
import { Search, Mic } from 'lucide-react';

export default function OrganizationalIntelligenceDashboard() {
  const [query, setQuery] = useState('');

  const suggestedQueries = [
    'Try: "flottescompany support agreement"',
    'Try: "Project Alpha budget"',
    'Try: "expansion opportunities"'
  ];

  const handleSearch = () => {
    // Handle search functionality
    console.log('Searching for:', query);
  };

  const handleSuggestedQuery = (suggestedQuery: string) => {
    setQuery(suggestedQuery);
  };

  return (
    // <div className="min-h-screen  px-6 py-8">
      <div className="max-w-none">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl font-semibold text-gray-900 mb-3">
            Organizational Intelligence Dashboard
          </h1>
          <p className="text-sm text-gray-600 text-base leading-relaxed">
            Unified cross-team collaboration and proactive insights across your<br />
            enterprise tools.
          </p>
        </div>

        {/* Search Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <h2 className="text-xl font-medium text-gray-900 mb-6">
            Organizational Intelligence Query
          </h2>
          
          {/* Search Input Container */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about any customer, project, or team activity..."
              className="block w-full pl-12 pr-16 py-4 text-sm border border-gray-300 rounded-lg 
                    
                         placeholder:text-gray-500 bg-white transition-colors duration-200"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                type="button"
                className="p-3 text-gray-600 hover:text-gray-600 transition-colors duration-200"
              >
                <Mic className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleSearch}
            className="mr-2 ml-1 px-6 py-2 bg-[#635BFF]  text-white text-sm font-medium 
                          rounded-md hover:bg-[#635BFF] transition-colors duration-200"
              >
                Search
              </button>
            </div>
          </div>

          {/* Suggested Queries */}
          <div className="space-y-3">
            {/* <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Try:</span>
            </div> */}
            <div className="flex flex-wrap gap-3">
              {suggestedQueries.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedQuery(suggestion)}
                  className="inline-flex items-center px-4 py-2 text-sm text-gray-800 
                            bg-white hover:bg-gray-200 rounded-md border border-gray-200
                            transition-colors duration-200 cursor-pointer"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}