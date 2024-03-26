import WorkoutModel from "@/models/WorkoutModel";
import connect from "@/db";
import { NextResponse } from "next/server";
import Workouts from "@/models/WorkoutModel";

export const GET = async (request) => {
    try {
        // Establish database connection
        await connect();

        // Retrieve meals from the database
        const workouts = await WorkoutModel.find({});
        console.log(workouts)
        // Check if meals were found
        if (Workouts.length > 0) {
            // Return the meals as JSON with status 200
            return new NextResponse(JSON.stringify(workouts), { status: 200 });
        } else {
            // Return a message indicating no meals found with status 404
            return new NextResponse("No meals found", { status: 404 });
        }
    } catch (error) {
        // Return an error response with status 500
        return new NextResponse("fetch error " + error, { status: 500 });
    }
};

