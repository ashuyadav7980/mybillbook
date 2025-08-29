import React from "react";
import { FiFileText, FiChevronDown, FiSettings, FiBell } from "react-icons/fi";
import "./Topbar.css";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="space" />
            <button className="btn small">
                <FiFileText /> Reports <FiChevronDown />
            </button>
            <button className="icon-btn" aria-label="Notifications"><FiBell /></button>
            <button className="icon-btn" aria-label="Settings"><FiSettings /></button>
        </div>
    );
}
