function displaylNone(ele) {
    ele.classList.remove('d-block');
    ele.classList.add('d-none');
}


// ボタン要素を取得
const drawButton = document.getElementById('draw-omikuji');

// おみくじの結果と、対応するページのURLをまとめる
const fortunes = [
  'daikichi1.html', // 大吉ページ
  'daikichi2.html', // 大吉ページ
  'kichi1.html',    // 吉ページ
  'kichi2.html',    // 吉ページ
  'chukichi1.html', // 中吉ページ
  'chukichi2.html', // 中吉ページ
  'shokichi1.html', // 小吉ページ
  'shokichi2.html', // 小吉ページ
  'suekichi1.html', // 末吉ページ
  'suekichi2.html', // 末吉ページ
  'kyo1.html',       // 凶ページ
  'kyo2.html'       // 凶ページ
];

// ボタンがクリックされたときの処理
drawButton.addEventListener('click', () => {
  // 配列の数に応じたランダムな数値（0, 1, 2のいずれか）を生成
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  
  // ランダムに選ばれたURLを取得
  const randomPage = fortunes[randomIndex];
  
  // 選ばれたページに移動する
  window.location.href = randomPage;
});