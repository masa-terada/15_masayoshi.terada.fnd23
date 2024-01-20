'use strict'
// 1行目に記載している 'use strict' は削除しないでください
console.log("Presentation");
console.log("\nコンソールを表示すると答えが出ちゃう\n ");


let acutal;
let expected;
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

let array = [];	// 5つの数(問題)を格納する配列
let startTime;			// ゲーム開始時刻を格納する変数]
let missCnt = 0;


function start() {
  document.getElementsByTagName("button")[0].remove();	// スタートボタン削除
  while (array.length < 6) {
    let num = Math.floor(Math.random() * 90) + 10;
    console.log(num);
    if (array.indexOf(num) === -1) {//重複チェック
      array.push(num);
      console.log(array);

    }
  }



  //ボタンを配置
  for (let i = 0; i < 6; i++) {
    let newBtn = document.createElement("button");
    newBtn.textContent = array[i];
    newBtn.onclick = btnClick;
    // console.log(btnClick);							
    field.appendChild(newBtn);
  }
  array.sort();
  console.log(array);
  startTime = new Date();
  console.log(startTime);
}


function btnClick(event) {
  let pushNum = event.target.textContent;
  //間違えたら処理せずリターン ミスをカウント追加
  if (pushNum != array[0]) {
    missCnt += 1
    return;
  }

  //正解したら色を変えて配列から削除
  event.target.style.backgroundColor = "gray";
  array.shift();
  console.log(array);
  if (array.length == 0) {
    let now = new Date();
    let clearTime = (now - startTime) / 1000;
    window.alert("Game Over\n" + clearTime + "秒でクリア\nミスは" + missCnt + "回でした");
    location.reload();//　再読み込み
  }
}
