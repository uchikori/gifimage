import "./scss/style.scss";

window.addEventListener('load', function () {
  setTimeout(function () {
    var gif = document.getElementById("gifB"); // GIFのIDを取得
    gif.style.display = "block"; // GIFを表示
    gif.src = gif.src; // GIFを再生
  }, 2200); // 1000ミリ秒（1秒）後に再生開始
});