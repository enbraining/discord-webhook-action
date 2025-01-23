# A Discord Webhook Action

| Parameter   | Description                       | Value                           | Required |
| ----------- | --------------------------------- | ------------------------------- | -------- |
| webhook-url | Discord webhook URL               | https://disco...                | true     |
| type        | Message Type                      | "EMBED" or "CONTENT"            | true     |
| username    | Username                          | Example username                | false    |
| content     | If you selected "CONTENT" in type | Example message                 | false    |
| title       | If you selected "EMBEDS" in type  | Example title                   | false    |
| description | If you selected "EMBEDS" in type  | Example message                 | false    |
| color       | If you selected "EMBEDS" in type  | 2f45f5                          | false    |
| embed-url   | If you selected "EMBEDS" in type  | https://example.com             | false    |
| image-url   | If you selected "EMBEDS" in type  | https://example.com/example.jpg | false    |

## Send just message

```yml
uses: enbraining/discord-webhook-action@v0.0.4-alpha
with:
    webhook-url: ${{ secrets.DISCORD_WEBHOOK_URL }}
    username: "Github Action"
    type: CONTENT
    content: "Hello world
```

## Send embed message

```yml
uses: enbraining/discord-webhook-action@v0.0.4-alpha
with:
  webhook-url: ${{ secrets.DISCORD_WEBHOOK_URL }}
  username: "Github Action"
  type: EMBEDS
  title: "This is title"
  description: "This is message"
  image-url: "https://example.com/image.jpg"
```
