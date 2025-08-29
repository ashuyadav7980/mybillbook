import React from "react";
import { FiUsers, FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import "./StatCards.css";
import { inr } from "../../utils/money";

export default function StatCards() {
    return (
        <div className="kpi">
            <div className="card tile">
                <div className="row" style={{ justifyContent: "space-between" }}>
                    <div className="row" style={{ gap: 10 }}><FiUsers /> <b>All Parties</b></div>
                    <span className="badge">7</span>
                </div>
                <div className="num">7</div>
            </div>

            <div className="card tile">
                <div className="row" style={{ gap: 10, color: "var(--green)" }}><FiTrendingUp /> <b>To Collect</b></div>
                <div className="num">{inr(345023.22)}</div>
            </div>

            <div className="card tile">
                <div className="row" style={{ gap: 10, color: "var(--red)" }}><FiTrendingDown /> <b>To Pay</b></div>
                <div className="num">{inr(176000)}</div>
            </div>
        </div>
    )
}
