import React from 'react';
import LoginForm from '../../../containers/client/auth/LoginForm';

const UserLoginPage = ({ navigation, route }) => {
    console.log('UserLoginPage');
    return (
        <LoginForm
            navigation={navigation}
            route = {route}
        />
        // <AuthTemplate>
        //     {/* <AuthForm type="login"/> */}
        //     <LoginForm
        //         navigation={navigation}
        //         route = {route}
        //     />
        // </AuthTemplate>
    );
};

export default UserLoginPage;