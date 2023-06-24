import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';

const App= () =>(
  <BrowserRouter>
    <Box sx={{backgroundColor: '#0001'}}>
      <Navbar>

      </Navbar>
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/video/:id" exact element={<VideoDetail/>}/>
        <Route path="/channel/:id" exact element={<ChannelDetail/>}/>
        <Route path="/search/:searchteam" exact element={<SearchFeed/>}/>

      </Routes>
        




    </Box>

  </BrowserRouter>
)
