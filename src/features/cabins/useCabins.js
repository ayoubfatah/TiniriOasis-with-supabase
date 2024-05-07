import React from 'react'
import { getCabins } from '../../services/apiCabins'
import { useQuery } from '@tanstack/react-query'

export default function useCabins() {
    const {isLoading , data : cabinData, error } =  useQuery({
        queryKey:["cabins"],   // this will uniquely identify the data that we will query 
       queryFn:getCabins   //function that is responsible for fetching (function should return a promise)
        })

        return {isLoading , cabinData , error}
}
