
export default function(): boolean {
    return process.env.DEPLOYMENT === "DEVELOPMENT";
}
