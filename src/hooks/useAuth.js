import { useContext } from "react";
import { AuthContext } from "./../components/ContextFile";
function useAuth() {
  return useContext(AuthContext);
}
export default useAuth;