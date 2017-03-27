/**
* @Author: eason
* @Date:   2017-01-04T17:00:03+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-03-27T05:26:53+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import dva from 'dva';
import pick from 'lodash.pick';
import createLoading from 'dva-loading';
import { message } from 'antd';
import './index.css';

const data = window.localStorage.getItem('tmp-ald'); // eslint-disable-line
const initialState = data ? JSON.parse(data) : {};

// 1. Initialize
const app = dva({
  initialState,
  onStateChange() {
    window.localStorage.setItem('tmp-ald', JSON.stringify(pick(app._store.getState(), ['auth']))); // eslint-disable-line
  },
  onError(err) {
    message.error(err.toString());
    console.log(err);
  },
});

app.use(createLoading());

app.model(require('./models/user'));

app.model(require("./models/admin"));

app.model(require('./models/auth'));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
