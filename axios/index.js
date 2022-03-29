import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (endpoint) => {
  const [response, setResponse] = useState();
  useEffect(() => {
    const fetchAxiosUsers = async () => {
      const res = await axios.get(endpoint);
      setResponse(res.data);
    };
    fetchAxiosUsers();
  }, [endpoint]);

  return response

};
