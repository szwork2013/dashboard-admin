/**
* @Author: eason
* @Date:   2016-12-15T13:49:07+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-03-27T02:40:43+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import fetch from 'dva/fetch';

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
  let res;
  try {
    res = await fetch(url, options);
  } catch (err) {
    throw new Error('Server Error');
  }

  const data = await res.json();

  if (!res.ok) {
    throw new Error(`[${data.errcode || 400}] ${data.errmsg || 'Unknow Exception'}`);
  }

  return data;
}
