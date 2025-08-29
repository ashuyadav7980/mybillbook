import React, { useState } from "react";
import {
    FiSearch,
    FiCalendar,
    FiChevronDown,
    FiSettings,
    FiBarChart2,
    FiFileText,
} from "react-icons/fi";
import "./expenses.css";

export default function Expenses() {
    const [dateOpen, setDateOpen] = useState(false);
    const [catOpen, setCatOpen] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [reportsOpen, setReportsOpen] = useState(false);

    return (
        <div className="ex-wrap">
            {/* Header */}
            <div className="ex-head">
                <h1>Expenses</h1>

                <div className="ex-actions">
                    <div
                        className={`reports-btn ${reportsOpen ? "open" : ""}`}
                        onClick={() => setReportsOpen((v) => !v)}
                        role="button"
                    >
                        <FiBarChart2 />
                        <span>Reports</span>
                        <FiChevronDown className="caret" />
                        {reportsOpen && (
                            <div className="pill-menu" onMouseLeave={() => setReportsOpen(false)}>
                                <div className="pill-item">
                                    <div className="two-line">
                                        <div>Expense</div>
                                        <div>Transactions</div>
                                    </div>
                                </div>
                                <div className="pill-item">Expense Category</div>
                            </div>
                        )}
                    </div>

                    <button
                        className="icon-btn"
                        title="Quick Expense Settings"
                        onClick={() => setShowSettings(true)}
                    >
                        <FiSettings />
                    </button>

                    <button className="btn primary">Create Expense</button>
                </div>
            </div>

            {/* Filters */}
            <div className="ex-filters">
                <div className="pill muted" title="Search">
                    <FiSearch className="pill-icon" />
                </div>

                <div className="pill" role="button" onClick={() => setDateOpen((v) => !v)}>
                    <FiCalendar className="pill-icon" />
                    <span>Last 365 Days</span>
                    <FiChevronDown className="pill-caret" />
                    {dateOpen && (
                        <div className="pill-menu" onMouseLeave={() => setDateOpen(false)}>
                            <div className="pill-item">Today</div>
                            <div className="pill-item">Yesterday</div>
                            <div className="pill-item">This Week</div>
                            <div className="pill-item">Last Week</div>
                            <div className="pill-item">Last 30 Days</div>
                            <div className="pill-item">This Month</div>
                            <div className="pill-item">Previous Month</div>
                        </div>
                    )}
                </div>

                <div className="pill" role="button" onClick={() => setCatOpen((v) => !v)}>
                    <span>All Expenses Categories</span>
                    <FiChevronDown className="pill-caret" />
                    {catOpen && (
                        <div className="pill-menu" onMouseLeave={() => setCatOpen(false)}>
                            <div className="pill-item">All Expenses Categories</div>
                            <div className="pill-item">Travel</div>
                            <div className="pill-item">Supplies</div>
                            <div className="pill-item">Utilities</div>
                            <div className="pill-item">Other</div>
                        </div>
                    )}
                </div>
            </div>

            {/* Table */}
            <div className="ex-table card">
                <div className="ex-thead">
                    <div className="th">Date</div>
                    <div className="th">Expense Number</div>
                    <div className="th">Party Name</div>
                    <div className="th">Category</div>
                    <div className="th right">Amount</div>
                </div>

                {/* Empty state */}
                <div className="ex-empty">
                    <div className="ex-empty-icon">
                        <FiFileText />
                    </div>
                    <div className="ex-empty-text">
                        No Transactions Matching the current filter
                    </div>
                </div>
            </div>

            {/* Settings modal */}
            {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
        </div>
    );
}

/* ---------------- Settings Modal ---------------- */
function SettingsModal({ onClose }) {
    const [prefixEnabled, setPrefixEnabled] = useState(true);
    const [showItemImg, setShowItemImg] = useState(false);

    return (
        <div className="ex-modal-backdrop" onClick={onClose}>
            <div className="ex-modal" onClick={(e) => e.stopPropagation()}>
                <div className="ex-modal-title">Quick Expense Settings</div>

                <div className="ex-card">
                    <div className="ex-card-top">
                        <div className="ex-card-title">Expense Prefix &amp; Sequence Number</div>
                        <label className="ex-switch">
                            <input
                                type="checkbox"
                                checked={prefixEnabled}
                                onChange={(e) => setPrefixEnabled(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="ex-card-sub">
                        Add your custom prefix &amp; sequence for Expense Numbering
                    </div>

                    <div className="ex-grid-2 mt-12">
                        <label className="ex-field">
                            <div className="lbl">Prefix</div>
                            <input className="input" placeholder="Prefix" />
                        </label>
                        <label className="ex-field">
                            <div className="lbl">Sequence Number</div>
                            <input className="input" defaultValue="1" />
                        </label>
                    </div>

                    <div className="ex-note mt-8">Expense Number: 1</div>
                </div>

                <div className="ex-card">
                    <div className="ex-card-top">
                        <div className="ex-card-title">Show Item Image on Invoice</div>
                        <label className="ex-switch">
                            <input
                                type="checkbox"
                                checked={showItemImg}
                                onChange={(e) => setShowItemImg(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="ex-card-sub">
                        This will apply to all vouchers except for Payment In and Payment Out
                    </div>
                </div>

                <div className="ex-modal-actions">
                    <button className="btn ghost" onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        className="btn primary"
                        onClick={() => {
                            // normally save to API here
                            onClose();
                        }}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
