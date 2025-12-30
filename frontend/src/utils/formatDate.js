export default function formatDate(dateString) {
  if (!dateString) return "";

  const timestamp = typeof dateString === "string" ? Number(dateString) : dateString;
  const date = new Date(timestamp);

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  return `${day}${getDaySuffix(day)} ${month} ${year}`;
}
