// sw.js
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated');
});

// ฟังก์ชันส่ง Notification
const sendCheckIn = (title, message) => {
    self.registration.showNotification(title, {
        body: message,
        icon: '/Users/nutkhuannaen/Desktop/Moni Day/moniday/icon.png', // เปลี่ยนเป็น path icon ของคุณ
        vibrate: [200, 100, 200],
        badge: '/Users/nutkhuannaen/Desktop/Moni Day/moniday/icon.png'
    });
};

// ตั้งเวลาเช็คทุก 1 นาที
setInterval(() => {
    const now = new Date();
    const time = now.getHours() + ":" + now.getMinutes().toString().padStart(2, '0');

    // ตั้งเวลาแจ้งเตือน (ปรับเปลี่ยนได้ตามใจชอบ)
    if (time === "09:30") sendCheckIn("สวัสดีตอนเช้าครับ! ☀️", "อย่าลืมวางแผนการใช้เงินวันนี้ด้วยนะครับ");
    if (time === "14:45") sendCheckIn("มื้อเที่ยงโอเคดีไหมครับ? 🍱", "อย่าลืมจดค่าอาหารด้วยนะครับ");
    if (time === "21:00") sendCheckIn("สรุปยอดวันนี้นิดนึงนะคร้าบ 🌙", "วันนี้ใช้ไปเท่าไหร่แล้ว? มาดูกัน!");
}, 60000);