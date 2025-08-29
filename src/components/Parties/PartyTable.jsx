import React from "react";
import { FiMoreVertical, FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import { inr } from "../../utils/money";
import "./Parties.css";

const rows = [
    { name: "Arisha", category: "-", phone: "7439480362", type: "Customer", balance: 0 },
    { name: "AVISHEK MONDAL", category: "-", phone: "9817271700", type: "Customer", balance: 345023.22, trend: "down" },
    { name: "BHARAT MARBLE", category: "-", phone: "9674392029", type: "Supplier", balance: 176000, trend: "up" },
    { name: "Cash Sale", category: "-", phone: "6290783735", type: "Customer", balance: 0 },
    { name: "GIRISH SHAW", category: "-", phone: "7439948653", type: "Customer", balance: 0 },
    { name: "Kshitz", category: "-", phone: "7439948653", type: "Customer", balance: 0 },
];

export default function PartyTable() {
    return (
        <div className="card">
            <div className="table-wrap">
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ width: 320 }}>Party Name</th>
                            <th>Category</th>
                            <th>Mobile Number</th>
                            <th>Party type</th>
                            <th>Balance</th>
                            <th style={{ width: 48 }} />
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((r, idx) => (
                            <tr key={idx}>
                                <td className="strong">{r.name}</td>
                                <td>{r.category}</td>
                                <td className="mono">{r.phone}</td>
                                <td>{r.type}</td>
                                <td>
                                    {r.balance === 0 ? (
                                        "₹ 0"
                                    ) : (
                                        <span className={`bal ${r.trend === "up" ? "up" : "down"}`}>
                                            {r.trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />} {inr(r.balance)}
                                        </span>
                                    )}
                                </td>
                                <td style={{ textAlign: "right" }}><button className="icon-ghost"><FiMoreVertical /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
