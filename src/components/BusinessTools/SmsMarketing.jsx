import React from "react";
import "./smsMarketing.css";

export default function SmsMarketing() {
    return (
        <div className="page sms-page">
            {/* Top bar: title + action */}
            <div className="sms-header">
                <h1 className="page-title">SMS Promotion</h1>
                <button className="btn primary big">Create Campaign</button>
            </div>

            {/* Hero / intro */}
            <div className="sms-hero pos-card">
                <div className="sms-hero-art" aria-hidden="true">
                    {/* simple illustrative SVG */}
                    <svg width="320" height="160" viewBox="0 0 320 160" fill="none">
                        <path d="M10 130L60 80L110 90L160 55L210 95L260 40L310 70" stroke="#9db7ff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="175" y="45" width="78" height="70" rx="8" fill="#fff" />
                        <rect x="183" y="58" width="62" height="8" rx="4" fill="#e8ecff" />
                        <rect x="183" y="74" width="62" height="8" rx="4" fill="#e8ecff" />
                        <rect x="183" y="90" width="42" height="8" rx="4" fill="#e8ecff" />
                    </svg>
                </div>

                <h2 className="sms-hero-title">
                    Grow Your Business through SMS Promotions
                </h2>
                <p className="sms-hero-sub">
                    Want to share festival sale and discount offer with your customer? Start an SMS
                    campaign today with myBillBook and make your sale a success
                </p>
            </div>

            {/* Promo rows */}
            <div className="sms-tiles">
                {/* Card 1 */}
                <div className="sms-card blue">
                    <div className="sms-card-text">
                        <h3>Share festival offer with Your customer</h3>
                        <p>
                            Increase your sale this festival season with our Festival SMS Campaign
                        </p>
                        <button className="btn ghost">Select Template</button>
                    </div>

                    <div className="sms-thumbs" aria-hidden="true">
                        <div className="sms-thumb">HNY</div>
                        <div className="sms-thumb">Diwali</div>
                        <div className="sms-thumb">Holi</div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="sms-card orange">
                    <div className="sms-card-text">
                        <h3>Share discount Your customer will love</h3>
                        <p>
                            Share discount offers with your customers and watch your business grow
                        </p>
                        <button className="btn ghost">Select Template</button>
                    </div>

                    <div className="sms-discount" aria-hidden="true">50% OFF</div>
                </div>
            </div>
        </div>
    );
}
