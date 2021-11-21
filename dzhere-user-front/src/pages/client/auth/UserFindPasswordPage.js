import React from 'react';

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