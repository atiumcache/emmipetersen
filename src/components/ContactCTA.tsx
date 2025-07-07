import { Button } from "./ui/button";
import { getHexFromColorName } from "../utils/colorMap";

interface ContactCTAProps {
  lightColor: string; // background color
  darkColor: string; // border color
}

export function ContactCTA({ lightColor, darkColor }: ContactCTAProps) {
  const resolvedDarkColor = getHexFromColorName(darkColor);
  const resolvedLightColor = getHexFromColorName(lightColor);
  return (
    <>
      <div
        className={`w-full flex flex-col justify-center items-center`}
        style={
          {
            "--darkColor": resolvedDarkColor,
            "--lightColor": resolvedLightColor,
            backgroundColor: "var(--lightColor)",
          } as React.CSSProperties
        }
      >
        <div className="m-4 md:m-16 border-2 w-[calc(100vw-32px)] md:w-[calc(100vw-128px)] rounded-lg">
          <div
            className={`flex flex-col justify-center py-28 w-full min-h-[20vh] md:min-h-[70vh]`}
          >
            <div>
              <h3 className="text-white text-6xl pb-8 font-bold text-center w-full">
                <span className="inline-block font-bold px-4 py-4">
                  Let's chat!
                </span>
              </h3>
            </div>
            <div className="flex justify-center">
              <Button
                variant="default"
                className={`mx-auto py-8 bg-[var(--lightColor)] text-white hover:!border-[var(--darkColor)] hover:text-[var(--darkColor)] hover:bg-white/80 uppercase text-2xl`}
                style={
                  {
                    borderColor: "white",
                  } as React.CSSProperties
                }
                size="lg"
              >
                Contact Emmi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
