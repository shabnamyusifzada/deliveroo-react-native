import axios from "axios";
import {useQuery} from "react-query";
import {host} from "../api.config";

const fetchRestaurants = async() => {
    const { data } = await axios.get(host + 'restaurants');
    return data;
}

const useRestaurants = () => useQuery('restaurants', fetchRestaurants);

export default useRestaurants;