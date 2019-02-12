import * as React from "react";
import Template from "./Template";

const AccountHeader = () => {
    return(
        <div className="row no-gutters justify-content-between">
            <div className="col">
                <h4>BANK ACCOUNTS</h4>
            </div>
            <div className="col-8 row justify-content-end">
                <button
                    className="btn page-header-btn"
                    aria-label="Export Transactions"
                    title="Export Transactions"
                >
                    <i className="fa fa-clock-o" aria-hidden="true" />
                    <span className="header-btn-text">Export transactions</span>
                </button>
                <button
                    className="btn btn-primary page-header-btn"
                    aria-label="New Account"
                    title="New Account"
                >
                    <i className="fa fa-plus" aria-hidden="true" />
                    <span className="header-btn-text">New Account</span>
                </button>
            </div>
        </div>
    );
};

const Accounts = () => {
    return(
        <Template header={<AccountHeader />} />
    );
};

export default Accounts;
