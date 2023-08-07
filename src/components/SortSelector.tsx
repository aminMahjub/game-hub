const SortSelector = ({
  onSelectedOrder,
}: {
  onSelectedOrder: (order: string) => void;
}) => {
  return (
    <select
      defaultValue={"default-value"}
      className="select select-secondary w-full max-w-xs mb-6 ml-8"
    >
      <option disabled value="default-value">
        Sort
      </option>

      {sortOrders.map((sortItem) => {
        const { value, label } = sortItem;

        return (
          <option value={label} onClick={() => onSelectedOrder(value)}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

const sortOrders = [
  {
    value: "",
    label: "Relevance",
  },
  {
    value: "-added",
    label: "Date added",
  },
  {
    value: "name",
    label: "Name",
  },
  {
    value: "-released",
    label: "Release date",
  },
  {
    value: "-metacritic",
    label: "Popularity",
  },
  {
    value: "-rating",
    label: "Average rating",
  },
];

export default SortSelector;
