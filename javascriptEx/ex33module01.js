// 파일 가져오기
const counter = require('./ex34counter.js');

counter.increase();
counter.increase();
counter.increase();
counter.increase();

console.log(counter.getCount()); // 4