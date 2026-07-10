import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Appointment from "@/models/Appointment";

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const appointment = await Appointment.create(body);

    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const appointments = await Appointment.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(appointments);
  } catch {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
