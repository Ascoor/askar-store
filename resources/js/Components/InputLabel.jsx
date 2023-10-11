export default function InputLabel({ htmlFor, value }) {
    return (
        <label className="form-label" htmlFor={htmlFor}>
            {value}
        </label>
    );
}
