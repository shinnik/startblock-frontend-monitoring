import React from 'react';
import Header from "../../components/Header/Header";
import onChangeMode from "../../store/actions/header";
import { connect } from "react-redux";

const HeaderContainer = ({ mode, setMode }) => {
    return (
        <>
            <Header mode={mode} setMode={setMode}/>
        </>
    )
};

const mapStateToProps = state => {
    return {
        mode: state.hdr.mode
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setMode: (id) => dispatch(onChangeMode(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
