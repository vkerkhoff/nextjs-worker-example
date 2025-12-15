import { Job, Queue, Worker } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis({ maxRetriesPerRequest: null });

const queueName = "example";
const queueCommand = "demo";

const queue = new Queue(queueName);

export async function addToQueue(input: string) {
    console.log("Adding to Queue", input)
    return await queue.add(queueCommand, { info: input });
}

export async function startExampleWorker() {
    const worker = new Worker(queueName, async (job: Job) => {
        const {info} = job.data
        // Do something with job
        return info;
    },{connection,autorun: true});
    
    worker.on('completed', (job: Job, returnvalue: string) => {
        // Do something with the return value.
        console.log(`Job ${job.id} completed with value ${returnvalue}`)
    });

    worker.on('failed', (job: Job | undefined, error: Error) => {
        // Do something with failed job.
        console.log(`Job ${job?.id} Failed with Error: ${error.message}`)
    });
}

