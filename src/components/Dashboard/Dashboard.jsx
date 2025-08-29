// src/components/Dashboard/Dashboard.jsx
import React from "react";
import {
    FiChevronDown,
    FiChevronUp,
    FiArrowDownCircle,
    FiArrowUpCircle,
    FiTrendingUp,
} from "react-icons/fi";
import "./Dashboard.css";

export default function Dashboard() {
    const txns = [
        { date: "07 Jan 2022", type: "Payment In", no: "2", party: "GIRISH SHAW", amt: "₹ 1,52,149" },
        { date: "04 Nov 2021", type: "Sales Invoice", no: "166323", party: "AVISHEK MONDAL", amt: "₹ 5,95,023.22" },
        { date: "06 Jan 2022", type: "Purchase Invoice", no: "16531653", party: "BHARAT MARBLE", amt: "₹ 2,61,000" },
        { date: "21 Apr 2021", type: "Sales Invoice", no: "166321", party: "GIRISH SHAW", amt: "₹ 5,32,149" },
    ];

    return (
        <div className="db-wrap">
            {/* Banners row */}
            <div className="db-banners">
                <div className="db-banner card demo">
                    <div className="demo-left">
                        <div className="demo-title">Get a free demo from our experts</div>
                        <button className="btn primary">Book Now</button>
                    </div>
                    <div className="demo-illustration" aria-hidden />
                </div>

                <div className="db-banner card soft">
                    <div className="soft-left">
                        <div className="soft-title">
                            Easily monitor and track your inventory across various Godown and Store locations
                        </div>
                        <button className="btn ghost">Get Started</button>
                    </div>
                    <div className="soft-illustration" aria-hidden />
                </div>
            </div>

            {/* Stat tiles */}
            <div className="db-tiles">
                <div className="db-tile card collect">
                    <div className="tile-l">
                        <FiArrowDownCircle className="tile-ic" />
                        <span className="tile-title">
                            <FiChevronDown className="caret" /> To Collect
                        </span>
                    </div>
                    <div className="tile-amt">₹3,45,023.22</div>
                </div>

                <div className="db-tile card pay">
                    <div className="tile-l">
                        <FiArrowUpCircle className="tile-ic" />
                        <span className="tile-title">
                            <FiChevronUp className="caret" /> To Pay
                        </span>
                    </div>
                    <div className="tile-amt">₹1,76,000</div>
                </div>
            </div>

            {/* Main grid */}
            <div className="db-main">
                {/* Latest Transactions */}
                <div className="card db-table">
                    <div className="db-table-hd">Latest Transactions</div>
                    <div className="table">
                        <div className="tr th">
                            <div>Date</div>
                            <div>Type</div>
                            <div>Transaction No</div>
                            <div>Party Name</div>
                            <div className="right">Amount</div>
                        </div>
                        {txns.map((t, i) => (
                            <div className="tr" key={i}>
                                <div>{t.date}</div>
                                <div>{t.type}</div>
                                <div>{t.no}</div>
                                <div>{t.party}</div>
                                <div className="right">{t.amt}</div>
                            </div>
                        ))}
                    </div>
                    <div className="db-table-foot">
                        <button className="pos-link">See All Transactions</button>
                    </div>
                </div>

                {/* Right column */}
                <div className="db-right">
                    <div className="card cash-sum">
                        <div className="cash-row">
                            <div className="cash-l">
                                <FiTrendingUp className="cash-ic" />
                                <span>Total Cash + Bank Balance</span>
                            </div>
                            <div className="cash-v">₹6,97,149</div>
                        </div>
                    </div>

                    <div className="card loan-ad">
                        <div className="ad-text">
                            <div className="ad-title">
                                Get zero collateral loans upto <b>₹50 Lakh</b> with myBillBook
                            </div>
                            <button className="btn primary slim">Apply Now</button>
                        </div>
                        <div className="ad-visual" aria-hidden />
                    </div>
                </div>
            </div>

            {/* Locked chart placeholder */}
            <div className="card locked">
                <div className="lock-icon" />
                <div className="lock-text">
                    <b>Sales chart</b> will unlock after creating 5 invoices
                </div>
            </div>
        </div>
    );
}
