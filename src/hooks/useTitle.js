import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} Flavor Fusion`
    }, [title])
}

export default useTitle;