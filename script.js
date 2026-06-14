// 🗓 คำนวณวันครบรอบ: 14 ธันวาคม 2025 (เดือนธันวาคมใช้เลข 11)
const startDate = new Date(2025, 11, 14, 0, 0, 0); 

function updateAnniversary() {
  const today = new Date();
  const diffTime = today - startDate; 

  let totalSeconds = Math.floor(diffTime / 1000);
  let totalMinutes = Math.floor(totalSeconds / 60);
  let totalHours = Math.floor(totalMinutes / 60);
  let diffDays = Math.floor(totalHours / 24);

  let hours = totalHours % 24;
  let minutes = totalMinutes % 60;
  let seconds = totalSeconds % 60;

  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);
  const days = (diffDays % 365) % 30;

  document.getElementById("anniversary").innerText = 
    `เราคบกันมาแล้ว ${years} ปี ${months} เดือน ${days} วัน \n ` +
    `❤️ ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที ❤️ \n` +
    `(รวมทั้งหมด ${diffDays} วันแล้วนะ)`;
}

// สั่งให้เวลาเดินทันทีและอัปเดตทุกวินาที
updateAnniversary();
setInterval(updateAnniversary, 1000);


// 🎞 สไลด์โชว์รูป
const images = document.querySelectorAll(".slideshow img");
let current = 0;

if(images.length > 0) {
  images[0].style.display = "block";
}

setInterval(() => {
  if(images.length > 0) {
    images[current].style.display = "none";
    current = (current + 1) % images.length;
    images[current].style.display = "block";
  }
}, 3000);


// 💌 ฟังก์ชันใหม่: กดส่งข้อความแล้วเด้งเข้าแอป LINE ทันที
// (วางทับตรงนี้ได้เลยครับ)
function showMessage() {
  const text = document.getElementById("loveInput").value;
  
  if (text.trim()) {
    // จัดรูปแบบข้อความให้พิมพ์เว้นบรรทัดและใส่ชื่อเราให้แฟนรู้
    const message = encodeURIComponent(`💌 ข้อความวันครบรอบส่งถึง ธนภัทร:\n"${text}"`);
    
    // คำสั่งเปิดแอป LINE ไปยังหน้าแชร์ข้อความ
    window.open(`https://line.me/R/share?text=${message}`, '_blank');
  } else {
    alert("พิมพ์ข้อความหวานๆ ก่อนน้า เค้าอยากอ่าน! 🥰");
  }
}