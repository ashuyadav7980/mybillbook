import React, { useMemo, useState } from "react";
import "./quotation-create.css";

export default function QuotationCreate() {
    const [quoteNo] = useState("1");
    const [quoteDate, setQuoteDate] = useState(() =>
        new Date().toISOString().slice(0, 10)
    );
    const [validDays, setValidDays] = useState(30);

    const validityDate = useMemo(() => {
        const d = new Date(quoteDate);
        d.setDate(d.getDate() + Number(validDays || 0));
        return d.toISOString().slice(0, 10);
    }, [quoteDate, validDays]);

    return (
        <div className="qwrap">
            {/* HEADER */}
            <div className="qhead">
                <div className="qtitle">
                    <button className="qback" aria-label="Back">←</button>
                    <div className="qtitle-text">Create Quotation</div>
                </div>

                <div className="qhead-actions">
                    <button className="btn ghost">
                        <span className="ico-gear" /> Settings
                    </button>
                    <button className="btn ghost">Save & New</button>
                    <button className="btn primary disabled">Save</button>
                </div>
            </div>

            <div className="qcontent">
                {/* MINI NAV LEFT (like the screenshot) */}
                <aside className="qnav">
                    <div className="qnav-sec">
                        <div className="qnav-head">GENERAL</div>
                        <a className="qnav-link">Create Party</a>
                        <a className="qnav-link">Create Item</a>
                    </div>

                    <div className="qnav-sec">
                        <div className="qnav-head">SALES TRANSACTIONS</div>
                        <a className="qnav-link active">
                            <span className="ico-doc" /> Quotation
                        </a>
                        <a className="qnav-link">Payment In</a>
                        <a className="qnav-link">Sales Return</a>
                        <a className="qnav-link">Credit Note</a>
                        <a className="qnav-link">Delivery Challan</a>
                        <a className="qnav-link">Proforma Invoice</a>
                    </div>

                    <div className="qnav-sec">
                        <div className="qnav-head">PURCHASE TRANSACTIONS</div>
                        <a className="qnav-link">Purchase</a>
                        <a className="qnav-link">Payment Out</a>
                        <a className="qnav-link">Purchase Return</a>
                        <a className="qnav-link">Debit Note</a>
                        <a className="qnav-link">Purchase Orders</a>
                        <a className="qnav-link">Create Expense</a>
                    </div>
                </aside>

                {/* MAIN */}
                <div className="qmain">
                    {/* BILL TO + META */}
                    <div className="qtop">
                        <div className="billto card">
                            <div className="lbl">Bill To</div>
                            <div className="dashed add-block">
                                <button className="link">+ Add Party</button>
                            </div>
                        </div>

                        <div className="meta card">
                            <div className="meta-row">
                                <label>Quotation No:</label>
                                <input className="inp" value={quoteNo} readOnly />
                            </div>

                            <div className="meta-row">
                                <label>Quotation Date:</label>
                                <input
                                    type="date"
                                    className="inp"
                                    value={quoteDate}
                                    onChange={(e) => setQuoteDate(e.target.value)}
                                />
                            </div>

                            <div className="meta-row">
                                <label>Valid For:</label>
                                <div className="inline">
                                    <input
                                        type="number"
                                        className="inp"
                                        min="0"
                                        value={validDays}
                                        onChange={(e) => setValidDays(e.target.value)}
                                    />
                                    <span className="muted">days</span>
                                    <button className="chip-x" aria-label="clear">×</button>
                                </div>
                            </div>

                            <div className="meta-row">
                                <label>Validity Date:</label>
                                <div className="inline">
                                    <input type="date" className="inp" value={validityDate} readOnly />
                                    <button className="chip-x" aria-label="calendar">📅</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GRID */}
                    <div className="grid card">
                        <div className="grid-head">
                            <div className="c no">NO</div>
                            <div className="c item">ITEMS/ SERVICES</div>
                            <div className="c hsn">HSN/ SAC</div>
                            <div className="c qty">QTY</div>
                            <div className="c price">PRICE/ITEM (₹)</div>
                            <div className="c disc">DISCOUNT</div>
                            <div className="c tax">TAX</div>
                            <div className="c amt">AMOUNT (₹)</div>
                        </div>

                        <div className="grid-row">
                            <div className="dashed addline">
                                <button className="link">+ Add Item</button>
                            </div>

                            <button className="scan">
                                <span className="ico-scan" /> Scan Barcode
                            </button>
                        </div>

                        {/* Subtotal strip like the screenshot */}
                        <div className="subtotal-row">
                            <div className="st cell"><span>SUBTOTAL</span></div>
                            <div className="st val">₹ 0</div>
                            <div className="st val">₹ 0</div>
                            <div className="st val">₹ 0</div>
                        </div>
                    </div>

                    {/* BOTTOM TWO COLUMNS */}
                    <div className="bottom">
                        <div className="bottom-left card">
                            <button className="link">+ Add Notes</button>
                            <button className="link">+ Add Terms and Conditions</button>
                            <button className="link">+ Add Bank Account</button>
                        </div>

                        <div className="bottom-right">
                            <button className="link mb8">+ Add Additional Charges</button>

                            <div className="totals card">
                                <div className="row">
                                    <span>Taxable Amount</span>
                                    <span>₹ 0</span>
                                </div>

                                <div className="row">
                                    <span className="link">+ Add Discount</span>
                                    <span>₹ 0</span>
                                </div>

                                <label className="round mt8">
                                    <input type="checkbox" /> Auto Round Off
                                </label>

                                <div className="row total">
                                    <span className="strong">Total Amount</span>
                                    <span className="strong">₹ 0</span>
                                </div>

                                <div className="pay">
                                    <div className="pay-grid">
                                        <select className="inp">
                                            <option>+ Add</option>
                                            <option>Freight</option>
                                            <option>Packing</option>
                                        </select>
                                        <select className="inp">
                                            <option>₹</option>
                                            <option>%</option>
                                        </select>
                                        <input className="inp" type="number" defaultValue="0" />
                                    </div>

                                    <button className="btn ghost full">Enter Payment amount</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SIGNATURE */}
                    <div className="sign">
                        <span>
                            Authorized signatory for{" "}
                            <b>SANTOSH CYCLE VAN REPARING SHOP</b>
                        </span>
                        <div className="sig">Ranjan tiwari</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
