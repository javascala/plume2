"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Action
 */
function Action(msg) {
    return function (target, property, descriptor) {
        target._route || (target._route = {});
        if (process.env.NODE_ENV != 'production') {
            if (target._route[msg]) {
                const actorName = target.constructor.name;
                console.warn(`😎${actorName} was existed @Action('${msg}'), Please review your code.`);
            }
        }
        target._route[msg] = descriptor.value;
    };
}
exports.Action = Action;
