import axios from 'axios';
// 前台
const userRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}`,
});

export const apiUserAllProducts = () => userRequest.get('/products/all');
export const apiUserProducts = (page) => userRequest.get(`/products?page=${page}`);
export const apiUserProduct = (id) => userRequest.get(`/product/${id}`);

export const apiUserAddCart = (data) => userRequest.post('/cart', data);
export const apiUserGetCarts = () => userRequest.get('cart');
export const apiUserDelProduct = (id) => userRequest.delete(`/cart/${id}`);
export const apiUserEditCart = (id, data) => userRequest.put(`/cart/${id}`, data);
export const apiUserUseCoupon = (data) => userRequest.post('/coupon', data);

export const apiUserSubmitOrder = (data) => userRequest.post('/order', data);
export const apiUserGetOrder = (id) => userRequest.get(`/order/${id}`);
export const apiUserPayOrder = (id) => userRequest.post(`/pay/${id}`);

// 後台
const token = document.cookie.replace(
  /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
  '$1',
);
axios.defaults.headers.common.Authorization = token;

const checkoutRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}`,
});
const adminRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin`,
});

export const apiCheckStatus = () => checkoutRequest.post('api/user/check');
export const apiSignIn = (user) => checkoutRequest.post('admin/signin', user);
export const apiSignOut = () => checkoutRequest.post('logout');

export const apiUploadFile = (data) => adminRequest.post('/upload', data);

export const apiGetCoupons = (page) => adminRequest.get(`/coupons?page=${page}`);
export const apiDelCoupon = (id) => adminRequest.delete(`/coupon/${id}`);
export const apiCreateCoupon = (data) => adminRequest.post('/coupon', data);
export const apiEditCoupon = (id, data) => adminRequest.put(`/coupon/${id}`, data);

export const apiGetProducts = (page) => adminRequest.get(`/products?page=${page}`);
export const apiDelProduct = (id) => adminRequest.delete(`/product/${id}`);
export const apiCreateProduct = (data) => adminRequest.post('/product', data);
export const apiEditProduct = (id, data) => adminRequest.put(`/product/${id}`, data);

export const apiGetOrders = (page) => adminRequest.get(`/orders?page=${page}`);
export const apiDelOrder = (id) => adminRequest.delete(`/order/${id}`);
export const apiEditOrder = (id, data) => adminRequest.put(`/order/${id}`, data);
