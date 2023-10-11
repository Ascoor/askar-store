export default function SecondaryButton({ type = 'button', className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            type={type}
            className={
                `d-inline-flex align-items-center px-4 py-2 bg-white border border-secondary rounded font-weight-bold text-sm text-secondary text-uppercase tracking-widest shadow-sm hover:bg-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${disabled ? 'opacity-25' : ''} ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
