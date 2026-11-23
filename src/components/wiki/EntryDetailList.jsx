import { useState } from "react";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import EntryDetail from "../../components/wiki/EntryDetail";

function EntryDetailList({ details, onChange }) {
  const [listTitle, setListTitle] = useState("");
  const [listValue, setListValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedListTitle = listTitle.trim();
    if (!trimmedListTitle) return;

    const trimmedListValue = listValue.trim();
    if (!trimmedListValue) return;

    addEntryList(trimmedListTitle, trimmedListValue);
    setListTitle("");
    setListValue("");
  }

  function addEntryList(title, value) {
    onChange([
      ...details,
      {
        id: crypto.randomUUID(),
        entry_list_title: title,
        entry_list_value: value,
      },
    ]);
  }

  function remove(id) {
    onChange(details.filter((d) => d.id !== id));
  }

  return (
    <section className="flex flex-col gap-3 [&_span]:inline-block [&_span]:first-letter:uppercase [&_span]:text-xl [&_p]:underline ">
      <h2>Quick details</h2>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="py-2 grid grid-cols-2 gap-2">
          <InputField
            onChange={(e) => setListTitle(e.target.value)}
            type="List title"
            iDhtmlFor="list-title"
            inputName="list_title"
            labelText="Detail:"
            required="true"
            value={listTitle}
            color="dark"
          ></InputField>
          <InputField
            onChange={(e) => setListValue(e.target.value)}
            type="List value"
            iDhtmlFor="list-value"
            inputName="list_value"
            labelText="Value:"
            required="true"
            value={listValue}
            color="dark"
          ></InputField>
        </div>

        <Button buttonText="add detail" center={false}></Button>
      </form>
      <ul className="flex flex-col gap-4 pt-4">
        {details.map((listItem) => (
          <EntryDetail
            key={listItem.id}
            listItem={listItem}
            remove={remove}
          ></EntryDetail>
        ))}
      </ul>
    </section>
  );
}

export default EntryDetailList;
