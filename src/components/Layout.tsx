import React, {Dispatch, useEffect, useState} from "react";
import Nav from "./Nav";
import Header from "./Header";
import {Redirect} from "react-router-dom";
import axios from "axios";
import {User} from "../models/user";
import {setUser} from "../redux/actions/setUserAction";
import {connect} from "react-redux";

const Layout = (props: any) => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        (
            async () => {
                try {
                    const {data} = await axios.get('user');

                    props.setUser(data);
                } catch (e) {
                    console.log(1111, e);
                    setRedirect(true);
                }
            }
        )();
    }, []);

    if (redirect) {
        return <Redirect to={'/login'} />
    }

    return (
        <div>
            <Nav/>

            <main>

                <Header/>

                <div className="album py-5 bg-light">
                    <div className="container">

                        {props.children}

                    </div>
                </div>

            </main>
        </div>
    );
};

const mapStateToProps = (state: { user: User }) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    setUser: (user: User) => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout);