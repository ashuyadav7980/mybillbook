import React from "react";
import "./Settings.css";

export default function InvoiceSettings() {
    return (
        <>
            <div className="settings-header">
                <div>
                    <h1>Invoice Settings</h1>
                </div>
            </div>

            {/* Big preview stage */}
            <div className="inv-stage">
                <div className="invoice-paper">
                    {/* top ribbon */}
                    <div className="inv-ribbon">
                        <span className="inv-pill">TAX INVOICE</span>
                        <span className="inv-pill outline">ORIGINAL FOR RECIPIENT</span>
                        <span className="mbb-brand"></span>
                    </div>

                    {/* company header */}
                    <div className="inv-company">
                        <div className="logo-box">ME</div>
                        <div className="co-meta">
                            <div className="co-name">MONDAL ELECTRONICS</div>
                            <div className="co-sub">
                                Basukati Anandnagar, Bally,  Howrah, West Bengal - 711201
                            </div>
                            <div className="co-sub">Mobile: 6290783735</div>
                        </div>
                    </div>

                    {/* invoice meta */}
                    <div className="inv-meta grid-3-compact">
                        <div className="kv">
                            <div className="k">Invoice No.:</div>
                            <div className="v">AABCBCCD/202</div>
                        </div>
                        <div className="kv">
                            <div className="k">Invoice Date:</div>
                            <div className="v">17/01/2023</div>
                        </div>
                        <div className="kv">
                            <div className="k">Due Date:</div>
                            <div className="v">16/02/2023</div>
                        </div>
                    </div>

                    {/* bill to / ship to */}
                    <div className="inv-bill grid-2">
                        <div>
                            <div className="section-title">BILL TO</div>
                            <div className="party-name">Sample Party</div>
                            <div className="party-sub">
                                No F2, Outer Circle, Connaught Circus, New Delhi, DELHI, 110001
                            </div>
                            <div className="party-sub">Mobile: 7400417400</div>
                            <div className="party-sub">GSTIN: 07ABCDEH2702H4Z2</div>
                        </div>
                        <div>
                            <div className="section-title">SHIP TO</div>
                            <div className="party-sub">
                                1234123 234232234, Bengaluru,
                            </div>
                        </div>
                    </div>

                    {/* items table */}
                    <table className="inv-table">
                        <thead>
                            <tr>
                                <th className="left">ITEMS</th>
                                <th>HSN</th>
                                <th>QTY.</th>
                                <th>RATE</th>
                                <th>TAX</th>
                                <th>AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="left">
                                    <div className="tt">SAMSUNG A30</div>
                                    <div className="ts">samsung phone</div>
                                </td>
                                <td>1234</td>
                                <td>1 PCS</td>
                                <td>10,000</td>
                                <td>1,800<br /><span className="ts">(18%)</span></td>
                                <td>11,800</td>
                            </tr>
                            <tr>
                                <td className="left">
                                    <div className="tt">PARLE-G 200G</div>
                                    <div className="ts">best biscuit</div>
                                </td>
                                <td>40511209</td>
                                <td>1 BOX</td>
                                <td>342.86</td>
                                <td>17.14<br /><span className="ts">(5%)</span></td>
                                <td>360</td>
                            </tr>
                            <tr>
                                <td className="left">
                                    <div className="tt">PUMA BLUE ROUND NECK T-SHIRT</div>
                                </td>
                                <td>2032</td>
                                <td>2 PCS</td>
                                <td>900</td>
                                <td>90<br /><span className="ts">(5%)</span></td>
                                <td>1,980</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className="left" colSpan={4}>
                                    SUBTOTAL
                                </td>
                                <td className="right">–</td>
                                <td className="right">₹ 1,907.14 &nbsp;&nbsp; | &nbsp;&nbsp; ₹ 14,050</td>
                            </tr>
                        </tfoot>
                    </table>

                    {/* notes + totals */}
                    <div className="grid-2 inv-notes-totals">
                        <div className="notes">
                            <div className="section-title">NOTES</div>
                            <div className="ts">Sample Note</div>
                        </div>

                        <div className="totals">
                            <div className="row">
                                <div>Taxable Amount</div>
                                <div>₹ 12,142.86</div>
                            </div>
                            <div className="row">
                                <div>IGST @9%</div>
                                <div>₹ 1,107.14</div>
                            </div>
                            <div className="row">
                                <div>IGST @18%</div>
                                <div>₹ 1,800</div>
                            </div>
                            <hr />
                            <div className="row bold">
                                <div>Total Amount</div>
                                <div>₹ 14,050</div>
                            </div>
                            <div className="row">
                                <div>Received Amount</div>
                                <div>₹ 4,493.5</div>
                            </div>
                            <div className="row">
                                <div>Balance</div>
                                <div>₹ 9,556.5</div>
                            </div>
                            <div className="in-words">
                                Total Amount (in words) — <b>Fourteen Thousand Fifty Rupees</b>
                            </div>
                        </div>
                    </div>

                    {/* signature */}
                    <div className="inv-signature">
                        <div className="sign">Ranjan tiwari</div>
                        <div className="ts">AUTHORISED SIGNATORY FOR</div>
                        <div className="ts">SANTOSH CYCLE VAN REPARING SHOP</div>
                    </div>

                    {/* footer badges */}
                    <div className="inv-footer">
                        <span className="badge light">Invoice created using <b>myBillBook</b></span>
                        <span className="store">Download now</span>
                        <span className="store">Get on Web</span>
                    </div>
                </div>
            </div>
        </>
    );
}
