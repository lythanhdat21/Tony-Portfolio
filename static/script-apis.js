const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatLog = document.getElementById('chat-log');
const botResponse = document.getElementById('bot-response');  // Đảm bảo phần tử bot-response đã tồn tại

// Hàm xử lý câu trả lời và thêm xuống dòng khi gặp dấu ".", ":", "?"
function formatResponse(response) {
  return response
    // .replace(/\. /g, '.<br>')  // Thay ". " thành ".<br>" (dấu chấm cộng khoảng trắng)
    .replace(/\.\s(?!<br>)/g, '.')  // Thay "." bằng "." nếu chưa có <br> ở phía sau.
    .replace(/\:\s(?!<br>)/g, ':')    // Thay ":" bằng ":" nếu chưa có <br> ở phía sau.
    .replace(/\?\s(?!<br>)/g, '?');  // Thay "?" bằng "?" nếu chưa có <br> ở phía sau.
}

// Hàm gõ chữ với hiệu ứng và tự động xuống dòng khi gặp dấu chấm
function typeEffect(text, element, speed) {
  let i = 0;
  element.innerHTML = "";  // Xóa nội dung hiện tại
  element.style.display = "block";  // Đảm bảo bot-response được hiển thị

  // Hàm gọi lại để thêm một ký tự vào phần tử
  function type() {
  if (i < text.length) {
    let currentChar = text.charAt(i);
    const punctuation = ['.', '?', ':'];  // Danh sách dấu câu cần kiểm tra

    // Kiểm tra nếu ký tự là dấu chấm, dấu hỏi, dấu hai chấm cộng với khoảng trắng
    if (punctuation.includes(currentChar) && text.charAt(i + 1) === ' ') {
      element.innerHTML += currentChar;  // Thêm dấu câu vào phần tử
      i++; // Tăng chỉ số
      setTimeout(type, speed);  // Tiếp tục gõ ký tự tiếp theo
      element.innerHTML += "<br>";  // Thêm dấu xuống dòng sau dấu câu
      i++; // Tăng chỉ số để bỏ qua khoảng trắng
    } else {
      element.innerHTML += currentChar;  // Thêm ký tự vào phần tử
      i++; // Tăng chỉ số
      setTimeout(type, speed);  // Tiếp tục gõ ký tự tiếp theo
    }
  }
}
  type();  // Bắt đầu hiệu ứng gõ chữ
}

// Hàm hiển thị phản hồi từ bot với hiệu ứng gõ chữ
async function showBotResponse(data) {
  const formattedResponse = formatResponse(data);
  typeEffect(formattedResponse, botResponse, 10);  // Tốc độ gõ chữ là 10ms
}

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const userMessage = userInput.value.trim();
  if (!userMessage) return;

  try {
    const response = await fetch('/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }

    // Hiển thị câu trả lời từ bot với hiệu ứng gõ chữ
    showBotResponse(data.response);

    // Clear user input
    userInput.value = '';

  } catch (err) {
    console.error('Error:', err);
    botResponse.textContent = 'Có lỗi xảy ra, vui lòng thử lại!';
  }
});


