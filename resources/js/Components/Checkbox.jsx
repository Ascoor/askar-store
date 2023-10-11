export default function Checkbox(props) {
return (
        <div className="form-check">
            <input 
                type="checkbox" 
                className="form-check-input" 
                {...props} 
            />
            {props.label && <label className="form-check-label">{props.label}</label>}
        </div>
    );
}

