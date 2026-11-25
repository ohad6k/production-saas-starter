import { spawnSync } from "node:child_process";
const args = ["-y", "viberaven@latest", "check", "go-b2b-starter/internal/db/postgres/sqlc/migrations", "--quiet"];
const result = spawnSync(process.platform === "win32" ? "npx.cmd" : "npx", args, { stdio: "inherit", shell: process.platform === "win32" });
if (result.error) console.error(result.error.message);
process.exit(result.status ?? 1);