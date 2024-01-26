import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <div>
            <Header />
            <div>
                <h1>Bem-vindo à Página Inicial</h1>
                <p>Esta é uma página simples usando Next.js, React, Tailwind CSS e Relay.</p>
            </div>
            <Footer />
        </div>

    );
};

export default HomePage;