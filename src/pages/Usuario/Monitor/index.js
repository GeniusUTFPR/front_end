import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { getUserIdFromToken } from '../../../services/auth';

import { useNavigate } from 'react-router-dom';

import { api } from '../../../services';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import './style.css';

export const SerMonitor = () => {
    const accessToken = Cookies.get('accessToken');
    const id = getUserIdFromToken(accessToken);
    const [informacoesPerfil, setInformacoesPerfil] = useState({});
    const navigate = useNavigate();

    async function getUsuario(id) {
        const { data } = await api.get(`usuarios/${id}`);
        setInformacoesPerfil(data);
    }

    useEffect(() => {
        async function fetch() {
            try {
                getUsuario(id);
            } catch (error) {
                console.log(error);
            }
        }
        fetch();
    }, [id]);

    const handleChange = async (e) => {
        e.preventDefault(); // Evite que o formulário seja enviado por padrão

        try {
            await api.patch(`/usuarios/${id}/`, {
                tipo_usuario: 2,
            });

            alert('Parabéns! Agora você é um monitor externo!');
            navigate('/perfil');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className='header'>
                <Header />
            </div>
            <div className='editar-perfil-container'>
                <div className='editar-perfil-card'>
                    <h1>
                        Torne-se um <span className='conta'>monitor</span> e <span className='conta'>lucre</span>!
                    </h1>
                    <form onSubmit={handleChange}>
                        <div className='editar-perfil-monitor'>
                            <p>
                                Ao se tornar um monitor externo da UTFPR Campus Campo Mourão,
                                você atuará de forma independente, sem vínculo institucional ou bolsa.
                                Terá a liberdade de oferecer auxílio educacional a estudantes,
                                podendo cobrar valores diretamente deles, fora do ambiente da universidade.
                            </p>
                            <p>
                                <b>01. Atuação Independente:</b> Você atuará de forma autônoma,
                                sem ser um bolsista da universidade.
                            </p>
                            <p>
                                <b>02. Cobranças:</b> Poderá cobrar valores pelos serviços prestados,
                                acertando os detalhes com os estudantes fora do ambiente da UTFPR.
                            </p>
                            <p>
                                <b>03. Responsabilidade Própria:</b> Será responsável por estabelecer acordos claros
                                com os estudantes e garantir a qualidade dos serviços oferecidos.
                            </p>
                            <p>
                                <b>04. Não Vinculação Institucional:</b> Não terá reconhecimento oficial da UTFPR,
                                sem acesso a recursos da universidade.
                            </p>
                            <p>
                                Ao aceitar, concorda com essas condições e assume a responsabilidade pela
                                sua atuação como monitor externo, independente da UTFPR.
                            </p>
                        </div>
                        <div>
                            <input type='submit' className='botaoCadastrar' value='Aceito' />
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};