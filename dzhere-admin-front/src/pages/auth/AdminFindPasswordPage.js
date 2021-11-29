import React from 'react';
import FindPasswordForm from '../../containers/auth/FindPasswordForm';

const AdminFindPasswordPage = ({ navigation, route }) => {
    console.log('AdminFindPasswordPage');
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

export default AdminFindPasswordPage;