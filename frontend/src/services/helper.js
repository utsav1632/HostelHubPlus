
export const BASE_URL = process.env.REACT_APP_BASE_URL;



console.log("✅ BASE_URL:", process.env.REACT_APP_BASE_URL);



export const isHostelAdmin = (user) => {
  return user && user.role === 'hostel-admin';
};
