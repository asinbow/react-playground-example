import React, { ReactNode, FunctionComponent } from "react";
import "./styles.css";

import { replaceAt, removeAt } from "./utils";

interface EditableItemProps<T> {
  value: T;
  onChange: (value: T) => void;
  onRemove: () => void;
}

type Props<T> = Readonly<{
  value: readonly T[];
  onChange: (value: readonly T[]) => void;
  component: FunctionComponent<EditableItemProps<T>>;
  defaultItem?: (() => T) | T;
  renderAddItem?: () => ReactNode;
  addItemText?: (() => string) | string;
}>;

export default function EditableList<T>({
  value,
  onChange,
  component,
  defaultItem,
  renderAddItem,
  addItemText
}: Props<T>) {
  return (
    <>
      {value.map((item, i) =>
        React.createElement(component, {
          key: String(i),
          value: item,
          onChange: (item: T) => onChange(replaceAt(value, i, item)),
          onRemove: () => onChange(removeAt(value, i))
        })
      )}
      {defaultItem &&
        (renderAddItem ? (
          renderAddItem()
        ) : (
          <input
            type="button"
            value={
              addItemText
                ? addItemText instanceof Function
                  ? addItemText()
                  : addItemText
                : "Add item"
            }
            onClick={() =>
              onChange([
                ...value,
                defaultItem instanceof Function ? defaultItem() : defaultItem
              ])
            }
          />
        ))}
    </>
  );
}
