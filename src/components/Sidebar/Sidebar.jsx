// src/components/Sidebar/Sidebar.jsx
import React, { useEffect, useRef, useState } from "react";
import {
    FiPlus,
    FiChevronDown,
    FiSettings,
    FiPieChart,
    FiBox,
    FiFileText,
    FiUsers,
    FiShoppingCart,
    FiBarChart2,
    FiHome, // Godown icon
    // split-menu icons
    FiUserPlus,
    FiPackage,
    FiDownload,
    FiRotateCcw,
    FiCreditCard,
    FiTruck,
    FiFile,
    FiUpload,
    FiFileMinus,
    FiClipboard,
} from "react-icons/fi";
import "./Sidebar.css";

/**
 * Sidebar
 * - current: active label (string)
 * - onNavigate: (label) => void
 */
export default function Sidebar({ current = "Parties", onNavigate = () => { } }) {
    const [showMore, setShowMore] = useState(false);
    const [openSales, setOpenSales] = useState(false);
    const [openPurchases, setOpenPurchases] = useState(false);
    const [openItems, setOpenItems] = useState(false);

    // auto-open groups if a child page is active
    useEffect(() => {
        const salesPages = new Set([
            "Sales Invoices",
            "Quotation / Estimate",
            "Payment In",
            "Sales Return",
            "Credit Note",
            "Delivery Challan",
            "Proforma Invoice",
        ]);
        if (salesPages.has(current)) setOpenSales(true);

        const purchasePages = new Set([
            "Purchase Invoices",
            "Payment Out",
            "Purchase Return",
            "Debit Note",
            "Purchase Orders",
        ]);
        if (purchasePages.has(current)) setOpenPurchases(true);

        const itemsPages = new Set(["Inventory", "Godown (Warehouse)"]);
        if (itemsPages.has(current)) setOpenItems(true);
    }, [current]);

    return (
        <div className="sb-wrap">
            <div className="sb-top">
                <div className="brand">
                    <div className="avatar">ME</div>
                    <div className="b-meta">
                        <div className="b-name">MONDAL ELECTRONICS</div>
                        <div className="b-sub">6290783735</div>
                    </div>
                </div>

                <SplitCreateButton />

                <div className="plan">
                    <span className="pill">Plans and Pricing</span>
                    <span className="trial">Trial Expired</span>
                </div>
            </div>

            {/* Scrollable middle area */}
            <div className="sb-scroll">
                <div className="sb-group">
                    <div className="sb-sec">GENERAL</div>

                    <Nav
                        icon={<FiPieChart />}
                        label="Dashboard"
                        active={current === "Dashboard"}
                        onClick={() => onNavigate("Dashboard")}
                    />
                    <Nav
                        icon={<FiUsers />}
                        label="Parties"
                        active={current === "Parties"}
                        onClick={() => onNavigate("Parties")}
                    />

                    {/* ITEMS (collapsible) */}
                    <Collapsible
                        icon={<FiBox />}
                        label="Items"
                        open={openItems}
                        onToggle={() => setOpenItems((v) => !v)}
                    >
                        <SubNav
                            icon={<FiBox />}
                            label="Inventory"
                            active={current === "Inventory"}
                            onClick={() => onNavigate("Inventory")}
                        />
                        <SubNav
                            icon={<FiHome />}
                            label="Godown (Warehouse)"
                            active={current === "Godown (Warehouse)"}
                            onClick={() => onNavigate("Godown (Warehouse)")}
                        />
                    </Collapsible>

                    {/* SALES (collapsible) */}
                    <Collapsible
                        icon={<FiBarChart2 />}
                        label="Sales"
                        open={openSales}
                        onToggle={() => setOpenSales((v) => !v)}
                    >
                        <SubNav
                            label="Sales Invoices"
                            active={current === "Sales Invoices"}
                            onClick={() => onNavigate("Sales Invoices")}
                        />
                        <SubNav
                            label="Quotation / Estimate"
                            active={current === "Quotation / Estimate"}
                            onClick={() => onNavigate("Quotation / Estimate")}
                        />
                        <SubNav
                            label="Payment In"
                            active={current === "Payment In"}
                            onClick={() => onNavigate("Payment In")}
                        />
                        <SubNav
                            label="Sales Return"
                            active={current === "Sales Return"}
                            onClick={() => onNavigate("Sales Return")}
                        />
                        <SubNav
                            label="Credit Note"
                            active={current === "Credit Note"}
                            onClick={() => onNavigate("Credit Note")}
                        />
                        <SubNav
                            label="Delivery Challan"
                            active={current === "Delivery Challan"}
                            onClick={() => onNavigate("Delivery Challan")}
                        />
                        <SubNav
                            label="Proforma Invoice"
                            active={current === "Proforma Invoice"}
                            onClick={() => onNavigate("Proforma Invoice")}
                        />
                    </Collapsible>

                    {/* PURCHASES (collapsible) */}
                    <Collapsible
                        icon={<FiShoppingCart />}
                        label="Purchases"
                        open={openPurchases}
                        onToggle={() => setOpenPurchases((v) => !v)}
                    >
                        <SubNav
                            label="Purchase Invoices"
                            active={current === "Purchase Invoices"}
                            onClick={() => onNavigate("Purchase Invoices")}
                        />
                        <SubNav
                            label="Payment Out"
                            active={current === "Payment Out"}
                            onClick={() => onNavigate("Payment Out")}
                        />
                        <SubNav
                            label="Purchase Return"
                            active={current === "Purchase Return"}
                            onClick={() => onNavigate("Purchase Return")}
                        />
                        <SubNav
                            label="Debit Note"
                            active={current === "Debit Note"}
                            onClick={() => onNavigate("Debit Note")}
                        />
                        <SubNav
                            label="Purchase Orders"
                            active={current === "Purchase Orders"}
                            onClick={() => onNavigate("Purchase Orders")}
                        />
                    </Collapsible>

                    <Nav
                        icon={<FiFileText />}
                        label="Reports"
                        active={current === "Reports"}
                        onClick={() => onNavigate("Reports")}
                    />
                </div>

                {/* ---------- ACCOUNTING SOLUTIONS ---------- */}
                <div className="sb-group">
                    <div className="sb-sec">ACCOUNTING SOLUTIONS</div>

                    <Nav
                        icon={<FiCreditCard />}
                        label="Cash & Bank"
                        active={current === "Cash & Bank"}
                        onClick={() => onNavigate("Cash & Bank")}
                    />
                    <Nav
                        icon={<FiFileText />}
                        label="E-Invoicing"
                        active={current === "E-Invoicing"}
                        onClick={() => onNavigate("E-Invoicing")}
                    />

                    {/* COLLAPSED: Show trigger */}
                    {!showMore && (
                        <button
                            className="showmore"
                            onClick={() => setShowMore(true)}
                            aria-expanded={false}
                        >
                            <span>Show more options</span>
                            <FiChevronDown className="chev" />
                        </button>
                    )}

                    {/* EXPANDED: rest of the menu + rounded pill */}
                    {showMore && (
                        <>
                            <Nav
                                icon={<FiCreditCard />}
                                label="Automated Bills"
                                active={current === "Automated Bills"}
                                onClick={() => onNavigate("Automated Bills")}
                            />
                            <Nav
                                icon={<FiCreditCard />}
                                label="Expenses"
                                active={current === "Expenses"}
                                onClick={() => onNavigate("Expenses")}
                            />
                            <Nav
                                icon={<FiFileText />}
                                label="POS Billing"
                                active={current === "POS Billing"}
                                onClick={() => onNavigate("POS Billing")}
                            />

                            <div className="sb-sec">BUSINESS TOOLS</div>

                            <Nav
                                icon={<FiFileText />}
                                label="Staff Attendance & Payroll"
                                active={current === "Staff Attendance & Payroll"}
                                onClick={() => onNavigate("Staff Attendance & Payroll")}
                            />
                            <Nav
                                icon={<FiUsers />}
                                label="Manage Users"
                                active={current === "Manage Users"}
                                onClick={() => onNavigate("Manage Users")}
                            />
                            <Nav
                                icon={<FiShoppingCart />}
                                label="Online Orders"
                                active={current === "Online Orders"}
                                onClick={() => onNavigate("Online Orders")}
                            />
                            <Nav
                                icon={<FiFileText />}
                                label="SMS Marketing"
                                active={current === "SMS Marketing"}
                                onClick={() => onNavigate("SMS Marketing")}
                            />
                            <Nav
                                icon={<FiShoppingCart />}
                                label="Apply for Loan"
                                active={current === "Apply for Loan"}
                                onClick={() => onNavigate("Apply for Loan")}
                            />

                            <button
                                className="scroll-pill"
                                onClick={() => setShowMore(false)}
                                aria-expanded={true}
                            >
                                <span>Scroll for more options</span>
                                <FiChevronDown className="chev" />
                            </button>
                        </>
                    )}
                </div>
            </div>

            <div className="sb-bottom">
                <Nav
                    icon={<FiSettings />}
                    label="Settings"
                    active={current === "Settings"}
                    onClick={() => onNavigate("Settings")}
                />
                <div className="foot">
                    <span>🔒 100% Secure</span>
                    <span>ISO Certified</span>
                </div>
            </div>
        </div>
    );
}

