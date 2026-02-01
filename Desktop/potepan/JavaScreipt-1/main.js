//変数の宣言
let startTime;
let elapsedTime = 0;
let holdTime = 0;
let timer;

let startButton;
let stopButton;
let resetButton;
let stopwatch;

//要素の取得
window.onload = function(){
  stopwatch = document.getElementById("stopwatch");
  startButton = document.getElementById("start");
  stopButton = document.getElementById("stop");
  resetButton = document.getElementById("reset");
}

//時間を計測する関数を定義
function measure(){
  timer = setInterval(function() {
    elapsedTime = Date.now() - startTime + holdTime;
      let hours = Math.floor(elapsedTime / 1000 / 60 / 60);
      let minutes = Math.floor(elapsedTime / 1000 / 60 % 60);
      let seconds = Math.floor(elapsedTime / 1000 % 60);
      let milliseconds = Math.floor(elapsedTime / 100 % 10);
      stopwatch.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }, 100);
}

//ストップウォッチをスタート
function start(){
  startTime = Date.now();
  measure();

  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
}

//ストップウォッチをストップ
function stop(){
  clearInterval(timer);

  holdTime += Date.now() - startTime;

  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

//ストップウォッチをリセット
function reset(){
  clearInterval(timer);

  elapsedTime = 0;
  holdTime = 0;
  stopwatch.textContent = "0:0:0:0";

  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}
