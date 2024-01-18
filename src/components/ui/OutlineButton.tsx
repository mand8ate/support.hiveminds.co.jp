type DrawOutlineButtonProps = {
  children: React.ReactNode;
  color: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function DrawOutlineButton({
  children,
  color,
  ...rest
}: DrawOutlineButtonProps) {
  return (
    <button
      {...rest}
      className={`hover:text-${color} group relative px-4 py-2 text-lg font-medium transition-colors duration-200`}
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-primary transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-primary transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span
        className={`bg-${color} absolute bottom-0 right-0 h-[2px] w-0 transition-all delay-200 duration-100 group-hover:w-full`}
      />

      {/* LEFT */}
      <span
        className={`bg-${color} absolute bottom-0 left-0 h-0 w-[2px] transition-all delay-300 duration-100 group-hover:h-full`}
      />
    </button>
  );
}
