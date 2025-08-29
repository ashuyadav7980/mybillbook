import React, { useState } from "react";
import {
    FiCalendar,
    FiChevronDown,
    FiSearch,
    FiSettings,
    FiShoppingCart,
} from "react-icons/fi";
import "./paymentOut.css";

export default function PaymentOut() {
    const [dateOpen, setDateOpen] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    return (
        <div className="po-wrap">
            {/* Header */}
            <div className="po-head">
                <h1>Payment Out</h1>

                <div className="po-head-actions">
                    <button
                        className="icon-btn"
                        title="Quick settings"
                        onClick={() => setShowSettings(true)}
                    >
                        <FiSettings />
                    </button>

                    <button className="btn primary">Create Payment Out</button>
                </div>
            </div>

            {/* Filters */}
            <div className="po-filters">
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
                        <div
                            className="pill-menu"
                            onMouseLeave={() => setDateOpen(false)}
                        >
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
            </div>

            {/* Table */}
            <div className="po-table card">
                <div className="po-thead">
                    <div className="th">Date</div>
                    <div className="th">Payment Number</div>
                    <div className="th">Party Name</div>
                    <div className="th">Amount</div>
                </div>

                {/* Empty state */}
                <div className="po-empty">
                    <div className="po-empty-icon">
                        <FiShoppingCart />
                    </div>
                    <div className="po-empty-text">
                        No Transactions Matching the current filter
                    </div>
                </div>
            </div>

            {/* Settings modal */}
            {showSettings && (
                <SettingsModal onClose={() => setShowSettings(false)} />
            )}
        </div>
    );
}

/* ------------ Settings Modal ------------- */
function SettingsModal({ onClose }) {
    const [enabled, setEnabled] = useState(true);
    const [prefix, setPrefix] = useState("");
    const [seq, setSeq] = useState("1");

    const handleSave = () => {
        // (Hook up to state/store/API later if needed)
        onClose();
    };

    return (
        <div className="po-modal-backdrop" onClick={onClose}>
            <div className="po-modal" onClick={(e) => e.stopPropagation()}>
                <div className="po-modal-title">Quick Payment Out Settings</div>

                <div className="po-card">
                    <div className="po-card-top">
                        <div className="po-card-title">
                            Payment Out Prefix &amp; Sequence Number
                        </div>

                        <label className="po-switch">
                            <input
                                type="checkbox"
                                checked={enabled}
                                onChange={(e) => setEnabled(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>

                    <div className="po-card-sub">
                        Add your custom prefix &amp; sequence for Payment Out Numbering
                    </div>

                    <div className="po-grid-2 mt-12">
                        <label className="po-field">
                            <div className="lbl">Prefix</div>
                            <input
                                className="input"
                                placeholder="Prefix"
                                value={prefix}
                                onChange={(e) => setPrefix(e.target.value)}
                                disabled={!enabled}
                            />
                        </label>

                        <label className="po-field">
                            <div className="lbl">Sequence Number</div>
                            <input
                                className="input"
                                placeholder="1"
                                value={seq}
                                onChange={(e) => setSeq(e.target.value)}
                                disabled={!enabled}
                            />
                        </label>
                    </div>
                    <div className="po-note mt-8">Payment Out Number: {seq || "-"}</div>
                </div>
                <div className="po-modal-actions">
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
