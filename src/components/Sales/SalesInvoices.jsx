// src/components/Sales/SalesInvoices.jsx
import React, { useState } from "react";
import {
    FiChevronDown,
    FiCalendar,
    FiSearch,
    FiLayers,
    FiDownload,
    FiDatabase,
    FiSettings,
} from "react-icons/fi";
import "./SalesInvoices.css";

/**
 * onGoInvoiceSettings: () => void
 *  Pass a handler from App that navigates to Settings -> "Invoice Settings".
 */
export default function SalesInvoices({ onGoInvoiceSettings = () => { } }) {
    const [bulkOpen, setBulkOpen] = useState(false);
    const [repOpen, setRepOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);

    return (
        <div className="si-wrap">
            <div className="si-title">Sales Invoices</div>

            {/* KPI cards */}
            <div className="si-kpis">
                <div className="kpi card kpi-lg">
                    <div className="kpi-title">Total Sales</div>
                    <div className="kpi-val">₹ 0</div>
                </div>

                <div className="kpi card">
                    <div className="kpi-title ok">Paid</div>
                    <div className="kpi-val">₹ 0</div>
                </div>

                <div className="kpi card">
                    <div className="kpi-title bad">Unpaid</div>
                    <div className="kpi-val">₹ 0</div>
                </div>
            </div>

            {/* Toolbar */}
            <div className="si-bar">
                <div className="left">
                    <div className="input with-ico">
                        <FiSearch />
                        <input placeholder="Search" />
                    </div>

                    {/* Date range dropdown */}
                    <DateRangeSelect />
                </div>

                <div className="right">
                    <div className="dropdown">
                        <button
                            className="btn outline"
                            onClick={() => setBulkOpen((v) => !v)}
                        >
                            <FiLayers />
                            <span>Bulk Actions</span>
                            <FiChevronDown className="chev" />
                        </button>

                        {bulkOpen && (
                            <div className="menu card">
                                <button className="menu-item">
                                    <FiDownload />
                                    <span>Bulk Download</span>
                                </button>
                            </div>
                        )}
                    </div>

                    <button className="btn primary">Create Sales Invoice</button>
                </div>
            </div>

            {/* Top-right utilities above the table (Reports + Settings) */}
            <div className="si-table-head">
                <div className="filler" />
                <div className="head-utils">
                    <div className="dropdown">
                        <button className="rep-btn" onClick={() => setRepOpen((v) => !v)}>
                            <FiDatabase className="ico" />
                            <span>Reports</span>
                            <FiChevronDown className="chev" />
                        </button>

                        {repOpen && (
                            <div className="menu card">
                                <button className="menu-item">Sales Summary</button>
                                <button className="menu-item">GSTR-1 (Sales)</button>
                                <button className="menu-item">DayBook</button>
                                <button className="menu-item">Bill Wise Profit</button>
                            </div>
                        )}
                    </div>

                    <button
                        className="icon-btn"
                        title="Quick Invoice Settings"
                        onClick={() => setSettingsOpen(true)}
                    >
                        <FiSettings />
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="si-table card">
                <div className="t-head">
                    <div className="c date">
                        Date <FiChevronDown className="th-sort" />
                    </div>
                    <div className="c inv">Invoice Number</div>
                    <div className="c party">Party Name</div>
                    <div className="c due">Due In</div>
                    <div className="c amt">
                        Amount <FiChevronDown className="th-sort" />
                    </div>
                    <div className="c status">Status</div>
                </div>

                <div className="t-empty">
                    <svg width="54" height="54" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M7 3h10a2 2 0 0 1 2 2v10l-4 6H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
                            stroke="#94a3b8"
                            strokeWidth="1.5"
                        />
                        <path d="M8 9h8M8 13h6" stroke="#94a3b8" strokeWidth="1.5" />
                    </svg>
                    <div>No Transactions Matching the current filter</div>
                </div>
            </div>

            {settingsOpen && (
                <SettingsModal
                    onClose={() => setSettingsOpen(false)}
                    onGoInvoiceSettings={() => {
                        setSettingsOpen(false);
                        onGoInvoiceSettings(); // ⬅️ navigate to Invoice Settings
                    }}
                />
            )}
        </div>
    );
}

