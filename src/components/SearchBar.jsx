// import React, { useState } from 'react';

// const SearchBar = ({ onFormSubmit }) => {
//   const [term, setTerm] = useState('');

//   const onInputChange = (event) => {
//     setTerm(event.target.value);
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();
//     onFormSubmit(term); // Передаем запрос наверх
//   };

//   return (
//     <div className="search-bar">
//       <form onSubmit={onSubmit}>
//         <input className='search'
//           type="text"
//           value={term}
//           onChange={onInputChange}
//           placeholder="Search for a video..."
//         />
//       </form>
//     </div>
//   );
// };

// export default SearchBar;

// src/components/SearchBar.js
import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    search: '', // Строка поиска
  };

  // Обработка нажатия клавиши Enter
  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.onFormSubmit(this.state.search); // Вызываем функцию поиска из пропсов
    }
  };

  // Обработка изменений в поисковом поле
  handleInputChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div className="row">
        <div className="col s12" style={{ display: "flex", alignItems: "center" }}>
          {/* Поле поиска */}
          <input
            className="validate"
            placeholder="Search"
            type="search"
            value={this.state.search}
            onChange={this.handleInputChange}
            onKeyDown={this.handleKey} // Обработка нажатия Enter
          />

          {/* Кнопка для поиска */}
          <button
            className="btn"
            onClick={() => this.props.onFormSubmit(this.state.search)} // Запуск поиска по кнопке
            style={{ marginLeft: "10px", alignItems: "ce" }}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;

