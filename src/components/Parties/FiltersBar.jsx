import React, { useState } from "react";
import { FiSearch, FiChevronDown, FiPackage } from "react-icons/fi";
import "./Parties.css";

export default function FiltersBar() {
    const [q, setQ] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <div className="row" style={{ gap: 12, margin: "6px 0 12px" }}>
            <div className="search">
                <FiSearch />
                <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search parties"
                    aria-label="Search"
                />
            </div>

            <div className="dropdown">
                <button className="btn" onClick={() => setOpen(v => !v)}>
                    <FiPackage /> Select Categories <FiChevronDown />
                </button>
                {open && (
                    <div className="menu card">
                        <label><input type="checkbox" /> Customer</label>
                        <label><input type="checkbox" /> Supplier</label>
                        <label><input type="checkbox" /> Cash Sale</label>
                    </div>
                )}
            </div>

            <div className="space" />

            <button className="btn">
                Bulk Action <FiChevronDown />
            </button>
            <button className="btn primary">Create Party</button>
        </div>
    );
}
