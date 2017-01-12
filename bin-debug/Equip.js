var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// TypeScript file
var Jewel = (function () {
    function Jewel(type) {
        var _this = this;
        this.quality = 1;
        this.basicattack = 0;
        this.strength = 0;
        this.agility = 0;
        this.intelligence = 0;
        this.endurance = 0;
        this.dirtyFlag = true;
        this.attackCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_1 = desc.get;
                desc.get = function () {
                    return getter_1.apply(this);
                };
                return desc;
            }
        };
        this.fightpowerCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_2 = desc.get;
                desc.get = function () {
                    return getter_2.apply(this);
                };
                return desc;
            }
        };
        this.basicattack = jewelConfig[type].basicattack;
        this.strength = jewelConfig[type].strength;
        this.agility = jewelConfig[type].agility;
        this.intelligence = jewelConfig[type].intelligence;
        this.quality = jewelConfig[type].quality;
    }
    var d = __define,c=Jewel,p=c.prototype;
    d(p, "attack"
        ,function () {
            return (this.basicattack + this.agility + this.strength + this.intelligence) * this.quality;
        }
    );
    d(p, "FightPower"
        ,function () {
            var result = 0;
            result = this.attack + this.endurance * 0.4 * this.quality;
            return result;
        }
    );
    __decorate([
        this.attackCache
    ], p, "attack", null);
    __decorate([
        this.fightpowerCache
    ], p, "FightPower", null);
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
var Weapen = (function () {
    function Weapen(type) {
        var _this = this;
        this.quality = 1;
        this.basicattack = 0;
        this.weight = 1;
        this.strength = 0;
        this.agility = 0;
        this.intelligence = 0;
        this.endurance = 0;
        this.dirtyFlag = true;
        this.jewels = [];
        this.attackCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_3 = desc.get;
                desc.get = function () {
                    return getter_3.apply(this);
                };
                return desc;
            }
        };
        this.fightpowerCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_4 = desc.get;
                desc.get = function () {
                    return getter_4.apply(this);
                };
                return desc;
            }
        };
        this.basicattack = weapenConfig[type].basicattack;
        this.quality = weapenConfig[type].quality;
        this.strength = weapenConfig[type].strength;
        this.agility = weapenConfig[type].agility;
        this.intelligence = weapenConfig[type].intelligence;
        this.endurance = weapenConfig[type].endurance;
        this.weight = weapenConfig[type].weight;
    }
    var d = __define,c=Weapen,p=c.prototype;
    d(p, "attack"
        ,function () {
            return (this.basicattack + this.strength * 0.8 + this.agility * 0.8 + this.intelligence * 0.8) * (this.quality * this.weight);
        }
    );
    d(p, "FightPower"
        ,function () {
            var result = 0;
            this.jewels.forEach(function (e) { return result += e.FightPower; });
            result += this.attack + this.endurance * 0.4 * this.quality;
            return result;
        }
    );
    __decorate([
        this.attackCache
    ], p, "attack", null);
    __decorate([
        this.fightpowerCache
    ], p, "FightPower", null);
    return Weapen;
}());
egret.registerClass(Weapen,'Weapen');
var Equip = (function () {
    function Equip(type) {
        var _this = this;
        this.quality = 1;
        this.weight = 1;
        this.strength = 0;
        this.agility = 0;
        this.intelligence = 0;
        this.endurance = 0;
        this.dirtyFlag = true;
        this.jewels = [];
        this.attackCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_5 = desc.get;
                desc.get = function () {
                    return getter_5.apply(this);
                };
                return desc;
            }
        };
        this.fightpowerCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_6 = desc.get;
                desc.get = function () {
                    return getter_6.apply(this);
                };
                return desc;
            }
        };
        this.quality = equipConfig[type].quality;
        this.strength = equipConfig[type].strength;
        this.agility = equipConfig[type].agility;
        this.intelligence = equipConfig[type].intelligence;
        this.weight = equipConfig[type].weight;
    }
    var d = __define,c=Equip,p=c.prototype;
    d(p, "attack"
        ,function () {
            return (this.strength * 0.8 + this.agility * 0.8 + this.intelligence * 0.8) * (this.quality * this.weight);
        }
    );
    d(p, "FightPower"
        ,function () {
            var result = 0;
            this.jewels.forEach(function (e) { return result += e.FightPower; });
            result += (this.strength * 0.8 + this.agility * 0.8 + this.intelligence * 0.8) * (this.quality * this.weight);
            return result;
        }
    );
    __decorate([
        this.attackCache
    ], p, "attack", null);
    __decorate([
        this.fightpowerCache
    ], p, "FightPower", null);
    return Equip;
}());
egret.registerClass(Equip,'Equip');
//# sourceMappingURL=Equip.js.map