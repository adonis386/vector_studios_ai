const sizes = {
  sm: { mark: "h-7 w-7", text: "text-sm" },
  md: { mark: "h-8 w-8", text: "text-base md:text-lg" },
  lg: { mark: "h-10 w-10", text: "text-lg md:text-xl" },
};

export default function BrandLogo({
  className = "",
  showWordmark = true,
  size = "md",
  wordmarkClassName = "",
  titleCase = false,
}) {
  const s = sizes[size] ?? sizes.md;
  const name = titleCase ? "Vector Studios AI" : "VECTOR STUDIOS AI";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo-mark.svg"
        alt=""
        className={`${s.mark} shrink-0`}
        width={32}
        height={32}
        decoding="async"
      />
      {showWordmark && (
        <span
          className={`font-headline-lg font-bold text-primary-deep ${s.text} ${
            titleCase ? "tracking-normal" : "tracking-wide uppercase"
          } ${wordmarkClassName}`}
        >
          {name}
        </span>
      )}
    </span>
  );
}
