import React, { useState } from "react";
import {
    FiCalendar,
    FiChevronDown,
    FiSearch,
    FiSettings,
    FiShoppingCart,
} from "react-icons/fi";
import "./purchaseReturn.css";

export default function PurchaseReturn() {
    const [dateOpen, setDateOpen] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    return (
        <div className="pr-wrap">
            {/* Header */}
            <div className="pr-head">
                <h1>Purchase Return</h1>

                <div className="pr-head-actions">
                    <button
                        className="icon-btn"
                        title="Quick Purchase Return Settings"
                        onClick={() => setShowSettings(true)}
                    >
                        <FiSettings />
                    </button>

                    <button className="btn primary">Create Purchase Return</button>
                </div>
            </div>

            {/* Filters */}
            <div className="pr-filters">
                <div className="pill" title="Search">
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
            <div className="pr-table card">
                <div className="pr-thead">
                    <div className="th">Date</div>
                    <div className="th">Purchase Return Number</div>
                    <div className="th">Party Name</div>
                    <div className="th">Due In</div>
                    <div className="th">Purchase No</div>
                    <div className="th">Amount</div>
                    <div className="th">Status</div>
                </div>

                {/* Empty state */}
                <div className="pr-empty">
                    <div className="pr-empty-icon">
                        <FiShoppingCart />
                    </div>
                    <div className="pr-empty-text">
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

/* ---------- Quick Settings Modal ---------- */
function SettingsModal({ onClose }) {
    const [prefixEnabled, setPrefixEnabled] = useState(true);
    const [prefix, setPrefix] = useState("");
    const [sequence, setSequence] = useState("1");
    const [showItemImg, setShowItemImg] = useState(false);

    const handleSave = () => {
        // stub: persist if needed
        // console.log({ prefixEnabled, prefix, sequence, showItemImg });
        onClose(); // close after save
    };

    return (
        <div className="pr-modal-backdrop" onClick={onClose}>
            <div className="pr-modal" onClick={(e) => e.stopPropagation()}>
                <div className="pr-modal-title">Quick Purchase Return Settings</div>

                <div className="pr-card">
                    <div className="pr-card-top">
                        <div className="pr-card-title">
                            Purchase Return Prefix &amp; Sequence Number
                        </div>
                        <label className="pr-switch">
                            <input
                                type="checkbox"
                                checked={prefixEnabled}
                                onChange={(e) => setPrefixEnabled(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="pr-card-sub">
                        Add your custom prefix &amp; sequence for Purchase Return Numbering
                    </div>

                    <div className="pr-grid-2 mt-12">
                        <label className="pr-field">
                            <div className="lbl">Prefix</div>
                            <input
                                className="input"
                                placeholder="Prefix"
                                value={prefix}
                                onChange={(e) => setPrefix(e.target.value)}
                                disabled={!prefixEnabled}
                            />
                        </label>
                        <label className="pr-field">
                            <div className="lbl">Sequence Number</div>
                            <input
                                className="input"
                                placeholder="1"
                                value={sequence}
                                onChange={(e) => setSequence(e.target.value)}
                                disabled={!prefixEnabled}
                            />
                        </label>
                    </div>

                    <div className="pr-note mt-8">Purchase Return Number: {sequence || 1}</div>
                </div>

                <div className="pr-card">
                    <div className="pr-card-top">
                        <div className="pr-card-title">Show Item Image on Invoice</div>
                        <label className="pr-switch">
                            <input
                                type="checkbox"
                                checked={showItemImg}
                                onChange={(e) => setShowItemImg(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="pr-card-sub">
                        This will apply to all vouchers except for Payment In and Payment Out
                    </div>
                </div>

                <div className="pr-modal-actions">
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
