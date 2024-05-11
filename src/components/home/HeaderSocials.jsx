import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaDev, FaMedium, FaCloud } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/gyanavardhana' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/gyanavardhan-mamidisetti-194b6a242/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://medium.com/@gyanavardhanmamidisetti' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaMedium />
            </a>

            <a href='https://dev.to/gyanavardhana' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev />
            </a>

            <a href='https://twitter.com/gyanavardhan' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>

            <a href='https://www.cloudskillsboost.google/public_profiles/52e74ff6-3232-47f0-849e-f185ed6a48b9' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaCloud />
            </a>
        </div>
    );
};

export default HeaderSocials;
