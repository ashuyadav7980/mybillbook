import React, { useMemo, useState } from "react";
import {
    FiSearch,
    FiChevronDown,
    FiBox,
    FiLayers,
    FiEdit2,
    FiUploadCloud,
    FiDatabase,
    FiPlusSquare,
    FiExternalLink,
} from "react-icons/fi";
import "./Inventory.css";

const SAMPLE_ROWS = [
    {
        name: "APCOLITE ADVANCED SHYNE",
        code: "-",
        qty: "105 LTR",
        sell: "₹ 341.02",
        buy: "-",
    },
    { name: "Asian paint primer", code: "-", qty: "0 LTR", sell: "₹ 90", buy: "-" },
    {
        name: "Asian paint primer (wall)",
        code: "-",
        qty: "-60 PCS",
        sell: "₹ 1,770",
        buy: "-",
    },
    { name: "asian paint putti", code: "-", qty: "-120 PCS", sell: "₹ 1,024", buy: "-" },
    {
        name: "ASIAN PAINTS Ceiling+Wall+C.Room",
        code: "-",
        qty: "-",
        sell: "₹ 17",
        buy: "-",
    },
    { name: "Asian royal pink", code: "-", qty: "-3 PCS", sell: "₹ 837.8", buy: "-" },
    { name: "GRILL", code: "-", qty: "-", sell: "₹ 17", buy: "-" },
    { name: "GYPSUM FALSE CEILING", code: "-", qty: "-", sell: "₹ 150", buy: "-" },
    { name: "KAJARIA VITRONITE", code: "-", qty: "2,275 PCS", sell: "₹ 826", buy: "₹ 70" },
    { name: "kitchen base granite", code: "-", qty: "-8 PCS", sell: "₹ 5,900", buy: "-" },
];

export default function Inventory() {
    const [search, setSearch] = useState("");
    const [bulkOpen, setBulkOpen] = useState(false);
    const [reportOpen, setReportOpen] = useState(false);

    const rows = useMemo(() => {
        if (!search.trim()) return SAMPLE_ROWS;
        const q = search.toLowerCase();
        return SAMPLE_ROWS.filter((r) => r.name.toLowerCase().includes(q));
    }, [search]);

    return (
        <div className="inv-wrap">
            {/* page header */}
            <div className="inv-header">
                <h1>Items</h1>

                <div className="inv-head-actions">
                    <div className="dropdown">
                        <button
                            className="btn outline"
                            onClick={() => setReportOpen((v) => !v)}
                        >
                            <span className="ico">
                                <FiDatabase />
                            </span>
                            Reports
                            <FiChevronDown className="chev" />
                        </button>

                        {reportOpen && (
                            <div className="menu card">
                                <button className="menu-item">Rate List</button>
                                <button className="menu-item">Stock Summary</button>
                                <button className="menu-item">Low Stock Summary</button>
                                <button className="menu-item">Item Sales Summary</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* KPI cards */}
            <div className="inv-kpis">
                <div className="kpi card">
                    <div className="kpi-title">
                        <span className="dot" />
                        Stock Value
                        <FiExternalLink className="kpi-ext" />
                    </div>
                    <div className="kpi-value">₹ 1,46,335.71</div>
                </div>

                <div className="kpi card">
                    <div className="kpi-title">
                        <span className="cube" />
                        Low Stock
                    </div>
                    <div className="kpi-value">0</div>
                </div>
            </div>

            {/* toolbar */}
            <div className="inv-toolbar">
                <div className="lt">
                    <div className="input with-ico">
                        <FiSearch />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search Item"
                        />
                    </div>

                    <div className="select with-ico">
                        <span>Select Categories</span>
                        <FiChevronDown />
                    </div>

                    <button className="btn outline ghost">
                        <FiBox />
                        <span>Show Low Stock</span>
                    </button>
                </div>

                <div className="rt">
                    <div className="dropdown">
                        <button className="btn outline" onClick={() => setBulkOpen((v) => !v)}>
                            <span className="ico">
                                <FiLayers />
                            </span>
                            Bulk Actions
                            <FiChevronDown className="chev" />
                        </button>
                        {bulkOpen && <BulkMenu onClose={() => setBulkOpen(false)} />}
                    </div>

                    <button className="btn primary">Create Item</button>
                </div>
            </div>

            {/* table */}
            <div className="inv-table card">
                <div className="t-head">
                    <div className="c check">
                        <input type="checkbox" />
                    </div>
                    <div className="c name">Item Name</div>
                    <div className="c code">Item Code</div>
                    <div className="c qty">
                        Stock QTY <FiChevronDown className="th-sort" />
                    </div>
                    <div className="c sell">Selling Price</div>
                    <div className="c buy">Purchase Price</div>
                    <div className="c act"></div>
                </div>

                <div className="t-body">
                    {rows.map((r, i) => (
                        <div className="t-row" key={i}>
                            <div className="c check">
                                <input type="checkbox" />
                            </div>
                            <div className="c name">{r.name}</div>
                            <div className="c code">{r.code}</div>
                            <div className="c qty">{r.qty}</div>
                            <div className="c sell">{r.sell}</div>
                            <div className="c buy">{r.buy}</div>
                            <div className="c act">
                                <FiBox className="mini-ico" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ---------- Bulk actions dropdown ---------- */
function BulkMenu() {
    return (
        <div className="bulk-menu card">
            <div className="bulk-head">
                <div className="title">Add Items</div>
                <div className="sub">Quickly add multiple items at once</div>
            </div>

            <button className="bulk-item">
                <FiPlusSquare />
                <span>Bulk Add Items</span>
            </button>

            <button className="bulk-item">
                <FiUploadCloud />
                <span>Purchase Bill Upload</span>
            </button>

            <button className="bulk-item">
                <FiDatabase />
                <span>Product Library</span>
            </button>

            <button className="bulk-item">
                <FiLayers />
                <span>Bulk Add Items from Other Softwares</span>
            </button>

            <button className="bulk-item">
                <FiEdit2 />
                <span>Bulk Edit</span>
            </button>
        </div>
    );
}
