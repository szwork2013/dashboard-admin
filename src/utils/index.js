/**
* @Author: eason
* @Date:   2017-03-27T11:54:38+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-03-27T12:03:43+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/
import request from './request';

Array.prototype.merge = function (object) {
  const [aLen, bLen] = [this.length, object.length];
  const len = aLen > bLen ? aLen : bLen;
  const cache = [];

  for (let i = 0; i < len; i += 1) {
    cache[i] = object[i] === undefined ? this[i] : object[i];
  }
  return cache;
};

export {
  request,
};
