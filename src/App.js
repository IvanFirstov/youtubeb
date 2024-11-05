// // src/App.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import SearchBar from './components/SearchBar';
// import VideoList from './components/VideoList';
// import VideoDetail from './components/VideoDetail';
// import Header from './layout/Header';
// import Main from './layout/Main';
// import Footer from './layout/Footer';
// import './index.css'; 

// const App = () => {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   // Загружаем начальные данные при первом рендере
//   useEffect(() => {
//     onTermSubmit('React tutorials');
//   }, []);

//   // Послание на YouTube API
//   const onTermSubmit = async (term) => {
//     const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
//       params: {
//         part: 'snippet',
//         maxResults: 5,
//         key: 'AIzaSyBEfBoqaXBXz7PGsFGYa1grkzGAe3SWzWQ', 
//         q: term,
//       },
//     });

//     setVideos(response.data.items);
//     setSelectedVideo(response.data.items[0]); // Выбираем первое видео
//   };

//   return (
//     <div className="App">
//       <Header />
//       <Main>
//         <SearchBar onFormSubmit={onTermSubmit} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={selectedVideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
//             </div>
//           </div>
//         </div>
//       </Main>
//       <Footer />
//     </div>
//   );
// };

// export default App;

// src/App.js
import React, { Component } from 'react';
import axios from 'axios';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    // Выполняем запрос по умолчанию при загрузке страницы
    this.onTermSubmit('React tutorials');
  }

  //  для поиска видео 
  onTermSubmit = async (term) => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBEfBoqaXBXz7PGsFGYa1grkzGAe3SWzWQ', 
        q: term,
        type: 'video', 
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0], // Выбираем первое видео
    });
  };

  // Метод для выбора видео
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="App">
        <Header onSearchSubmit={this.onTermSubmit} />
        <Main>
          <div className="ui grid">
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                  videos={this.state.videos} 
                  onVideoSelect={this.onVideoSelect} 
                />
            </div>
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
