export async function register() {
    // Run only in NodeJS Runtime
    if (process.env.NEXT_RUNTIME === "nodejs") {
        console.log("Starting Application")
        if (isProcessType("WORKER")) {
            console.log("Starting Worker...")
            const { startExampleWorker } = await import("@/worker/example");
            startExampleWorker();
        }
    }
}

function isProcessType(type: string): boolean{
    console.log(`PROCESS_TYPE: ${process.env.PROCESS_TYPE}`)
    if (process.env.PROCESS_TYPE?.split(",").includes(type)) {
        return true;
    }
    return false;
}