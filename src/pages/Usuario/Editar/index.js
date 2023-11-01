import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { getUserIdFromToken } from '../../../services/auth';

import { useNavigate } from 'react-router-dom';

import { api } from '../../../services';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import './style.css';

export const EditarPerfil = () => {
    const accessToken = Cookies.get('accessToken');
    const id = getUserIdFromToken(accessToken);
    const [informacoesPerfil, setInformacoesPerfil] = useState({});
    const [cursos, setCursos] = useState({});
    const navigate = useNavigate();

    async function getUsuario(id) {
        const { data } = await api.get(`usuarios/${id}`);
        setInformacoesPerfil(data);
    }

    async function getCursos() {
        const { data } = await api.get(`cursos/`);
        setCursos(data);
    }

    useEffect(() => {
        async function fetch() {
            try {
                getUsuario(id);
                await getCursos();
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
                nome: informacoesPerfil.nome,
                celular: informacoesPerfil.celular,
                curso: informacoesPerfil.curso,
            });

            alert('Perfil editado com sucesso!');
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
            <div className="editar-perfil-container">
                <div className="editar-perfil-card">
                    <h1>
                        Edite sua <span className="conta">conta</span>
                    </h1>
                    <form onSubmit={handleChange}>
                        <input
                            type="text"
                            placeholder="Nome"
                            name="nome"
                            autoComplete="nome"
                            onChange={(e) => setInformacoesPerfil({ ...informacoesPerfil, nome: e.target.value })}
                            value={informacoesPerfil.nome}
                            autoFocus
                            required
                        />
                        <input
                            type="text"
                            placeholder="Celular"
                            name="celular"
                            autoComplete="celular"
                            onChange={(e) => setInformacoesPerfil({ ...informacoesPerfil, celular: e.target.value })}
                            value={informacoesPerfil.celular}
                            required
                        />
                        <select
                            type="text"
                            placeholder="Escolha seu curso"
                            name="curso"
                            autoComplete="curso"
                            onChange={(e) => setInformacoesPerfil({ ...informacoesPerfil, curso: e.target.value })}
                            value={informacoesPerfil && informacoesPerfil.curso ? informacoesPerfil.curso.id : ''}
                        >
                            <option value={0} defaultValue>
                                Selecione seu curso
                            </option>
                            {cursos.length > 0
                                ? cursos.map(item => <option value={item.id}>{item.nome}</option>)
                                : ''}
                        </select>
                        <div>
                            <input type="submit" className="botaoCadastrar" value="Editar" />
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