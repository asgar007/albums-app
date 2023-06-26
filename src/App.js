import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';

import "./App.css"
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AlbumItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  animation: ${fadeIn} 0.3s ease-in;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: ${props => props.delete ? '#ff5252' : '#4caf50'};
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.delete ? '#ff1744' : '#43a047'};
  }
`;


const App = () => {
  const [albums, setAlbums] = useState([]);
  const [newAlbumTitle, setNewAlbumTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);


    // Open the modal for updating an album
    const openModal = (album) => {
      setSelectedAlbum(album);
      setIsModalOpen(true);
    };
  
    // Close the modal
    const closeModal = () => {
      setSelectedAlbum(null);
      setIsModalOpen(false);
    };
  
    // Update the album
    const updateAlbum = (albumId, updatedTitle) => {
      // const updatedAlbums = albums.map(album => {
      //   if (album.id === albumId) {
      //     return { ...album, title: updatedTitle };
      //   }
      //   return album;
      // });
      // setAlbums(updatedAlbums);

      axios.put(`https://jsonplaceholder.typicode.com/albums/${albumId}`, { title: updatedTitle })
      .then(response => {
        const updatedAlbums = albums.map(album => {
          if (album.id === albumId) {
            return { ...album, title: updatedTitle };
          }
          return album;
        });
        setAlbums(updatedAlbums);
      })
      .catch(error => {
        console.error('Error updating album:', error);
      });
    };

  // Fetch albums from the API
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        setAlbums(response.data.slice(0,10));
      })
      .catch(error => {
        console.error('Error fetching albums:', error);
      });
  }, []);

  // Add a new album
  const addAlbum = () => {
    axios.post('https://jsonplaceholder.typicode.com/albums', { title: newAlbumTitle })
      .then(response => {
        setAlbums([...albums, response.data]);
        setNewAlbumTitle('');
      })
      .catch(error => {
        console.error('Error adding album:', error);
      });
  };

  // Update an album
  // const updateAlbum = (album) => {
  //   axios.put(`https://jsonplaceholder.typicode.com/albums/${album.id}`, { title: album.title })
  //     .then(response => {
  //       const updatedAlbums = albums.map(a => (a.id === album.id ? response.data : a));
  //       setAlbums(updatedAlbums);
  //     })
  //     .catch(error => {
  //       console.error('Error updating album:', error);
  //     });
  // };

  // Delete an album
  const deleteAlbum = (album) => {
    axios.delete(`https://jsonplaceholder.typicode.com/albums/${album.id}`)
      .then(() => {
        const updatedAlbums = albums.filter(a => a.id !== album.id);
        setAlbums(updatedAlbums);
      })
      .catch(error => {
        console.error('Error deleting album:', error);
      });
  };

  return (
    <div className="container">
      <h1 className='heading'>Album Management App</h1>

      <div className="add-album-container">
        <h2>Add New Album</h2>
        <input
          type="text"
          value={newAlbumTitle}
          onChange={(e) => setNewAlbumTitle(e.target.value)}
        />
        <button onClick={addAlbum}>Add</button>
      </div>
  
      <div className="albums-container">
        <h2>Albums</h2>
        {albums.map(album => (
          <AlbumItem key={album.id}>
            <span>{album.title}</span>
            <div>
              <Button onClick={() => openModal(album)}>Update</Button>
              <Button delete onClick={() => deleteAlbum(album)}>Delete</Button>
            </div>
          </AlbumItem>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onUpdate={(updatedTitle) => updateAlbum(selectedAlbum.id, updatedTitle)}
      />
    </div>
  );
  
  
};

export default App;


