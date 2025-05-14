import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const CompleteListbox = ({
  value = "",
  onChange = () => {},
  selected = "",
  list = [{ name: "", id: 0 }],
}: {
  value: string | number;
  onChange: (e) => void;
  selected: string;
  list: { name: string; id: number }[];
}) => (
  <Listbox value={value} onChange={onChange}>
    <ListboxButton className="bg-yellow-950 flex justify-between items-center w-xs text-white p-4 rounded-xl hover:bg-slate-900">
      {selected}
      <FontAwesomeIcon icon={["fas", "chevron-down"]} />
    </ListboxButton>
    <ListboxOptions
      anchor="bottom"
      transition
      className="bg-yellow-950 w-xs text-white p-2 rounded-xl"
    >
      {list.map((listItem) => (
        <ListboxOption
          className="hover:bg-slate-900"
          key={listItem.name}
          value={listItem.id}
        >
          {listItem.name}
        </ListboxOption>
      ))}
    </ListboxOptions>
  </Listbox>
);

export default CompleteListbox;
