import React, { useEffect, useState } from "react";
import {
  FiCalendar,
  FiChevronDown,
  FiSearch,
  FiSettings,
  FiFileText,
} from "react-icons/fi";
import "./salesReturn.css";

export default function SalesReturn() {
  const [dateOpen, setDateOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleSaveSettings = (values) => {
    // TODO: persist values if you want
    console.log("Sales Return settings saved:", values);
    setShowSettings(false);
  };

  return (
    <div className="sr-wrap">
      {/* Header row */}
      <div className="sr-head">
        <h1>Sales Return</h1>

        <div className="sr-head-actions">
          <button
            className="icon-btn"
            title="Quick settings"
            onClick={() => setShowSettings(true)}
          >
            <FiSettings />
          </button>

          <button className="btn primary">Create Sales Return</button>
        </div>
      </div>

      {/* Filters */}
      <div className="sr-filters">
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
      <div className="sr-table card">
        <div className="sr-thead">
          <div className="th">Date</div>
          <div className="th">Sales Return Number</div>
          <div className="th">Party Name</div>
          <div className="th">Due In</div>
          <div className="th">Invoice No</div>
          <div className="th">Amount</div>
          <div className="th">Status</div>
        </div>

        {/* Empty state */}
        <div className="sr-empty">
          <div className="sr-empty-icon">
            <FiFileText />
          </div>
          <div className="sr-empty-text">
            No Transactions Matching the current filter
          </div>
        </div>
      </div>

      {/* Settings modal */}
      {showSettings && (
        <SettingsModal
          onClose={() => setShowSettings(false)}
          onSave={handleSaveSettings}
        />
      )}
    </div>
  );
}

/* ---------- Settings Modal ---------- */
function SettingsModal({ onClose, onSave }) {
  const [prefixEnabled, setPrefixEnabled] = useState(true);
  const [showItemImg, setShowItemImg] = useState(false);
  const [prefix, setPrefix] = useState("");
  const [sequence, setSequence] = useState("");

  // close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleSave = () => {
    onSave?.({
      prefixEnabled,
      showItemImg,
      prefix,
      sequence,
    });
    onClose(); // close after save
  };

  return (
    <div className="sr-modal-backdrop" onClick={onClose}>
      <div className="sr-modal" onClick={(e) => e.stopPropagation()}>
        <div className="sr-modal-title">Quick Sales Return Settings</div>

        <div className="sr-card">
          <div className="sr-card-top">
            <div className="sr-card-title">
              Sales Return Prefix &amp; Sequence Number
            </div>
            <label className="sr-switch">
              <input
                type="checkbox"
                checked={prefixEnabled}
                onChange={(e) => setPrefixEnabled(e.target.checked)}
              />
              <span />
            </label>
          </div>
          <div className="sr-card-sub">
            Add your custom prefix &amp; sequence for Sales Return Numbering
          </div>

          <div className="sr-grid-2 mt-12">
            <label className="sr-field">
              <div className="lbl">Prefix</div>
              <input
                className="input"
                placeholder="Prefix"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                disabled={!prefixEnabled}
              />
            </label>
            <label className="sr-field">
              <div className="lbl">Sequence Number</div>
              <input
                className="input"
                placeholder="Sequence No"
                value={sequence}
                onChange={(e) => setSequence(e.target.value)}
                disabled={!prefixEnabled}
              />
            </label>
          </div>

          <div className="sr-note mt-8">Sales Return Number:</div>
        </div>

        <div className="sr-card">
          <div className="sr-card-top">
            <div className="sr-card-title">Show Item Image on Invoice</div>
            <label className="sr-switch">
              <input
                type="checkbox"
                checked={showItemImg}
                onChange={(e) => setShowItemImg(e.target.checked)}
              />
              <span />
            </label>
          </div>
          <div className="sr-card-sub">
            This will apply to all vouchers except for Payment In and Payment
            Out
          </div>
        </div>

        <div className="sr-modal-actions">
          <button type="button" className="btn ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="btn primary" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
