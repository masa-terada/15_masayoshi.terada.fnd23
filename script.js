'use strict'
// 1行目に記載している 'use strict' は削除しないでください


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



// 配列にオブジェクト写真（キー:src)とコメント(キー:msg)を定義
const imgArray = [
  {
    src: "1.jpg",
    msg: "シャトルズ5年生の仲間たち"
  },
  {
    src: "2.jpg",
    msg: "Ami FW 最強のラガール"
  },
  {
    src: "3.jpg",
    msg: "KAY FW 無敵のタックラー"
  },
  {
    src: "4.jpg",
    msg: "Noah FW イギリス仕込みのパワー"
  },
  {
    src: "5.jpg",
    msg: "Masato FW WTB オーバーが得意"
  },
  {
    src: "6.jpg",
    msg: "Rinnosuke FW ラインアウトは任せろ"
  },
  {
    src: "7.jpg",
    msg: "Rei SH 素晴らしい体幹の持ち主"
  },
  {
    src: "8.jpg",
    msg: "Haru SO チームの司令塔"
  },
  {
    src: "9.jpg",
    msg: "Keisuke CTB 無敵のトライゲッター"
  },
  {
    src: "10.jpg",
    msg: "Ryo CTB センス抜群の可憐なプレイ"
  },
  {
    src: "11.jpg",
    msg: "Taisei WTB 美しいロータックル！"
  },
  {
    src: "12.jpg",
    msg: "Saku WTB 可憐なステップ裁き"
  },
  {
    src: "13.jpg",
    msg: "Sera WTB ステップ抜群ラガール"
  },
  {
    src: "14.jpg",
    msg: "Takeru WTB スピードランナー"
  },
];

// 立ち上げ時は配列０の画像を表示
// setAttribute指定された要素の属性の値を設定します。属性が既に存在する場合は値が更新され、
// そうでない場合は指定された名前と値で新しい属性が追加されます　　　　　←　MDNよりコピペ

let mainImg = document.createElement('img');//HTML　documentにimg エレメントを追加
// console.log(mainImg);
mainImg.setAttribute('src', imgArray[0].src); //srcにimgArray[0].srcを割り当てる
// console.log(mainImg.src);// ファイルパスが src プロパティに入る
mainImg.setAttribute('alt', imgArray[0].msg); //altにimgArray[0].altを割り当てる
// console.log(mainImg.alt);// msgが alt プロパティに入る


//imgのmsg表示
let mainMsg = document.createElement('p');//HTML　documentにp エレメントを追加
mainMsg.innerText = mainImg.alt;
console.log(mainMsg.innerText);  //最初に入るのはシャトルズ5年生の仲間たち

let mainFlame = document.querySelector('#gallery .main');//クラスgallery ID.mainを選択
console.log(mainFlame);//  => div.main
console.log(mainImg);//  => 写真






// insertBefore() は Node インターフェイスのメソッドで、
// 参照先ノードの前にこの親ノードの子としてノードを挿入します。
// 指定されたノードが既に文書中に存在した場合、 insertBefore() はこれを現在の位置から
// 新しい位置に移動します。（つまり、既存の親ノードから自動的に削除され、指定された新しい親に追加されます。）
// これは、 1 つのノードが文書中に同時に 2 か所に存在できないことを意味します。　　←　MDNよりコピペ

mainFlame.insertBefore(mainImg, null);// mainImgの前　nullは末尾 
mainFlame.insertBefore(mainMsg, null);




// 小さいプレビューを配置
//<div id="gallery">の中の<div class="small">をsmallFlameに代入

let smallFlame = document.querySelector('#gallery .small');
console.log(smallFlame);//  => div.small

for (let i = 0; i < imgArray.length; i++) { //配列の長さ分写真の配置を繰り返す
  let smallImg = document.createElement('img');
  console.log(smallImg);//  => 写真の属性を配列オブジェクトで取得
  

  smallImg.setAttribute('alt', imgArray[i].msg);    //追加属性 alt にimgArray[i].msg
  smallImg.setAttribute('src', imgArray[i].src);    //追加属性 src にimgArray[i].src

  smallFlame.insertBefore(smallImg, null);

}


// 写真をクリックしたら画像が置き換わる
//addEventListener　smallFlameでクリックすると関数を実行し
// mainImg.srcとmainMsg.innerText　プロパティを書きかえる
smallFlame.addEventListener('click', function (img) {

  if (img.target.src) {

    mainImg.src = img.target.src;
    mainMsg.innerText = img.target.alt;

  }
});
