/**
* @Author: eason
* @Date:   2017-03-27T02:33:13+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-03-27T11:07:07+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/
import moment from 'moment';
import request from '../utils/request';

export async function fetchList(url, { offset = 0, limit = 10 } = {}) {
  const res = await request(`${url}${url.indexOf('?') === -1 ? '?' : '&'}offset=${offset}&limit=${limit}`);
  const { total, data } = res;

  return {
    pagination: {
      current: Math.floor(offset, limit) + 1,
      total,
    },
    data: data.map(({ _id, createdAt, ...other }, index) => ({
      ...other,
      key: _id || other.key || other.id,
      id: index + 1,
      createdAt: moment(createdAt).format('YYYY-MM-DD HH:mm:SS'),
    })),
  };
}
