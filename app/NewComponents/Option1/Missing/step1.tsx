import React from 'react';

const MeetingRecommendations = () => {
  return (
    <div className="bg-gradient-to-r m from-indigo-500 to-purple-600 text-white p-6 rounded-lg max-w-full space-y-4 text-sm">
      
      <p>
        I’ll help schedule those meetings. Based on your team’s availability and TechCorp stakeholders' preferences, here are my recommendations:
      </p>

      <div>
        <p><span className="font-semibold">Internal Kickoff:</span> March 12, 2025, 10:00 AM – 12:00 PM <span className="text-white/80">(all team members available)</span></p>
        <p><span className="font-semibold">Client Kickoff:</span> March 16, 2025, 2:00 PM – 4:00 PM <span className="text-white/80">(matches TechCorp's preferred meeting time)</span></p>
        <p><span className="font-semibold">First Steering Group:</span> April 5, 2025, 10:00 AM – 11:30 AM <span className="text-white/80">(monthly cadence)</span></p>
      </div>

      <p className="text-white/90 text-sm">
        Would you like me to schedule these meetings and send calendar invites to all participants?
      </p>
    </div>
  );
};

export default MeetingRecommendations;
