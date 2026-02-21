export default function InputWrapper({ children, label }) {
    return (
        <div className="flex flex-col gap-3">
            <label htmlFor={label?.id}>{label?.text}</label>
            {children}
        </div>
    );
}
