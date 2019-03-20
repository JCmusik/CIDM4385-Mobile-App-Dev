import React from 'react';

const Header = (props) => {
    const { user, logout } = props;
    return (
        <React.Fragment>
            <div className="header bg-secondary text-white text-center">
                <div className="row">
                    <div className="col">
                        <h1>PIZZA BANDIT</h1>
                    </div>
                    {(user) ? <span className="col display-small m-1">{user.email} <button onClick={logout} className="btn btn-primary">Logout</button></span> : <span></span>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;