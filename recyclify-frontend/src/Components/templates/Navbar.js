import React from 'react';
import {useGlobalContext} from '../Services/context';
import {Link} from 'react-router-dom';
import './Components.templates.Navbar.styles.css';
import {ArrowDown} from './Icons';

function Navbar() {
	const {userObject, logOut} = useGlobalContext();

	return (
		<React.Fragment>
			<div className="blur-nav">
				{userObject ? (
					<main>
						<div className="profile-bar">
							<p>{userObject.name}</p>
							<button type="submit">
								<i className="profile-icon"></i>
							</button>
						</div>
					</main>
				) : (
					''
				)}
			</div>
			<nav id="navbar">
				<section className="nav-text">
					<Link className="link" to="/" style={{fontSize: '18px'}}>
						Homepage
					</Link>
					{userObject !== null ? (
						userObject.userType === 'user' ? (
							<>
								<Link className="link" to="/sell" style={{fontSize: '18px'}}>
									Sell
								</Link>{' '}
								<Link className="link" to="/complete-orders" style={{ fontSize: '18px' }}>
									My Orders
								</Link>
								<Link className="link" to="/" style={{fontSize: '18px'}}>
									Profile
								</Link>
								<Link
									className="link"
									to="/"
									style={{fontSize: '18px'}}
									onClick={() => {
										window.location.reload();
										logOut();
									}}
								>
									Log Out
								</Link>
							</>
						) : (
							<>
								<Link className="link" to="/buy" style={{fontSize: '18px'}}>
									Buy
								</Link>
								<Link className="link" to="/profile" style={{fontSize: '18px'}}>
									Profile
								</Link>
								<Link
									className="link"
									to="/"
									style={{fontSize: '16px'}}
									onClick={() => {
										window.location.reload();
										logOut();
									}}
								>
									Log Out
								</Link>
							</>
						)
					) : (
						<>
							<Link className="link" to="/auth" style={{fontSize: '16px'}}>
								Login
							</Link>
							<Link className="link" to="/about" style={{fontSize: '16px'}}>
								About
							</Link>
						</>
					)}
				</section>
				<section id="trapezoid">
					<ArrowDown className="show-menu" />
				</section>
			</nav>
		</React.Fragment>
	);
}

export default Navbar;
