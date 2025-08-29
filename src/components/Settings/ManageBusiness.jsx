import React, { useRef, useState } from "react";
import { FiX } from "react-icons/fi";

export default function ManageBusiness() {
    // demo/local state only
    const [logoUrl, setLogoUrl] = useState(null);
    const [signatureUrl, setSignatureUrl] = useState(null);
    const logoInput = useRef(null);
    const sigInput = useRef(null);

    const [form, setForm] = useState({
        businessName: "SANTOSH CYCLE VAN REPARING SHOP",
        phone: "6290783735",
        email: "",
        address:
            "West shantinagar anand Nagar Belur howrah\n711227",
        state: "West Bengal",
        pincode: "",
        city: "",
        gst: "No",
        businessType: "Services",
        registrationType: "Partnerships Firm",
        industryType: "Interiors",
        extraKey: "Website",
        extraValue: "www.website.com",
    });

    const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    const onPick = (ref, setter) => {
        const input = ref.current;
        if (!input) return;
        input.onchange = (e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            const url = URL.createObjectURL(file);
            setter(url);
        };
        input.click();
    };

    return (
        <>
            {/* Header */}
            <div className="settings-header">
                <div>
                    <h1>Business Settings</h1>
                    <p className="muted">Edit Your Company Settings And Information</p>
                </div>
                <div className="header-actions">
                    <button className="btn orange">Create new business</button>
                    <button className="btn ghost">💬 Chat Support</button>
                    <button className="btn">Close Financial Year</button>
                    <button className="btn">Cancel</button>
                    <button className="btn primary">Save Changes</button>
                </div>
            </div>

            {/* Top two-column form */}
            <div className="panel card">
                <div className="two-col">
                    {/* LEFT column */}
                    <div className="col">
                        <div className="logo-upload">
                            <div className="logo-box" onClick={() => onPick(logoInput, setLogoUrl)}>
                                {logoUrl ? (
                                    <img src={logoUrl} alt="logo" />
                                ) : (
                                    <div className="logo-placeholder">Upload Logo</div>
                                )}
                            </div>
                            <input
                                ref={logoInput}
                                type="file"
                                accept="image/*"
                                hidden
                            />
                        </div>

                        <Field label="Business Name *">
                            <input
                                className="input"
                                value={form.businessName}
                                onChange={update("businessName")}
                            />
                        </Field>

                        <div className="grid-2">
                            <Field label="Company Phone Number">
                                <input
                                    className="input"
                                    value={form.phone}
                                    onChange={update("phone")}
                                />
                            </Field>
                            <Field label="Company E-Mail">
                                <input
                                    className="input"
                                    placeholder="Enter company e-mail"
                                    value={form.email}
                                    onChange={update("email")}
                                />
                            </Field>
                        </div>

                        <Field label="Billing Address">
                            <textarea
                                className="input ta"
                                rows={4}
                                value={form.address}
                                onChange={update("address")}
                            />
                        </Field>

                        <div className="grid-3-narrow">
                            <Field label="State">
                                <div className="select">
                                    <select value={form.state} onChange={update("state")}>
                                        <option>West Bengal</option>
                                        <option>Bihar</option>
                                        <option>Jharkhand</option>
                                        <option>Odisha</option>
                                    </select>
                                    <button className="clear" title="Clear" onClick={() => setForm(f => ({ ...f, state: "" }))}>
                                        <FiX />
                                    </button>
                                </div>
                            </Field>
                            <Field label="Pincode">
                                <input
                                    className="input"
                                    placeholder="Enter Pincode"
                                    value={form.pincode}
                                    onChange={update("pincode")}
                                />
                            </Field>
                            <Field label="City">
                                <input
                                    className="input"
                                    placeholder="Enter City"
                                    value={form.city}
                                    onChange={update("city")}
                                />
                            </Field>
                        </div>

                        <Field label="Are you GST Registered?">
                            <div className="radio-group">
                                <label className={`radio ${form.gst === "Yes" ? "on" : ""}`}>
                                    <input
                                        type="radio"
                                        name="gst"
                                        checked={form.gst === "Yes"}
                                        onChange={() => setForm((f) => ({ ...f, gst: "Yes" }))}
                                    />
                                    <span>Yes</span>
                                </label>
                                <label className={`radio ${form.gst === "No" ? "on" : ""}`}>
                                    <input
                                        type="radio"
                                        name="gst"
                                        checked={form.gst === "No"}
                                        onChange={() => setForm((f) => ({ ...f, gst: "No" }))}
                                    />
                                    <span>No</span>
                                </label>
                            </div>
                        </Field>
                    </div>

                    {/* RIGHT column */}
                    <div className="col">
                        <div className="grid-3">
                            <Field label="Business Type (Select multiple, if applicable)">
                                <div className="select">
                                    <select value={form.businessType} onChange={update("businessType")}>
                                        <option>Services</option>
                                        <option>Manufacturing</option>
                                        <option>Trading</option>
                                        <option>Retail</option>
                                    </select>
                                </div>
                            </Field>

                            <Field label="Industry Type">
                                <div className="select">
                                    <select value={form.industryType} onChange={update("industryType")}>
                                        <option>Interiors</option>
                                        <option>Automotive</option>
                                        <option>Construction</option>
                                        <option>Electronics</option>
                                    </select>
                                    <button
                                        className="clear"
                                        title="Clear"
                                        onClick={() => setForm((f) => ({ ...f, industryType: "" }))}
                                    >
                                        <FiX />
                                    </button>
                                </div>
                            </Field>
                        </div>

                        <Field label="Business Registration Type">
                            <div className="select">
                                <select
                                    value={form.registrationType}
                                    onChange={update("registrationType")}
                                >
                                    <option>Proprietorship</option>
                                    <option>Partnerships Firm</option>
                                    <option>Private Limited</option>
                                    <option>LLP</option>
                                </select>
                            </div>
                        </Field>

                        <div className="inline-note card">
                            <b>Note:</b>&nbsp; Details added below will be shown on your Invoices
                        </div>

                        <Field label="Signature">
                            <div className="sig-box" onClick={() => onPick(sigInput, setSignatureUrl)}>
                                {signatureUrl ? (
                                    <img src={signatureUrl} alt="signature" />
                                ) : (
                                    <div className="sig-placeholder">Ranjan tiwari</div>
                                )}
                            </div>
                            {signatureUrl && (
                                <button
                                    className="link danger"
                                    onClick={() => setSignatureUrl(null)}
                                    type="button"
                                >
                                    Remove
                                </button>
                            )}
                            <input ref={sigInput} type="file" accept="image/*" hidden />
                        </Field>

                        {/* Add Business Details */}
                        <div className="panel card inner">
                            <div className="panel-title">Add Business Details</div>
                            <div className="muted small">
                                Add additional business information such as MSME number, Website etc.
                            </div>

                            <div className="kv-grid">
                                <div className="select">
                                    <select value={form.extraKey} onChange={update("extraKey")}>
                                        <option>Website</option>
                                        <option>MSME</option>
                                        <option>GSTIN</option>
                                        <option>Pan</option>
                                    </select>
                                </div>
                                <div className="eq">=</div>
                                <input
                                    className="input"
                                    value={form.extraValue}
                                    onChange={update("extraValue")}
                                    placeholder="www.website.com"
                                />
                                <button className="btn primary purple">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

/* small helpers */
function Field({ label, children }) {
    return (
        <label className="field">
            <div className="lbl">{label}</div>
            {children}
        </label>
    );
}
