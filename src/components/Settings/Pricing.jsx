import React, { useState } from "react";
import { FiStar } from "react-icons/fi";

function PlanCard({
    variant, title, subtitle, price, oldPrice, billedYearly, ctaText,
    bulletsTop = [], exclusive = [], notIncluded = [],
}) {
    return (
        <div className={`plan-card card ${variant}`}>
            <div className="plan-head">
                <div className="ph-left">
                    <div className="plan-title">{title}</div>
                    <div className="plan-sub muted">{subtitle}</div>
                </div>
                {variant === "platinum" && (
                    <span className="chip-pop"><FiStar /> Most Popular</span>
                )}
            </div>

            <div className="price-row">
                <div className="price">
                    {oldPrice && <span className="old">₹{oldPrice}</span>}
                    <span className="rs">₹{price}</span>
                    <span className="per">/month</span>
                </div>
                <div className="muted small">Billed Annually ₹{billedYearly}/year</div>
            </div>

            <button className="btn block">{ctaText}</button>

            <ul className="top-bullets">
                {bulletsTop.map((t, i) => <li key={i} dangerouslySetInnerHTML={{ __html: t }} />)}
            </ul>

            {exclusive.length > 0 && (
                <div className="exclusive">
                    <div className="muted small">
                        Features Exclusive to <b>{title}</b>
                    </div>
                    <ul className="features-list">
                        {exclusive.map((t, i) => (
                            <li key={i} className="tick">{t}</li>
                        ))}
                    </ul>
                </div>
            )}

            {notIncluded.length > 0 && (
                <ul className="features-list not">
                    {notIncluded.map((t, i) => (
                        <li key={i} className="cross">{t}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function CommonFeatures() {
    const [open, setOpen] = useState(true);
    const left = [
        "Unlimited Reports",
        "Customer Relation Management (CRM)",
        "Foreign Currency",
        "Create Unlimited Invoices",
        "Manage Multiple Bank Accounts",
        "Manage Inventory easily with Stock Adjustments",
        "GSTR in JSON Format",
    ];
    const right = [
        "Remove myBillBook Branding from Invoice & Online store",
        "Use Advanced GST themes for Bills",
        "Recover Deleted Invoices",
        "Take Thermal Printouts",
        "Create Invoices by scanning barcodes",
        "Create unlimited Proforma Invoices",
        "Get priority support from our team",
        "Bulk Edit your items on myBillBook Desktop",
    ];

    return (
        <div className="panel card common-card">
            <button className={`acc-head ${open ? "open" : ""}`} onClick={() => setOpen(v => !v)}>
                Common features available for all plans
                <span className="caret" />
            </button>

            {open && (
                <div className="common-grid">
                    <ul>{left.map((t, i) => <li key={i}>{t}</li>)}</ul>
                    <ul>{right.map((t, i) => <li key={i}>{t}</li>)}</ul>
                </div>
            )}
        </div>
    );
}

export default function PricingPlans() {
    return (
        <>
            <div className="pricing-grid">
                <PlanCard
                    variant="diamond"
                    title="Diamond Plan"
                    subtitle="Essential plan for small business owners"
                    price="217"
                    billedYearly="2,599"
                    ctaText="Buy Diamond Plan"
                    bulletsTop={[
                        "Manage <b>1 Business</b>",
                        "Access for <b>1 User + 1 CA</b>",
                        "Auto sync <b>data across unlimited devices</b>",
                        "Access on <b>Android, iOS & Web</b>",
                    ]}
                    exclusive={[
                        "Custom Invoice Themes",
                        "Generate and print barcodes (A4 only)",
                        "Create your Online Store",
                        "Add your CA",
                    ]}
                    notIncluded={[
                        "Desktop App for Fast and Convenient Use",
                        "E-way Bills",
                        "Generate e-Invoices",
                        "POS Billing",
                        "Staff Attendance & Payroll",
                        "Create Unlimited Godowns",
                        "User Activity Tracker",
                        "Automated Billing",
                        "WhatsApp & SMS Marketing",
                        "Loyalty and Rewards",
                        "Bulk Download & Bulk Print Invoices",
                        "Data Export to Tally",
                    ]}
                />

                <PlanCard
                    variant="platinum"
                    title="Platinum Plan"
                    subtitle="More users, more flexibility, and a Desktop app"
                    price="250"
                    oldPrice="417"
                    billedYearly="2,999"
                    ctaText="Buy Platinum Plan"
                    bulletsTop={[
                        "Manage <b>2 Businesses</b>",
                        "Access for <b>3 Users + 1 CA</b>",
                        "Auto sync <b>data across unlimited devices</b>",
                        "Access on <b>Android, iOS, Web & Desktop</b>",
                    ]}
                    exclusive={[
                        "Desktop App for Fast and Convenient Use",
                        "Custom Invoice Themes",
                        "E-way Bills (50/year)",
                        "Staff Attendance & Payroll",
                        "Create Unlimited Godowns",
                        "Generate and print barcodes (A4 only)",
                        "Create your Online Store",
                        "WhatsApp & SMS Marketing (500 SMS/Year)",
                        "Bulk Download & Bulk Print Invoices",
                        "Add your CA",
                    ]}
                    notIncluded={[
                        "Generate e-Invoices",
                        "POS Billing",
                        "User Activity Tracker",
                        "Automated Billing",
                        "Loyalty and Rewards",
                        "Data Export to Tally",
                    ]}
                />

                <PlanCard
                    variant="enterprise"
                    title="Enterprise Plan"
                    subtitle="Fully customizable for bigger businesses"
                    price="417"
                    billedYearly="4,999"
                    ctaText="Buy Enterprise Plan"
                    bulletsTop={[
                        "Manage <b>2 Businesses (Upgrade to add more)</b>",
                        "Access for <b>3 Users (Upgrade to add more) + 1 CA</b>",
                        "Auto sync <b>data across unlimited devices</b>",
                        "Access on <b>Android, iOS, Web & Desktop</b>",
                    ]}
                    exclusive={[
                        "Desktop App for Fast and Convenient Use",
                        "Custom Invoice Themes",
                        "E-way Bills (Unlimited)",
                        "Generate e-invoices",
                        "POS Billing (Desktop App, Web app)",
                        "Staff Attendance & Payroll",
                        "Create Unlimited Godowns",
                        "Generate and print barcodes (A4 only)",
                        "Data Export to Tally (On request)",
                        "User Activity Tracker",
                        "Automated Billing",
                        "Create your Online Store",
                        "WhatsApp & SMS Marketing (1000 SMS/Year)",
                        "Loyalty and Rewards",
                        "Bulk Download & Bulk Print Invoices",
                        "Add your CA",
                    ]}
                />
            </div>

            <CommonFeatures />
        </>
    );
}
