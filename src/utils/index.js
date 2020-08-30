module.exports = {
  timestamp() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let millis = date.getMilliseconds();

    year = year.toString().substr(2);
    month = ('00' + month).substr(-2, 2);
    day = ('00' + day).substr(-2, 2);
    minute = ('00' + minute).substr(-2, 2);
    second = ('00' + second).substr(-2, 2);

    return [year, month, day, '_', hour, minute, second, '_', millis].join('');
  },
};
