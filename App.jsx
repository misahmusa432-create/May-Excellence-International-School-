import React from "react";
import { GraduationCap, Users, CreditCard, Calendar, BarChart3, Home } from "lucide-react";

// Simple UI Components built-in so it doesn't crash
const Card = ({ children, className }) => (
  <div className={`bg-white rounded-2xl shadow-lg border ${className}`}>{children}</div>
);
const Button = ({ children, className }) => (
  <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${className}`}>{children}</button>
);

export default function MayExcellenceSchoolWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">May Excellence International School</h1>
          <p className="text-sm italic opacity-80">Knowledge for Excellence</p>
        </div>
        <div className="hidden md:flex space-x-3">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">Student Portal</Button>
          <Button className="bg-white text-blue-900 hover:bg-gray-200">Parent Portal</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-900">Shaping Future Leaders in Hadejia</h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-600">
          A modern boarding and day secondary school committed to academic excellence, 
          discipline, and character development.
        </p>
        <Button className="bg-blue-900 text-white hover:bg-blue-800">Apply for Admission</Button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card className="p-6 text-center">
          <CreditCard className="mx-auto mb-4 text-blue-900" size={40} />
          <h3 className="text-xl font-semibold mb-2">Online Fee Payment</h3>
          <p className="text-gray-600">Securely pay school fees and download receipts instantly.</p>
        </Card>

        <Card className="p-6 text-center">
          <Calendar className="mx-auto mb-4 text-blue-900" size={40} />
          <h3 className="text-xl font-semibold mb-2">Academic Calendar</h3>
          <p className="text-gray-600">Stay updated with term dates, holidays, and school events.</p>
        </Card>

        <Card className="p-6 text-center">
          <BarChart3 className="mx-auto mb-4 text-blue-900" size={40} />
          <h3 className="text-xl font-semibold mb-2">Result Checker</h3>
          <p className="text-gray-600">Access student performance reports and exam results online.</p>
        </Card>
      </section>

      {/* Contact Footer */}
      <footer className="bg-gray-100 py-8 text-center border-t">
        <p className="text-blue-900 font-bold">May Excellence International School, Hadejia</p>
        <p className="text-sm text-gray-500 mt-2">© 2026 All Rights Reserved</p>
      </footer>
    </div>
  );
}
