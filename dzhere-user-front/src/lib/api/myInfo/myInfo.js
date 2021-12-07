import client from "../client";

export const getEmail = phone => 
    client.get(`/getEmail/${phone}`);

export const updateEmail = ({phone, newEmail}) => 
    client.post(`/updateEmail/${phone}/${newEmail}`);

// 비밀번호 중복체크
export const checkPw = ({currentPassword, phone}) => {
    return client
    .post(
        '/checkPw',
        {
            u_pw: currentPassword, 
            u_phone: phone
        }
    )
    .then(function (response){
        return response.data.data;
    })
    .catch(function (error) {
        console.log(error);
    });
};

// 강의 시간
export const getClassTime = phone => {
    return client
    .get(`/getClassTime/${phone}`)
    .then(function (response){
        return response.data.data;
    })
    .catch(function (error) {
        console.log(error);
    });
};

export const updatePw = ({newPassword, phone}) => 
    client.post('/updatePw', {u_pw: newPassword, u_phone: phone});
