// const HOST = 'http://localhost:8000';
const HOST = 'https://nuridincs.site/services/php-rest-api';

export const CONSTANST = {
  routes: {
    employee: {
      list: HOST + '/api.php/getList',
      delete: HOST + '/api.php/delete/:id',
      save: HOST + '/api.php/save/save',
      detail: HOST + '/api.php/detail/:id',
      update: HOST + '/api.php/update/:data'
    },
  }
};