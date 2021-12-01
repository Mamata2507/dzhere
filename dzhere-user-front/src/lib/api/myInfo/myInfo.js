import client from "../client";

export const getEmail = phone => 
    client.get(`/api/getEmail/${phone}`);

export const updateEmail = ({phone, newEmail}) => 
    client.post(`/api/updateEmail/${phone}/${newEmail}`);

// export const checkPw = ({currentPassword, phone}) => 
//     client.post('/api/checkPw', {u_pw: currentPassword, u_phone: phone});

// 비밀번호 중복체크
export const checkPw = ({currentPassword, phone}) => {
    return client
    .post(
        '/api/checkPw',
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

export const updatePw = ({newPassword, phone}) => 
    client.post('/api/updatePw', {u_pw: newPassword, u_phone: phone});
