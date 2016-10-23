'use strict';

const Process = require('./Process');

class AudioProcess extends Process {
    constructor(command, options) {
        super();

        this.command = command;
        this.options = options;
        this.process = null;
    }

    start() {
        let { audioFile, start, duration, outputFile } = this.options;

        this.process = this.spawn(
            this.command,
            [
                '-y',
                '-i', audioFile,
                '-ss', start,
                '-t', duration,
                '-acodec', 'copy',
                outputFile
            ]
        );

        this.emit('start');
    }
}

module.exports = AudioProcess;