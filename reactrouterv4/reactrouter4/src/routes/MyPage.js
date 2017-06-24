
import React from 'react';
import { Redirect } from 'react-router-dom';

const logged = false;

const MyPage = () => {
    let alertFunc = () => {
        alert("로그인 해주세요")
        return true
    }

    return (
        <div>
            {
                !logged && alertFunc() && <Redirect to="/login" />
            }
            마이페이지
        </div>
    );
};

export default MyPage;