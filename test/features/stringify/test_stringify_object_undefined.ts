import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_object_undefined = _test_stringify(
    "undefined object",
    ObjectUndefied.generate,
    (input) => TSON.stringify(input),
);
