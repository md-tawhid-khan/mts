"use server"

import { TOrderInfo } from "@/components/interface/orderType";

export const addOrder=async(data:TOrderInfo)=>{
     try {
         const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/order`,
            {
                method:'POST',
                headers:{                   
                     "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            }
         );
         
       return await res.json()
    } catch (error) {
        console.log(error)
    }
}