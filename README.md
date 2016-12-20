______________________________________________

【プロジェクト名】Todoリスト
【作成者】田岡菜
【制作日】2016/12/20
【動作環境】Google Chrome
【開発言語】Javascript,html
______________________________________________
プログラムの組み合わせ以外で追加した機能/仕様

⒈降順
▶︎最新のタスクが一番上にくる仕様
該当コード
>>html.reverse()
⒉チェックボックス
▶︎タスク終了時にチェックを入れることができるボックスが文頭に付く仕様
該当コード
>>for(var j = 0; j < html.length; j++) {
    var text = html[j];
    var checkList = `<p> <input type="checkbox" name="todo" value="${j}">` + text + '</p>';
    list.append(checkList);
⒊取り消し線
▶︎チェックボックスにチェックを入れると取り消し線が引かれる
該当コード
>>$(":checkbox").click(function() {
    if ($(this).is(":checked")) $(this).closest("p").css("text-decoration", "line-through");
    else $(this).closest("p").css("text-decoration", "none");
⒋中央揃え
該当コード
>><CENTER> </CENTER>
⒌ロゴ
