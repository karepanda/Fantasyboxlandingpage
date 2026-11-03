function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const data = JSON.parse(e.postData.contents);
    const productType = String(data.productType || "").toLowerCase();
    const requestedSheetName = String(data.sheetName || "").trim().toLowerCase();

    let sheetName = "Boxes";
    if (requestedSheetName === "tote bags" || productType.includes("tote")) {
      sheetName = "tote bags";
    } else if (productType.includes("bookmark")) {
      sheetName = "Bookmarks";
    } else if (productType.includes("sleeve")) {
      sheetName = "Sleeves";
    }

    console.log(`Routing ${data.productType} to sheet: ${sheetName}`);

    let sheet = ss.getSheetByName(sheetName);
    if (!sheet && sheetName === "tote bags") {
      sheet = ss.insertSheet(sheetName);
      sheet.appendRow([
        "Date",
        "Full Name",
        "Email",
        "Product Type",
        "Shipping Address",
        "City",
        "ZIP",
        "Phone",
        "Design",
        "Doubts or Comments",
      ]);
    }

    if (!sheet) {
      throw new Error(`Sheet not found: ${sheetName}`);
    }

    const headers = sheet
      .getRange(1, 1, 1, sheet.getLastColumn())
      .getValues()[0];

    const newRow = headers.map((header) => {
      const h = String(header).toLowerCase().trim();
      if (h.includes("date")) return new Date();
      if (h.includes("full name") || h.includes("name")) return data.name;
      if (h.includes("email")) return data.email;
      if (h.includes("product type")) return data.productType;
      if (h.includes("shipping address") || h.includes("addres")) return data.address;
      if (h.includes("city")) return data.city;
      if (h.includes("zip")) return data.zip;
      if (h.includes("phone")) return data.phone;
      if (h.includes("reader type")) return data.readerType || "";
      if (h.includes("reader model")) return data.readerModel || "";
      if (h.includes("design") || h.includes("color")) return data.design || data.color || "";
      if (h.includes("doubts") || h.includes("comments")) return data.comments;
      if (h.includes("book") || h.includes("specifics")) return data.specifics || "";
      return "";
    });

    sheet.appendRow(newRow);

    try {
      MailApp.sendEmail({
        to: "fantasyboxspain@gmail.com",
        subject: `✨ New Order: ${data.productType} - ${data.name}`,
        body: `You just received a new request!\n\nCustomer: ${data.name}\nProduct: ${data.productType}\n\nCheck your Google Sheet for full details.`,
      });
    } catch (emailError) {
      console.log(`Email failed to send: ${emailError.toString()}`);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
