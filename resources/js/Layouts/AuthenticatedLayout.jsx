import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-vh-100 bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        <ApplicationLogo className="d-block h-9 w-auto" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item">
    <NavLink className="nav-link" href={route('brands.index')}>
        Brands
    </NavLink>
</li>

                            <li className="nav-item">
                                <NavLink className="nav-link" href="#">
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="#">
                                    Category
                                </NavLink>
                            </li>
                        </ul>

                        <div className="d-flex">
                            <Dropdown>
                                <Dropdown.Trigger className="btn btn-secondary dropdown-toggle">
                                    {user.name}
                                </Dropdown.Trigger>

                                <Dropdown.Content className="dropdown-menu">
                                    <Dropdown.Link className="dropdown-item" href={route('profile.edit')}>Profile</Dropdown.Link>
                                    <Dropdown.Link className="dropdown-item" href={route('logout')} method="post" as="button">
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow-sm">
                    <div className="container py-3">{header}</div>
                </header>
            )}

            <main className="container mt-5">
                {children}
            </main>
        </div>
    );
}
