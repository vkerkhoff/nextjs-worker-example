import { addToQueue } from "@/worker/example"

export async function GET() {
    await addToQueue("Hello World");
    return Response.json({ message: 'Queued' })
}