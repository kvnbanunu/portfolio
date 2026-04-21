import { Sfx } from "@/components/Sfx";
import { textSize } from "@/components/Styles";
import { cn } from "@/lib/utils";

export const MenuButton: React.FC<{
  selected?: boolean;
  label: string;
  onClick: () => void;
}> = ({ selected = false, label, onClick }) => {
  return (
    <Sfx click="select">
      <button
        className={cn(
          "ml-2 sm:ml-3 lg:ml-4 group cursor-pointer",
          selected ? "shadow-md/30" : "hover:shadow-md/30",
        )}
        onClick={onClick}
      >
        <div
          className={cn(
            "pb-0.5 lg:pb-1 bg-linear-to-r from-25% to-transparent",
            selected
              ? "from-gray-950"
              : "from-gray-400 group-hover:from-gray-950",
          )}
        >
          <div
            className={cn(
              "flex gap-2 justify-start items-end bg-linear-to-l to-white to-45%",
              selected
                ? "from-amber-600"
                : "from-gray-400 group-hover:from-amber-600",
            )}
          >
            <div
              className={cn(
                "rounded-full size-6 sm:size-7 lg:size-8 bg-radial from-10% via-30%",
                selected
                  ? "from-amber-100 via-amber-600 to-gray-950"
                  : "from-gray-400 group-hover:from-amber-100 via-gray-400 group-hover:via-amber-600 to-gray-400 group-hover:to-gray-950",
              )}
            >
              <div
                className={cn(
                  "size-6 sm:size-7 lg:size-8 justify-center items-center border-4 sm:border-5 lg:border-6 bg-transparent",
                  selected
                    ? "border-gray-950"
                    : "border-gray-400 group-hover:border-gray-950",
                )}
              ></div>
            </div>
            <p
              className={cn(
                "font-black self-end",
                selected
                  ? "text-gray-950 text-shadow-lg/30"
                  : "text-gray-400 group-hover:text-gray-950 group-hover:text-shadow-lg/30",
                textSize.title,
              )}
            >
              {label}
            </p>
          </div>
        </div>
      </button>
    </Sfx>
  );
};
