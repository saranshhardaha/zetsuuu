# ZetsuuuAPI for Youtube and Twitch

This API lets you fetch your rank dynamically, typically for making **!rank** command in your Twitch/YouTube stream.

## StreamElements/NightBot Usage

1. Copy the following code and paste it in the output of whatever custom command you want to create.

`$(urlfetch https://zetsuuu.vercel.app/api/v1/valo/rank/name/tag)`

2. Replace `name` with your Valorant username and `tag` with your hashtag.

### Supported Valorant Region Codes

| Region Code | Corresponding Region |
| ----------- | -------------------- |
| ap          | Asia/Pacific         |

### Examples

Here is an example for my account. This would work for most accounts.

+ Example
  + Username: `ZetsuuuYT#444`
  + Account Region: `Asia/Pacific`
  + URL: `$(urlfetch https://zetsuuu.vercel.app/api/v1/valo/rank/ZetsuuuYT/444)`
