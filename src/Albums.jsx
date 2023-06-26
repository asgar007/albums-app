import React, { useState, useEffect } from 'react';

function Albums() {
    const [albums, setAlbums] = useState([]);
  
    useEffect(() => {
      fetchAlbums();
    }, []);
  
    const fetchAlbums = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };
  
    return (
      <div>
        <h1>Albums</h1>
        {/* Render albums here */}
        {albums.map(album => (
        <div key={album.id}>
            <h2>{album.title}</h2>
            <button>Edit</button>
            <button>Delete</button>
        </div>
        ))}
            
      </div>
    );
}
  
export default Albums;