type userReturn = {
        "id": String,
        "username": String,
        "discriminator": Number,
        "avatar": String,
        "verified": Boolean,
        "email": String,
        "flags": Number,
        "banner": String,
        "accent_color": Number,
        "premium_type": Number,
        "public_flags": Number
}

type oathReturn = {
    "access_token": String,
    "token_type": String,
    "expires_in": Number,
    "refresh_token": String,
    "scope": String
  }