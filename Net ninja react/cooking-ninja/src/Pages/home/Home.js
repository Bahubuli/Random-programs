// styles
import './Home.css'
import RecipeList from '../../components/RecipeList'
// hooks
import {useFetch} from '../../Hooks/useFetch'

export default function Home() {
    const {data, isPending ,error} = useFetch("http://localhost:3000/recipes");

  return (
    <div className = "home">
        {error && <p class = "error">{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        { data && <RecipeList recipes = {data}/>}
    </div>
  )
}
