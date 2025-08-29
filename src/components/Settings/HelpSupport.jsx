import React, { useState } from "react";
import {
    FiMenu,
    FiSend,
    FiSearch,
    FiArrowRight,
    FiHome,
    FiFileText,
    FiBox,
    FiUsers,
    FiDollarSign,
    FiTrendingUp,
    FiMessageSquare,
    FiExternalLink,
    FiGrid,
    FiX,
    FiChevronDown,
    FiChevronRight,
} from "react-icons/fi";

export default function HelpSupport() {
    const [drawer, setDrawer] = useState(false);
    const [openIdx, setOpenIdx] = useState(0);

    const categories = [
        {
            icon: <FiHome />,
            label: "Getting Started 🚀",
            items: [
                "Set Business Profile",
                "Add / Delete Business",
                "Add Phone Number",
                "Change Language",
            ],
        },
        {
            icon: <FiFileText />,
            label: "Billing & Invoicing 📄",
            items: [
                "Create Invoice",
                "Add Custom Fields",
                "Print / Share Bill",
                "Add Company Logo & Signature",
            ],
        },
        {
            icon: <FiBox />,
            label: "Inventory Management 📦",
            items: [
                "Create Items & Units",
                "Manage Stock & Godowns",
                "Stock Adjustments",
                "Barcodes & Printing",
            ],
        },
        {
            icon: <FiUsers />,
            label: "Party Management 👥",
            items: ["Add Customers & Suppliers", "Import Parties", "Outstanding Report"],
        },
        {
            icon: <FiDollarSign />,
            label: "Accounting 💰",
            items: ["Cash & Bank", "Expenses", "E-invoicing", "GSTR JSON"],
        },
        {
            icon: <FiTrendingUp />,
            label: "Grow your business 💸",
            items: ["Online Store", "SMS Marketing", "Loyalty & Rewards"],
        },
    ];

    return (
        <>
            {/* top inline brand + menu */}
            <div className="help-header">
                <div className="help-brand">
                    <span className="brand-ico">
                        <FiSend />
                    </span>
                    <span className="brand-text">myBillBook</span>
                </div>
                <button
                    className="help-menu"
                    onClick={() => setDrawer(true)}
                    aria-label="Open menu"
                >
                    <FiMenu />
                </button>
            </div>

            {/* hero */}
            <div className="help-hero card">
                <h1>How can we help you?</h1>
                <p className="muted">
                    Browse articles or search to find quick answers and tips for using
                    myBillBook. Call or whatsapp on <b>+91-7400417400</b> for quick help.
                </p>

                <div className="help-search">
                    <FiSearch className="s-ico" />
                    <input placeholder="Search articles" />
                    <button className="s-btn">
                        <FiArrowRight />
                    </button>
                </div>
            </div>

            {/* sample cards */}
            <div className="help-cards">
                <ArticleCard
                    icon={<FiHome />}
                    title="Getting Started 🚀"
                    desc="Know How to– Set Business Profile in MBB, Add/Delete Business, Add Phone Number, Set/Change Language, and more..!"
                    articles="6"
                />
                <ArticleCard
                    icon={<FiFileText />}
                    title="Billing & Invoicing 📄"
                    desc="Know How to – Create Invoice, Add Custom Fields, Print/Share Bill, Add Company Logo, Add Signature, Add Item Discounts, and More.."
                    articles="46"
                />
            </div>

            {/* drawer */}
            {drawer && (
                <div className="help-drawer" role="dialog" aria-modal="true">
                    <button
                        className="drawer-backdrop"
                        onClick={() => setDrawer(false)}
                        aria-label="Close"
                    />
                    <div className="drawer-shell">
                        <div className="drawer-head">
                            <div className="drawer-search">
                                <FiSearch className="s-ico" />
                                <input placeholder="Search articles" />
                                <div className="kbd">
                                    <FiGrid /> <span>⌘</span>
                                    <span>K</span>
                                </div>
                            </div>
                            <button
                                className="drawer-close"
                                onClick={() => setDrawer(false)}
                                aria-label="Close"
                            >
                                <FiX />
                            </button>
                        </div>

                        <div className="drawer-body">
                            {categories.map((c, i) => {
                                const open = openIdx === i;
                                return (
                                    <div key={i} className={`drawer-section ${open ? "open" : ""}`}>
                                        <button
                                            className="drawer-row"
                                            onClick={() => setOpenIdx(open ? -1 : i)}
                                        >
                                            <span className="ico">{c.icon}</span>
                                            <span className="lbl">{c.label}</span>
                                            <FiChevronDown className="chev" />
                                        </button>

                                        {open && (
                                            <ul className="article-list">
                                                {c.items.map((t, j) => (
                                                    <li key={j}>
                                                        <FiChevronRight className="dot" />
                                                        <span>{t}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                );
                            })}

                            <div className="drawer-foot">
                                <a className="drawer-link" href="#">
                                    <FiMessageSquare /> Feedback
                                    <FiExternalLink className="ext" />
                                </a>
                                <a className="drawer-link" href="#">
                                    <FiFileText /> Knowledgebase
                                    <FiExternalLink className="ext" />
                                </a>
                                <a className="drawer-link" href="#">
                                    <FiSend /> Product Updates
                                    <FiExternalLink className="ext" />
                                </a>
                                <a className="drawer-link" href="#">
                                    <FiSend /> myBillBook Billing Software
                                    <FiExternalLink className="ext" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

function ArticleCard({ icon, title, desc, articles }) {
    return (
        <div className="help-card card">
            <div className="hc-ico">{icon}</div>
            <div className="hc-body">
                <div className="hc-title">{title}</div>
                <div className="hc-desc">{desc}</div>
                <div className="hc-meta">
                    <div className="avatars">
                        <span className="av" />
                        <span className="av" />
                        <span className="av" />
                        <span className="av" />
                    </div>
                    <span className="muted">{articles} articles</span>
                </div>
            </div>
        </div>
    );
}
