import convert from "@/js/Converter.js";
import store from "@/store/index.js";

describe("P14 tests", () => {

    afterEach(() => {
        store.state.formula = "";
    });
  
    test("renames x in ∃xF(x)", () => {
    const input = "∃xF(x)";
    store.state.formula = input;
    expect(convert(input, "P14")).toBe("∃yF(y)");
  });

  test("renames x in ∃xF(x,y,z)", () => {
    const input = "∃xF(x,y,z)";
    store.state.formula = input;
    expect(convert(input, "P14")).toBe("∃uF(u,y,z)");
  });

  test("renames z in ∃z(F(u,y,z)∨G(z)⇔H(x,z))", () => {
    const input = "∃z(F(u,y,z)∨G(z)⇔H(x,z))";
    store.state.formula = input;
    expect(convert(input, "P14")).toBe("∃v(F(u,y,v)∨G(v)⇔H(x,v))");
  });

  test("returns null if there are no free variables left ∃xF(x,y,z,u,v,w,p,q,r,s,t)",() => {
    const input = "∃xF(x,y,z,u,v,w,p,q,r,s,t)";
    store.state.formula = input;
    expect(convert(input, "P14")).toBe(null);
  });

  test("returns null if input is not in the form of ∃xF(x)",() => {
    const input = "F(x,y)";
    store.state.formula = input;
    expect(convert(input, "P14")).toBe(null);
  });

});