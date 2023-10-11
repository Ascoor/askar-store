
export default function Modal({ children, show = false, maxWidth = '2xl', closeable = true, onClose = () => {} }) {
    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    const maxWidthClass = {
        sm: 'modal-sm',
        md: '', // Default modal size
        lg: 'modal-lg',
        xl: 'modal-xl',
        '2xl': 'modal-xxl',
    }[maxWidth];

    return (
        <div className={`modal fade ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
            <div className={`modal-dialog ${maxWidthClass}`} role="document">
                <div className="modal-content">
                    {closeable && (
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={close}></button>
                    )}
                    {children}
                </div>
            </div>
            {show && <div className="modal-backdrop fade show"></div>}
        </div>
    );
}
