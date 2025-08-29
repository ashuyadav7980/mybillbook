import React from "react";
import "./Godown.css";

export default function Godown() {
    return (
        <div className="godown-wrap">
            <h1>Godown Management</h1>

            <div className="gd-hero">
                <div className="gd-illu" aria-hidden>
                    {/* simple SVG illustration */}
                    <svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="roof" x1="0" x2="1">
                                <stop offset="0" stopColor="#c7d2fe" />
                                <stop offset="1" stopColor="#a5b4fc" />
                            </linearGradient>
                            <linearGradient id="wall" x1="0" x2="1">
                                <stop offset="0" stopColor="#e5e7eb" />
                                <stop offset="1" stopColor="#d1d5db" />
                            </linearGradient>
                        </defs>

                        
                        <path d="M140 150 L380 60 L620 150 Z" fill="url(#roof)" />
                    
                        <rect x="160" y="150" width="440" height="150" rx="6" fill="url(#wall)" />
                        
                        <rect x="220" y="180" width="160" height="120" fill="#9ca3af" />
                        <rect x="400" y="180" width="180" height="90" fill="#9aa6f3" opacity="0.5" />
                        
                        <rect x="270" y="118" width="220" height="40" rx="6" fill="#e0e7ff" />
                        <text x="380" y="145" textAnchor="middle" fontFamily="Inter, system-ui"
                            fontSize="24" fontWeight="700" fill="#4f46e5">GODOWN</text>

                        
                        <rect x="120" y="240" width="55" height="55" fill="#fbbf24" />
                        <rect x="180" y="240" width="55" height="55" fill="#f59e0b" />
                        <rect x="120" y="200" width="55" height="38" fill="#f59e0b" />

                        
                        <rect x="560" y="240" width="70" height="40" rx="4" fill="#64748b" />
                        <circle cx="575" cy="285" r="12" fill="#111827" />
                        <circle cx="615" cy="285" r="12" fill="#111827" />
                        <rect x="635" y="232" width="16" height="60" fill="#6b7280" />
                        <rect x="651" y="232" width="6" height="60" fill="#6b7280" />
                        <rect x="642" y="210" width="40" height="20" fill="#fbbf24" />
                        <rect x="642" y="190" width="40" height="18" fill="#f59e0b" />
                    </svg>
                </div>

                <h2 className="gd-title">Start managing multiple Godowns!</h2>
                <p className="gd-sub">
                    You can easily monitor and track your inventory across various
                    Godowns and Store locations
                </p>

                <button className="btn primary gd-btn">Enable Godown</button>
            </div>
        </div>
    );
}
