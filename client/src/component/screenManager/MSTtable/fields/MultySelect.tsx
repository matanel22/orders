import { useEffect, useState } from "react";
import styled from "styled-components";
import { SelecDegine } from "../../../formIndex/fieldsTevel/SelectOpt";
import styles from "./select.module.css";
export type SelectOption = {
  label: string;
  value: string;
};

type MultyoleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  value: SelectOption | undefined;
  onChange: (value: SelectOption | undefined) => void;
};

export type SelectProps = {
  options?: SelectOption[];
} & (SingleSelectProps | MultyoleSelectProps);

export const MultySelect = ({
  onChange,
  multiple,
  value,
  options,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isIndex, setIsIndex] = useState(0);

  const clearOptions = () => {
    multiple ? onChange([]) : onChange(undefined);
  };

  const selectOption = (option: SelectOption) => {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  };

  const isOptionSelected = (option: SelectOption) => {
    return multiple ? value.includes(option) : option === value;
  };

  useEffect(() => {
    console.log(value);

    if (isOpen) setIsIndex(0);
  }, [isOpen, value]);
  return (
    <div
      tabIndex={0}
      className={styles.container}
      onBlur={() => {
        setIsOpen(false);
      }}
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
    >
      <span className={styles.value}>
        {multiple
          ? value &&
            value.map((v) => (
              <button
                key={v.value}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(v);
                }}
                className={styles["option-badge"]}
              >
                {v.label}
                <span className={styles["remove-btn"]}>&times;</span>
              </button>
            ))
          : value?.label}
      </span>
      <span className={styles.value}>{!multiple ? value?.label : ""}</span>
      <button
        className={styles["clear-btn"]}
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
      >
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options
          ? options.length > 0 &&
            options.map((option, index) => {
              return (
                <li
                  key={option.value}
                  className={`${styles.option} ${
                    isOptionSelected(option) ? styles.selected : ""
                  }${index === isIndex ? styles.highlighted : ""}`}
                  onMouseEnter={() => setIsIndex(index)}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectOption(option);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </li>
              );
            })
          : ""}
      </ul>
    </div>
  );
};

export const TableText = styled.td`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  text-align: right;
  // padding: 10px 7px;
  border-bottom: 3px solid #dadada;
`;
