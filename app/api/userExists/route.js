import connect from "@/db";
import User from "@/models/ProfileModel"
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        await connect();
        const {email} = await req.json();
        const user = await User.findOne({email}).select("_id")
        return NextResponse.json({user})
    }catch(error){
    console.log(error)
    }
}