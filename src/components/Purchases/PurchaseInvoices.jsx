import React, { useState } from "react";
import {
    FiSettings,
    FiSearch,
    FiCalendar,
    FiChevronDown,
    FiFileText,
} from "react-icons/fi";
import "./purchaseInvoices.css";

export default function PurchaseInvoices() {
    const [dateOpen, setDateOpen] = useState(false);
    const [reportsOpen, setReportsOpen] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    return (
        <div className="pi-wrap">
            {/* Header + actions */}
            <div className="pi-head">
                <h1>Purchase Invoices</h1>

                <div className="pi-head-actions">
                    <div className="dropdown">
                        <button
                            className={`btn ghost ${reportsOpen ? "open" : ""}`}
                            onClick={() => setReportsOpen((v) => !v)}
                        >
                            <span className="reports-icon" />
                            Reports
                            <FiChevronDown className="ml4" />
                        </button>

                        {reportsOpen && (
                            <div className="menu" onMouseLeave={() => setReportsOpen(false)}>
                                <div className="menu-item">GSTR-2 (Purchase)</div>
                                <div className="menu-item">DayBook</div>
                            </div>
                        )}
                    </div>

                    <button
                        className="icon-btn"
                        title="Quick settings"
                        onClick={() => setShowSettings(true)}
                    >
                        <FiSettings />
                    </button>

                    <button className="btn primary">Create Purchase Invoice</button>
                </div>
            </div>

            {/* Top stats */}
            <div className="pi-stats">
                <div className="stat card">
                    <div className="stat-title">Total Purchases</div>
                    <div className="stat-value">₹ 0</div>
                </div>
                <div className="stat card">
                    <div className="stat-title green">Paid</div>
                    <div className="stat-value">₹ 0</div>
                </div>
                <div className="stat card">
                    <div className="stat-title red">Unpaid</div>
                    <div className="stat-value">₹ 0</div>
                </div>
            </div>

            {/* Filters row */}
            <div className="pi-filters">
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
            <div className="pi-table card">
                <div className="pi-thead">
                    <div className="th">Date</div>
                    <div className="th">Purchase Invoice Number</div>
                    <div className="th">Party Name</div>
                    <div className="th">Due In</div>
                    <div className="th">Amount</div>
                    <div className="th">Status</div>
                </div>

                {/* Empty state */}
                <div className="pi-empty">
                    <div className="pi-empty-icon">
                        <FiFileText />
                    </div>
                    <div className="pi-empty-text">
                        No Transactions Matching the current filter
                    </div>
                </div>
            </div>

            {/* Settings modal */}
            {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
        </div>
    );
}

/* -------------------- Settings Modal -------------------- */
function SettingsModal({ onClose }) {
    const [prefixEnabled, setPrefixEnabled] = useState(true);
    const [showItemImg, setShowItemImg] = useState(true);
    const [priceHistory, setPriceHistory] = useState(false);

    const close = () => onClose?.();

    return (
        <div className="pi-modal-backdrop" onClick={close}>
            <div className="pi-modal" onClick={(e) => e.stopPropagation()}>
                <div className="pi-modal-title">Quick Purchase Invoice Settings</div>

                <div className="pi-card">
                    <div className="pi-card-top">
                        <div className="pi-card-title">
                            Purchase Invoice Prefix &amp; Sequence Number
                        </div>
                        <label className="pi-switch">
                            <input
                                type="checkbox"
                                checked={prefixEnabled}
                                onChange={(e) => setPrefixEnabled(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="pi-card-sub">
                        Add your custom prefix &amp; sequence for Purchase Invoice Numbering
                    </div>

                    <div className="pi-grid-2 mt-12">
                        <label className="pi-field">
                            <div className="lbl">Prefix</div>
                            <input className="input" placeholder="Prefix" />
                        </label>
                        <label className="pi-field">
                            <div className="lbl">Sequence Number</div>
                            <input className="input" placeholder="16531654" />
                        </label>
                    </div>

                    <div className="pi-note mt-8">
                        Purchase Invoice Number: 16531654
                    </div>
                </div>

                <div className="pi-card">
                    <div className="pi-card-top">
                        <div className="pi-card-title">Show Item Image on Invoice</div>
                        <label className="pi-switch">
                            <input
                                type="checkbox"
                                checked={showItemImg}
                                onChange={(e) => setShowItemImg(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="pi-card-sub">
                        This will apply to all vouchers except for Payment In and Payment
                        Out
                    </div>
                </div>

                <div className="pi-card">
                    <div className="pi-card-top">
                        <div className="pi-card-title">
                            Price History <span className="badge">New</span>
                        </div>
                        <label className="pi-switch">
                            <input
                                type="checkbox"
                                checked={priceHistory}
                                onChange={(e) => setPriceHistory(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="pi-card-sub">
                        Show last 5 sales / purchase prices of the item for the selected
                        party in invoice
                    </div>
                </div>

                <div className="pi-modal-actions">
                    <button className="btn ghost" onClick={close}>
                        Cancel
                    </button>
                    <button className="btn primary" onClick={close}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
