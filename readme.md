# MC-Fune2 機械制御システム ハンズオン

## 予めやっておくこと
- [node.js](https://nodejs.jp/)のインストール
- <作成したワールドのセーブフォルダ>/serverconfig/computercraft-server.tomlの
以下の項目を変更する。

```
[http]

 [[http.rules]] 

  host="$private"

  action = "deny" **※action="allow"に変更**
```

## 変更箇所
- v1.0　最初のコミット
