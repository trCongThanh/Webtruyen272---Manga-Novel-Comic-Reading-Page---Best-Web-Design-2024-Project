// thanhtoan.js

// Kiểm tra nếu localStorage đã có giá trị của thanhtoan, nếu chưa thì gán mặc định là 'false'
var thanhtoan = localStorage.getItem('thanhtoan') || 'false';

function setThanhToan() {
    thanhtoan = 'true'; // Thiết lập biến thanhtoan thành 'true'
    localStorage.setItem('thanhtoan', thanhtoan); // Lưu giá trị vào localStorage
}
function setnoThanhToan() {
    thanhtoan = 'false'; // Thiết lập biến thanhtoan thành 'true'
    localStorage.setItem('thanhtoan', thanhtoan); // Lưu giá trị vào localStorage
}
