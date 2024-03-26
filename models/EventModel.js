// In events model file
import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageSrcM1: { type: String, required: true },
    imagedetails: { type: String, required: true },
    description: { type: String, required: true },
    participantLimit: { type: [String], required: true },
    creator: { type: [String], required: true },
    eventAddress: { type: String, required: true },
    eventDate: { type: String, required: true },
    eventID: { type: String, required: true },
});

const Events = mongoose.models.events || mongoose.model('events', eventSchema); // Use 'events' for collection name
export default Events;
