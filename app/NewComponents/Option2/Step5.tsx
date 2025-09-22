'use client'



export default function Step5() {
  return (
    <div className="bg-white rounded-lg max-w-full  shadow-sm">


      <p className="text-gray-700 text-xs"> I've analyzed the 90-minute TechCorp requirements workshop. Here's an overview of what I found</p>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Key Statistics */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-3 text-sm">Key Statistics:</h3>
          <ul className="space-y-2">
            <li className="flex items-start text-xs text-gray-700">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
              <span>37 distinct requirements discussed</span>
            </li>
            <li className="flex items-start text-xs text-gray-700">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
              <span>12 unresolved questions identified</span>
            </li>
            <li className="flex items-start text-xs text-gray-700">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
              <span>8 concerns raised by Sarah (CTO)</span>
            </li>
            <li className="flex items-start text-xs text-gray-700">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
              <span>4 scope modifications compared to initial plan</span>
            </li>
          </ul>
        </div>

        {/* Stakeholder Participation */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-3 text-sm">Stakeholder Participation:</h3>
          <ul className="space-y-2">
            <li className="flex items-start text-xs text-gray-700">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
              <span>Sarah (CTO): 32% of discussion time</span>
            </li>
            <li className="flex items-start text-xs text-gray-700">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
              <span>Michael (Product Owner): 27% of discussion time</span>
            </li>
            <li className="flex items-start text-xs text-gray-700">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
              <span>Jennifer (Head of Data): 18% of discussion time</span>
            </li>
            <li className="flex items-start text-xs text-gray-700">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
              <span>Your team: 23% of discussion time</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-gray-700 text-xs leading-relaxed">
          Would you like me to show the detailed requirements breakdown, focus on Sarah's concerns, or examine the scope
          modifications first?
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
          Teams Analysis
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
          Jira Comparison
        </button>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-1">
          Stakeholder Data
        </button>
      </div>
    </div>
  )
}
