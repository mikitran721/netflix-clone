import useSWR from "swr";

import fetcher from "@/lib/fetcher";

const useCurrentUser = () =>{
    const {data,error,isLoading,mutate} = useSWR('/api/current',fetcher)
    // console.log(">> kiem tra data: ",data)

    return{
        data,
        error,
        isLoading,
        mutate
    }
}

export default useCurrentUser;