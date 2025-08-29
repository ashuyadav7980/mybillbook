import React, { useState } from "react";
import StatCards from "../StatCards/StatCards";
import FiltersBar from "./FiltersBar";
import PartyTable from "./PartyTable";
import CreatePartyModal from "./CreatePartyModal"; // <-- add this import

import "./Parties.css";

export default function PartiesPage() {
    const [openCreate, setOpenCreate] = useState(false);

    return (
        <>
            <div className="page-head-row">
                <h1 className="page-title">Parties</h1>

                {/* Create Party button */}
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setOpenCreate(true)}
                >
                    Create Party
                </button>
            </div>

            <StatCards />
            <FiltersBar />
            <PartyTable />

            {/* Modal */}
            {openCreate && <CreatePartyModal onClose={() => setOpenCreate(false)} />}
        </>
    );
}
