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
      client.sendText(msg.from, "👋 Halo! BOT STIKER SEDANG AKTIF");
      client; 
	    if (msg.body === "!stiker") {
		    client.sendText(msg.form, "Bantu saya mengembangkan BOT ini dengan Share ke teman kamu");
		    client;
    } else if (msg.mimetype) {
      if (msg.caption === "!stiker" && msg.type === "image") {
        const mediaData = await decryptMedia(msg);
        const imageBase64 = `data:${msg.mimetype};base64,${mediaData.toString(
          "base64"
        )}`;
        await client.sendImageAsSticker(msg.from, imageBase64);
      }
    }
  });
}
