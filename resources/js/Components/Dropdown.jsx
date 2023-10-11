import { useState, createContext, useContext } from 'react';
import { Link } from '@inertiajs/react';

const DropDownContext = createContext();

const Dropdown = ({ children }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className="dropdown">{children}</div>
        </DropDownContext.Provider>
    );
};

const Trigger = ({ children }) => {
    const { toggleOpen } = useContext(DropDownContext);

    return (
        <button 
            className="btn dropdown-toggle" 
            type="button" 
            id="dropdownMenuButton" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
            onClick={toggleOpen}
        >
            {children}
        </button>
    );
};

const Content = ({ align = 'right', width = '48', contentClasses = 'py-1 bg-white', children }) => {
    let alignmentClasses = '';

    if (align === 'left') {
        alignmentClasses = 'dropdown-menu-start';
    } else if (align === 'right') {
        alignmentClasses = 'dropdown-menu-end';
    }

    return (
        <div 
            className={`dropdown-menu ${alignmentClasses} ${contentClasses}`}
            aria-labelledby="dropdownMenuButton"
        >
            {children}
        </div>
    );
};

const DropdownLink = ({ className = '', children, ...props }) => {
    return (
        <Link
            {...props}
            className={`dropdown-item ${className}`}
        >
            {children}
        </Link>
    );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;

export default Dropdown;
