// src/components/Settings/Reminders.jsx
import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

function Toggle({ checked, onChange }) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            className={`tog ${checked ? "on" : ""}`}
            onClick={() => onChange(!checked)}
        >
            <span className="knob" />
        </button>
    );
}

function AccordionRow({ title, subtitle, open, onToggle }) {
    return (
        <div className={`acc-row ${open ? "open" : ""}`} onClick={onToggle}>
            <div className="acc-left">
                <div className="acc-title">{title}</div>
                <div className="acc-sub muted">{subtitle}</div>
            </div>
            <FiChevronRight className="chev" />
        </div>
    );
}

export default function Reminders() {
    const [sendSms, setSendSms] = useState(true);
    const [waReminders, setWaReminders] = useState(false);
    const [openParty, setOpenParty] = useState(false);
    const [openYou, setOpenYou] = useState(false);

    return (
        <>
            {/* Header */}
            <div className="settings-header">
                <div>
                    <h1>Reminder Settings</h1>
                    <p className="muted">
                        Select Which Reminders Are Sent To You And Your Parties
                    </p>
                </div>
                <div className="header-actions">
                    <button className="btn ghost">💬 Chat Support</button>
                    <button className="btn">Cancel</button>
                    <button className="btn primary">Save Changes</button>
                </div>
            </div>

            {/* Top toggle cards */}
            <div className="panel card">
                <div className="tog-grid">
                    <div className="toggle-card card">
                        <div className="tc-left">
                            <div className="tc-title">Send billing SMS to Party</div>
                            <div className="tc-sub muted">
                                Send SMS to your Party on creating any transaction
                            </div>
                        </div>
                        <Toggle checked={sendSms} onChange={setSendSms} />
                    </div>

                    <div className="toggle-card card">
                        <div className="tc-left">
                            <div className="tc-title">Get payment reminders on WhatsApp</div>
                            <div className="tc-sub muted">
                                Get WhatsApp alerts when you have to collect payment from
                                customers
                            </div>
                        </div>
                        <Toggle checked={waReminders} onChange={setWaReminders} />
                    </div>
                </div>
            </div>

            {/* Accordion rows */}
            <div className="panel card">
                <AccordionRow
                    title="TO PARTY"
                    subtitle="(Reminders will be sent through sms)"
                    open={openParty}
                    onToggle={() => setOpenParty((v) => !v)}
                />
                <AccordionRow
                    title="TO YOU"
                    subtitle="(Reminders will be sent on mobile app and whatsapp)"
                    open={openYou}
                    onToggle={() => setOpenYou((v) => !v)}
                />
            </div>
        </>
    );
}
