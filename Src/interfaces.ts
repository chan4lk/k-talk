interface IRunnable {
    run(): void;
}

class Thread implements IRunnable {
    run() {
        console.log('thread started');
    }
}