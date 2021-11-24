import client from "./client";

// 로그인
export const apiLogin = ({ userPhone, password }) => {
  console.log('========로그인 요청========');
  console.log('요청 입력 휴대폰 번호 :', userPhone);
  console.log('요청 입력 비밀번호', password);

  return client.post('/api/user/login', { userPhone, password })
  .then(res => {
    console.log('axios 로그인 요청 성공 정보 : ', res.data);
    return {
      result : true,
      userInfo : res.data,
    }
  })
  .catch(e => {
    console.log('axios 로그인 요청 실패 정보 : ', e);
    return {
      result : false,
      error : e,
    }
  })
}

// 회원가입
export const register = ({ userPhone, authNum, password, passwordConfirm, userEmail, isChecked1, isChecked2, isChecked3, }) =>
  client.post('/api/user/register', { userPhone, authNum, password, passwordConfirm, userEmail, isChecked1, isChecked2, isChecked3, });

// 비밀번호 찾기
export const findPassword = ({userEmail}) =>
  client.post('/api/user/find-password', {userEmail, });

// export const logout = () => {
//   if(Platform.OS == 'web')
//     localStorage.removeItem('auth')
//   if(Platform.OS == 'android')
//     asyncStorage.removeItem('auth')
// }