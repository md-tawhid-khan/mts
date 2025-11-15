"use server"

export const recaptchaTokenVerification=async(token:string)=>{

   
    
    try {
         const res=await fetch('https://www.google.com/recaptcha/api/siteverify',{
        method:"POST",
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        body:new URLSearchParams({
            secret:process.env.NEXT_PUBLIC_RECAPTCHA_SERVER_KEY!,
            response:token
        })
    })
    const result= await res.json()
      
    return result
    } catch (error:any) {
       return Error(error)
    }
   
}