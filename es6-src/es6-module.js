import bigGun from 'some-lib';

export const square = (n) => {
    return n * n;
};

const readonly = (target, name, descriptor) => {
    descriptor.writable = false;
    return descriptor;
};

export class Rain {

    /**
     * Start the rain
     */
    start() {
        console.log('Rain Started');
    }

    /**
     * Stop the rain
     */
    @readonly
    stop() {
        console.log('Rain Stopped');
    }

    /**
     * Method with params
     * @param {Number} magnitude
     */
    storm(magnitude) {
        bigGun();
    }

    async promiseMethod() {
        await new Promise((res) => {

            setTimeout(() => res(), 500);

        });

        console.log('Promise completed');
    }
}
