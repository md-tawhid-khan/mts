'use client'

import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SubmitHandler, useForm } from "react-hook-form";
import SelectCategory from "../selectCategory/selectCategory";

import { useState } from "react";
import { recaptchaTokenVerification } from "@/services/authServices";
import { addOrder } from "@/services/postOrder";
import { TOrderInfo } from "../interface/orderType";
import Swal from "sweetalert2";


const FormData = () => {
  const form = useForm<TOrderInfo>() ;

  const [recaptcha,setRecaptcha]=useState(false)

  const{
    formState:{isSubmitting}
  } = form ;


  const onSubmit:SubmitHandler<TOrderInfo>=async(data:TOrderInfo)=>{
      try {
         const result= await addOrder(data) ;
         if(result.data.acknowledged){
           Swal.fire({
               title: result.message,
               icon: "success",
               draggable: true
});
         }
         form.reset();
      } catch (error) {
           Swal.fire({
             title: "Oops...",
             text: "Something went wrong!",
             icon: "error",
});
      }
  } ; 

  const onChange=async(value : string | null )=>{

      try {
        const res=await recaptchaTokenVerification(value!)
      
        if(res.success){
          
            setRecaptcha(res.success)
        }
      } catch (error) {
         console.log(error)
      }
  }



    return (
      
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="name"
          
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input  placeholder="give your name" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="give your valid email" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Number
              </FormLabel>
              <FormControl>
                <Input placeholder="give phone number" {...field} />
              </FormControl>            
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Company Name
              </FormLabel>
              <FormControl>
                <Input placeholder="give your company name" {...field} />
              </FormControl>            
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website Category
              </FormLabel>
              <FormControl>
                <SelectCategory field={field} />
              </FormControl>            
              <FormMessage />
            </FormItem>
          )}
        />

<ReCAPTCHA
    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY || "" } 
    onChange={onChange}
  />
       
        <Button
        disabled={ recaptcha ? false : true}
         className="w-full bg-amber-200 hover:bg-amber-500" variant={'ghost'}  type="submit">{isSubmitting ? (
                <div className="flex items-center justify-center min-h-screen">
                  <div className="w-8 h-8 border-8 border-white border-dotted rounded-full animate-spin"></div>
                </div>
              ) : (
                "submit"
              )}</Button>
      </form>
    </Form>
    );
};

export default FormData;