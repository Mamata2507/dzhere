import React from 'react';
import RegisterForm from '../../../containers/client/auth/RegisterForm';

const UserRegisterPage = ({ navigation, route }) => {
    return (
        <RegisterForm
            navigation={navigation}
            route = {route}
        />
        // <AuthTemplate>
        //     {/* <AuthForm type="register"/> */}
           
        // </AuthTemplate>
    );
};

export default UserRegisterPage;