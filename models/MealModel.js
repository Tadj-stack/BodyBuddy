import mongoose from 'mongoose';

const mealSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    mealImages: { type: [String], required: true },
    protein: { type: String, required: true },
    carbs: { type: String, required: true },
    fats: { type: String, required: true },
    ingredients: { type: [String], required: true },
    seasoning: { type: String, required: true },
    cookingInstructions: { type: [String], required: true }
});

// Corrected line: Use mongoose.models and the model name in lowercase
const Meals = mongoose.models.meals || mongoose.model('meals', mealSchema);
export default Meals;