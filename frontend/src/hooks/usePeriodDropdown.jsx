import { useState } from "react";

function usePeriodDropdown() {
  const [selected, setSelected] = useState("Last 24 hours");
  const [period, setPeriod] = useState({
    from: new Date(Date.now() - 24 * 60 * 60 * 1000),
    to: new Date(),
  });

  const selectPeriod = (option) => {
    const now = new Date();
    const daysAgo =
      option === "24h"
        ? 1
        : option === "7d"
        ? 7
        : option === "30d"
        ? 30
        : option === "3m"
        ? 90
        : 1;

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
