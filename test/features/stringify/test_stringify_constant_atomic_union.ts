import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_constant_atomic_union = _test_stringify(
    "constant atomic",
    ConstantAtomicUnion.generate,
    (input) => TSON.stringify(input),
);
