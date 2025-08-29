import React from "react";
import {
    FiPlayCircle,
    FiMessageCircle,
    FiFileText,
    FiTruck,
    FiPieChart,
} from "react-icons/fi";
import "./einvoicing.css";

export default function EInvoicing() {
    return (
        <div className="einv-wrap">
            {/* Header */}
            <div className="einv-head">
                <div className="einv-head-left">
                    <h1>e-Invoicing</h1>
                    <button className="pill ghost">
                        <FiPlayCircle className="mr-8" />
                        What is e-Invoicing
                    </button>
                </div>

                <button className="btn outline">
                    <FiMessageCircle className="mr-8" />
                    Chat Support
                </button>
            </div>

            {/* Features */}
            <div className="einv-grid">
                <div className="feature-card">
                    <div className="illus">
                        <FiFileText />
                    </div>
                    <div className="feature-title">Automatic e-invoice generation</div>
                </div>

                <div className="feature-card">
                    <div className="illus">
                        <FiTruck />
                    </div>
                    <div className="feature-title">
                        Hassle e-way bill generation using IRN
                    </div>
                </div>

                <div className="feature-card">
                    <div className="illus">
                        <FiPieChart />
                    </div>
                    <div className="feature-title">Easy GSTR1 reconciliation</div>
                </div>
            </div>

            {/* CTA */}
            <div className="einv-cta">
                <h3>Try India&apos;s easiest and fastest e-invoicing solution today</h3>
                <button className="btn primary lg">Start Generating e-Invoices</button>
            </div>
        </div>
    );
}
