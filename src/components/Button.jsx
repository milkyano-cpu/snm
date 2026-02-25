export default function Button({ icon, text, className, href }) {
  const sharedClassName = `${className ? className : ""} group relative cursor-pointer rounded-full bg-white py-3 text-black transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] active:scale-95`;

  const content = (
    <>
      <div className="absolute top-[50%] left-1 -translate-y-[50%] rounded-full bg-red-500 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-360 md:left-2">
        {icon}
      </div>
      <p className="font-outfit pr-5 pl-15 text-base leading-normal font-medium text-black not-italic transition-transform duration-300 ease-out group-hover:translate-x-1 md:text-xl">
        {text}
      </p>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${sharedClassName} inline-block no-underline`}>
        {content}
      </a>
    );
  }

  return <button className={sharedClassName}>{content}</button>;
}
