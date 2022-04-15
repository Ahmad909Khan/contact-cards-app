import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./screens/LoginPage";
import HomePage from './screens/HomePage';
import AllCardsComponent from './components/home_page_components/AllCardsComponent';
import FavouriteCardsComponent from './components/home_page_components/FavouriteCardsComponent';
import SearchResultComponent from './components/home_page_components/SearchResultComponent';
import UpdateCardComponent from './components/home_page_components/UpdateCardComponent';
import NoMatch from './screens/NoMatch'
import TableViewComponent from './components/home_page_components/TableViewComponent';

function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const defaultRedirectElement = isLoggedIn ? 'home-page' : 'login';

  return (
    <div className="App">
      <Routes>
        {!isLoggedIn && (
          <Route
            path="login"
            element={<LoginPage />} />
        )}
        {isLoggedIn && (
          <Route
            path="home-page"
            element={<HomePage />}>
            <Route index element={<AllCardsComponent />} />
            <Route path='all-cards' element={<AllCardsComponent />} />
            <Route path='table-view' element={<TableViewComponent />} />
            <Route path='favourites' element={<FavouriteCardsComponent />} />
            <Route path='search-results' element={<SearchResultComponent />} />
            <Route path='update-card' element={<UpdateCardComponent />} />
            <Route path="*" element={<NoMatch />}/>
          </Route>
        )}
        <Route
          path="*"
          element={<Navigate to={defaultRedirectElement} replace />}
        >

        </Route>
      </Routes>
    </div>
  );
}

export default App;
