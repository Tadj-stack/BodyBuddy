import ProfileModel from "@/models/ProfileModel";
import connect from "@/db";
import { NextResponse } from "next/server";

export const PATCH = async (request) => {
    try {
        await connect();

        const { email, updatedFields } = await request.json();
        console.log({ email: email, updatedFields: updatedFields });

        const updateOperations = {};
        Object.keys(updatedFields).forEach(field => {
            if (field in ProfileModel.schema.paths) {
                updateOperations[field] = updatedFields[field];
            }
        });
        console.log({ updateOperations });

        const filter = { email: email };
        const update = { $set: updateOperations };

        const result = await ProfileModel.updateOne(filter, update);

        if (result.nModified === 0) {
            return new NextResponse("Profile not found", { status: 404 });
        }

        console.log("Profile updated");
        return new NextResponse("Profile updated successfully", { status: 200 });

    } catch (error) {
        console.error("Failed to update profile:", error);
        return new NextResponse("Failed to update profile: " + error, { status: 500 });
    }
};
