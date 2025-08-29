import React from "react";
import { FiPlay } from "react-icons/fi";
import "./automatedBills.css";

export default function AutomatedBills() {
    return (
        <div className="ab-wrap">
            {/* Header */}
            <div className="ab-head">
                <h1>Automated Bills</h1>
                <button className="ab-video">
                    <FiPlay className="ab-video-icon" />
                    What is Automated Bills
                </button>
            </div>

            {/* 3 feature cards */}
            <div className="ab-grid">
                {/* Card 1 */}
                <div className="ab-card">
                    <div className="ab-hero">
                        {/* simple invoice + desk illustration */}
                        <svg viewBox="0 0 320 200" className="ab-svg">
                            <rect x="22" y="110" width="180" height="12" rx="6" fill="#dfe7ff" />
                            <rect x="22" y="130" width="180" height="12" rx="6" fill="#dfe7ff" />
                            <rect x="22" y="150" width="120" height="12" rx="6" fill="#dfe7ff" />
                            <rect x="210" y="105" width="90" height="60" rx="8" fill="#eef2ff" />
                            <rect x="248" y="120" width="18" height="18" rx="4" fill="#a0b9ff" />
                            <rect x="272" y="120" width="18" height="18" rx="4" fill="#ffd3a0" />
                            <rect x="248" y="144" width="18" height="18" rx="4" fill="#ffd3a0" />
                            <rect x="272" y="144" width="18" height="18" rx="4" fill="#a0b9ff" />
                            <rect x="60" y="170" width="200" height="4" rx="2" fill="#c7d2fe" />
                        </svg>
                        <div className="ab-bubble">Tired of creating repeated bills !!!</div>
                    </div>
                    <div className="ab-card-title">Creating repeated bills?</div>
                    <div className="ab-card-sub">
                        Automate sending of repeat bills based on a schedule
                        <br /> of your choice
                    </div>
                </div>

                {/* Card 2 */}
                <div className="ab-card">
                    <div className="ab-hero">
                        {/* bot + calendar */}
                        <svg viewBox="0 0 320 200" className="ab-svg">
                            <circle cx="160" cy="85" r="28" fill="#e9efff" />
                            <rect x="148" y="72" width="24" height="10" rx="5" fill="#6b7cff" />
                            <rect x="146" y="98" width="28" height="8" rx="4" fill="#6b7cff" />
                            <circle cx="126" cy="120" r="8" fill="#ffd3a0" />
                            <circle cx="194" cy="120" r="8" fill="#ffd3a0" />
                            <rect x="35" y="110" width="70" height="60" rx="8" fill="#eef2ff" />
                            <rect x="215" y="110" width="70" height="60" rx="8" fill="#eef2ff" />
                            <rect x="55" y="128" width="30" height="8" rx="4" fill="#a0b9ff" />
                            <rect x="235" y="128" width="30" height="8" rx="4" fill="#a0b9ff" />
                        </svg>
                    </div>
                    <div className="ab-card-title">Automated Billing</div>
                    <div className="ab-card-sub">
                        Send SMS reminders to customers <br />
                        daily/weekly/monthly
                    </div>
                </div>

                {/* Card 3 */}
                <div className="ab-card">
                    <div className="ab-hero">
                        {/* sheet + chart + notification */}
                        <svg viewBox="0 0 320 200" className="ab-svg">
                            <rect x="95" y="60" width="130" height="90" rx="8" fill="#eef2ff" />
                            <polyline
                                points="110,110 135,90 160,100 185,80 210,95"
                                fill="none"
                                stroke="#6b7cff"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle cx="205" cy="125" r="12" fill="#ffd3a0" />
                            <rect x="230" y="70" width="60" height="18" rx="9" fill="#e9efff" />
                            <circle cx="255" cy="79" r="6" fill="#6b7cff" />
                        </svg>
                    </div>
                    <div className="ab-card-title">Easy Reminders &amp; Payment</div>
                    <div className="ab-card-sub">
                        Automatically receive notifications and collect <br />
                        payments
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="ab-cta">
                <div className="ab-cta-note">
                    Schedule your repeated bills hassle-free
                </div>
                <button className="ab-cta-btn">Create Automated Bill</button>
            </div>
        </div>
    );
}
