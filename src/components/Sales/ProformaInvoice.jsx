import React, { useState } from "react";
import {
    FiCalendar,
    FiChevronDown,
    FiSearch,
    FiSettings,
    FiFileText,
} from "react-icons/fi";
import "./proformaInvoice.css";

export default function ProformaInvoice() {
    const [dateOpen, setDateOpen] = useState(false);
    const [statusOpen, setStatusOpen] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    return (
        <div className="pf-wrap">
            {/* Header */}
            <div className="pf-head">
                <h1>Proforma Invoice</h1>
                <div className="pf-head-actions">
                    <button
                        className="icon-btn"
                        title="Quick settings"
                        onClick={() => setShowSettings(true)}
                    >
                        <FiSettings />
                    </button>
                    <button className="btn primary">Create Proforma Invoice</button>
                </div>
            </div>

            {/* Filters */}
            <div className="pf-filters">
                <div className="pill">
                    <FiSearch className="pill-icon" />
                </div>

                <div
                    className="pill"
                    role="button"
                    onClick={() => setDateOpen((v) => !v)}
                >
                    <FiCalendar className="pill-icon" />
                    <span>Last 365 Days</span>
                    <FiChevronDown className="pill-caret" />
                    {dateOpen && (
                        <div className="pill-menu" onMouseLeave={() => setDateOpen(false)}>
                            <div className="pill-item">Today</div>
                            <div className="pill-item">Yesterday</div>
                            <div className="pill-item">This Week</div>
                            <div className="pill-item">Last Week</div>
                            <div className="pill-item">Last 7 days</div>
                            <div className="pill-item">This Month</div>
                            <div className="pill-item">Previous Month</div>
                        </div>
                    )}
                </div>

                <div
                    className="pill"
                    role="button"
                    onClick={() => setStatusOpen((v) => !v)}
                >
                    <span>Show Open Invoices</span>
                    <FiChevronDown className="pill-caret" />
                    {statusOpen && (
                        <div
                            className="pill-menu"
                            style={{ minWidth: 260 }}
                            onMouseLeave={() => setStatusOpen(false)}
                        >
                            <div className="pill-item">Show All Invoices</div>
                            <div className="pill-item active">Show Open Invoices</div>
                            <div className="pill-item">Show Closed Invoices</div>
                        </div>
                    )}
                </div>
            </div>

            {/* Table */}
            <div className="pf-table card">
                <div className="pf-thead">
                    <div className="th">Date</div>
                    <div className="th">Performa Invoice Number</div>
                    <div className="th">Party Name</div>
                    <div className="th">Due In</div>
                    <div className="th">Amount</div>
                    <div className="th">Status</div>
                </div>

                {/* Empty state */}
                <div className="pf-empty">
                    <div className="pf-empty-icon">
                        <FiFileText />
                    </div>
                    <div className="pf-empty-text">
                        No Transactions Matching the current filter
                    </div>
                </div>
            </div>

            {/* Settings modal */}
            {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
        </div>
    );
}

/* ----------------- Settings Modal ----------------- */
function SettingsModal({ onClose }) {
    const [prefixEnabled, setPrefixEnabled] = useState(true);
    const [showItemImg, setShowItemImg] = useState(true);
    const [priceHistory, setPriceHistory] = useState(true);

    return (
        <div className="pf-modal-backdrop" onClick={onClose}>
            <div className="pf-modal" onClick={(e) => e.stopPropagation()}>
                <div className="pf-modal-title">Quick Proforma Settings</div>

                {/* Prefix & sequence */}
                <div className="pf-card">
                    <div className="pf-card-top">
                        <div className="pf-card-title">Proforma Prefix &amp; Sequence Number</div>
                        <label className="pf-switch">
                            <input
                                type="checkbox"
                                checked={prefixEnabled}
                                onChange={(e) => setPrefixEnabled(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="pf-card-sub">
                        Add your custom prefix &amp; sequence for Proforma Numbering
                    </div>

                    <div className="pf-grid-2 mt-12">
                        <label className="pf-field">
                            <div className="lbl">Prefix</div>
                            <input className="input" placeholder="Prefix" defaultValue="Prefix" />
                        </label>
                        <label className="pf-field">
                            <div className="lbl">Sequence Number</div>
                            <input className="input" placeholder="1" defaultValue="1" />
                        </label>
                    </div>

                    <div className="pf-note mt-8">Proforma Number: 1</div>
                </div>

                {/* Show item image */}
                <div className="pf-card">
                    <div className="pf-card-top">
                        <div className="pf-card-title">Show Item Image on Invoice</div>
                        <label className="pf-switch">
                            <input
                                type="checkbox"
                                checked={showItemImg}
                                onChange={(e) => setShowItemImg(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="pf-card-sub">
                        This will apply to all vouchers except for Payment In and Payment Out
                    </div>
                </div>

                {/* Price history */}
                <div className="pf-card">
                    <div className="pf-card-top">
                        <div className="pf-card-title">
                            Price History <span className="badge">New</span>
                        </div>
                        <label className="pf-switch">
                            <input
                                type="checkbox"
                                checked={priceHistory}
                                onChange={(e) => setPriceHistory(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="pf-card-sub">
                        Show last 5 sales / purchase prices of the item for the selected party in invoice
                    </div>
                </div>

                <div className="pf-modal-actions">
                    <button className="btn ghost" onClick={onClose}>
                        Cancel
                    </button>
                    <button className="btn primary" onClick={onClose}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
