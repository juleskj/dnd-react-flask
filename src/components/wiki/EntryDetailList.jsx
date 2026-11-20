import { useState } from "react";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import EntryDetail from "../../components/wiki/EntryDetail";

function EntryDetailList({ entryDetailList }) {
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

  const [entryList, setEntryList] = useState([]);

  function addEntryList(listTitle, listValue) {
    const newEntryList = {
      id: crypto.randomUUID(),
      entryListTitle: listTitle,
      entryListValue: listValue,
    };
    // later save to local storage
    setEntryList((prev) => [...prev, newEntryList]);
  }

  function remove(id) {
    setEntryList((prev) => prev.filter((link) => link.id !== id));
  }
  return (
    <section className=" [&_span]:inline-block [&_span]:first-letter:uppercase [&_span]:text-xl [&_p]:underline ">
      <h2>Quick details</h2>

      <span className="py-1"></span>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-start items "
      >
        <div className="py-2 flex flex-row gap-2">
          <InputField
            onChange={(e) => setListTitle(e.target.value)}
            type="List title"
            iDhtmlFor="list-title"
            inputName="list-title"
            labelText="Detail:"
            required="true"
            value={listTitle}
            color="dark"
          ></InputField>
          <InputField
            onChange={(e) => setListValue(e.target.value)}
            type="List value"
            iDhtmlFor="list-value"
            inputName="list-value"
            labelText="Value:"
            required="true"
            value={listValue}
            color="dark"
          ></InputField>
          <span className="py-1"></span>
        </div>

        <Button buttonText="add detail"></Button>
      </form>
      <ul className="py-4">
        {entryList.map((listItem) => (
          <EntryDetail listItem={listItem} remove={remove}></EntryDetail>
        ))}
      </ul>
    </section>
  );
}

export default EntryDetailList;
