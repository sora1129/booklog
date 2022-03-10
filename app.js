const express = require('express') // expressを呼び出す
const app = express() // expressを実行する
const port = 3000 // 通信宛先を区別するための仕組み

app.use(express.json()) // jsonを使えるように指定する

// 読書ログを記録する=/booklogにPOSTされる
app.post('/booklog', (req, res) => {
	res.json({
		"ok": true,
	})
})

// サーバーが立ち上がっているかの確認コンソール
app.listen(port, () => {
	console.log(`App Listening at http://localhost:${port}`)
})