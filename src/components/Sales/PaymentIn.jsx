import React, { useState } from "react";
import {
    FiCalendar,
    FiChevronDown,
    FiSettings,
    FiX,
    FiFileText,
} from "react-icons/fi";
import "./paymentin.css";

export default function PaymentIn() {
    const [showDate, setShowDate] = useState(false);
    const [dateLabel, setDateLabel] = useState("Last 365 Days");
    const [openSettings, setOpenSettings] = useState(false);

    const dateOptions = [
        "Today",
        "Yesterday",
        "This Week",
        "Last Week",
        "Last 7 days",
        "This Month",
        "Previous Month",
        "Last 365 Days",
    ];

    return (
        <div className="pi-wrap">
            {/* Top row: page title & main toolbar */}
            <div className="pi-head">
                <h1>Payment In</h1>

                <div className="pi-actions">
                    <button
                        className="icon-btn"
                        title="Quick Payment In Settings"
                        onClick={() => setOpenSettings(true)}
                    >
                        <FiSettings />
                    </button>

                    <button className="btn primary">Create Payment In</button>
                </div>
            </div>

            {/* Tabs (only one is active in this UI) */}
            <div className="pi-tabs">
                <button className="pi-tab active">Payment Received</button>
            </div>

            {/* Filters */}
            <div className="pi-filters">
                <div className="dropdown">
                    <button
                        className="dropdown-trigger"
                        onClick={() => setShowDate((s) => !s)}
                    >
                        <FiCalendar />
                        <span>{dateLabel}</span>
                        <FiChevronDown className="chev" />
                    </button>

                    {showDate && (
                        <div className="dropdown-menu">
                            {dateOptions.map((opt) => (
                                <button
                                    key={opt}
                                    className="dropdown-item"
                                    onClick={() => {
                                        setDateLabel(opt);
                                        setShowDate(false);
                                    }}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Table (empty state) */}
            <div className="pi-table card">
                <div className="pi-thead">
                    <div className="th w-15">Date</div>
                    <div className="th w-25">Payment Number</div>
                    <div className="th w-35">Party Name</div>
                    <div className="th w-15">Amount</div>
                </div>

                <div className="pi-empty">
                    <div className="empty-icon">
                        <FiFileText />
                    </div>
                    <div className="empty-text">
                        No Transactions Matching the current filter
                    </div>
                </div>
            </div>

            {/* SETTINGS MODAL */}
            {openSettings && (
                <div className="modal-backdrop" onClick={() => setOpenSettings(false)}>
                    <div
                        className="modal card"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <div className="modal-head">
                            <h3>Quick Payment In Settings</h3>
                            <button
                                className="icon-btn"
                                onClick={() => setOpenSettings(false)}
                                aria-label="Close"
                            >
                                <FiX />
                            </button>
                        </div>

                        <div className="setting-card">
                            <div className="setting-title">
                                Payment In Prefix &amp; Sequence Number
                            </div>
                            <div className="setting-sub">
                                Add your custom prefix &amp; sequence for Payment In Numbering
                            </div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider" />
                            </label>
                        </div>

                        <div className="modal-foot">
                            <button
                                className="btn"
                                onClick={() => setOpenSettings(false)}
                            >
                                Cancel
                            </button>
                            <button className="btn primary" onClick={() => setOpenSettings(false)}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
