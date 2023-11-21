import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';


const Header = () =>{

    return (
        <AppBar component="nav">
            <div className='headers'>
                <Link to="/">
                    <SportsGymnasticsIcon style={{marginRight:'20px', marginLeft:'10px', color:'white'}}/>
                </Link>
                <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Gymnastics Scoreboard
                    </Link>
                </Typography>
                <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}>
                    <GitHubIcon style={{ marginRight: '20px' }} />
                </a>
            </div>
        </AppBar>
    )
}

export default Header