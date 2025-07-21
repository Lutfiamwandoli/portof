import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TypeAnimation } from 'react-type-animation';

class banner extends Component {
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
            <div id='home' className='section container mx-auto max-w-[1200px] px-3 items-center'>
                <div className='w-full'>
               <div className='block text-center font-secondary font-black text-[30]'> 
               Hello, I am
               <div>
               <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Front End Developer',
                        3000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Mobile Developer',
                        3000,
                        'Programmer',
                        3000,
                        'Fullstack Developer',
                        3000
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    speed={50}
                    className='ml-3 text-secondary'
                    style={{ fontSize: '2em' }}
                    />
                    </div>
                
            <div className='max-w-[750px] text-center mx-auto mt-5'>
            I'm a passionate developer who builds responsive websites and 
            mobile apps with a focus on performance, user experience, and 
            clean code. Always eager to learn and grow in the ever-evolving 
            world of technology.</div>
                </div>
            </div>
         </div>
        );
    }
}

banner.propTypes = {

};

export default banner;