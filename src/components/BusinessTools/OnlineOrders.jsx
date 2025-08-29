import React, { useState } from "react";
import {
    FiSearch,
    FiCalendar,
    FiChevronDown,
    FiSettings,
    FiExternalLink,
    FiCopy,
    FiYoutube,
    FiFileText,
} from "react-icons/fi";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import "./onlineOrders.css";

export default function OnlineOrders() {
    const [dateOpen, setDateOpen] = useState(false);
    const storeUrl = "https://mybillbook.in/store/fit_fix_...";

    const copyUrl = () => {
        navigator.clipboard.writeText(storeUrl).catch(() => { });
    };

    return (
        <div className="oo-wrap">
            <h1 className="oo-title">Online Orders</h1>

            {/* Store card */}
            <div className="oo-store card">
                <div className="oo-store-head">Your <strong>Online Store</strong></div>

                <div className="oo-store-row">
                    <div className="oo-url">
                        <input value={storeUrl} readOnly />
                        <button className="oo-copy" title="Copy" onClick={copyUrl}>
                            <FiCopy />
                        </button>
                    </div>

                    <button className="oo-btn view">
                        View <FiExternalLink className="ml-6" />
                        <span className="oo-badge new">New</span>
                    </button>

                    <button className="oo-btn">
                        <FiSettings className="mr-6" />
                        Store Settings
                        <span className="oo-badge new">New</span>
                    </button>

                    <button className="oo-icbtn whats" title="Share on WhatsApp">
                        <FaWhatsapp />
                    </button>
                    <button className="oo-icbtn fb" title="Share on Facebook">
                        <FaFacebookF />
                    </button>

                    <button className="oo-learn">
                        <FiYoutube className="mr-6" />
                        Learn how to promote your store
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="oo-filters">
                <button className="pill icon-only" title="Search">
                    <FiSearch />
                </button>

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
                            <div className="pill-item">Last 7 Days</div>
                            <div className="pill-item">This Month</div>
                            <div className="pill-item">Previous Month</div>
                            <div className="pill-item">Last 365 Days</div>
                        </div>
                    )}
                </div>
            </div>

            {/* Table */}
            <div className="oo-table card">
                <div className="oo-thead">
                    <div className="th">Date</div>
                    <div className="th">Quotation Number</div>
                    <div className="th">Party Name</div>
                    <div className="th">Amount</div>
                    <div className="th">Status</div>
                    <div className="th">Mode of Payment</div>
                </div>

                {/* Empty state */}
                <div className="oo-empty">
                    <div className="oo-empty-icon">
                        <FiFileText />
                    </div>
                    <div className="oo-empty-text">
                        No Transactions Matching the current filter
                    </div>
                </div>
            </div>
        </div>
    );
}
