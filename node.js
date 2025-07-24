const { exec } = require('child_process');

exec('ls -la', (error, stdout, stderr) => {
  if (error) {
    console.error(`Lỗi khi thực thi lệnh: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Lỗi chuẩn: ${stderr}`);
    return;
  }
  console.log(`Kết quả:\n${stdout}`);
});
