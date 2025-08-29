import React, { useState } from "react";
import "./applyLoan.css";

export default function ApplyLoan() {
    const [phone, setPhone] = useState("6290783735");

    const handleNext = (e) => {
        e.preventDefault();
        // stub – wire to your flow later
        console.log("Loan phone:", phone);
    };

    return (
        <div className="loan-wrap">
            <div className="loan-card">
                <h1 className="loan-title">Get Instant business loan</h1>

                <label className="loan-label">Please enter phone number</label>
                <input
                    className="loan-input"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number"
                />

                <button className="btn primary loan-btn" onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
}
