import axios from 'axios';

export async function logoutUser() {
  await axios.get('http://localhost:3000/api/auth/user/logout', {
    withCredentials: true,
  });
}

export async function logoutFoodPartner() {
  await axios.get('http://localhost:3000/api/auth/food-partner/logout', {
    withCredentials: true,
  });
}
