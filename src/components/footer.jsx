import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        const currentYear = new Date().getFullYear();

        return (
            <footer className="bg-gray-900 text-white py-6 mt-[200] lg:mt-[500px]">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm">
                        &copy; {currentYear} Lutfi. All rights reserved.
                    </p>
                    <div className="flex justify-center mt-4 space-x-6">
                        <a
                            href="https://github.com/lutfiamwandoli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/lutfiamwandolisiregar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://mailto=lutfiamwandolisiregar@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition"
                        >
                            Email
                        </a>
                        <a
                            href="https://wa.me/+6282288471175"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition">
                            WhatsApp
                            </a>
                    </div>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    // You can define props if needed in the future
};

export default Footer;
