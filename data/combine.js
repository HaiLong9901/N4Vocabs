const fs = require("fs");

// Danh sách file
const files = [
  "output.json",
  // "output1.json",
  // "output2.json",
  // "output3.json",
  // "output4.json",
  // "output5.json",
  // "output6.json",
  // "output7.json",
  // "output8.json",
];

function mergeJsonFiles(outputFile = "grammar_8.json") {
  let finalData = [];

  files.forEach((file) => {
    if (!fs.existsSync(file)) {
      console.warn(`File không tồn tại: ${file}`);
      return;
    }

    try {
      const raw = fs.readFileSync(file, "utf-8");
      const data = JSON.parse(raw);

      if (Array.isArray(data)) {
        finalData = finalData.concat(data);
      } else {
        console.warn(`${file} không phải là array, bỏ qua`);
      }
    } catch (err) {
      console.error(`Lỗi khi đọc ${file}:`, err.message);
    }
  });

  fs.writeFileSync(outputFile, JSON.stringify(finalData, null, 2), "utf-8");
  console.log(`Đã gộp xong → ${outputFile}`);
}

// Gọi function
mergeJsonFiles();
