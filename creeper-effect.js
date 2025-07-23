document.addEventListener("DOMContentLoaded", () => {
  // تغییر کرسر به کریپر (فرضاً قبلاً تنظیم شده)
  document.body.style.cursor = 'url("creeper-cursor.png"), auto';

  // افکت انفجار گیف روی کلیک
  document.body.addEventListener("click", (e) => {
    const explosion = document.createElement("div");
    explosion.style.position = "absolute";
    explosion.style.width = "100px";
    explosion.style.height = "100px";
    explosion.style.left = `${e.pageX - 50}px`;
    explosion.style.top = `${e.pageY - 50}px`;
    explosion.style.backgroundImage = "url('creeper-throw.gif')";
    explosion.style.backgroundSize = "contain";
    explosion.style.backgroundRepeat = "no-repeat";
    explosion.style.pointerEvents = "none";
    explosion.style.zIndex = "9999";

    // انیمیشن fadeout ساده
    explosion.style.animation = "fadeOut 1.2s forwards";

    document.body.appendChild(explosion);

    explosion.addEventListener("animationend", () => {
      explosion.remove();
    });
  });
});