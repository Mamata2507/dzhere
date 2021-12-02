import React from 'react';
import FindPasswordForm from '../../containers/auth/FindPasswordForm';

const UserFindPasswordPage = ({ navigation, route }) => {
    console.log('UserFindPasswordPage');
    return (
        <FindPasswordForm
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

export default UserFindPasswordPage;