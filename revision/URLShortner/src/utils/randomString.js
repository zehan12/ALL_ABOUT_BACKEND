const randomString = (length=6, chars='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ') => {
    let result = '';
    for ( let i = length; i > 0; --i ) 
        result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

module.exports = randomString;