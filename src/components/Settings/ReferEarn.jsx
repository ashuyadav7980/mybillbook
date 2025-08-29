// src/components/Settings/ReferEarn.jsx
import React, { useState } from "react";
import { FiSmartphone, FiGift } from "react-icons/fi";

export default function ReferEarn() {
    const [tab, setTab] = useState("Signed Up"); // "Signed Up" | "Plan Purchased"

    return (
        <>
            {/* Page header */}
            <div className="settings-header">
                <div>
                    <h1>Refer &amp; Earn</h1>
                </div>
                <div className="header-actions">
                    <button className="btn ghost">💬 Chat Support</button>
                </div>
            </div>

            {/* Hero banner */}
            <div className="refer-hero card">
                <div className="hero-left">
                    <div className="hero-title">
                        Earn <span className="rupee">₹501</span> for each Referral
                    </div>
                    <div className="hero-sub">
                        When your friend buys a plan, they'll get <b>flat 15% off</b> on the plan purchase
                    </div>
                    <div className="hero-cta">
                        <button className="btn white">Refer Now</button>
                        <button className="link hero-link">
                            <FiSmartphone />&nbsp; Send Code to my device
                        </button>
                    </div>
                </div>
                <div className="hero-art">
                    <div className="gift"><FiGift /></div>
                    <div className="bubbles">
                        <span /> <span /> <span />
                    </div>
                </div>
            </div>

            {/* Rewards Earned */}
            <div className="panel card">
                <div className="panel-title">Rewards Earned</div>

                <div className="reward-grid">
                    <div className="reward-card card">
                        <div className="rc-title">💠 Total Claimed</div>
                        <div className="rc-amt">₹ 0.0</div>
                    </div>

                    <div className="reward-card card">
                        <div className="rc-title green">🏦 Ready to Withdraw</div>
                        <div className="rc-amt">₹ 0.0</div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="tabs">
                    <button
                        className={`tab ${tab === "Signed Up" ? "active" : ""}`}
                        onClick={() => setTab("Signed Up")}
                    >
                        <span className="tab-ico">👤</span> Signed Up
                    </button>
                    <button
                        className={`tab ${tab === "Plan Purchased" ? "active" : ""}`}
                        onClick={() => setTab("Plan Purchased")}
                    >
                        <span className="tab-ico">👥</span> Plan Purchased
                    </button>
                </div>

                {/* Empty state */}
                <div className="empty-state">
                    <div className="empty-ico">🙂⬇️</div>
                    <div className="empty-text">No signed up users yet!</div>
                    <button className="btn primary purple">Refer Now</button>
                </div>
            </div>
        </>
    );
}
