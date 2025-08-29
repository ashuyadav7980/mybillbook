import React, { useEffect, useMemo, useState } from "react";
import { FiX } from "react-icons/fi";
import "./Parties.css"; // reuse same css file for basic styles

const PARTY_TYPES = ["Customer", "Supplier"];
const CATEGORIES = ["-", "Retail", "Wholesale", "VIP"];
const BALANCE_MODES = ["To Collect", "To Pay"];

export default function CreatePartyModal({ onClose }) {
    const [form, setForm] = useState({
        name: "",
        mobile: "",
        email: "",
        gstin: "",
        pan: "",
        partyType: "Customer",
        category: "-",
        openingBalance: 0,
        openingMode: "To Collect",
        billingAddress: "",
        shippingAddress: "",
        sameAsBilling: true,
        creditPeriod: 30,
        creditLimit: 0
    });

    useEffect(() => {
        if (form.sameAsBilling) {
            setForm(f => ({ ...f, shippingAddress: f.billingAddress }));
        }
    }, [form.billingAddress, form.sameAsBilling]);

    const disabledSave = useMemo(
        () => form.name.trim() === "" || form.partyType.trim() === "",
        [form.name, form.partyType]
    );

    const handle = (key) => (e) => {
        const v = e?.target?.type === "checkbox" ? e.target.checked : e.target.value;
        setForm(f => ({ ...f, [key]: v }));
    };

    const handleNum = (key) => (e) => {
        const v = e.target.value;
        setForm(f => ({ ...f, [key]: v === "" ? "" : Math.max(0, Number(v)) }));
    };

    const save = (resetAfter = false) => {
        // TODO: replace with your API call
        console.log("CREATE PARTY:", form);
        if (resetAfter) {
            setForm({
                name: "",
                mobile: "",
                email: "",
                gstin: "",
                pan: "",
                partyType: "Customer",
                category: "-",
                openingBalance: 0,
                openingMode: "To Collect",
                billingAddress: "",
                shippingAddress: "",
                sameAsBilling: true,
                creditPeriod: 30,
                creditLimit: 0
            });
        } else {
            onClose?.();
        }
    };

    const getGstinDetails = () => {
        if (form.gstin.trim()) {
            setForm(f => ({
                ...f,
                name: f.name || "Auto-filled Party",
                pan: f.pan || "ABCDE1234F"
            }));
        }
    };

    return (
        <div className="cp-modal-overlay" role="dialog" aria-modal="true">
            <div className="cp-modal">
                <header className="cp-header">
                    <div className="cp-left">
                        <span className="cp-kbd">⌨</span>
                        <span className="cp-title">Create Party</span>
                    </div>
                    <div className="cp-actions">
                        <button className="btn" onClick={() => save(true)}>Save & New</button>
                        <button className="btn btn-primary" disabled={disabledSave} onClick={() => save(false)}>Save</button>
                        <button className="icon-btn" aria-label="Close" onClick={onClose}><FiX /></button>
                    </div>
                </header>

                <div className="cp-body">
                    <div className="cp-section">
                        <h3>General Details</h3>

                        <div className="cp-grid-3">
                            <div className="cp-field">
                                <label>Party Name <span className="req">*</span></label>
                                <input value={form.name} onChange={handle("name")} placeholder="Enter name" />
                            </div>

                            <div className="cp-field">
                                <label>Mobile Number</label>
                                <input type="tel" value={form.mobile} onChange={handle("mobile")} placeholder="Enter mobile number" maxLength={15} />
                            </div>

                            <div className="cp-field">
                                <label>Email</label>
                                <input type="email" value={form.email} onChange={handle("email")} placeholder="Enter email" />
                            </div>

                            <div className="cp-field cp-gstin">
                                <label>GSTIN</label>
                                <div className="cp-row">
                                    <input value={form.gstin} onChange={handle("gstin")} placeholder="ex: 29XXXXX9438X1XX" />
                                    <button className="btn" type="button" onClick={getGstinDetails}>Get Details</button>
                                </div>
                                <p className="cp-hint">Note: You can auto populate party details from GSTIN</p>
                            </div>

                            <div className="cp-field">
                                <label>PAN Number</label>
                                <input value={form.pan} onChange={handle("pan")} placeholder="Enter party PAN Number" />
                            </div>

                            <div />
                        </div>

                        <div className="cp-grid-3">
                            <div className="cp-field">
                                <label>Party Type <span className="req">*</span></label>
                                <select value={form.partyType} onChange={handle("partyType")}>
                                    {PARTY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                                </select>
                            </div>

                            <div className="cp-field">
                                <label>Party Category</label>
                                <select value={form.category} onChange={handle("category")}>
                                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>

                            <div className="cp-field">
                                <label>Opening Balance</label>
                                <div className="cp-row">
                                    <input type="number" min="0" value={form.openingBalance} onChange={handleNum("openingBalance")} placeholder="₹ 0" />
                                    <select value={form.openingMode} onChange={handle("openingMode")}>
                                        {BALANCE_MODES.map(m => <option key={m} value={m}>{m}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cp-section">
                        <h3>Address</h3>

                        <div className="cp-grid-2">
                            <div className="cp-field">
                                <label>Billing Address</label>
                                <textarea rows={4} value={form.billingAddress} onChange={handle("billingAddress")} placeholder="Enter billing address" />
                            </div>

                            <div className="cp-field">
                                <div className="cp-label-row">
                                    <label>Shipping Address</label>
                                    <label className="cp-check">
                                        <input type="checkbox" checked={form.sameAsBilling} onChange={handle("sameAsBilling")} />
                                        <span>Same as Billing address</span>
                                    </label>
                                </div>
                                <textarea rows={4} value={form.shippingAddress} onChange={handle("shippingAddress")} disabled={form.sameAsBilling} placeholder="Enter shipping address" />
                            </div>
                        </div>

                        <div className="cp-grid-3">
                            <div className="cp-field">
                                <label>Credit Period</label>
                                <div className="cp-with-suffix">
                                    <input type="number" min="0" value={form.creditPeriod} onChange={handleNum("creditPeriod")} />
                                    <span className="cp-suffix">Days</span>
                                </div>
                            </div>

                            <div className="cp-field">
                                <label>Credit Limit</label>
                                <input type="number" min="0" value={form.creditLimit} onChange={handleNum("creditLimit")} placeholder="₹ 0" />
                            </div>

                            <div />
                        </div>
                    </div>

                    <div className="cp-section cp-bank-note">
                        <div className="cp-bank-illus" aria-hidden />
                        <p>Add party bank information to manage transactions</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
