function displaylNone(ele) {
    ele.classList.remove('d-block');
    ele.classList.add('d-none');
}


// ボタン要素を取得
const drawButton = document.getElementById('draw-omikuji');

// おみくじの結果と、対応するページのURLをまとめる
const fortunes = [
  'daikichi.html', // 大吉ページ
  'chukichi.html', // 中吉ページ
  'shokichi.html'  // 小吉ページ
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