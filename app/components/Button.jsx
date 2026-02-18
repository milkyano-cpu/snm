export default function Button({ icon, text }) {
    return (
        <button className="relative rounded-full bg-white py-3 text-black">
            <div className="absolute top-[50%] left-2 -translate-y-[50%] rounded-full bg-red-500">
                {icon}
                {/* <PaperclipIcon className="h-10 w-10 text-white" /> */}
            </div>
            <p className="pr-5 pl-15">{text}</p>
        </button>
    );
}
