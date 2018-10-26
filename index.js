var jeky = require('jeky')
var express = require('express')
var app = express()

app.use(jeky({
    layoutsFolder: __dirname + '/_layouts',
    markdownFolder: __dirname + '/_pages',
    globalData: {
        sidebar: require('fs').readFileSync(__dirname + '/_partials/sidebar.html').toString(),
        header: require('fs').readFileSync(__dirname + '/_partials/header.html').toString()
    }
}))

app.get('/', (req, res) => {
    res.renderMD('index.md', {
        layout: 'default.html'
    })
})

app.get('/projects', (req, res) => {
    res.renderMD('projects.md', {
        layout: 'default.html'
    })
})

app.listen(3030)