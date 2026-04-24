/**
 * Converts an array of lead objects to a CSV string.
 */
function leadsToCSV(leads) {
  if (!leads.length) return "";

  const headers = [
    "ID", "Timestamp", "Source Page", "Lead Type", "Inquiry Type",
    "Property Title", "Locality", "City", "Budget", "Property Type",
    "Expected Price", "Timeline to Sell", "Name", "Phone", "Notes",
    "Business Name", "Requirement", "Status",
  ];

  const keys = [
    "id", "timestamp", "sourcePage", "leadType", "inquiryType",
    "propertyTitle", "locality", "city", "budget", "propertyType",
    "expectedPrice", "timelineToSell", "name", "phone", "notes",
    "businessName", "requirement", "status",
  ];

  const escapeCsvField = (value) => {
    const stringValue = String(value ?? "");
    if (stringValue.includes(",") || stringValue.includes('"') || stringValue.includes("\n")) {
      return `"${stringValue.replace(/"/g, '""')}"`;
    }
    return stringValue;
  };

  const rows = leads.map((lead) =>
    keys.map((key) => escapeCsvField(lead[key])).join(",")
  );

  return [headers.join(","), ...rows].join("\n");
}

/**
 * Triggers a CSV file download in the browser.
 */
export function exportLeadsToCSV(leads) {
  const csvContent = leadsToCSV(leads);

  if (!csvContent) {
    return;
  }

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const timestamp = new Date().toISOString().split("T")[0];

  link.setAttribute("href", url);
  link.setAttribute("download", `leads-export-${timestamp}.csv`);
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
