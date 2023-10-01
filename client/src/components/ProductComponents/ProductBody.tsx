import axios from "axios"
import { itemType } from "../../types/generalAppType"
import { useQuery } from "react-query"
import Loader from "../Loader"
import { useEffect } from "react"

export default function ProductBody({ id }: { id: string }) {

    const featuredItemsUrl = `${import.meta.env.VITE_SERVER_URL}item/storeitems/${id}`
    async function fetchFeaturedItems() {
        const response = await axios.get(featuredItemsUrl)
        return response.data as itemType
    }

    useEffect(() => {
      window.scrollTo(0,0)  
    }, [])

    const { data, isLoading, error } = useQuery('item', fetchFeaturedItems)

    return (
        <section className="px-4 md:px-10 lg:px-20 py-8">
            {isLoading ? (
                <div className="md:hidden flex items-center justify-center">
                    <Loader />
                </div>
            ) : error ? (
                <h1 className="md:hidden flex">There was an error</h1>
            ) : (
                <div>
                    <p>{data?.name}</p>
                    <img
                        src={`${import.meta.env.VITE_SERVER_URL}${data?.image}`}
                    />
                </div>
            )
            }
        </section>
    )
}
