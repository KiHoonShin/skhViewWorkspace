// 파일 가져오기
// const counter = require('./ex34counter.js');

// import {count, increase, getCount} from './ex36counter.js';

// 전체 다 가져오기
import * as counter from './ex36counter.js';


counter.increase();
counter.increase();
counter.increase();
counter.increase();

console.log(counter.getCount()); // 4