/* ---------- Base nav button ---------- */
function Nav({ icon, label, active, onClick }) {
    return (
        <button className={`sb-nav ${active ? "active" : ""}`} onClick={onClick}>
            <span className="ico">{icon}</span>
            <span className="lbl">{label}</span>
        </button>
    );
}

/* ---------- Collapsible group ---------- */
function Collapsible({ icon, label, open, onToggle, children }) {
    return (
        <div className={`sb-collapse ${open ? "open" : ""}`}>
            <button className="sb-nav" onClick={onToggle} aria-expanded={open}>
                <span className="ico">{icon}</span>
                <span className="lbl">{label}</span>
                <FiChevronDown className={`chev ${open ? "rot" : ""}`} />
            </button>
            {open && <div className="sb-sub">{children}</div>}
        </div>
    );
}

/* ---------- Sub nav (optional icon) ---------- */
function SubNav({ label, active, onClick, icon }) {
    return (
        <button className={`sb-subnav ${active ? "active" : ""}`} onClick={onClick}>
            {icon && <span className="sb-sub-ico">{icon}</span>}
            <span>{label}</span>
        </button>
    );
}

/* ---------- Split button (scrollable + slimmer panel) ---------- */
function SplitCreateButton() {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);

    useEffect(() => {
        const onDoc = (e) => {
            if (!wrapRef.current) return;
            if (!wrapRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", onDoc);
        return () => document.removeEventListener("mousedown", onDoc);
    }, []);

    const MenuItem = ({ icon, label, onClick }) => (
        <button className="menu-item" role="menuitem" onClick={onClick}>
            <span className="mi-ico">{icon}</span>
            <span className="mi-label">{label}</span>
        </button>
    );

    const Section = ({ title }) => (
        <div className="menu-sec" role="presentation">
            <span>{title}</span>
        </div>
    );

    return (
        <div className="split-btn" ref={wrapRef}>
            <button
                className="btn ghost wide split-main"
                onClick={() => console.log("Create Sales Invoice flow")}
            >
                <FiPlus /> Create Sales Invoice
            </button>
            <button
                className={`btn ghost split-caret ${open ? "on" : ""}`}
                aria-haspopup="menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
            >
                <FiChevronDown />
            </button>

            {open && (
                <div className="menu-panel card" role="menu" aria-label="Quick create">
                    <div className="menu-scroll">
                        <Section title="GENERAL" />
                        <MenuItem icon={<FiUserPlus />} label="Create Party" />
                        <MenuItem icon={<FiPackage />} label="Create Item" />

                        <Section title="SALES TRANSACTIONS" />
                        <MenuItem icon={<FiFileText />} label="Quotation" />
                        <MenuItem icon={<FiDownload />} label="Payment In" />
                        <MenuItem icon={<FiRotateCcw />} label="Sales Return" />
                        <MenuItem icon={<FiCreditCard />} label="Credit Note" />
                        <MenuItem icon={<FiTruck />} label="Delivery Challan" />
                        <MenuItem icon={<FiFile />} label="Proforma Invoice" />

                        <Section title="PURCHASE TRANSACTIONS" />
                        <MenuItem icon={<FiShoppingCart />} label="Purchase" />
                        <MenuItem icon={<FiUpload />} label="Payment Out" />
                        <MenuItem icon={<FiRotateCcw />} label="Purchase Return" />
                        <MenuItem icon={<FiFileMinus />} label="Debit Note" />
                        <MenuItem icon={<FiClipboard />} label="Purchase Orders" />

                        {/* 2nd UI extra item */}
                        <div className="menu-divider" />
                        <MenuItem icon={<FiFileText />} label="Create Expense" />
                    </div>
                </div>
            )}
        </div>
    );
}
