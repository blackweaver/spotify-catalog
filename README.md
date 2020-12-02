# Spotify APP with angular

### Headers

Content-Type: application/x-www-form-urlencoded

### Body

grant_type: client_credentials
client_id: your client ID (2abb7db76ace49e2a3b2603dd9ac7af9)
client_secret: your client secret (7a23f4f49d0148959aec0dd85072132e)

You need generate new tokens from: https://accounts.spotify.com/api/token with post.
After that, you need change token in spotify.service.ts

You also can be use a server for generate tokens every time.

