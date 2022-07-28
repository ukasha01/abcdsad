const { expressjwt: jwt } = require('express-jwt')

// const secret = process.env.SECRET
const isRevoked = async (req, payload, done) => {
    if (payload.isAdmin) {
        return done(null, true)
    }
    return done()
}
authjwt = jwt({
    secret: "abcd",
    algorithms: ['HS256'],
    // isRevoked: isRevoked
}).unless({
    path: [
        { url: /\/api\/v1\/get_product(.*)/, method: ['GET', 'OPTIONS'] },
        { url: /\/api\/v1\/category(.*)/, method: ['GET', 'OPTIONS'] },
        '/api/v1/add_user',
        '/api/v1/logIn_user'
    ]
})
// return (

// )

module.exports = authjwt