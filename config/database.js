if(process.env.NODE_ENV === 'production'){
module.exports = {mongoURI: 'mongodb://ron:ronguti1@ds161146.mlab.com:61146/vid-ideas'}
}else{
module.exports = {mongoURI: 'mongodb://localhost/vid-ideas' }
}