import axios from "axios";
import {host} from "../api.config";
import { useQuery } from "react-query";

const fetchCategories = async() => {
    const { data } = await axios.get(host + 'categories');
    return data;
}

const useCategories = () => useQuery('categories', fetchCategories)

export default useCategories;