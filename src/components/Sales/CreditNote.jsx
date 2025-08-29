import React, { useMemo, useState } from "react";
import {
    FiCalendar,
    FiChevronDown,
    FiSearch,
    FiSettings,
    FiFileText,
} from "react-icons/fi";
import "./creditNote.css";

export default function CreditNote() {
    const [dateOpen, setDateOpen] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    return (
        <div className="cn-wrap">
            {/* Header */}
            <div className="cn-head">
                <h1>Credit Note</h1>

                <div className="cn-head-actions">
                    <button
                        className="icon-btn"
                        title="Quick settings"
                        onClick={() => setShowSettings(true)}
                    >
                        <FiSettings />
                    </button>

                    <button className="btn primary">Create Credit Note</button>
                </div>
            </div>

            {/* Filters */}
            <div className="cn-filters">
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
            <div className="cn-table card">
                <div className="cn-thead">
                    <div className="th">Date</div>
                    <div className="th">Credit Note Number</div>
                    <div className="th">Party Name</div>
                    <div className="th">Invoice No</div>
                    <div className="th">Amount</div>
                    <div className="th">Status</div>
                </div>

                {/* Empty state */}
                <div className="cn-empty">
                    <div className="cn-empty-icon">
                        <FiFileText />
                    </div>
                    <div className="cn-empty-text">
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
    const [prefix, setPrefix] = useState("");
    const [seq, setSeq] = useState("1");
    const [showItemImg, setShowItemImg] = useState(false);

    const previewNumber = useMemo(() => {
        const p = prefix?.trim();
        const s = seq?.trim() || "1";
        return [p, s].filter(Boolean).join("-");
    }, [prefix, seq]);

    const handleSave = () => {
        // You can persist these values if needed
        // For now, we just close the modal.
        onClose();
    };

    return (
        <div className="cn-modal-backdrop" onClick={onClose}>
            <div className="cn-modal" onClick={(e) => e.stopPropagation()}>
                <div className="cn-modal-title">Quick Credit Note Settings</div>

                {/* Card 1 */}
                <div className="cn-card">
                    <div className="cn-card-top">
                        <div className="cn-card-title">
                            Credit Note Prefix &amp; Sequence Number
                        </div>
                        <label className="cn-switch">
                            <input
                                type="checkbox"
                                checked={prefixEnabled}
                                onChange={(e) => setPrefixEnabled(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="cn-card-sub">
                        Add your custom prefix &amp; sequence for Credit Note Numbering
                    </div>

                    <div className="cn-grid-2 mt-12">
                        <label className="cn-field">
                            <div className="lbl">Prefix</div>
                            <input
                                className="input"
                                placeholder="Prefix"
                                value={prefix}
                                onChange={(e) => setPrefix(e.target.value)}
                                disabled={!prefixEnabled}
                            />
                        </label>

                        <label className="cn-field">
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

                    <div className="cn-note mt-8">
                        Credit Note Number: <b>{previewNumber || "1"}</b>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="cn-card">
                    <div className="cn-card-top">
                        <div className="cn-card-title">Show Item Image on Invoice</div>
                        <label className="cn-switch">
                            <input
                                type="checkbox"
                                checked={showItemImg}
                                onChange={(e) => setShowItemImg(e.target.checked)}
                            />
                            <span />
                        </label>
                    </div>
                    <div className="cn-card-sub">
                        This will apply to all vouchers except for Payment In and Payment
                        Out
                    </div>
                </div>

                <div className="cn-modal-actions">
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
