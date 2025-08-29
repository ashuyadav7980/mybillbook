import React, { useState } from "react";
import {
    FiSearch,
    FiCalendar,
    FiChevronDown,
    FiSettings,
    FiShoppingCart,
} from "react-icons/fi";
import "./purchaseOrders.css";

export default function PurchaseOrders() {
    const [dateOpen, setDateOpen] = useState(false);
    const [statusOpen, setStatusOpen] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    return (
        <div className="po-wrap">
            {/* Header */}
            <div className="po-head">
                <h1>Purchase Orders</h1>

                <div className="po-actions">
                    <button
                        className="icon-btn"
                        title="Quick settings"
                        onClick={() => setShowSettings(true)}
                    >
                        <FiSettings />
                    </button>

                    <button className="btn primary">Create Purchase Order</button>
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
                    className="pill long"
                    role="button"
                    onClick={() => setStatusOpen((v) => !v)}
                >
                    <span>Show Open Orders</span>
                    <FiChevronDown className="pill-caret" />
                    {statusOpen && (
                        <div
                            className="pill-menu"
                            onMouseLeave={() => setStatusOpen(false)}
                        >
                            <div className="pill-item">Show All Orders</div>
                            <div className="pill-item active">Show Open Orders</div>
                            <div className="pill-item">Show Closed Orders</div>
                        </div>
                    )}
                </div>
            </div>

            {/* Table */}
            <div className="po-table card">
                <div className="po-thead">
                    <div className="th">Date</div>
                    <div className="th">Purchase Order Number</div>
                    <div className="th">Party Name</div>
                    <div className="th">Valid Till</div>
                    <div className="th">Amount</div>
                    <div className="th">Status</div>
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
            {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
        </div>
    );
}

/* ---------------- Settings Modal ---------------- */

function SettingsModal({ onClose }) {
    const [prefixEnabled, setPrefixEnabled] = useState(true);
    const [showItemImg, setShowItemImg] = useState(true);
    const [priceHistory, setPriceHistory] = useState(true);

    const handleSave = () => {
        // persist if you want; for now just close
        onClose();
    };

    return (
        <div className="po-modal-backdrop" onClick={onClose}>
            <div className="po-modal" onClick={(e) => e.stopPropagation()}>
                <div className="po-modal-title">Quick Purchase Order Settings</div>

                <div className="po-card">
                    <div className="po-card-top">
                        <div className="po-card-title">
                            Purchase Order Prefix &amp; Sequence Number
                        </div>
                        <label className="po-switch">
                            <input
                                type="checkbox"
                                checked={prefixEnabled}
                                onChange={(e) => setPrefixEnabled(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="po-card-sub">
                        Add your custom prefix &amp; sequence for Purchase Order Numbering
                    </div>

                    <div className="po-grid-2 mt-12">
                        <label className="po-field">
                            <div className="lbl">Prefix</div>
                            <input className="input" placeholder="Prefix" />
                        </label>

                        <label className="po-field">
                            <div className="lbl">Sequence Number</div>
                            <input className="input" placeholder="1" defaultValue="1" />
                        </label>
                    </div>

                    <div className="po-note mt-8">Purchase Order Number: 1</div>
                </div>

                <div className="po-card">
                    <div className="po-card-top">
                        <div className="po-card-title">Show Item Image on Invoice</div>
                        <label className="po-switch">
                            <input
                                type="checkbox"
                                checked={showItemImg}
                                onChange={(e) => setShowItemImg(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="po-card-sub">
                        This will apply to all vouchers except for Payment In and Payment
                        Out
                    </div>
                </div>

                <div className="po-card">
                    <div className="po-card-top">
                        <div className="po-card-title">
                            Price History <span className="badge">New</span>
                        </div>
                        <label className="po-switch">
                            <input
                                type="checkbox"
                                checked={priceHistory}
                                onChange={(e) => setPriceHistory(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="po-card-sub">
                        Show last 5 sales / purchase prices of the item for the selected
                        party in invoice
                    </div>
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
