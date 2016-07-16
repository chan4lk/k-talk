class KTalk {
    speaker: string;
    time: Date;
    topic: string;

    constructor(
        speaker: string,
        time: Date,
        topic: string) {

        this.speaker = speaker;
        this.time = time;
        this.topic = topic;
    }

    getDescription() {
        return `${this.topic} will be presented by` +
            `${this.speaker } on ${this.time.getHours() }`
    }
}

var talk = new KTalk(
    'Chandima Ranaweera',
    new Date(),
    'Getting Started with Typescript');

//var anotherTalk = new KTalk(
//    10,
//    'Getting Started with Typescript',
//    new Date());
