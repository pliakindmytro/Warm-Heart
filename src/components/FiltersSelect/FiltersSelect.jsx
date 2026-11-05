import styles from "./FiltersSelect.module.css";

export default function FiltersSelect({ options = [], onChange }) {
  return (
    <select
      className={styles.select}
      defaultValue={options[0]}
      onChange={(e) => onChange(options[0].toLowerCase(), e.target.value)}
    >
      {options.map((option, i) => (
        <option value={option} key={option} disabled={i === 0}>
          {option}
        </option>
      ))}
    </select>
  );
}
