
"use client";
import Link from "next/link";


import { useSearchParams } from "next/navigation";

export default function Summary() {
  const searchParams = useSearchParams();

  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const guests = searchParams.get("guests");
  const name = searchParams.get("name");
  const contact = searchParams.get("contact");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Booking Successful!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Thank you for your reservation. Here are your booking details:
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <p className="font-semibold text-gray-700">Date:</p>
          <p>{date || ""}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-700">Time:</p>
          <p>{time || "<%= date.id %>"}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-700">Number of Guests:</p>
          <p>{guests || "<%= guest.id %>"}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-700">Name:</p>
          <p>{name || "<%= name.id %>"}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-700">Contact Info:</p>
          <p>{contact || "contact.id"}</p>
        </div>
      </div>
    </div>
  );
}
