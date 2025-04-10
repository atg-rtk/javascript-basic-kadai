// ボタンのHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
// テキストのHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// ボタンがクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    // テキストを「ボタンをクリックしました」に書き換え
    text.textContent = 'ボタンをクリックしました';
});