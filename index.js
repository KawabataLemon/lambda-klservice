
const { Qiita } = require('./apis/qiita')
const { Hatena } = require('./apis/hatena')
const { Tweet } = require('./apis/tweet')
const { Github } = require('./apis/github')

exports.handler = (event, context, callback) => {

  const asResponse = (param) => {
    return {
      "statusCode": 200,
      "body": JSON.stringify(param),
      "isBase64Encoded": false,
       headers: { 
        "Access-Control-Allow-Origin" : "*"
      },
    }
  }

  switch (event['pathParameters']["article_type"]) {

    case 'qiita':
      Qiita.getArticles(articles => {
        callback(null, asResponse({ instances: articles}))
      })
    break
    case 'tweet':
      Tweet.getArticles(articles => {
        callback(null, asResponse({ instances: articles}))
      })
      break
    case 'github':
    Github.getArticles(articles => {
        callback(null, asResponse({ instances: articles}))
    })  
    break
    case 'blog':
      Hatena.getArticles(articles => {
        callback(null, asResponse({ instances: articles}))
      })
      break

    default:
      Qiita.getArticles(articles => {
        callback(null, asResponse({ instances: articles}))
      })
    break
  }
}
