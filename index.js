const {
  create,
  Client,
  decryptMedia
} = require("@open-wa/wa-automate");

create().then((client) => start(client));

async function start(client) {
  client.onMessage(async (msg) => {
    // console.log(msg);
    if (msg.body === "!cek","#cek") {
      client.sendText(msg.from, "👋 Hello! BOT STIKER SEDANG AKTIF");
      client;
	if (msg.body === "!stiker","#stiker","#STIKER","!STIKER") {
      client.sendText(msg.from, "Bantu saya untuk mengembangkan BOT ini dengan share");
      client;
	}
    } else if (msg.mimetype) {
      if (msg.caption === "!stiker","#STIKER","#stiker","!STIKER" && msg.type === "image") {
        const mediaData = await decryptMedia(msg);
        const imageBase64 = `data:${msg.mimetype};base64,${mediaData.toString(
          "base64"
        )}`;
        await client.sendImageAsSticker(msg.from, imageBase64);
      }
    }
  });
}
