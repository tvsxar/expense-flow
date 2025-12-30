import { useState } from "react";

function usePeriodDropdown() {
  const [selected, setSelected] = useState("Last 7 days");
  const [period, setPeriod] = useState({
    from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    to: new Date().toISOString().split("T")[0],
  });

  const selectPeriod = (option) => {
    const now = new Date();
    const daysAgo =
      option === "7d" ? 7 : option === "30d" ? 30 : option === "3m" ? 90 : 1;

    const fromDate = new Date(now);
    fromDate.setDate(now.getDate() - daysAgo);

    setPeriod({
      from: fromDate.toISOString().split("T")[0],
      to: now.toISOString().split("T")[0],
    });
  };

  const handleSelect = (value, label) => {
    setSelected(label);
    selectPeriod(value);
  };

  return { period, handleSelect, selected };
}

export default usePeriodDropdown;
