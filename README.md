# ZetsuuuAPI for Youtube and Twitch

This API lets you fetch your rank dynamically, typically for making **!rank** command in your Twitch/YouTube stream.

# StreamElements/NightBot Usage

1. Copy the following code and paste it in the output of whatever custom command you want to create.<br>
`$(urlfetch https://zetsuuu.vercel.app/val/rank/region/name/tag)`

2. Replace `region` with your account's region code, `name` with your Valorant username and `tag` with your hashtag.

## Valorant Region Codes

| Region Code | Corresponding Region |
| ----------- | -------------------- |
| ap          | Asia/Pacific         |
| br          | Brazil               |
| eu          | Europe               |
| kr          | Korea                |
| latam       | Latin America        |
| na          | North America        |

# Examples

Here is an example for my account. This would work for most accounts.

+ Example #1
  + Username: `ZetsuuuYT#444`
  + Account Region: `Asia/Pacific`
  + URL: `$(urlfetch https://zetsuuu.vercel.app/val/rank/ap/ZetsuuuYT/444)`

Here is an example for an account with space(s) in middle. You don't need to put space in the URL so you can ignore spaces in your name.

+ Example #2
  + Username: `SEN TenZ#0505`
  + Account Region: `North America`
  + URL: `$(urlfetch https://zetsuuu.vercel.app/val/rank/na/SENTenZ/0505)`
  