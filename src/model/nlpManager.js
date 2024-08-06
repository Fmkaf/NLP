const { NlpManager } = require("node-nlp");
const manager = new NlpManager({ languages: ['en'], forceNER: true });

manager.addDocument('en', 'hello', 'greeting');


manager.addAnswer('en', 'greeting', 'hey');

module.exports = async function fetchAnswer(ask) {
    await manager.train()
    await manager.save();
    const answer = await manager.process('en', ask);
    return answer?.answers?.[0]?.answer
}
