import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    const baseClasses = 'nav-link p-2 transition border-bottom border-2';
    const activeClasses = 'border-primary text-dark';
    const inactiveClasses = 'border-transparent text-muted hover:text-dark hover:border-gray-300';

    return (
        <Link
            {...props}
            className={`${baseClasses} ${active ? activeClasses : inactiveClasses} ${className}`}
        >
            {children}
        </Link>
    );
}
