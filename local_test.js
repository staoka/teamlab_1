$(loaded);

function loaded() {
  showText();
  // ボタンをクリックしたときに実行するイベントを設定する
  $("#formButton").click(
    // コールバックとしてメソッドを引数にわたす
    function() {
      saveText();
      showText();
    });
}

// 入力された内容をローカルストレージに保存する
function saveText() {
  // 時刻をキーにして入力されたテキストを保存する
  var text = $("#formText");
  var time = new Date();
  var val = text.val();
  // 入力チェックをしてからローカルストレージに保存する
  if(checkText(val)) {
    localStorage.setItem(time, val);
    // テキストボックスを空にする
    text.val("");
  }
}
// ローカルストレージに保存した値を再描画する
function showText() {
  // すでにある要素を削除する
  var list = $("#list");
  list.children().remove();
  // ローカルストレージに保存された値すべてを要素に追加する
  var key, value, html = [];
  for(var i=0, len=localStorage.length; i<len; i++) {
    key = localStorage.key(i);
    value = localStorage.getItem(key);
    // 表示する前にエスケープ
    html.push(escapeText(value));
    //localStorage.clear();
  }
  html = html.reverse();
  for(var j = 0; j < html.length; j++) {
    var text = html[j];
    var checkList = `<p> <input type="checkbox" name="todo" value="${j}">` + text + '</p>';
    list.append(checkList);
  }
  // チェックボックスにチェックを入れると取り消し線
  $(":checkbox").click(function() {
    if ($(this).is(":checked")) $(this).closest("p").css("text-decoration", "line-through");
    else $(this).closest("p").css("text-decoration", "none");
  });
}


// 文字をエスケープする
function escapeText(text) {
  var TABLE_FOR_ESCAPE_HTML = {
    "&": "&amp;",
    "\"": "&quot;",
    "<": "&lt;",
    ">": "&gt;"
  };
  return text.replace(/[&"<>]/g, function(match) {
    return TABLE_FOR_ESCAPE_HTML[match];
  });
}

// 入力チェックを行う
function checkText(text) {


  // すでに入力された値があれば不可
  var length = localStorage.length;
  for (var i = 0; i < length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    // 内容が一致するものがあるか比較
    if (text === value) {
      alert("同じタスクは入力できません");
      return false;
    }
  }

  // すべてのチェックを通過できれば可
  return true;
}
