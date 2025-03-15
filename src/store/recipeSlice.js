import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"

export const createRecipesSlice = (set) => ({
    categories: [],
    drinks: [],
    selectedRecipe: {},
    modal: false,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({ categories })
    },
    searchRecipes: async (filters) => {
        try {
            const drinks = await getRecipes(filters);
            if (drinks.length === 0) {
                get().addNotification("error", "No se encontraron recetas con los filtros seleccionados.");
            }
            set({ drinks });
        } catch (error) {
            get().addNotification("error", "Hubo un error al buscar recetas.");
        }
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe,
            modal: true
        })
    },
    closeModal: () => {
        set({
            modal: false,
            selectedRecipe: {}
        })
    }
})