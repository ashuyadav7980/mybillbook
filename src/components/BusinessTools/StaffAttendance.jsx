import React from "react";
import { FiCalendar, FiPieChart, FiBell } from "react-icons/fi";
import "./staffAttendance.css";

export default function StaffAttendance() {
    return (
        <div className="sap-wrap">
            {/* Top 3 feature cards */}
            <div className="sap-cards">
                <div className="sap-card">
                    <div className="sap-illus">
                        <FiCalendar />
                    </div>
                    <div className="sap-card-caption">
                        Mark your staff's attendance digitally
                    </div>
                </div>

                <div className="sap-card">
                    <div className="sap-illus">
                        <FiPieChart />
                    </div>
                    <div className="sap-card-caption">
                        Simplify payroll by adding salary, advance &amp; pending payments
                    </div>
                </div>

                <div className="sap-card">
                    <div className="sap-illus">
                        <FiBell />
                    </div>
                    <div className="sap-card-caption">
                        Set custom reminders to mark attendance timely
                    </div>
                </div>
            </div>

            {/* Center CTA block */}
            <div className="sap-center">
                <h2 className="sap-title">Mark attendance and manage payroll</h2>
                <p className="sap-sub">
                    Add staff to Mark attendance and manage payroll with ease!
                </p>
                <button className="btn primary big">+ Add Staff</button>
            </div>
        </div>
    );
}
