import { g as r, i as a, la as n, ma as c } from "./chunk-N57SZSMP.js";
var d = (() => {
    let t = class t{
        constructor(i) { this.modalService = i } showNotification(i, e, s)
        {
            let f = { initialState: { isSuccess: i, title: e, message: s } };
            this.bsModalRef = this.modalService.show(c, f)
        }
    };
    t.\u0275fac = function (e) { return new (e || t)(a(n)) },
        t.\u0275prov = r({ token: t, factory: t.\u0275fac, providedIn: "root" });
    let o = t; return o
})
    (); export { d as a };
