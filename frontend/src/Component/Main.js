import React, { useState } from 'react';
import SearchSongResults from './SearchSongresults';
import { Typography, Container, TextField, IconButton, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MenuIcon from '@mui/icons-material/Menu';
import "./Main.css";

function Main() {
  const [songList, setSongList] = useState([]);
  const [newSong, setNewSong] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchSong, setSearchSong] = useState('');
  const [recommendations, setRecommendations] = useState([]);


  const addSong = (song) => {
    if (song){
      setSongList([...songList, song]);
    }
  };

  const search_songs = async() => {
    const response = await fetch('http://127.0.0.1:8000/search/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({query: searchTerm}),
    });
      if (response.ok) {
        const data = await response.json();
        setSearchSong(data);
      }
      else {
        console.error('曲の検索に失敗しました');
      }

    }; 

  

    const save_selected_songs = async () => {
      const selectedSongIds = songList.map(song => song.id);
      const response = await fetch('http://127.0.0.1:8000/save/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selected_songs: selectedSongIds }),
      });
      if (response.ok) {
        const data = await response.json();
        setRecommendations(data);
      } else {
        console.error('playlistの作成に失敗しました');
      }
    };



  function display_songs(songList) {
    if (songList.length == [] || !Array.isArray(songList)) {
      return (
        <div className='no-songs'>
          <Typography variant="h5" component="div">
            曲が見つかりません
          </Typography>
          <MusicNoteIcon sx={{ fontSize: 100 }} />
        </div>
      );
    }
  }


  return (
    <div className='main'>
      <Container maxWidth="sm" className='container'>
        <div className='Music_Search'>
          <TextField 
            fullWidth
            variant="outlined"
            placeholder="曲を検索..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              search_songs();
            }
          }

            InputProps={{
              startAdornment: (
                <SearchIcon sx={{ mr: 1 }} />
              ),
            }}
          />

          <SearchSongResults songs={searchSong} />

          <div className='Search_Song_add'>
            <Button onClick={()=>addSong(searchSong[0])} variant="contained" style={{backgroundColor: 'green'}} startIcon={<AddIcon />} sx = {{mb:2}}>
              曲を追加
            </Button>
          </div>
        </div>

        <Typography variant="h4" component="div" sx={{ mt: 4 }}>
          保存された曲
        </Typography>
        <SearchSongResults songs={songList} />

        <div className='Recommend_Songs'>
          <Button onClick={save_selected_songs} variant="contained" style={{ backgroundColor: 'blue' }} startIcon={<MusicNoteIcon />} sx={{ mt: 2 }}>
            Playlistを作成
          </Button>

          <Typography variant="h4" component="div" sx={{ mt: 4 }}>
            Playlist
          </Typography>
          <SearchSongResults songs={recommendations} />
        </div>

      </Container>

    </div>
  );
}

export default Main;
