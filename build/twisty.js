import { Alg } from "alg";
import { Cursor } from "./cursor.ts";
"use strict";
var Twisty;
(function (Twisty_1) {
    class TwistyParams {
    }
    // TODO: Turn Twisty into a module and move Twisty.Twisty into Twisty proper.
    class Twisty {
        constructor(element, config = {}) {
            this.element = element;
            this.alg = config.alg || Alg.Example.Niklas;
            this.puzzleDef = config.puzzle || KSolve.Puzzles["333"];
            this.cursor = new Cursor(this.alg, new KSolvePuzzle(this.puzzleDef));
            // this.timeline = new Timeline(Alg.Example.HeadlightSwaps);
            this.anim = new Anim.Model(this.cursor);
            this.element.appendChild((new Widget.Player(this.anim, this.puzzleDef)).element);
        }
    }
    Twisty_1.Twisty = Twisty;
    function paramsFromTwistyElem(elem) {
        var params = new TwistyParams();
        var puzzle = elem.getAttribute("puzzle");
        if (puzzle) {
            params.puzzle = KSolve.Puzzles[puzzle];
        }
        var alg = elem.getAttribute("alg");
        if (alg) {
            params.alg = Alg.Example.Niklas; // TODO: parse
        }
        return params;
    }
    // Initialize a Twisty for the given Element unless the element's
    // `initialization` attribute is set to `custom`.
    function autoInitialize(elem) {
        const ini = elem.getAttribute("initialization");
        var params = paramsFromTwistyElem(elem);
        if (ini !== "custom") {
            new Twisty(elem, params);
        }
    }
    function autoInitializePage() {
        const elems = document.querySelectorAll("twisty");
        console.log(`Found ${elems.length} twisty elem${elems.length === 1 ? "" : "s"} on page.`);
        for (let i = 0; i < elems.length; i++) {
            autoInitialize(elems[i]);
        }
    }
    window.addEventListener("load", autoInitializePage);
})(Twisty || (Twisty = {}));
//# sourceMappingURL=twisty.js.map