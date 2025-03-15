import { useEffect, useState } from 'react'
import {useAppStore} from '../store/useAppStore'
export default function SearchForm() {
    const addNotification = useAppStore((state) => state.addNotification);
    const fetchCategories = useAppStore((state) => state.fetchCategories)
    const categories = useAppStore((state)=> state.categories)
    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    })
    const handleChange = (e) => {
        setSearchFilters({
            ...searchFilters, 
            [e.target.name]: e.target.value
        })
    }

    const searchRecipes = useAppStore((state)=> state.searchRecipes)
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(Object.values(searchFilters).includes('')){
            addNotification('error', 'Todos los campos son obligatorios');
            return
        }
        searchRecipes(searchFilters)
    }

    useEffect(()=>{
        fetchCategories()
    }, [])
    return (
        <form
            className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-16 p-10 rounded-lg shadow space-y-6'
        onSubmit={handleSubmit}>
            <div className='space-y-4'>
                <label
                    htmlFor="ingredient"
                    className='block text-white uppercase font-extrabold text-lg'
                    >Nombre o Ingredientes</label>
                <input
                    id='ingredient'
                    type='text'
                    value={searchFilters.ingredient}
                    onChange={handleChange}
                    name='ingredient'
                    className='p-3 w-full rounded-lg focus:outline-none bg-white'
                    placeholder='Nombre o Ingrediente. Ej. Vodka, Tequila, Café'
                />
            </div>
            <div className='space-y-4'>
                <label
                    htmlFor="category"
                    className='block text-white uppercase font-extrabold text-lg'
                >Categoría</label>
                <select
                    id='category'
                    name='category'
                    value={searchFilters.category}
                    onChange={handleChange}
                    className='p-3 w-full rounded-lg focus:outline-none bg-white'
                >
                    <option value="">-- Seleccione --</option>
                    {categories.map(category=>(
                        <option value={category.strCategory} key={category.strCategory}>
                            {category.strCategory}
                        </option>
                    ))}
                </select>
            </div>
            <input
                type='submit'
                value='Buscar Recetas'
                className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase'
            />
        </form>
    )
}