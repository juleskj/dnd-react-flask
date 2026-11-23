import AddButton from "../AddButton";
import UploadImg from "../UploadImg";

const MAX_TEXT = 10000;

function AddWikiBlock({ blocks = [], onChange, imageFiles, setImageFiles }) {
  function addBlock(type) {
    const block =
      type === "text"
        ? { id: crypto.randomUUID(), type: "text", content: "" }
        : { id: crypto.randomUUID(), type: "image", fileName: null };
    onChange([...blocks, block]);
  }

  function updateBlock(id, changes) {
    onChange(blocks.map((b) => (b.id === id ? { ...b, ...changes } : b)));
  }

  function removeBlock(id) {
    onChange(blocks.filter((b) => b.id !== id));
    setImageFiles((prev) => {
      const { [id]: _removed, ...rest } = prev;
      return rest;
    });
  }

  function setBlockImage(id, file) {
    setImageFiles((prev) => ({ ...prev, [id]: file }));
    updateBlock(id, { fileName: file?.name ?? null });
  }

  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block) => (
        <div key={block.id} className="flex flex-col ">
          {block.type === "text" ? (
            <div>
              <p className="self-end text-xs text-gray-500">
                {block.content.length} / {MAX_TEXT}
              </p>
              <textarea
                name={`entry_text_${block.id}`}
                placeholder="Write something..."
                maxlength={MAX_TEXT}
                rows={10}
                value={block.content}
                onChange={(e) =>
                  updateBlock(block.id, { content: e.target.value })
                }
                className="w-full resize-none rounded-[10px] border-2 border-teal-800 bg-gray-100 px-5 py-3 text-base text-gray-900 placeholder:text-gray-500 transition focus:outline-none focus:ring-4 focus:ring-teal-800/20"
              ></textarea>
            </div>
          ) : (
            <UploadImg
              imgId={block.id}
              imageFile={imageFiles[block.id] ?? null}
              setImageFile={(file) => setBlockImage(block.id, file)}
            ></UploadImg>
          )}

          {blocks.length > 1 && (
            <button
              type="button"
              onClick={() => removeBlock(block.id)}
              className="self-end text-sm underline"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <div className="flex gap-2">
        <AddButton
          icon="add"
          btnText="Add text"
          type="button"
          onClick={() => addBlock("text")}
        ></AddButton>
        <AddButton
          icon="add"
          btnText="Add image"
          type="button"
          onClick={() => addBlock("image")}
        ></AddButton>
      </div>
    </div>
  );
}

export default AddWikiBlock;
