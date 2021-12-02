import client from "../client";

// 로그인
export const apiLogin = ({ userPhone, password }) => {
  console.log('========로그인 요청========');
  console.log('요청 입력 휴대폰 번호 :', userPhone);
  console.log('요청 입력 비밀번호', password);

  return client.post('/login', { userPhone, password })
  .then(res => {
    console.log('axios 로그인 요청 성공 정보 : \n', res.data);
    return {
      result : true,
      userInfo : res.data,
    }
  })
  .catch(e => {
    console.log('axios 로그인 요청 실패 정보 : \n', e);
    return {
      result : false,
      error : e,
    }
  })
}

// 회원가입
export const apiRegister = ({ userPhone, password, userEmail }) => {
  console.log('======= 회원가입 요청========');
  console.log('요청 입력 휴대폰 번호 :', userPhone);
  console.log('요청 입력 비밀번호', password);

  return client.post('/register', { userPhone, password, userEmail })
  .then(res => {
    console.log('axios 회원가입 요청 성공 정보 : \n', res.data);
    return {
      result : true,
      userInfo : res.data,
    }
  })
  .catch(e => {
    console.log('axios 회원가입 요청 실패 정보 : \n', e);
    return {
      result : false,
      error : e,
    }
  });
}
  
// 로그아웃
export const apiLogout = () => {
  console.log('로그아웃을 요청합니다.');
  console.log('요청 헤더 토큰 정보 : ', client.defaults.headers.common['Authorization']);
  return client.post('../../api/logout')
  .then(res => {
    console.log('axios 로그아웃 요청 성공 정보 : \n', res.data);
    return {
      result : true,
      message : res.data,
    }
  })
  .catch(e => {
    console.log('axios 로그아웃 요청 실패 정보 : \n', e);
    return {
      result : false,
      message : '로그아웃 실패',
    }
  });
}

// 비밀번호 찾기
export const findPassword = ({userEmail}) =>
  client.post('/api/admin/find-password', {userEmail, });
