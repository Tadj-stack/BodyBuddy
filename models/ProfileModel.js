import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    name: { type: String ,required: true},//
    age: { type: Number , default: null },//
    gender: { type: String, enum: ['Male', 'Female', 'Other'] , default: null },//
    country: { type: String , default: null },//
    height: { type: Number, default: null  },//
    weight: { type: Number , default: null },//
    email: { type: String, required: true },//
    password: { type: String, required: true },//
    profileImage: { type: String, default: null },//
    workoutsCompleted: { type: [String], default: null },//
    favoriteMeals: { type: [String], default: null },//
    eventsAttended: { type: [String], default: null },//
    goal: { type: [String], default: null },//
    mealPreference: { type: String, default: null }//
});

// Utilisation de mongoose.models et du nom de la collection en minuscules
const ProfileModel = mongoose.models.profiles || mongoose.model('profiles', profileSchema);

export default ProfileModel;
