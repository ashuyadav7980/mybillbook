import React, { useState } from "react";
import {
    FiCalendar,
    FiChevronDown,
    FiSettings,
    FiFileText,
} from "react-icons/fi";
import "./deliveryChallan.css";

export default function DeliveryChallan() {
    const [dateOpen, setDateOpen] = useState(false);
    const [statusOpen, setStatusOpen] = useState(false);
    const [status, setStatus] = useState("Show Open Challans");
    const [showSettings, setShowSettings] = useState(false);

    return (
        <div className="dc-wrap">
            {/* Header */}
            <div className="dc-head">
                <h1>Delivery Challan</h1>

                <div className="dc-head-actions">
                    <button
                        className="icon-btn"
                        title="Quick settings"
                        onClick={() => setShowSettings(true)}
                    >
                        <FiSettings />
                    </button>

                    <button className="btn primary">Create Delivery Challan</button>
                </div>
            </div>

            {/* Filter row */}
            <div className="dc-filters">
                {/* Date pill */}
                <div
                    className="pill"
                    role="button"
                    onClick={() => {
                        setDateOpen((v) => !v);
                        setStatusOpen(false);
                    }}
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

                {/* Status pill */}
                <div
                    className="pill"
                    role="button"
                    onClick={() => {
                        setStatusOpen((v) => !v);
                        setDateOpen(false);
                    }}
                >
                    <span>{status}</span>
                    <FiChevronDown className="pill-caret" />
                    {statusOpen && (
                        <div className="pill-menu" onMouseLeave={() => setStatusOpen(false)}>
                            <div
                                className="pill-item"
                                onClick={() => {
                                    setStatus("Show All Challans");
                                    setStatusOpen(false);
                                }}
                            >
                                Show All Challans
                            </div>
                            <div
                                className="pill-item"
                                onClick={() => {
                                    setStatus("Show Open Challans");
                                    setStatusOpen(false);
                                }}
                            >
                                Show Open Challans
                            </div>
                            <div
                                className="pill-item"
                                onClick={() => {
                                    setStatus("Show Closed Challans");
                                    setStatusOpen(false);
                                }}
                            >
                                Show Closed Challans
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Table */}
            <div className="dc-table card">
                <div className="dc-thead">
                    <div className="th">Date</div>
                    <div className="th">Delivery Challan Number</div>
                    <div className="th">Party Name</div>
                    <div className="th">Amount</div>
                    <div className="th">Status</div>
                </div>

                {/* Empty state */}
                <div className="dc-empty">
                    <div className="dc-empty-icon">
                        <FiFileText />
                    </div>
                    <div className="dc-empty-text">
                        No Transactions Matching the current filter
                    </div>
                </div>
            </div>

            {/* Settings modal */}
            {showSettings && (
                <ChallanSettingsModal onClose={() => setShowSettings(false)} />
            )}
        </div>
    );
}

/* ---------- Settings Modal ---------- */
function ChallanSettingsModal({ onClose }) {
    const [prefixEnabled, setPrefixEnabled] = useState(true);
    const [showItemImg, setShowItemImg] = useState(true);
    const [priceHistory, setPriceHistory] = useState(false);

    const handleSave = () => {
        // You can persist values here if needed
        onClose();
    };

    return (
        <div className="dc-modal-backdrop" onClick={onClose}>
            <div className="dc-modal" onClick={(e) => e.stopPropagation()}>
                <div className="dc-modal-title">Quick Delivery Challan Settings</div>

                {/* Prefix & sequence */}
                <div className="dc-card">
                    <div className="dc-card-top">
                        <div className="dc-card-title">
                            Delivery Challan Prefix &amp; Sequence Number
                        </div>
                        <label className="dc-switch">
                            <input
                                type="checkbox"
                                checked={prefixEnabled}
                                onChange={(e) => setPrefixEnabled(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="dc-card-sub">
                        Add your custom prefix &amp; sequence for Delivery Challan Numbering
                    </div>

                    <div className="dc-grid-2 mt-12">
                        <label className="dc-field">
                            <div className="lbl">Prefix</div>
                            <input className="input" placeholder="Prefix" />
                        </label>
                        <label className="dc-field">
                            <div className="lbl">Sequence Number</div>
                            <input className="input" placeholder="1" />
                        </label>
                    </div>

                    <div className="dc-note mt-8">Delivery Challan Number: 1</div>
                </div>

                {/* Show item image */}
                <div className="dc-card">
                    <div className="dc-card-top">
                        <div className="dc-card-title">Show Item Image on Invoice</div>
                        <label className="dc-switch">
                            <input
                                type="checkbox"
                                checked={showItemImg}
                                onChange={(e) => setShowItemImg(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="dc-card-sub">
                        This will apply to all vouchers except for Payment In and Payment Out
                    </div>
                </div>

                {/* Price history */}
                <div className="dc-card">
                    <div className="dc-card-top">
                        <div className="dc-card-title">
                            Price History <span className="badge">New</span>
                        </div>
                        <label className="dc-switch">
                            <input
                                type="checkbox"
                                checked={priceHistory}
                                onChange={(e) => setPriceHistory(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="dc-card-sub">
                        Show last 5 sales / purchase prices of the item for the selected
                        party in invoice
                    </div>
                </div>

                <div className="dc-modal-actions">
                    <button className="btn ghost" onClick={onClose}>
                        Cancel
                    </button>
                    <button className="btn primary" onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
