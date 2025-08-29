import React from "react";
import {
    FiSearch,
    FiChevronDown,
    FiEdit2,
    FiX,
} from "react-icons/fi";
import "./posBilling.css";

export default function PosBilling() {
    return (
        <div className="pos-wrap">
            {/* Top tabs / title row */}
            <div className="pos-tabs">
                <div className="pos-tab active">
                    <span>Billing Screen 1</span>
                    <span className="kbd">[CTRL+1]</span>
                </div>

                <button className="pos-link">
                    + Hold Bill &amp; Create Another <span className="kbd">[CTRL + B]</span>
                </button>

                <button className="pos-icon-btn ghost" title="Close">
                    <FiX />
                </button>
            </div>

            <div className="pos-main">
                {/* LEFT: item area */}
                <div className="pos-left">
                    <div className="pos-toolbar">
                        <button className="btn outline">
                            + New Item <span className="kbd">[CTRL + I]</span>
                        </button>
                        <button className="btn outline">Change Price <span className="kbd">[P]</span></button>
                        <button className="btn outline">Change QTY <span className="kbd">[Q]</span></button>
                        <button className="btn outline danger">Delete Item <span className="kbd">[DEL]</span></button>
                    </div>

                    {/* Search */}
                    <div className="pos-search">
                        <FiSearch className="search-ic" />
                        <input
                            type="text"
                            placeholder="Search by Item Name/Item Code or Scan Barcode"
                        />
                        <span className="kbd tail">[F1]</span>
                    </div>

                    {/* Grid header */}
                    <div className="pos-grid-header">
                        <div className="c no">NO</div>
                        <div className="c items">ITEMS</div>
                        <div className="c code">ITEM CODE</div>
                        <div className="c mrp">MRP</div>
                        <div className="c sp">SP (₹)</div>
                        <div className="c qty">QUANTITY</div>
                        <div className="c amt">AMOUNT (₹)</div>
                    </div>

                    {/* Empty state */}
                    <div className="pos-grid-empty">
                        <div className="box-icon" />
                        <div className="empty-title">
                            Add items by searching item name or item code
                        </div>
                        <div className="empty-sub">Or</div>
                        <div className="empty-desc">Simply scan barcode to add items</div>
                    </div>
                </div>

                {/* RIGHT: summary */}
                <div className="pos-right">
                    <div className="pos-right-actions">
                        <button className="btn outline">Add Discount <span className="kbd">[F2]</span></button>
                        <button className="btn outline">Add Additional Charge <span className="kbd">[F3]</span></button>
                    </div>

                    <div className="pos-card">
                        <div className="card-title">Bill details</div>
                        <div className="row">
                            <div>Sub Total</div>
                            <div className="val">₹ 0</div>
                        </div>
                        <div className="row">
                            <div>Tax</div>
                            <div className="val">₹ 0</div>
                        </div>
                        <div className="row total">
                            <div>Total Amount</div>
                            <div className="val">₹ 0</div>
                        </div>
                    </div>

                    <div className="pos-card">
                        <div className="card-title with-hint">
                            Received Amount <span className="kbd">[F4]</span>
                        </div>
                        <div className="receive-row">
                            <div className="rs">₹ 0</div>
                            <button className="method">
                               Cash <FiChevronDown />
                            </button>
                        </div>
                    </div>

                    <div className="pos-card">
                        <div className="card-title with-hint">
                            Customer Details <span className="kbd">[F5]</span>
                        </div>
                        <div className="cust-row">
                            <div className="cust-name">Cash Sale</div>
                            <button className="pos-icon-btn">
                                <FiEdit2 />
                            </button>
                        </div>
                    </div>

                    <div className="pos-footer">
                        <button className="btn ghost big">
                            Save &amp; Print <span className="kbd">[F6]</span>
                        </button>
                        <button className="btn primary big">
                            Save Bill <span className="kbd">[F7]</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
