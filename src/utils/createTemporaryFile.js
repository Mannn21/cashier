import path from "path";
import { tmpdir } from "os";

export async function createTemporaryFile(file) {
    return new Promise((resolve, reject) => {
        const tempPath = path.join(tmpdir(), file.name);
        const fileStream = fs.createWriteStream(tempPath);
        fileStream.on('error', reject);
        fileStream.on('finish', () => resolve(tempPath));
        file.stream.pipe(fileStream);
    });
}
