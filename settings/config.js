require("dotenv").config();
const { resolve } = require("path");

module.exports = {
    TOKEN: process.env.TOKEN || "YOUR_TOKEN",  // your bot token
    PREFIX: process.env.PREFIX || "n.", //<= default is #  // bot prefix
    EMBED_COLOR: process.env.EMBED_COLOR || "#000001", //<= default is "#000001"

    OWNER_ID: process.env.OWNER_ID || "YOUR_CLIENT_ID", //your owner discord id example: "515490955801919488"

    NP_REALTIME: process.env.NP_REALTIME || "BOOLEAN", // "true" = realtime, "false" = not realtime :3 // WARNING: on set to "true" = laggy and bot will ratelimit if you have a lot of servers
    LEAVE_TIMEOUT: parseInt(process.env.LEAVE_TIMEOUT || "120000"), // leave timeout default "120000" = 2 minutes // 1000 = 1 seconds

    LANGUAGE: {
      defaultLocale: process.env.LANGUAGE || "en", // "en" = default language
      directory: resolve("languages"), // <= location of language
    },

    DEV_ID: [], // if you want to use command bot only, you can put your id here example: ["123456789", "123456789"]

    MONGO_URI: process.env.MONGO_URI || "YOUR_MONGO_URI", // your mongo uri
    LIMIT_TRACK: parseInt(process.env.LIMIT_TRACK || "50"),  //<= dafault is "50" // limit track in playlist
    LIMIT_PLAYLIST: parseInt(process.env.LIMIT_PLAYLIST || "10"), //<= default is "10" // limit can create playlist

    NODES: [
      { 
        host: process.env.NODE_HOST || "lavalink.islantay.tk",
        port: parseInt(process.env.NODE_PORT || "8880"),
        password: process.env.NODE_PASSWORD || "waifufufufu",
      },
      { 
        host: process.env.NODE_HOST || "usa.lavalink.mitask.tech",
        port: parseInt(process.env.NODE_PORT || "2333"),
        password: process.env.NODE_PASSWORD || "lvserver",
      },
      { 
        host: process.env.NODE_HOST || "node1.annnekkk.tech",
        port: parseInt(process.env.NODE_PORT || "17131"),
        password: process.env.NODE_PASSWORD || "youshallnotpass",
      },
      { 
        host: process.env.NODE_HOST || "weez-node.cf",
        port: parseInt(process.env.NODE_PORT || "2333"),
        password: process.env.NODE_PASSWORD || "FreeLava",
      },
      { 
        host: process.env.NODE_HOST || "us1.lavalink.creavite.co",
        port: parseInt(process.env.NODE_PORT || "20080"),
        password: process.env.NODE_PASSWORD || "auto.creavite.co",
      },
      { 
        host: process.env.NODE_HOST || "lavalink-coders.ml",
        port: parseInt(process.env.NODE_PORT || "80"),
        password: process.env.NODE_PASSWORD || "janemon",
      },
      { 
        host: process.env.NODE_HOST || "lavalink.oops.wtf",
        port: parseInt(process.env.NODE_PORT || "2000"),
        password: process.env.NODE_PASSWORD || "www.freelavalink.ga",
      },
      { 
        host: process.env.NODE_HOST || "losingtime.dpaste.org",
        port: parseInt(process.env.NODE_PORT || "2124"),
        password: process.env.NODE_PASSWORD || "SleepingOnTrains",
      },
      { 
        host: process.env.NODE_HOST || "lava.link",
        port: parseInt(process.env.NODE_PORT || "80"),
        password: process.env.NODE_PASSWORD || "chiraitori",
      } 
    ],
}
