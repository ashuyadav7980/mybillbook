import React, { useState } from "react";
import {
    FiCheck,
    FiImage,
    FiMessageSquare,
} from "react-icons/fi";
import "./Settings.css";

export default function PrintSettings() {
    const [tab, setTab] = useState("thermal"); // "thermal" | "barcode"
    const [size, setSize] = useState("2");     // "2" | "3"

    return (
        <>
            <div className="settings-header">
                <div>
                    <h1>Print Settings</h1>
                </div>
                <div className="header-actions">
                    <button className="btn ghost">💬 Chat Support</button>
                    <button className="btn">Cancel</button>
                    <button className="btn primary">Save Changes</button>
                </div>
            </div>

            <div className="ps-grid">
                {/* LEFT: controls */}
                <div className="ps-left card">
                    {/* Tabs */}
                    <div className="ps-tabs">
                        <button
                            className={`ps-tab ${tab === "thermal" ? "active" : ""}`}
                            onClick={() => setTab("thermal")}
                        >
                            Thermal Printer
                        </button>
                        <button
                            className={`ps-tab ${tab === "barcode" ? "active" : ""}`}
                            onClick={() => setTab("barcode")}
                        >
                            Barcode Printer
                        </button>
                    </div>

                    {/* Theme sizes */}
                    <div className="ps-block">
                        <div className="ps-label">Select your Invoice theme</div>

                        <label
                            className={`ps-size ${size === "2" ? "selected" : ""}`}
                            onClick={() => setSize("2")}
                        >
                            <span>2 Inch</span>
                            {size === "2" && (
                                <span className="tick">
                                    <FiCheck />
                                </span>
                            )}
                        </label>

                        <label
                            className={`ps-size ${size === "3" ? "selected" : ""}`}
                            onClick={() => setSize("3")}
                        >
                            <span>3 Inch</span>
                            {size === "3" && (
                                <span className="tick">
                                    <FiCheck />
                                </span>
                            )}
                        </label>
                    </div>

                    {/* Business logo uploader */}
                    <div className="ps-block">
                        <div className="ps-label">Business Logo</div>

                        <div className="ps-upload card">
                            <div className="ps-upload-ibox">
                                <FiImage />
                            </div>
                            <button className="link-btn">Upload Monochrome Logo</button>
                            <div className="ps-note">
                                You can only upload your logo in Monochrome, *.bmp extension and
                                210px (max width) x 70px (max height) dimensions. To learn how to
                                resize and convert your logo to Monochrome{" "}
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    click here
                                </a>.
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: live preview */}
                <div className="ps-preview">
                    <div className={`receipt ${size === "3" ? "w3" : "w2"}`}>
                        <div className="r-title">TAX INVOICE</div>

                        <div className="r-block">
                            <div>West shantinagar anand Nagar Belur</div>
                            <div>howrah 711227 , West Bengal</div>
                            <div>Phone No: 6290783735</div>
                            <div className="r-hr" />
                        </div>

                        <div className="r-block">
                            <div>Invoice Number: RT/24/272</div>
                            <div>Invoice Date: __________</div>
                            <div>Bill To: Cash Sale</div>
                            <div className="r-hr" />
                        </div>

                        <div className="r-block">
                            <div className="mono">SN Items</div>
                            <div className="mono small">
                                Qty   Rate   MRP          Amt
                            </div>
                            <div className="mono small">
                                Item Code    Disc         Tax
                            </div>
                            <div className="r-hr" />

                            {/* item 1 */}
                            <div>1  Cleanic 100% bleach</div>
                            <div className="mono small">
                                1.0 PCS 168.64  199             189.05
                            </div>
                            <div className="mono small">-      5.00%           18.00%</div>

                            {/* item 2 */}
                            <div className="mt">2  AP Honey 500g</div>
                            <div className="mono small">
                                2.0 PCS 211.86  265             500
                            </div>
                            <div className="mono small">APH28292         -     18.00%</div>

                            {/* item 3 */}
                            <div className="mt">3  Colgate Electric Toothbrush</div>
                            <div className="mono small">
                                1.0 PCS 651.69  899             730.55
                            </div>
                            <div className="mono small">RTTE88292   5.00%      18.00%</div>

                            <div className="r-hr" />
                            <Row label="Sub Total" value="₹1,419.60" />
                            <Row label="Taxable Amount" value="₹1,203.05" />
                            <Row label="SGST 9%" value="₹108.27" />
                            <Row label="CGST 9%" value="₹108.27" />
                            <div className="r-hr" />
                            <Row label="Total Amount" value="₹1,636.15" bold />
                            <Row label="Paid Amount" value="₹1,220.60" />
                            <Row label="Balance Amount" value="₹0.00" />
                        </div>

                        <div className="r-block">
                            <div className="r-subtitle">Notes</div>
                            <div className="mono small">
                                We offer doorstep delivery for large
                                orders. Enquire at cash counter or
                                call us for details.
                            </div>
                            <div className="r-subtitle mt">Terms and Conditions</div>
                            <ol className="mono small">
                                <li>Goods once sold will not be taken back or exchanged</li>
                                <li>All disputes are subject to PUNE jurisdiction</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function Row({ label, value, bold }) {
    return (
        <div className={`r-row ${bold ? "bold" : ""}`}>
            <span>{label}</span>
            <span>{value}</span>
        </div>
    );
}
