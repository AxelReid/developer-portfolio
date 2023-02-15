import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import type { TagType } from "src/types/infer";

interface Props extends TagType {
  dbClickBtn: () => void;
  clickEdit: () => void;
  isEdit: boolean;
  isRm: boolean;
}

const Tag: React.FC<Props> = ({
  name,
  _count,
  isEdit,
  isRm,
  dbClickBtn,
  clickEdit,
}) => {
  return (
    <button
      onDoubleClick={dbClickBtn}
      className={`flex items-center gap-1 rounded-lg p-1 ${
        isEdit || isRm ? "!bg-black" : "bg-zinc-700"
      }
      ${isEdit ? "text-blue-500" : isRm ? "text-red-500" : "text-zinc-100"}
      `}
    >
      <p className={`pl-3`}>{name}</p>
      <span className="pr-1 text-xs">({_count.projects})</span>
      <div
        className={`border border-transparent ${
          isEdit || isRm ? "" : "btn btn-dark"
        } p-2`}
        onClick={(e) => {
          e.preventDefault();
          clickEdit();
        }}
      >
        {isRm || isEdit ? (
          <XMarkIcon
            className={`w-4 ${isRm ? "text-red-500" : "text-blue-500"}`}
          />
        ) : (
          <PencilSquareIcon className="w-4 text-blue-500" />
        )}
      </div>
    </button>
  );
};

export default Tag;
