import React, { useState } from "react";
import {
    FiCalendar,
    FiChevronDown,
    FiSearch,
    FiSettings,
    FiShoppingCart,
} from "react-icons/fi";
import "./debitNote.css";

export default function DebitNote() {
    const [dateOpen, setDateOpen] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    return (
        <div className="dn-wrap">
            {/* Header */}
            <div className="dn-head">
                <h1>Debit Note</h1>

                <div className="dn-head-actions">
                    <button
                        className="icon-btn"
                        title="Quick settings"
                        onClick={() => setShowSettings(true)}
                    >
                        <FiSettings />
                    </button>

                    <button className="btn primary">Create Debit Note</button>
                </div>
            </div>

            {/* Filters */}
            <div className="dn-filters">
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
            </div>

            {/* Table */}
            <div className="dn-table card">
                <div className="dn-thead">
                    <div className="th">Date</div>
                    <div className="th">Debit Note Number</div>
                    <div className="th">Party Name</div>
                    <div className="th">Purchase No</div>
                    <div className="th">Amount</div>
                    <div className="th">Status</div>
                </div>

                {/* Empty state */}
                <div className="dn-empty">
                    <div className="dn-empty-icon">
                        <FiShoppingCart />
                    </div>
                    <div className="dn-empty-text">
                        No Transactions Matching the current filter
                    </div>
                </div>
            </div>

            {/* Settings modal */}
            {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
        </div>
    );
}

/* ---------- Settings Modal ---------- */
function SettingsModal({ onClose }) {
    const [prefixEnabled, setPrefixEnabled] = useState(true);
    const [showItemImg, setShowItemImg] = useState(false);
    const [prefix, setPrefix] = useState("");
    const [seq, setSeq] = useState("1");

    const handleSave = () => {
        // do whatever you need with values here (persist, call API, etc.)
        onClose();
    };

    return (
        <div className="dn-modal-backdrop" onClick={onClose}>
            <div className="dn-modal" onClick={(e) => e.stopPropagation()}>
                <div className="dn-modal-title">Quick Debit Note Settings</div>

                <div className="dn-card">
                    <div className="dn-card-top">
                        <div className="dn-card-title">
                            Debit Note Prefix &amp; Sequence Number
                        </div>
                        <label className="dn-switch">
                            <input
                                type="checkbox"
                                checked={prefixEnabled}
                                onChange={(e) => setPrefixEnabled(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="dn-card-sub">
                        Add your custom prefix &amp; sequence for Debit Note Numbering
                    </div>

                    <div className="dn-grid-2 mt-12">
                        <label className="dn-field">
                            <div className="lbl">Prefix</div>
                            <input
                                className="input"
                                placeholder="Prefix"
                                value={prefix}
                                onChange={(e) => setPrefix(e.target.value)}
                                disabled={!prefixEnabled}
                            />
                        </label>
                        <label className="dn-field">
                            <div className="lbl">Sequence Number</div>
                            <input
                                className="input"
                                placeholder="1"
                                value={seq}
                                onChange={(e) => setSeq(e.target.value)}
                                disabled={!prefixEnabled}
                            />
                        </label>
                    </div>

                    <div className="dn-note mt-8">Debit Note Number: {seq || "1"}</div>
                </div>

                <div className="dn-card">
                    <div className="dn-card-top">
                        <div className="dn-card-title">Show Item Image on Invoice</div>
                        <label className="dn-switch">
                            <input
                                type="checkbox"
                                checked={showItemImg}
                                onChange={(e) => setShowItemImg(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="dn-card-sub">
                        This will apply to all vouchers except for Payment In and Payment Out
                    </div>
                </div>

                <div className="dn-modal-actions">
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
