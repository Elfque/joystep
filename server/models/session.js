const mongoose = require("mongoose");

const sessionModel = mongoose.Schema(
  {
    name: { type: String, require: true },
  },
  { timestamps: true }
);

const Session = mongoose.model("sessions", sessionModel);

module.exports = Session;

// const chatModel = mongoose.Schema(
//   {
//     chaName: { type: String, trim: true },
//     users: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "users",
//       },
//     ],
//     latestMessage: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Message",
//     },
//   },
//   { timestamps: true }
// );

// const Chat = mongoose.model("Chat", chatModel);

// module.exports = Chat;
