import { useEffect } from "react"


export default function useDoucmentTitle(count) {
 
    useEffect(() => {
        document.title=`count ---${count}`
       },[count])
}
