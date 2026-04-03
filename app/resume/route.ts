import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const filePath = path.join(process.cwd(), "RohitPujariResume.pdf");
  const fileBuffer = await readFile(filePath);

  return new Response(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="RohitPujariResume.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
