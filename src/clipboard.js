export default async function writeClipboard(text) {
    const opt = {
        cmd: ['xsel', '-b', '-i'],
        stdin: 'piped',
        stdout: 'piped',
        stderr: 'piped'
    }
    const proc = Deno.run(opt)
    const encoder = new TextEncoder()
    await proc.stdin.write(encoder.encode(text))
    proc.stdin.close()
    await proc.status()
}

export async function readClipboard() {
    const opt = {
        cmd: ['xsel', '-b', '-o'],
        stdin: 'piped',
        stdout: 'piped',
        stderr: 'piped'
    }

    const decoder = new TextDecoder()
    const proc = Deno.run(opt)
    return decoder.decode(await proc.output())
}