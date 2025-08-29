import React, { useState } from "react";
import {
    FiCalendar,
    FiChevronDown,
    FiSettings,
    FiFileText,
    FiArrowLeft,
    FiPlus,
    FiUploadCloud,
} from "react-icons/fi";
import "./Quotation.css";

export default function QuotationEstimate() {
    const [mode, setMode] = useState("list"); // "list" | "create"
    return mode === "list" ? (
        <QuotationList onCreate={() => setMode("create")} />
    ) : (
        <CreateQuotation onBack={() => setMode("list")} />
    );
}

/* -------------------------------- LIST VIEW ------------------------------- */

function QuotationList({ onCreate }) {
    const [dateOpen, setDateOpen] = useState(false);
    const [statusOpen, setStatusOpen] = useState(false);
    const [dateLabel, setDateLabel] = useState("Last 365 Days");
    const [statusLabel, setStatusLabel] = useState("Show Open Quotation");
    const [showSettings, setShowSettings] = useState(false); // 👈 NEW

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

    const statusOptions = [
        "Show All Quotation",
        "Show Open Quotation",
        "Show Closed Quotation",
    ];

    return (
        <div className="page-wrap">
            <div className="qt-header">
                <h1>Quotation / Estimate</h1>

                <div className="qt-toolbar">
                    {/* open modal from list page */}
                    <button
                        className="qt-iconbtn"
                        title="Settings"
                        onClick={() => setShowSettings(true)}
                    >
                        <FiSettings />
                    </button>

                    <button className="qt-primary" onClick={onCreate}>
                        Create Quotation
                    </button>
                </div>
            </div>

            <div className="qt-toolbar">
                <div className="qt-select" onClick={() => setDateOpen((v) => !v)}>
                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <FiCalendar />
                        <span className="val">{dateLabel}</span>
                    </span>
                    <FiChevronDown />
                    {dateOpen && (
                        <div className="qt-dd" onMouseLeave={() => setDateOpen(false)}>
                            {dateOptions.map((it) => (
                                <div
                                    key={it}
                                    className="qt-opt"
                                    onClick={() => {
                                        setDateLabel(it);
                                        setDateOpen(false);
                                    }}
                                >
                                    <span className="val">{it}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="qt-select" onClick={() => setStatusOpen((v) => !v)}>
                    <span className="val">{statusLabel}</span>
                    <FiChevronDown />
                    {statusOpen && (
                        <div className="qt-dd" onMouseLeave={() => setStatusOpen(false)}>
                            {statusOptions.map((it) => (
                                <div
                                    key={it}
                                    className="qt-opt"
                                    onClick={() => {
                                        setStatusLabel(it);
                                        setStatusOpen(false);
                                    }}
                                >
                                    <span className="val">{it}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Table & empty state */}
            <div className="qt-table" style={{ marginTop: 14 }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "200px 1fr 1fr 180px 160px 160px",
                        gap: 0,
                        padding: "12px 14px",
                        borderBottom: "1px solid #eef1f7",
                        color: "#667085",
                        fontWeight: 600,
                        background: "#fff",
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                    }}
                >
                    <div>Date</div>
                    <div>Quotation Number</div>
                    <div>Party Name</div>
                    <div>Due In</div>
                    <div>Amount</div>
                    <div>Status</div>
                </div>

                <div className="qt-empty">
                    <div className="qt-emoji" aria-hidden>
                        <FiFileText />
                    </div>
                    <div>No Transactions Matching the current filter</div>
                </div>
            </div>

            {/* settings modal on list page */}
            {showSettings && (
                <QuickQuotationSettings onClose={() => setShowSettings(false)} />
            )}
        </div>
    );
}

/* ------------------------------ CREATE VIEW ------------------------------- */

function CreateQuotation({ onBack }) {
    const [showSettings, setShowSettings] = useState(false); // opens modal from create page

    return (
        <div className="page-wrap">
            <div className="qt-header">
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <button className="qt-iconbtn" onClick={onBack} title="Back">
                        <FiArrowLeft />
                    </button>
                    <h1>Create Quotation</h1>
                </div>

                <div className="qt-toolbar">
                    <button
                        className="qt-iconbtn"
                        title="Settings"
                        onClick={() => setShowSettings(true)}
                    >
                        <FiSettings />
                    </button>

                    <button className="qt-primary">Save</button>
                </div>
            </div>

            <div className="qt-create-grid">
                {/* LEFT */}
                <div className="qt-left">
                    <div className="qt-panel">
                        <div className="qt-label">Bill To</div>
                        <div className="qt-dashed big center">
                            <span className="linkish">+ Add Party</span>
                        </div>
                    </div>

                    <div className="qt-items">
                        <div className="qt-items-head">
                            <div className="c-no">NO</div>
                            <div className="c-items">ITEMS/ SERVICES</div>
                            <div className="c-hsn">HSN/ SAC</div>
                            <div className="c-qty">QTY</div>
                            <div className="c-price">PRICE/ITEM (₹)</div>
                            <div className="c-discount">DISCOUNT</div>
                            <div className="c-tax">TAX</div>
                            <div className="c-amt">AMOUNT (₹)</div>
                            <div className="c-scan">
                                <button className="qt-scan">
                                    <FiUploadCloud />
                                    <span>Scan Barcode</span>
                                </button>
                            </div>
                        </div>

                        <div className="qt-dashed row center">
                            <span className="linkish">
                                <FiPlus style={{ verticalAlign: -2 }} /> Add Item
                            </span>
                        </div>

                        <div className="qt-subtotal">
                            <div>SUBTOTAL</div>
                            <div className="v">₹ 0</div>
                            <div className="v">₹ 0</div>
                            <div className="v">₹ 0</div>
                        </div>
                    </div>

                    <div className="qt-mini-links">
                        <button className="linkish">+ Add Notes</button>
                        <button className="linkish">+ Add Terms and Conditions</button>
                        <button className="linkish">+ Add Bank Account</button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="qt-right">
                    <div className="qt-card">
                        <div className="qt-field">
                            <label>Quotation No:</label>
                            <input className="qt-input" defaultValue="1" />
                        </div>
                        <div className="qt-field">
                            <label>Quotation Date:</label>
                            <input className="qt-input" type="date" />
                        </div>
                        <div className="qt-group">
                            <label>Valid For:</label>
                            <div className="qt-inline">
                                <input className="qt-input" defaultValue="30" />
                                <span className="qt-suffix">days</span>
                            </div>
                        </div>
                        <div className="qt-field">
                            <label>Validity Date:</label>
                            <input className="qt-input" type="date" />
                        </div>
                    </div>

                    <div className="qt-card">
                        <button className="linkish">+ Add Additional Charges</button>
                        <div className="qt-row">
                            <span>Taxable Amount</span>
                            <span>₹ 0</span>
                        </div>
                        <button className="linkish">+ Add Discount</button>
                        <div className="qt-check">
                            <input id="round" type="checkbox" />
                            <label htmlFor="round">Auto Round Off</label>
                        </div>

                        <div className="qt-totalbox">
                            <div className="qt-total-title">Total Amount</div>
                            <div className="qt-total-val">₹ 0</div>
                        </div>

                        <div className="qt-payrow">
                            <select className="qt-selectbox">
                                <option>+ Add</option>
                            </select>
                            <select className="qt-selectbox">
                                <option>₹</option>
                            </select>
                            <input className="qt-input" defaultValue="0" />
                        </div>

                        <button className="qt-paybtn">Enter Payment amount</button>
                    </div>
                </div>
            </div>

            {/* settings modal on create page */}
            {showSettings && (
                <QuickQuotationSettings onClose={() => setShowSettings(false)} />
            )}
        </div>
    );
}

/* ----------------------------- SETTINGS MODAL ----------------------------- */

function QuickQuotationSettings({ onClose }) {
    const Row = ({ title, desc }) => (
        <div className="qs-row">
            <div>
                <div className="qs-title">{title}</div>
                {desc && <div className="qs-desc">{desc}</div>}
            </div>
            <label className="qs-switch">
                <input type="checkbox" />
                <span />
            </label>
        </div>
    );

    return (
        <div className="qs-overlay">
            <div className="qs-modal">
                <div className="qs-head">
                    <div>Quick Quotation Settings</div>
                    <button className="qt-iconbtn" onClick={onClose} aria-label="Close">
                        ✕
                    </button>
                </div>

                <Row
                    title="Quotation Prefix & Sequence Number"
                    desc="Add your custom prefix & sequence for Quotation Numbering"
                />
                <Row
                    title="Show Item Image on Invoice"
                    desc="This will apply to all vouchers except for Payment In and Payment Out"
                />
                <Row
                    title="Price History"
                    desc="Show last 5 sales / purchase prices of the item for the selected party in invoice"
                />

                <div className="qs-actions">
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
