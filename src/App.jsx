// src/App.jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";

/* Sales pages */
import PartiesPage from "./components/Parties/PartiesPage";
import SettingsPage from "./components/Settings/SettingsPage";
import Inventory from "./components/Items/Inventory";
import Godown from "./components/Items/Godown";
import SalesInvoices from "./components/Sales/SalesInvoices";
import Quotation from "./components/Sales/Quotation";
import PaymentIn from "./components/Sales/PaymentIn";
import SalesReturn from "./components/Sales/SalesReturn";
import CreditNote from "./components/Sales/CreditNote";
import DeliveryChallan from "./components/Sales/DeliveryChallan";
import ProformaInvoice from "./components/Sales/ProformaInvoice";

/* Purchases pages */
import PurchaseInvoices from "./components/Purchases/PurchaseInvoices";
import PaymentOut from "./components/Purchases/PaymentOut";
import PurchaseReturn from "./components/Purchases/PurchaseReturn";
import DebitNote from "./components/Purchases/DebitNote";
import PurchaseOrders from "./components/Purchases/PurchaseOrders";

/* Accounting solutions */
import CashBank from "./components/CashBank/CashBank";

/* e-Invoicing */
import EInvoicing from "./components/EInvoicing/EInvoicing";

/* Automated Bills */
import AutomatedBills from "./components/AutomatedBills/AutomatedBills";

/* Parties -> Create Party */
import CreateParty from "./components/Parties/CreateParty";

/* Expenses */
import Expenses from "./components/Expenses/Expenses";

/* POS Billing */
import PosBilling from "./components/POS/PosBilling";

/* Business Tools */
import StaffAttendance from "./components/BusinessTools/StaffAttendance";
import ApplyLoan from "./components/BusinessTools/ApplyLoan";
import OnlineOrders from "./components/BusinessTools/OnlineOrders";
import SmsMarketing from "./components/BusinessTools/SmsMarketing";

/* Dashboard */
import Dashboard from "./components/Dashboard/Dashboard";

export default function App() {
  const [page, setPage] = useState("Parties");
  const [settingsTab, setSettingsTab] = useState("Account");

  // Jump to full Invoice Settings from SalesInvoices quick settings
  const goInvoiceSettings = () => {
    setSettingsTab("Invoice Settings");
    setPage("Settings");
  };

  const renderPage = () => {
    switch (page) {
      case "Settings":
        return <SettingsPage defaultTab={settingsTab} />;

      case "Dashboard":
        return <Dashboard />;

      case "Inventory":
        return <Inventory />;

      case "Godown (Warehouse)":
      case "Godown":
        return <Godown />;

      case "Sales Invoices":
        return <SalesInvoices onGoInvoiceSettings={goInvoiceSettings} />;

      case "Quotation / Estimate":
        return <Quotation />;

      case "Payment In":
        return <PaymentIn />;

      case "Sales Return":
        return <SalesReturn />;

      case "Credit Note":
        return <CreditNote />;

      case "Delivery Challan":
        return <DeliveryChallan />;

      case "Proforma Invoice":
        return <ProformaInvoice />;

      case "Purchase Invoices":
        return <PurchaseInvoices />;

      case "Payment Out":
        return <PaymentOut />;

      case "Purchase Return":
        return <PurchaseReturn />;

      case "Debit Note":
        return <DebitNote />;

      case "Purchase Orders":
        return <PurchaseOrders />;

      case "Cash & Bank":
        return <CashBank />;

      case "E-Invoicing":
        return <EInvoicing />;

      case "Automated Bills":
        return <AutomatedBills />;

      case "Create Party":
        return <CreateParty />;

      case "Expenses":
        return <Expenses />;

      case "POS Billing":
        return <PosBilling />;

      case "Staff Attendance & Payroll":
        return <StaffAttendance />;

      case "Apply For Loan":
        return <ApplyLoan />;

      case "Online Orders":
        return <OnlineOrders />;

      case "SMS Marketing":
        return <SmsMarketing />;

      case "Parties":
      default:
        return <PartiesPage />;
    }
  };

  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <Sidebar current={page} onNavigate={setPage} />
      </aside>

      <main className="app-main">
        <Topbar />
        <div className="app-content">{renderPage()}</div>
      </main>
    </div>
  );
}
