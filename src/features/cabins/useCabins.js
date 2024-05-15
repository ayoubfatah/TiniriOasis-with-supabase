import { useSearchParams } from 'react-router-dom'
import { getCabins } from '../../services/apiCabins'
import { useQuery } from '@tanstack/react-query'

export default function useCabins() {
    const [searchParams] = useSearchParams()
    const page = searchParams.get("page") || 1

    const {isLoading , data , error } =  useQuery({
        queryKey:["cabins" , page],   // this will uniquely identify the data that we will query 
       queryFn:()=>getCabins({page})   //function that is responsible for fetching (function should return a promise)
        })
        const {count , data:cabinData} = data ?? {}
        console.log(count);
        return {isLoading , count, cabinData , error}
}