/* ---------------- Date range dropdown ---------------- */
function DateRangeSelect() {
    const [open, setOpen] = useState(false);
    const [label, setLabel] = useState("Last 365 Days");

    const options = [
        "Today",
        "Yesterday",
        "This Week",
        "Last Week",
        "Last 7 days",
        "This Month",
        "Previous Month",
        "Last 3 Months",
        "Last 6 Months",
        "Last 365 Days",
    ];

    const apply = (v) => {
        setLabel(v);
        setOpen(false);
        // hook your filtering logic here if you want
    };

    return (
        <div className="date-dd">
            <button
                className={`date-btn ${open ? "open" : ""}`}
                onClick={() => setOpen((v) => !v)}
            >
                <FiCalendar />
                <span>{label}</span>
                <FiChevronDown className="chev" />
            </button>

            {open && (
                <div className="date-menu card">
                    <div className="date-scroll">
                        {options.map((opt) => (
                            <button key={opt} className="date-item" onClick={() => apply(opt)}>
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

/* ---------------- Modal ---------------- */
function SettingsModal({ onClose, onGoInvoiceSettings }) {
    return (
        <div className="si-modal-overlay" role="dialog" aria-modal="true">
            <div className="si-modal card">
                <div className="si-modal-head">
                    <div className="title">Quick Invoice Settings</div>
                    <button className="icon-btn" onClick={onClose} aria-label="Close">
                        ✕
                    </button>
                </div>

                <div className="si-modal-body">
                    <SettingRow
                        title="Invoice Prefix & Sequence Number"
                        desc="Add your custom prefix & sequence for Invoice Numbering"
                        toggle={false}
                    />
                    <SettingRow
                        title="Show Purchase Price while adding Items"
                        desc="Add purchase price while adding items"
                        toggle={true}
                    />
                    <SettingRow
                        title="Show Item Image on Invoice"
                        desc="This will apply to all vouchers except for Payment In and Payment Out"
                        toggle={false}
                    />
                    <SettingRow
                        title="Price History"
                        desc="Show last 5 sales / purchase prices of the item for the selected party in invoice"
                        toggle={false}
                        badge="New"
                    />

                    <div className="field-row">
                        <div className="field-l">
                            <div className="f-title">Choose Invoice Theme</div>
                        </div>
                        <div className="field-r">
                            <div className="select with-ico wide">
                                <span>Stylish</span>
                                <FiChevronDown />
                            </div>
                        </div>
                    </div>

                    <div className="customize card">
                        <div className="cz-left">
                            <div className="cz-big">
                                Now <b>customise Invoice</b> with ease
                            </div>
                            {/* ⬇️ This button now opens the real Invoice Settings page */}
                            <button className="btn outline" onClick={onGoInvoiceSettings}>
                                Full Invoice Settings →
                            </button>
                        </div>
                        <div className="cz-illus" aria-hidden>
                            <div className="box" />
                            <div className="line" />
                            <div className="line short" />
                        </div>
                    </div>
                </div>

                <div className="si-modal-foot">
                    <button className="btn ghost" onClick={onClose}>
                        Cancel
                    </button>
                    <button className="btn primary">Save</button>
                </div>
            </div>
        </div>
    );
}

function SettingRow({ title, desc, toggle, badge }) {
    return (
        <div className="setting-row card">
            <div className="sr-left">
                <div className="sr-title">
                    {title} {badge && <span className="pill">{badge}</span>}
                </div>
                <div className="sr-desc">{desc}</div>
            </div>
            <div className="sr-right">
                <label className="switch">
                    <input type="checkbox" defaultChecked={toggle} />
                    <span className="slider" />
                </label>
            </div>
        </div>
    );
}
