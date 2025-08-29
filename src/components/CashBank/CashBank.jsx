import React, { useMemo, useState } from "react";
import {
    FiCalendar,
    FiChevronDown,
    FiDownload,
    FiPlus,
    FiMinus,
} from "react-icons/fi";
import "./cashBank.css";

const BANKS_SEED = [
    { id: "unlinked", name: "Unlinked Transactions", amount: 0, unlinked: true },
    { id: "916290783735", name: "916290783735", amount: 0 },
];

export default function CashBank() {
    const [periodOpen, setPeriodOpen] = useState(false);
    const [activeBank, setActiveBank] = useState(BANKS_SEED[0].id);

    const activeBankObj = useMemo(
        () => BANKS_SEED.find((b) => b.id === activeBank),
        [activeBank]
    );

    return (
        <div className="cb-wrap">
            {/* Page title */}
            <h1 className="cb-title">Cash and Bank</h1>

            <div className="cb-grid">
                {/* LEFT PANE */}
                <section className="cb-left">
                    <div className="cb-total card">
                        <div className="cb-total-label">Total Balance:</div>
                        <div className="cb-total-amt">₹6,97,149</div>
                    </div>

                    <div className="card cb-box">
                        <div className="cb-box-title">Cash</div>
                        <div className="cb-inline">
                            <div className="cb-sub">Cash in hand</div>
                            <div className="cb-sub-amt">₹6,97,149</div>
                        </div>
                    </div>

                    <div className="card cb-box">
                        <div className="cb-box-title">
                            <span>Bank Accounts</span>
                            <button className="link-btn">+ Add New Bank</button>
                        </div>

                        <div className="cb-bank-list">
                            {BANKS_SEED.map((b) => (
                                <button
                                    key={b.id}
                                    className={
                                        "cb-bank-row" + (activeBank === b.id ? " active" : "")
                                    }
                                    onClick={() => setActiveBank(b.id)}
                                >
                                    <div className="cb-bank-name">{b.name}</div>
                                    <div className="cb-bank-amt">₹{b.amount}</div>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RIGHT PANE */}
                <section className="cb-right">
                    {/* Top actions */}
                    <div className="cb-actions">
                        <button className="btn ghost">
                            <FiPlus />
                            <span>Add/Reduce Money</span>
                        </button>
                        <button className="btn ghost">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                {/* transfer icon (left-right arrows) */}
                                <polyline points="5 12 9 16 5 20" />
                                <line x1="9" y1="16" x2="3" y2="16" />
                                <polyline points="19 4 15 8 19 12" />
                                <line x1="21" y1="8" x2="15" y2="8" />
                            </svg>
                            <span>Transfer Money</span>
                        </button>
                        <button className="btn primary">
                            <FiPlus />
                            <span>Add New Account</span>
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="cb-tabs">
                        <button className="cb-tab active">Transactions</button>
                    </div>

                    {/* Filters bar */}
                    <div className="cb-filterbar">
                        <div
                            className="pill"
                            role="button"
                            onClick={() => setPeriodOpen((v) => !v)}
                            onMouseLeave={() => setPeriodOpen(false)}
                        >
                            <FiCalendar className="pill-icon" />
                            <span>Last Week</span>
                            <FiChevronDown className="pill-caret" />
                            {periodOpen && (
                                <div className="pill-menu">
                                    {[
                                        "Today",
                                        "Yesterday",
                                        "This Week",
                                        "Last Week",
                                        "Last 7 days",
                                        "This Month",
                                        "Previous Month",
                                    ].map((label) => (
                                        <div key={label} className="pill-item">
                                            {label}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button className="icon-btn">
                            <FiDownload />
                        </button>
                    </div>

                    {/* Body / Table area */}
                    <div className="cb-body card">
                        <EmptyState bankName={activeBankObj?.name} />
                    </div>
                </section>
            </div>
        </div>
    );
}

function EmptyState({ bankName }) {
    return (
        <div className="cb-empty">
            <div className="cb-empty-icon">
                {/* simple badge icon */}
                <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8aa0b4"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z" />
                    <rect x="8" y="9" width="8" height="6" rx="1" />
                </svg>
            </div>
            <div className="cb-empty-title">No Transactions</div>
            <div className="cb-empty-sub">
                You don&apos;t have any transaction in selected period
                {bankName ? ` for ${bankName}` : ""}.
            </div>
        </div>
    );
}
