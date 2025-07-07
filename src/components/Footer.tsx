type FooterProps = {
  twBackgroundClass: string;
};

export function Footer({ twBackgroundClass }: FooterProps) {
  return (
    <>
      <div
        className={`${twBackgroundClass} flex justify-between w-full px-4 md:px-16 py-4 md:py-8 text-md text-white uppercase`}
      >
        <p className="">&copy; {new Date().getFullYear()} Emmi Petersen</p>
        <p className="hidden md:block tracking-[1em]">///</p>
        <p className="hidden md:block">Strength Coach</p>
        <p className="tracking-[1em]">///</p>
        <p className="hidden md:block">San Francisco, CA</p>
        <p className="md:hidden">SF, CA</p>
      </div>
    </>
  );
}
