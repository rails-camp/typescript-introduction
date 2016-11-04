var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AccountsPayable = (function () {
    function AccountsPayable() {
    }
    AccountsPayable.prototype.deleteAccount = function () {
        console.log('Deleting account...');
    };
    __decorate([
        admin, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], AccountsPayable.prototype, "deleteAccount", null);
    AccountsPayable = __decorate([
        detailedLog('billing'), 
        __metadata('design:paramtypes', [])
    ], AccountsPayable);
    return AccountsPayable;
}());
function detailedLog(dashboard) {
    if (dashboard == 'billing') {
        console.log('Working in the billing department');
        return function (target) { };
    }
    else {
        return function (target) { };
    }
}
function admin(target, propertyKey, descriptor) {
    console.log("Doing admin check");
    return descriptor;
}
var post = new AccountsPayable;
post.deleteAccount();
//# sourceMappingURL=032_method_decorator.js.map