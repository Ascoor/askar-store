import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-100 d-flex align-items-start pl-3 pr-4 py-2 border-start-4 ${
                active
                    ? 'border-primary text-primary bg-light focus:text-primary focus:bg-light focus:border-primary'
                    : 'border-0 text-secondary hover:text-dark hover:bg-light hover:border-secondary focus:text-dark focus:bg-light focus:border-secondary'
            } lead font-medium ${className}`}
        >
            {children}
        </Link>
    );
}
