import * as React from "react";

export const Notifications = () => {
    return(
        <ul className="sidebar-list">
            <li>E Plurbus Unum</li>
            <li>Nunc sed malesuada</li>
            <li>Proin hendrerit</li>
        </ul>
    );
};

export const Messages = () => {
    return(
        <ul className="sidebar-list">
            <li>
                <button
                    className="message-btn btn"
                    type="button"
                    data-toggle="collapse"
                    data-target="#msg1"
                    aria-expanded="false"
                    aria-controls="msg1"
                >
                    <strong>Message from:</strong> Bob
                </button>
                <div className="collapse" id="msg1">
                    <div className="card card-body">
                        Hi, I would like to confirm our 4:00 PM meeting.
                    </div>
                </div>
            </li>
        </ul>
    );
};

export const Transactions = () => {
    return(
        <div className="row">
            <div className="col">
                <h5>Account</h5>
                <ul className="transaction-list">
                    <li>Bob's Burgers</li>
                    <li>Megacorp</li>
                    <li>Roger, Smith &amp; Brown</li>
                </ul>
            </div>
            <div className="col">
                <h5>Amount</h5>
                <ul className="transaction-list">
                    <li>$100.00</li>
                    <li>$2500.00</li>
                    <li>$325.00</li>
                </ul>
            </div>
            <div className="col">
                <h5>Time</h5>
                <ul className="transaction-list">
                    <li>{new Date(Date.now() - 7500).toLocaleTimeString()}</li>
                    <li>{new Date(Date.now() - 7200).toLocaleTimeString()}</li>
                    <li>{new Date(Date.now() - 6800).toLocaleTimeString()}</li>
                </ul>
            </div>
        </div>
    );
};
