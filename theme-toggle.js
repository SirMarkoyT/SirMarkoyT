// وقتی صفحه بارگذاری شد
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.createElement("button");
  toggle.id = "mode-toggle";
  toggle.innerText = "🌙";
  document.body.appendChild(toggle);

  // استایل دکمه با جاوااسکریپت
  const style = document.createElement("style");
  style.innerHTML = `
    #mode-toggle {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 8px 14px;
      font-size: 20px;
      background-color: #222;
      color: white;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      z-index: 9999;
      box-shadow: 0 0 10px rgba(0,0,0,0.4);
      transition: all 0.3s ease;
    }

    body.dark-mode {
      background-color: #121212 !important;
      color: #e0e0e0 !important;
      transition: all 0.4s ease;
    }

    body.dark-mode a {
      color: #90caf9 !important;
    }
  `;
  document.head.appendChild(style);

  // بررسی حالت ذخیره‌شده
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.innerText = "☀️";
  }

  // دکمه سوییچ
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    toggle.innerText = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});