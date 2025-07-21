import React, { Component } from 'react';
import PropTypes from 'prop-types';

class portfolio extends Component {
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
            <div id='portfolio' className='section'>
                <div className='container mx-auto max-w-[1200px] px-3 pt-3 pb-20 mt-[200px] lg:mt-[800px]'>
                    <div className='flex flex-col lg:align-center lg:flex-row justify-between mb-[50px]'>
                        <div className='order-2 lg:order-1 mt-5'>
                            <h4 className='text-secondary font-secondary text-[24px]'>
                                Recent Work    
                            </h4>
                            <div className='text-gradient font-primary max-w-[700px] mx-auto text-[24px]'>
                            A selection of my latest projects showcasing skills in web development, mobile apps, and full-stack solutions—built with a focus on performance, design, and clean code. 
                            </div>
                        </div>
                        <div className='order-1 lg:order-2 text-center'>
                            <h2 className='text-gradient font-primary max-w-[700px] mx-auto text-[50px]'>
                                08
                            </h2>
                            <div>Completed Projects</div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 text-center'>
                        <div className='w-full'>
                            <div className='bg-white h-full w-full justify-center items-center flex rounded-lg
                            overflow-hidden p-5 relative group'>
                                <img src="/images/tokoku.png" alt="" />
                                <div className='absolute p-5 bg-primary w-full h-full flex items-center opacity-0
                                group-hover:opacity-100 transition'>
                                    <div className='text-center w-full text-white mt-[60px] group-hover:mt-0 transition-all'>
                                        <div className='bg-white rounded-full px-5 inline-block mb-2'>
                                            <div className='text-gradient'>
                                                <a href="http://tokokuadasatu.shop">tokokuadasatu.shop</a>
                                            </div>
                                        </div>
                                        <p>Simple E-commerce, menggunakan PHP dan di deploy di amazone web server cloud, klik link diatas untuk melihat </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full w-full justify-center items-center flex rounded-lg
                            overflow-hidden p-5 relative group'>
                                <img src="/images/cutiku.png" alt="" />
                                <div className='absolute p-5 bg-primary w-full h-full flex items-center opacity-0
                                group-hover:opacity-100 transition'>
                                    <div className='text-center w-full text-white mt-[60px] group-hover:mt-0 transition-all'>
                                        <div className='bg-white rounded-full px-5 inline-block mb-2'>
                                            <div className='text-gradient'>
                                                Fullstack web 
                                            </div>
                                        </div>
                                        <p>Website manajemen cuti karyawan dibuat dengan tech stack Front end menggunakan Reactjs, Backend menggunakan Expressjs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full w-full justify-center items-center flex rounded-lg
                            overflow-hidden p-5 relative group'>
                                <img src="/images/project1.png" alt="" />
                                <div className='absolute p-5 bg-primary w-full h-full flex items-center opacity-0
                                group-hover:opacity-100 transition'>
                                    <div className='text-center w-full text-white mt-[60px] group-hover:mt-0 transition-all'>
                                        <div className='bg-white rounded-full px-5 inline-block mb-2'>
                                            <div className='text-gradient'>
                                                Admin Panel
                                            </div>
                                        </div>
                                        <p>Landing page Admin panel dari website sistem penjualan buku, menggunakan php </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full w-full justify-center items-center flex rounded-lg
                            overflow-hidden p-5 relative group'>
                                <img src="/images/project2.png" alt="" />
                                <div className='absolute p-5 bg-primary w-full h-full flex items-center opacity-0
                                group-hover:opacity-100 transition'>
                                    <div className='text-center w-full text-white mt-[60px] group-hover:mt-0 transition-all'>
                                        <div className='bg-white rounded-full px-5 inline-block mb-2'>
                                            <div className='text-gradient'>
                                                Web Blog
                                            </div>
                                        </div>
                                        <p>Web blog government menggunakan html dan css</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full w-full justify-center items-center flex rounded-lg
                            overflow-hidden p-5 relative group'>
                                <img src="/images/project3.png" alt="" />
                                <div className='absolute p-5 bg-primary w-full h-full flex items-center opacity-0
                                group-hover:opacity-100 transition'>
                                    <div className='text-center w-full text-white mt-[60px] group-hover:mt-0 transition-all'>
                                        <div className='bg-white rounded-full px-5 inline-block mb-2'>
                                            <div className='text-gradient'>
                                                Web dinamis
                                            </div>
                                        </div>
                                        <p>Website sistem informasi manajemen perpustakaan sekolah menggunakan php, html, css dan MySql</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full w-full justify-center items-center flex rounded-lg
                            overflow-hidden p-5 relative group'>
                                <img src="/images/project4.png" alt="" />
                                <div className='absolute p-5 bg-primary w-full h-full flex items-center opacity-0
                                group-hover:opacity-100 transition'>
                                    <div className='text-center w-full text-white mt-[60px] group-hover:mt-0 transition-all'>
                                        <div className='bg-white rounded-full px-5 inline-block mb-2'>
                                            <div className='text-gradient'>
                                                Web Blog
                                            </div>
                                        </div>
                                        <p>Website profil hotel menggunakan react</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full w-full justify-center items-center flex rounded-lg
                            overflow-hidden p-5 relative group'>
                                <img src="/images/project5.png" alt="" />
                                <div className='absolute p-5 bg-primary w-full h-full flex items-center opacity-0
                                group-hover:opacity-100 transition'>
                                    <div className='text-center w-full text-white mt-[60px] group-hover:mt-0 transition-all'>
                                        <div className='bg-white rounded-full px-5 inline-block mb-2'>
                                            <div className='text-gradient'>
                                                Website manajemen invoice
                                            </div>
                                        </div>
                                        <p>Website manajemen invoice menggunakan php</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full w-full justify-center items-center flex rounded-lg
                            overflow-hidden p-5 relative group'>
                                <img src="/images/project6.png" alt="" />
                                <div className='absolute p-5 bg-primary w-full h-full flex items-center opacity-0
                                group-hover:opacity-100 transition'>
                                    <div className='text-center w-full text-white mt-[60px] group-hover:mt-0 transition-all'>
                                        <div className='bg-white rounded-full px-5 inline-block mb-2'>
                                            <div className='text-gradient'>
                                                Web penjualan kopi di cafe
                                            </div>
                                        </div>
                                        <p>website menggunakan reactjs yang sudah di hosting di vps vercel menggunakan react js dan express js</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

portfolio.propTypes = {

};

export default portfolio;
