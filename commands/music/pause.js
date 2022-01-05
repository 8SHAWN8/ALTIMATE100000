module.exports = {

        name: 'hi',
        noalias: 'No Aliases',
        category: "music",
        description: 'Pause command.',
        usage: " ",
        accessableby: "everyone",
    run: async (bot, message, args, ops) => {
        const serverQueue = ops.queue.get(message.guild.id);
        const { channel } = message.member.voice;
      try {
        if (!channel) return message.channel.send('Hello how are you :) ?');
        
        return message.channel.send('hello kemon asen?');
      } catch {
          serverQueue.connection.dispatcher.end();
          await channel.leave();
      }
    }
};

module.exports = {

        name: 'fine',
        noalias: 'No Aliases',
        category: "music",
        description: 'Pause command.',
        usage: " ",
        accessableby: "everyone",
    run: async (bot, message, args, ops) => {
        const serverQueue = ops.queue.get(message.guild.id);
        const { channel } = message.member.voice;
      try {
        if (!channel) return message.channel.send('ok?');
        
        return message.channel.send('oook :)');
      } catch {
          serverQueue.connection.dispatcher.end();
          await channel.leave();
      }
    }
};
module.exports = {

        name: 'good',
        noalias: 'No Aliases',
        category: "music",
        description: 'Pause command.',
        usage: " ",
        accessableby: "everyone",
    run: async (bot, message, args, ops) => {
        const serverQueue = ops.queue.get(message.guild.id);
        const { channel } = message.member.voice;
      try {
        if (!channel) return message.channel.send('oh, nice');
        
        return message.channel.send('hmm');
      } catch {
          serverQueue.connection.dispatcher.end();
          await channel.leave();
      }
    }
};

module.exports = {

        name: '@!   ToXicツ EvAn 👑',
        noalias: 'No Aliases',
        category: "music",
        description: 'Pause command.',
        usage: " ",
        accessableby: "everyone",
    run: async (bot, message, args, ops) => {
        const serverQueue = ops.queue.get(message.guild.id);
        const { channel } = message.member.voice;
      try {
        if (!channel) return message.channel.send('I think he is not online now ,you can dm him');
        
        return message.channel.send('I think he is not online now you can dm him ');
      } catch {
          serverQueue.connection.dispatcher.end();
          await channel.leave();
      }
    }
};

