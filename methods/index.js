var app = require('../app');

app.post('/login',(req,res) => {
	res.send('hello world')
})
app.get('/login',(req,res) => {
	res.json({
				status: '0',
				msg: '谢孟是个大帅哥',
				result: {
					count:4,
					list: [
						{a:1},
						{a:1}
					]
				}
			})
})