import React from 'react';
import LoginForm from '../../containers/auth/LoginForm';

const UserLoginPage = ({ navigation, route }) => {
    console.log("UserLoginPage");
    return (
      <LoginForm navigation={navigation} route={route} />
    );
};

export default UserLoginPage;