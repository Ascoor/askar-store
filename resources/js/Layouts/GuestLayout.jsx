import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import '../../css/Guest.css'; // <-- Import the CSS file

export default function GuestLayout({ children }) {
    return (
        <div className="container guest-container">
            <div className="row guest-row">
                <div className="guest-logo-link">
                    <Link href="/">
                        <ApplicationLogo className="guest-logo" />
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}
