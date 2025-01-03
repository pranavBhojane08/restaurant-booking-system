"use client";

import { useState } from "react";

const Timeline = ({ availableSlots, bookedSlots, onSelectSlot }) => {
  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
    "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"
  ];

  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotClick = (slot) => {
    if (!bookedSlots.includes(slot)) {
      setSelectedSlot(slot);
      onSelectSlot(slot);  // Inform parent component of selected slot
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center mb-4">Select Your Time Slot</h2>
      <div className="space-y-2">
        {timeSlots.map((slot) => {
          const isAvailable = availableSlots.includes(slot);
          const isBooked = bookedSlots.includes(slot);
          const isSelected = selectedSlot === slot;

          return (
            <div
              key={slot}
              onClick={() => handleSlotClick(slot)}
              className={`p-2 rounded-md cursor-pointer transition-colors 
                ${isBooked ? "bg-gray-300 cursor-not-allowed" :
                isSelected ? "bg-blue-600 text-white" :
                isAvailable ? "bg-green-600 text-white hover:bg-green-500" : 
                "bg-gray-200"}`}
            >
              <span>{slot}</span>
              {isBooked && <span className="ml-2 text-sm text-red-500">(Booked)</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
