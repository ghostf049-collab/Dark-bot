import stylizedChar from "../utils/fancy.js"

export async function pingTest(client, message) {
    const remoteJid = message.key.remoteJid
    const start = Date.now()

    await client.sendMessage(remoteJid, { text: "📡 Pinging..." }, { quoted: message })

    const latency = Date.now() - start

    await client.sendMessage(remoteJid, {
        text: stylizedChar(
            `🚀 𝕯𝖆𝖗𝖐𝖇𝖔𝖗𝖓 Network\n\n` +
            `Latency: ${latency} ms\n\n` +
            `𝕯𝖆𝖗𝖐𝖇𝖔𝖗𝖓`
        )
    }, { quoted: message })
}