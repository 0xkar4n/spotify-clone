"use client"
import qs from "query-string";

import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Input from "./Input";

const SearchInput = () => {
    const router = useRouter();
    const [value , setvalue] = useState<string>("");
    const debounceValue = useDebounce<string>(value,500);
    
    useEffect(()=>{
        const query = {
            title : debounceValue,
        }
        const url = qs.stringifyUrl({
            url : '/search',
            query : query
        })
        router.push(url);
    },[debounceValue,router])
    
    return (
        <Input className="bg-neutral-700"
        placeholder="what' on your mind"
        value={value}
        onChange={(e)=> setvalue(e.target.value)}
        />
    );

}

export default SearchInput;