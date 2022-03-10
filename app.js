const express = require('express') // expressを呼び出す
const app = express() // expressを実行する
const port = 3000 // 通信宛先を区別するための仕組み
const booklog = {} // 使いまわしできるように空で定義

app.use(express.json()) // jsonを使えるように指定する

// 読書ログを記録する=/booklogにPOSTされる
app.post('/booklog', (req, res) => {
	// 保存したデータを受け取る処理
	const booklog = req.body // bodyに値をつける(req.body)
	
	// booklogのnameとtextの値がない（空）の場合
	if(!(booklog.name && booklog.text)) {
		return res.json({
			"ok": false,
			"error": "invalid parameter" // エラー内容
		})
	}

	// 成功処理
	res.json({ // resとしてjsonを返すよ
		// どんなjsonをかえすか
		"ok": true,
		"booklog": [
			booklog
		]
	})
})

// 読書ログの一覧を取得する処理の関数=/booklogにGETしたい
app.get('/booklog', (req, res) =>{
	// resとしてjsonを返すよ
	res.json({
		// どんなjsonをかえすか
		"ok": false,
		"booklog": []
	})
})

// サーバーが立ち上がっているかの確認コンソール
app.listen(port, () => {
	console.log(`App Listening at http://localhost:${port}`)
})