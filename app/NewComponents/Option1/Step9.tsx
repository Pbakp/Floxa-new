'use client';
import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnalyzingCard from '../processing-animation';

const meetings = [
  {
    id: 1,
    title: "Internal Kickoff",
    date: "March 12, 2025, 10:00 AM - 12:00 PM",
    attendees: "Thomas Chen, Jennifer Reeves, David Kumar, Sarah Williams",
    location: "Conference Room A + Teams Virtual Meeting",
    borderColor: "border-blue-500",
    bgColor: "bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    id: 2,
    title: "Client Kickoff",
    date: "March 16, 2025, 2:00 PM - 4:00 PM",
    attendees: "Thomas Chen, Jennifer Reeves, David Kumar + 3 TechCorp stakeholders",
    location: "Teams Virtual Meeting",
    borderColor: "border-purple-500",
    bgColor: "bg-purple-100",
    textColor: "text-purple-700",
  },
  {
    id: 3,
    title: "First Steering Group",
    date: "April 5, 2025, 10:00 AM - 11:30 AM",
    attendees: "Thomas Chen, Jennifer Reeves + 2 TechCorp executives",
    location: "",
    borderColor: "border-green-600",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
  },
];

export default function ProjectMeetings() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [showMeetings, setShowMeetings] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Checking team availability in calendars" },
    { text: "Reviewing client meeting preferences in contact records" },
    { text: "Creating calendar events with appropriate attendees" },
    { text: "Generating meeting links for virtual attendance" },
    { text: "Updating project timeline with meeting milestones" }
  ], []);

  const handleBuildRepeatComplete = useCallback(() => {
    // Show dashboard first with smooth transition
    setShowDashboard(true);

    // Show header after a smooth delay
    setTimeout(() => {
      setShowHeader(true);
    }, 500);

    // Show meetings section after header
    setTimeout(() => {
      setShowMeetings(true);
    }, 1000);
  }, []);
  return (
    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        description="I'll analyze the project timeline and stakeholder availability to schedule optimal meetings. Let me coordinate calendars and set up the necessary meeting infrastructure."
      />

      <AnimatePresence mode="wait">
        {showDashboard && (
          <motion.div
            className="mx-auto p-3 bg-white rounded-lg"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
          >
            <div className="max-w-full p-6 bg-white">
              <motion.h2
                className="flex items-center text-2xl font-semibold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <motion.svg
                  className="w-6 h-6 mr-2 text-green-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </motion.svg>
                TechCorp Project Meetings
                <motion.span
                  className="ml-4 inline-flex space-x-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  {["Outlook", "Teams", "HubSpot"].map((tool, index) => (
                    <motion.span
                      key={tool}
                      className={`text-white text-xs px-2 py-1 rounded ${tool === "Outlook" ? "bg-blue-600" :
                        tool === "Teams" ? "bg-blue-500" : "bg-orange-500"
                        }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + (index * 0.1), ease: "easeOut" }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </motion.span>
              </motion.h2>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              >
                {meetings.map((meeting, index) => (
                  <motion.div
                    key={meeting.id}
                    className={`${meeting.bgColor} ${meeting.borderColor} border-l-4 p-5 rounded-md relative`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 + (index * 0.2), ease: "easeOut" }}
                  >
                    <motion.span
                      className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.4 + (index * 0.2), ease: "easeOut" }}
                    >
                      Scheduled
                    </motion.span>

                    <motion.p
                      className={`${meeting.textColor} font-semibold mb-1`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.6 + (index * 0.2), ease: "easeOut" }}
                    >
                      {meeting.title}
                    </motion.p>
                    <motion.h3
                      className={`${meeting.textColor} font-bold text-lg mb-2`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.7 + (index * 0.2), ease: "easeOut" }}
                    >
                      {meeting.date}
                    </motion.h3>
                    <motion.p
                      className="text-sm mb-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.8 + (index * 0.2), ease: "easeOut" }}
                    >
                      <span className="font-semibold">Attendees:</span> {meeting.attendees}
                    </motion.p>
                    {meeting.location && (
                      <motion.p
                        className="text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.9 + (index * 0.2), ease: "easeOut" }}
                      >
                        <span className="font-semibold">Location:</span> {meeting.location}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>

  );
}
