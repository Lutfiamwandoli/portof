import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-scroll"
import { BiHomeAlt, BiUser, BiCodeAlt } from "react-icons/bi";

class navigation extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className='fixed bottom-4 left-0 right-0 text-center z-10 lg:traslate-y-[-50%] lg:top-[50%] 
            lg:left-auto lg:right-5'>
                <div className='flex justify-between mx-auto bg-white text-secondary p-2 rounded-full
                border-secondary border-solid border-[1px] max-w-[200px] lg:flex-col items-center'>
                    
                    <Link to="home" activeClass="active"
                    className="flex w-[50px] h-[50px] justify-center cursor-pointer items-center"
                    offset={-100}
                    smooth={true}
                    spy={true}>
                    <BiHomeAlt />
                    </Link>
                    <Link to="profile" activeClass="active"
                    className="flex w-[50px] h-[50px] justify-center cursor-pointer items-center"
                    offset={-100}
                    smooth={true}
                    spy={true}>
                    <BiUser />
                    </Link>
                    <Link to="portfolio" activeClass="active"
                    className="flex w-[50px] h-[50px] justify-center cursor-pointer items-center"
                    offset={-100}
                    smooth={true}
                    spy={true}>
                    <BiCodeAlt />
                    </Link>
                </div>
            </div>
        );
    }
}

navigation.propTypes = {

};

export default navigation;