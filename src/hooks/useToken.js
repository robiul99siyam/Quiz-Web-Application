export default function useToken() {
  const token = localStorage.getItem("authToken");
  return token ? JSON.parse(token) : null;
}
