import { useState } from "react";

function usePeriodDropdown() {
  const [selected, setSelected] = useState("Last 7 days");
  const [period, setPeriod] = useState({
    from: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    to: new Date().toISOString().split("T")[0],
  });

  const selectPeriod = (option: string) => {
    const now = new Date();
    const daysAgo =
      option === "7d" ? 6 : option === "30d" ? 29 : option === "3m" ? 89 : 6;

    const fromDate = new Date(now);
    fromDate.setDate(now.getDate() - daysAgo);

    setPeriod({
      from: fromDate.toISOString().split("T")[0],
      to: now.toISOString().split("T")[0],
    });
  };

  const handleSelect = (value: string, label: string) => {
    setSelected(label);
    selectPeriod(value);
  };

  return { period, handleSelect, selected };
}

export default usePeriodDropdown;
