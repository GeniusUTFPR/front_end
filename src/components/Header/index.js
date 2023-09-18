import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Avatar,
  Box,
  Menu,
  Typography,
  MenuItem,
  Container,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import WestIcon from '@mui/icons-material/West';
// import Logo from '../Logo/logo';
// import { useToken } from '../../contexts/authContext';
// import { PERFIL } from '../../routes/routes';
import './style.css';
import LogoHeader from '../../assets/logo.svg';

const StyledAppBar = styled(AppBar)({
  zIndex: theme => theme.zIndex.drawer + 1,
});

const StyledProfileImage = styled(Avatar)({
  marginLeft: theme => theme.spacing(2),
  border: '3px solid var(--cor-primaria);',
  '&:hover': {
    cursor: 'pointer',
  },
});

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  fontSize: 11,
  padding: '6px 12px',
  height: '30px',
  width: '125px',
  border: '2px solid',
  borderRadius: '20px',
  lineHeight: 1.5,
  backgroundColor: '#121212',
  borderColor: 'var(--cor-primaria)',
  fontFamily: 'Poppins',
  color: 'white',
  textTransform: 'capitalize',
  marginRight: '20px',
  '&:hover': {
    border: '4px solid var(--cor-primaria)',
    boxShadow: 'none',
  },
});

const BackButton = styled(Button)({
  boxShadow: 'none',
  fontSize: 0,
  padding: '20px',
  height: '20px',
  width: '20px',
  borderRadius: '10px',
  backgroundColor: '#121212',
  minWidth: 30,
  marginLeft: '40px',
  '&:hover': {
    backgroundColor: '#555555',
    cursor: 'pointer',
  },
  '@media screen and (min-width: 0)': {
    display: 'none',
  },
  '@media screen and (min-width: 900px)': {
    display: 'flex',
  },
});

const pagesEstudante = [
  { label: 'Página inicial', url: '/editar-disciplina' },
  { label: 'Cursos', url: '/lista-de-cursos' },
];
// const pagesProfessor = [
//   { label: 'Página inicial', url: '/editar-disciplina' },
//   { label: 'PAlunos', url: '/listar-palunos' },
// ];
const settings = ['Perfil', 'Sair'];

export const Header = () => {
  // const navigate = useNavigate();
  // const { usuario, handleLogout } = useToken();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div style={{ position: 'fixed', top: 30, left: 0, right: 0 }}>
      <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar
          position="static"
          style={{ backgroundColor: '#0C0C0C', boxShadow: 'none' }}
        >
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{
                display: { xs: 'flex', md: '' },
                justifyContent: { xs: 'space-between', md: '' },
              }}
            >
              <BackButton
                className="botao-voltar"
                style={{ marginRight: '10px' }}
                onClick={() => window.history.back()}
              >
                <WestIcon style={{ color: 'var(--cor-primaria)' }} />
              </BackButton>

              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {/* {usuario.tipo === 4 ? (
                    <div>
                      {pagesProfessor.map(page => (
                        <Link to={page.url}>
                          <MenuItem
                            key={page.label}
                            onClick={handleCloseNavMenu}
                          >
                            <Typography textAlign="center" color="#0C0C0C">
                              {page.label}
                            </Typography>
                          </MenuItem>
                        </Link>
                      ))}
                    </div>
                  ) : ( */}
                  <div>
                    {pagesEstudante.map(page => (
                      <Link to={page.url}>
                        <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                          <Typography textAlign="center" color="#0C0C0C">
                            {page.label}
                          </Typography>
                        </MenuItem>
                      </Link>
                    ))}
                  </div>
                  {/* )} */}
                </Menu>
              </Box>
              <img
                src={LogoHeader}
                alt="Logo"
                className="logoHeader"
              />
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  justifyContent: 'flex-end',
                  marginRight: '',
                }}
              >
                {/* {usuario.tipo === 4 ? (
                  <div>
                    {pagesProfessor.map(page => (
                      <Link to={page.url}>
                        <BootstrapButton
                          key={page.label}
                          onClick={handleCloseNavMenu}
                        >
                          {page.label}
                        </BootstrapButton>
                      </Link>
                    ))}
                  </div>
                ) : ( */}
                <div>
                  {pagesEstudante.map(page => (
                    <Link to={page.url}>
                      <BootstrapButton
                        key={page.label}
                        onClick={handleCloseNavMenu}
                      >
                        {page.label}
                      </BootstrapButton>
                    </Link>
                  ))}
                </div>
                {/* )} */}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <StyledProfileImage />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map(setting => (
                    <MenuItem
                      sx={{ borderBottom: '1px dotted #ccc' }}
                      key={setting}
                      onClick={() => {
                        handleCloseUserMenu();
                        if (setting === 'Perfil') {
                          // navigate(`${PERFIL}`);
                        }
                        // if (setting === 'Sair') handleLogout();
                      }}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </StyledAppBar>
      </Box>
    </div>
  );
};

export default Header;
