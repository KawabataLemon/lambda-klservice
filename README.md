# AWS Lambda上への上げ方
`npm i` 実行後、アーカイブ.zipを作成し、画面にD&D。

# envファイルはどこへ
lambdaの定数定義でprocess.env.Hogeを取り出せる。

# API Gatewayとのつなぎこみ
requestPathのクエリをAPI Gatewayで設定してあげて
`event['pathParameters']["article_type"]` でとれる

# Lambda上でテスト実行すると成功するのにAPI Gatewayでは失敗する
多分レスポンスのフォーマットが違う。API Gatewayではちゃんと
```
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
```
statusCodeを返さないと見てくれなくなってる。

# API GatewayでCORSしても使えない。
ReponseHeaderに`"Access-Control-Allow-Origin" : "*"`を入れないとあかん
