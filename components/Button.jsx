export default function Button({ icon, text, className }) {
    return (
        <button
            className={`${className ? className : ""} group relative cursor-pointer rounded-full bg-white py-3 text-black transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] active:scale-95`}
        >
            <div className="absolute top-[50%] left-2 -translate-y-[50%] rounded-full bg-red-500 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-360">
                {icon}
            </div>
            <p className="pr-5 pl-15 mx-5 font-outfit font-medium leading-normal not-italic text-xl text-black transition-transform duration-300 ease-out group-hover:translate-x-1">
                {text}
            </p>
        </button>
    );
}
