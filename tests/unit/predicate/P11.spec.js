import convert from "@/js/Converter.js";
import store from "@/store/index.js";

describe("P11 tests", () => {
  afterEach(() => {
    store.state.formula = "";
  });

  test("renames x in ∀xF(x)", () => {
    const input = "∀xF(x)";
    store.state.formula = input;
    expect(convert(input, "P11")).toBe("∀aF(a)");
  });

  test("renames x in ∀xF(x,y,z)", () => {
    const input = "∀xF(x,y,z)";
    store.state.formula = input;
    expect(convert(input, "P11")).toBe("∀aF(a,y,z)");
  });

  test("renames z in ∀z(F(u,y,z)∨G(z)⇔H(x,z))", () => {
    const input = "∀z(F(u,y,z)∨G(z)⇔H(x,z))";
    store.state.formula = input;
    expect(convert(input, "P11")).toBe("∀a(F(u,y,a)∨G(a)⇔H(x,a))");
  });

  test("returns null if there are no free variables left ∀xF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z)", () => {
    const input = "∀xF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z)";
    store.state.formula = input;
    expect(convert(input, "P11")).toBe(null);
  });

  test("returns null if input is not in the form of ∀xF(x)", () => {
    const input = "F(x,y)";
    store.state.formula = input;
    expect(convert(input, "P11")).toBe(null);
  });

  test("replaces ind variable even if it is not in the predicate ∀xF(x)", () => {
    const input = "∀xF(y)";
    store.state.formula = input;
    expect(convert(input, "P11")).toBe("∀aF(y)");
  });
});
