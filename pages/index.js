import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", phone: "", from: "", to: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/sendBooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Booking Sent ✅");
        setForm({ name: "", phone: "", from: "", to: "" });
      } else {
        setStatus("Error ❌");
      }
    } catch (err) {
      setStatus("Error ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Taxi Booking 🚕
        </h2>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="text"
          name="from"
          value={form.from}
          onChange={handleChange}
          placeholder="From Location"
          required
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="text"
          name="to"
          value={form.to}
          onChange={handleChange}
          placeholder="To Location"
          required
          className="w-full mb-3 p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Book Now
        </button>
        <p className="mt-3 text-center text-sm">{status}</p>
      </form>
    </div>
  );
}
