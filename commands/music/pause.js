module.exports = {

        name: 'hi',
        noalias: 'No Aliases',
        category: "music",
       
        usage: clint,
        accessableby: "everyone",
    run: async (bot, message, args, ops) => {
        const serverQueue = ops.queue.get(message.guild.id);
        const { channel } = message.member.voice;
      try {
        if (!channel) return message.channel.send('${prefix}I\'m sorry but you need to be in a voice channel to pause music!');
        // if (message.guild.me.voice.channel !== message.member.voice.channel) {
        //     return message.channel.send(" You Have To Be In The Same Channel With The Bot! ");
        // };
        // if (serverQueue && serverQueue.playing) {
        //     serverQueue.playing = false;
        //     serverQueue.connection.dispatcher.pause(true);
        //     return message.channel.send(' Paused  ⏸');
        // }
        return message.channel.send('${prefix} There is Nothing Playing! ');
      } catch {
          serverQueue.connection.dispatcher.end();
          await channel.leave();
      }
    }
};
