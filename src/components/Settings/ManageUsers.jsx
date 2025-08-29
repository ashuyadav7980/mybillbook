// src/components/Settings/ManageUsers.jsx
import React, { useState } from "react";
import { FiHelpCircle, FiUser, FiActivity, FiPlus } from "react-icons/fi";

export default function ManageUsers() {
    const [range] = useState("Last 30 Days");

    return (
        <>
            {/* Header */}
            <div className="settings-header">
                <div>
                    <h1>Manage Users</h1>
                </div>
                <div className="header-actions">
                    <button className="icon-help" title="Help">
                        <FiHelpCircle />
                    </button>
                </div>
            </div>

            {/* KPI cards */}
            <div className="metrics-grid">
                <div className="metric-card card">
                    <div className="metric-left">
                        <div className="metric-title green">
                            <FiUser /> &nbsp;Number of Users
                        </div>
                        <div className="metric-num">1</div>
                    </div>
                </div>

                <div className="metric-card card">
                    <div className="metric-left">
                        <div className="metric-title blue">
                            <FiActivity /> &nbsp;Activities Performed
                        </div>
                        <div className="metric-num">0</div>
                    </div>
                    <span className="pill">{range}</span>
                </div>
            </div>

            {/* Illustration / flow */}
            <div className="users-graphic card">
                {/* A simple responsive SVG diagram to mimic the screenshot */}
                <svg viewBox="0 0 900 320" className="diagram">
                    <defs>
                        <filter id="shadow"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.15" /></filter>
                    </defs>

                    {/* center admin */}
                    <rect x="260" y="200" rx="10" ry="10" width="120" height="60" fill="#ffffff" stroke="#d1d5db" filter="url(#shadow)" />
                    <text x="320" y="236" textAnchor="middle" fontWeight="700" fontSize="14" fill="#111827">Admin</text>

                    {/* partner */}
                    <rect x="500" y="90" rx="10" ry="10" width="130" height="60" fill="#ffffff" stroke="#d1d5db" filter="url(#shadow)" />
                    <text x="565" y="125" textAnchor="middle" fontWeight="700" fontSize="14" fill="#111827">Partner</text>

                    {/* CA */}
                    <rect x="480" y="220" rx="10" ry="10" width="90" height="60" fill="#ffffff" stroke="#d1d5db" filter="url(#shadow)" />
                    <text x="525" y="255" textAnchor="middle" fontWeight="700" fontSize="14" fill="#111827">CA</text>

                    {/* right stack: Salesman, Stock Manager, Delivery Boy */}
                    <rect x="720" y="70" rx="12" ry="12" width="140" height="64" fill="#ffffff" stroke="#e5e7eb" filter="url(#shadow)" />
                    <text x="790" y="105" textAnchor="middle" fontWeight="700" fontSize="14" fill="#111827">Salesman</text>

                    <rect x="720" y="150" rx="12" ry="12" width="140" height="64" fill="#ffffff" stroke="#e5e7eb" filter="url(#shadow)" />
                    <text x="790" y="185" textAnchor="middle" fontWeight="700" fontSize="14" fill="#111827">Stock Manager</text>

                    <rect x="720" y="230" rx="12" ry="12" width="140" height="64" fill="#ffffff" stroke="#e5e7eb" filter="url(#shadow)" />
                    <text x="790" y="265" textAnchor="middle" fontWeight="700" fontSize="14" fill="#111827">Delivery Boy</text>

                    {/* arrows */}
                    <line x1="380" y1="230" x2="500" y2="120" stroke="#e5e7eb" strokeWidth="2" markerEnd="url(#arrow)" />
                    <line x1="380" y1="230" x2="480" y2="250" stroke="#e5e7eb" strokeWidth="2" markerEnd="url(#arrow)" />
                    <line x1="630" y1="120" x2="720" y2="102" stroke="#e5e7eb" strokeWidth="2" markerEnd="url(#arrow)" />
                    <line x1="570" y1="250" x2="720" y2="182" stroke="#e5e7eb" strokeWidth="2" markerEnd="url(#arrow)" />
                    <line x1="570" y1="250" x2="720" y2="262" stroke="#e5e7eb" strokeWidth="2" markerEnd="url(#arrow)" />

                    <defs>
                        <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L6,3 z" fill="#e5e7eb" />
                        </marker>
                    </defs>
                </svg>
            </div>

            {/* CTA */}
            <div className="users-cta">
                <h2>Give access to users and monitor their actions</h2>
                <p className="muted">
                    Manage your business more efficiently with full control and vision
                </p>
                <div className="cta-buttons">
                    <button className="btn primary purple">
                        <FiPlus /> Add New User
                    </button>
                    <button className="btn">
                        <FiPlus /> Add Your CA
                    </button>
                </div>
            </div>
        </>
    );
}
