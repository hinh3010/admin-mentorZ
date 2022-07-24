import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

// Common Layout
import Admin from './pages/Admin';
import Adminchat from './pages/Adminchat';
import Admincustomer from './pages/Admincustomer';
import Admincustomerview from './pages/Admincustomerview';
import Adminemail from './pages/Adminemail';
import Adminorder from './pages/Adminorder';
import Adminorderview from './pages/Adminorderview';
import Adminproductadd from './pages/Adminproductadd';
import Adminproductgrid from './pages/Adminproductgrid';
import Adminproductlist from './pages/Adminproductlist';
import Adminreview from './pages/Adminreview';
import Adminvenderlist from './pages/Adminvenderlist';
import Adminvenderview from './pages/Adminvenderview';
import Forgot from './pages/Forgot';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterHocSinh from './pages/RegisterHocSinh';
import RegisterMentor from './pages/RegisterMentor';
import RegisterSinhVien from './pages/RegisterSinhVien';
import { Route, Switch } from 'react-router-dom';
import DefaultCollegeStudent from './pages/DefaultCollegeStudent';
import DefaultMentor from './pages/DefaultMentor';
import DefaultStudent from './pages/DefaultStudent';
import { checkAutoLogin } from './services/authServices/AuthServices';
import Error404 from './pages/Error404';


export default function App() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { isAuthenticated } = useSelector(state => state.authReducer);

    useEffect(() => {
        checkAutoLogin(dispatch, history);
    }, [dispatch, history]);


    if (isAuthenticated) {
        return (
            <Switch>
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/`}
                    component={() => <Redirect to='/admin' />}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/admin`}
                    component={Admin}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/admin-email`}
                    component={Adminemail}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/admin-chat`}
                    component={Adminchat}
                />

                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/admin-productlist`}
                    component={Adminproductlist}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/admin-productgrid`}
                    component={Adminproductgrid}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/admin-productadd`}
                    component={Adminproductadd}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/admin-customer`}
                    component={Admincustomer}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/admin-customerview`}
                    component={Admincustomerview}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/admin-order`}
                    component={Adminorder}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/admin-orderview`}
                    component={Adminorderview}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/admin-venderlist`}
                    component={Adminvenderlist}
                />

                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/admin-venderview`}
                    component={Adminvenderview}
                />

                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/admin-review`}
                    component={Adminreview}
                />

                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/default-pupil`}
                    component={DefaultStudent}
                />

                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/default-student`}
                    component={DefaultCollegeStudent}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/default-mentor`}
                    component={DefaultMentor}
                />

                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/errors/404`}
                    component={Error404}
                />

                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/*`}
                    component={() => <Redirect to="/errors/404" />}
                />

            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/login`}
                    component={Login}
                />

                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/register`}
                    component={Register}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/register-pupil`}
                    component={RegisterHocSinh}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/register-student`}
                    component={RegisterSinhVien}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/register-mentor`}
                    component={RegisterMentor}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/forgot`}
                    component={Forgot}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/*`}
                    component={Login}
                />

                {/* <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/*`}
                    component={() =>  <Redirect to="/login" />}
                /> */}

            </Switch>
        )
    }
}

