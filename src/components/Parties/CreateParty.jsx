import React, { useState } from "react";
import "./createParty.css";

export default function CreateParty() {
    const [openingType, setOpeningType] = useState("To Collect");
    const [sameAsBilling, setSameAsBilling] = useState(true);

    return (
        <div className="cp2-wrap">
            {/* Top actions row */}
            <div className="cp2-topbar">
                <div className="cp2-left">
                    <button
                        className="cp2-back"
                        title="Back"
                        onClick={() => window.history.back()}
                    >
                        {/* chevron */}
                        <span>‹</span>
                    </button>
                    <h1>Create Party</h1>
                </div>

                <div className="cp2-right">
                    <button className="cp2-iconbtn" title="Keyboard">
                        ⌨
                    </button>
                    <button className="cp2-linkbtn">Party Settings</button>
                    <button className="cp2-btn ghost">Save &amp; New</button>
                    <button className="cp2-btn primary">Save</button>
                </div>
            </div>

            {/* GENERAL DETAILS */}
            <div className="cp2-section">
                <div className="cp2-section-title">General Details</div>

                <div className="cp2-card">
                    {/* Row 1 */}
                    <div className="cp2-grid cp2-cols-4">
                        <label className="cp2-field">
                            <div className="cp2-label">Party Name*</div>
                            <input className="cp2-input" placeholder="Enter name" />
                        </label>

                        <label className="cp2-field">
                            <div className="cp2-label">Mobile Number</div>
                            <input className="cp2-input" placeholder="Enter mobile number" />
                        </label>

                        <label className="cp2-field">
                            <div className="cp2-label">Email</div>
                            <input className="cp2-input" placeholder="Enter email" />
                        </label>

                        <div className="cp2-field">
                            <div className="cp2-label">Opening Balance</div>
                            <div className="cp2-open">
                                <input className="cp2-input" defaultValue="₹ 0" />
                                <select
                                    className="cp2-select"
                                    value={openingType}
                                    onChange={(e) => setOpeningType(e.target.value)}
                                >
                                    <option>To Collect</option>
                                    <option>To Pay</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 GSTIN / PAN */}
                    <div className="cp2-grid cp2-cols-4">
                        <div className="cp2-field">
                            <div className="cp2-label">GSTIN</div>
                            <div className="cp2-inline">
                                <input
                                    className="cp2-input"
                                    placeholder="ex: 29XXXXX9438X1XX"
                                />
                                <button className="cp2-btn tiny">Get Details</button>
                            </div>
                            <div className="cp2-hint">
                                Note: You can auto populate party details from GSTIN
                            </div>
                        </div>

                        <label className="cp2-field">
                            <div className="cp2-label">PAN Number</div>
                            <input
                                className="cp2-input"
                                placeholder="Enter party PAN Number"
                            />
                        </label>

                        <label className="cp2-field">
                            <div className="cp2-label">Party Type*</div>
                            <div className="cp2-selectwrap">
                                <select className="cp2-select">
                                    <option>Customer</option>
                                    <option>Supplier</option>
                                    <option>Customer &amp; Supplier</option>
                                </select>
                                <span className="cp2-caret">⌄</span>
                            </div>
                        </label>

                        <label className="cp2-field">
                            <div className="cp2-label">Party Category</div>
                            <div className="cp2-selectwrap">
                                <select className="cp2-select">
                                    <option>Select Category</option>
                                    <option>Retail</option>
                                    <option>Wholesale</option>
                                    <option>Other</option>
                                </select>
                                <span className="cp2-caret">⌄</span>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            {/* ADDRESS */}
            <div className="cp2-section">
                <div className="cp2-section-title">Address</div>

                <div className="cp2-card">
                    <div className="cp2-rowhead">
                        <div />
                        <label className="cp2-check">
                            <input
                                type="checkbox"
                                checked={sameAsBilling}
                                onChange={(e) => setSameAsBilling(e.target.checked)}
                            />
                            <span>Same as Billing address</span>
                        </label>
                    </div>

                    <div className="cp2-grid cp2-cols-2">
                        <label className="cp2-field">
                            <div className="cp2-label">Billing Address</div>
                            <textarea
                                className="cp2-input cp2-textarea"
                                placeholder="Enter billing address"
                            />
                        </label>

                        <label className="cp2-field">
                            <div className="cp2-label">Shipping Address</div>
                            <textarea
                                className="cp2-input cp2-textarea"
                                placeholder="Enter shipping address"
                                disabled={sameAsBilling}
                            />
                        </label>
                    </div>

                    <div className="cp2-grid cp2-cols-4 cp2-credits">
                        <label className="cp2-field">
                            <div className="cp2-label">Credit Period</div>
                            <div className="cp2-inline">
                                <input className="cp2-input" defaultValue="30" />
                                <span className="cp2-chip">Days</span>
                            </div>
                        </label>

                        <label className="cp2-field">
                            <div className="cp2-label">Credit Limit</div>
                            <input className="cp2-input" defaultValue="₹ 0" />
                        </label>
                    </div>
                </div>
            </div>

            {/* Help FAB (as in screenshot bottom-right) */}
            <button className="cp2-fab" title="Help">?</button>
        </div>
    );
}
