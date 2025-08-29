// src/components/Settings/SettingsPage.jsx
import React, { useState } from "react";
import { FiChevronRight, FiArrowLeft } from "react-icons/fi";
import ManageBusiness from "./ManageBusiness";
import Reminders from "./Reminders";
import ManageUsers from "./ManageUsers";
import ReferEarn from "./ReferEarn";
import PricingPlans from "./Pricing";
import HelpSupport from "./HelpSupport";
import InvoiceSettings from "./InvoiceSettings";   // ✅ added
import "./Settings.css";

export default function SettingsPage() {
  // Tabs we support: "Account" | "Manage Business" | "Manage Users" | "Reminders" | "Pricing" | "Refer & Earn" | "Help" | "Invoice Settings"
  const [tab, setTab] = useState("Account");

  // Simple Account form state (for the Account tab)
  const [form, setForm] = useState({
    name: "ranjan tiwari",
    mobile: "6290783735",
    email: "",
    referral: "",
  });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="settings-wrap">
      {/* Left inner nav */}
      <aside className="settings-left card">
        <button className="back-btn">
          <FiArrowLeft />
          Back to Dashboard
        </button>

        <LeftLink active={tab === "Account"} onClick={() => setTab("Account")}>
          Account
        </LeftLink>
        <LeftLink
          active={tab === "Manage Business"}
          onClick={() => setTab("Manage Business")}
        >
          Manage Business
        </LeftLink>
        <LeftLink
          active={tab === "Invoice Settings"}
          onClick={() => setTab("Invoice Settings")}
        >
          Invoice Settings
        </LeftLink>
        <LeftLink
          active={tab === "Print Settings"}
          onClick={() => setTab("Print Settings")}
        >
          Print Settings
        </LeftLink>
        <LeftLink
          active={tab === "Manage Users"}
          onClick={() => setTab("Manage Users")}
        >
          Manage Users
        </LeftLink>
        <LeftLink active={tab === "Reminders"} onClick={() => setTab("Reminders")}>
          Reminders
        </LeftLink>
        <LeftLink
          active={tab === "CA Reports Sharing"}
          onClick={() => setTab("CA Reports Sharing")}
        >
          CA Reports Sharing
        </LeftLink>
        <LeftLink active={tab === "Pricing"} onClick={() => setTab("Pricing")}>
          Pricing
        </LeftLink>
        <LeftLink
          active={tab === "Refer & Earn"}
          onClick={() => setTab("Refer & Earn")}
        >
          Refer & Earn
        </LeftLink>
        <LeftLink active={tab === "Help"} onClick={() => setTab("Help")}>
          Help And Support
        </LeftLink>
        <LeftLink active={tab === "Logout"} onClick={() => setTab("Logout")}>
          Logout
        </LeftLink>

        <div className="left-foot">
          <div>App Version : 8.79.2</div>
          <div className="muted">🔒 100% Secure &nbsp;&nbsp; ISO Certified</div>
        </div>
      </aside>

      {/* Right main content */}
      <section className="settings-main">
        {tab === "Invoice Settings" ? (          // ✅ route added
          <InvoiceSettings />
        ) : tab === "Help" ? (
          <HelpSupport />
        ) : tab === "Pricing" ? (
          <PricingPlans />
        ) : tab === "Refer & Earn" ? (
          <ReferEarn />
        ) : tab === "Manage Users" ? (
          <ManageUsers />
        ) : tab === "Manage Business" ? (
          <ManageBusiness />
        ) : tab === "Reminders" ? (
          <Reminders />
        ) : (
          // Default: Account page content
          <>
            <div className="settings-header">
              <div>
                <h1>Account Settings</h1>
                <p className="muted">Manage Your Account And Subscription</p>
              </div>
              <div className="header-actions">
                <button className="btn ghost">💬 Chat Support</button>
                <button className="btn">Cancel</button>
                <button className="btn primary">Save Changes</button>
              </div>
            </div>

            <div className="suggestion-banner card">
              <div>
                <b>Help us make myBillBook better</b>
              </div>
              <button className="btn orange">
                <span>👥</span> Share Suggestion
              </button>
            </div>

            <div className="panel card">
              <div className="panel-title">General Information</div>
              <div className="grid-3">
                <Field label="NAME *">
                  <input
                    className="input"
                    value={form.name}
                    onChange={update("name")}
                  />
                </Field>
                <Field label="MOBILE NUMBER">
                  <input
                    className="input"
                    value={form.mobile}
                    onChange={update("mobile")}
                  />
                </Field>
                <Field label="EMAIL">
                  <input
                    className="input"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="Enter email"
                  />
                </Field>
              </div>
            </div>

            <div className="panel card">
              <div className="panel-title">
                Referral code for subscription discount
              </div>
              <div className="ref-row">
                <input
                  className="input"
                  placeholder="Referral Code"
                  value={form.referral}
                  onChange={update("referral")}
                />
                <button className="btn primary">Apply</button>
              </div>
            </div>
          </>
        )}
      </section>
      
    </div>
  );
}

function LeftLink({ children, active, onClick }) {
  return (
    <button className={`left-link ${active ? "active" : ""}`} onClick={onClick}>
      <span>{children}</span>
      <FiChevronRight className="chev" />
    </button>
  );
}

function Field({ label, children }) {
  return (
    <label className="field">
      <div className="lbl">{label}</div>
      {children}
    </label>
  );
}
