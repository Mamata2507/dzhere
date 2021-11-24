import client from './client';

// 로그인
export const login = ({ userPhone, password }) =>
  client.post('/api/user/login', { userPhone, password });

// 회원가입
export const register = ({ userPhone, authNum, password, passwordConfirm, userEmail, isChecked1, isChecked2, isChecked3, }) =>
  client.post('/api/user/register', { userPhone, authNum, password, passwordConfirm, userEmail, isChecked1, isChecked2, isChecked3, });

// 로그인 상태 확인
export const check = () => client.get('/api/user/check');

export const logout = () => client.post('/api/user/logout');