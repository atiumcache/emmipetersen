export function SunLinesGraphic() {
  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-[100vw] mx-auto flex flex-col md:flex-row justify-center items-center pb-[5vh] pt-[25vh] md:pt-[15vh]">
        <img
          src="/sunlines-extend.png"
          alt=""
          className="hidden md:block w-1/3"
        />
        <img
          src="/sunlines-extend.png"
          alt=""
          className="hidden md:block w-1/3"
        />
        <img src="/sunlines.png" alt="" className="w-full md:w-1/3" />
      </div>
    </div>
  );
}
