import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import { loadUsers } from './redux/actions/userActions';
import LoginPage from "./screens/LoginPage";
import HomePage from './screens/HomePage';
import NoMatch from './screens/NoMatch';
import AllCardsComponent from './components/OutletScreens/AllCardsComponent';
import TableViewComponent from './components/OutletScreens/TableViewComponent';
import FavouriteCardsComponent from './components/OutletScreens/FavouriteCardsComponent';
import UpdateCardComponent from './components/OutletScreens/UpdateCardComponent';

function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const defaultRedirectElement = isLoggedIn ? 'home-page' : 'login';
  const dispatch = useDispatch();
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUserData() {
      const userList = await axios.get("https://randomuser.me/api/?results=15")
        .then(response => response.data.results.map((user) => ({
          firstName: user.name.first,
          lastName: user.name.last,
          imageURL: user.picture.large,
          designation: 'Technical Consultant',
          contact_phone: user.phone.replace(/[^0-9]/g, '').replace(/(\d{3})(?=(\d{3})+(?!\d{5}))/g, "$1-"),
          contact_email: user.email,
          address_area: user.location.street.name,
          address_city: user.location.city,
          address_state: user.location.state,
          address_country: user.location.country,
          address_zipcode: user.location.postcode,
          website: user.login.username.slice(0, 12) + '.com',
          isFavourite: false,
          tags: ['API User']
        })))
      setUsersData(userList);
      setLoading(false)
    }
    fetchUserData();
  }, [])
  useEffect(() => {
    dispatch(loadUsers(usersData))
  }, [usersData, dispatch])

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
            element={<HomePage loading={loading} />}>
            <Route index element={<AllCardsComponent />} />
            <Route path='all-cards' element={<AllCardsComponent />} />
            <Route path='table-view' element={<TableViewComponent />} />
            <Route path='favourites' element={<FavouriteCardsComponent />} />
            <Route path='update-card' element={<UpdateCardComponent />} />
            <Route path="*" element={<NoMatch />} />
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
