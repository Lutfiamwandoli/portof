import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BsGithub, BsLinkedin } from "react-icons/bs";


class header extends Component {
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
            <div className='container mx-auto max-w-[1200px] px-3 relative lg:absolute left-0 right-0'>
                <div className='flex justify-between py-5 items-center'>
                    <div className='text-gradient font-secondary' 
                         data-aos="fade-right"
                         data-aos-offset="300"
                         data-aos-easing="ease-in-sine">
                        <a href="/">
                            <h1 className='text-[30px] leading-none font-bold'>LUTFI</h1>
                            <h4 className='font-normal leading-none'>AMWAN DOLI SIREGAR</h4>
                        </a>
                    </div>
                    <div className='flex items-center space-x-3'
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500">
                        <a href="https://github.com/lutfiamwandoli">
                            <BsGithub/>
                        </a>
                        <a href="https://linkedin.com/in/Lutfiamwandolisiregar">
                            <BsLinkedin/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

header.propTypes = {

};

export default header;