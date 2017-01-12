var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// TypeScript file
//每个用户都有英雄，每个英雄都有装备，每个装备都有宝石,根据不同道具、等级等属性可以计算出战斗力，生命值等数值。
var User = (function () {
    function User() {
        var _this = this;
        this.heros = [];
        this.herointeam = [];
        this.dirtyFlag = true;
        this.herosinTeamCache = function (target, propertyName, desc) {
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
    }
    var d = __define,c=User,p=c.prototype;
    p.getheroInTeam = function () {
        var heroInTeam = [];
        for (var i = 0; i < this.heros.length; i++) {
            if (this.heros[i].isInTeam) {
                heroInTeam.push(this.heros[i]);
            }
        }
        return heroInTeam;
    };
    d(p, "FightPower"
        ,function () {
            var result = 0;
            var heros = this.getheroInTeam();
            this.heros.forEach(function (e) { return result += e.fightPower; });
            result = result / 150;
            return result;
        }
    );
    __decorate([
        this.herosinTeamCache
    ], p, "getheroInTeam", null);
    __decorate([
        this.fightpowerCache
    ], p, "FightPower", null);
    return User;
}());
egret.registerClass(User,'User');
var EquipmentMap = (function () {
    function EquipmentMap(stage) {
        this.head = new egret.Bitmap();
        this.neck = new egret.Bitmap();
        this.shoulder = new egret.Bitmap();
        this.body = new egret.Bitmap();
        this.weapon = new egret.Bitmap();
        this.shield = new egret.Bitmap();
        stage.addChild(this.head);
        stage.addChild(this.neck);
        stage.addChild(this.shoulder);
        stage.addChild(this.body);
        stage.addChild(this.weapon);
        stage.addChild(this.shield);
    }
    var d = __define,c=EquipmentMap,p=c.prototype;
    p.equip = function (equipment) {
        var image; //equipment.property.configId
        switch (equipment.equipmentID.equipmentType) {
            case equipmentType.HEAD:
                this.head.texture = RES.getRes(image);
                break;
            case equipmentType.NECK:
                this.neck.texture = RES.getRes(image);
                break;
            case equipmentType.SHOULDER:
                this.shoulder.texture = RES.getRes(image);
                break;
            case equipmentType.BODY:
                this.body.texture = RES.getRes(image);
                break;
            case equipmentType.WEAPON:
                this.weapon.texture = RES.getRes(image);
                break;
            case equipmentType.SHIELD:
                this.shield.texture = RES.getRes(image);
                break;
            default:
                console.log("fail");
        }
    };
    return EquipmentMap;
}());
egret.registerClass(EquipmentMap,'EquipmentMap');
var HeroMap = (function () {
    function HeroMap(stage) {
        this.hero = new egret.Bitmap();
        this.setBackMap();
        stage.addChild(this.hero);
    }
    var d = __define,c=HeroMap,p=c.prototype;
    p.setBackMap = function () {
        this.hero.texture = RES.getRes(HeroBackMapConfig[0].image);
        this.hero.x = HeroBackMapConfig[0].x;
        this.hero.y = HeroBackMapConfig[0].y;
    };
    return HeroMap;
}());
egret.registerClass(HeroMap,'HeroMap');
var Hero = (function () {
    function Hero(type) {
        this.dirtyFlag = true;
        this.isInTeam = false;
        this.equipments = [];
        this.property = new HeroProperty(heroConfig[type].id, heroConfig[type].name, heroConfig[type].attack, heroConfig[type].strength, heroConfig[type].agility, heroConfig[type].intelligence, heroConfig[type].endurance);
    }
    var d = __define,c=Hero,p=c.prototype;
    p.setInTeam = function (status) {
        this.isInTeam = status;
    };
    p.equip = function (equipment) {
        this.equipments.push(equipment);
    };
    d(p, "fightPower"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (equipment) {
                result += equipment.FightPower;
            });
            result += this.property.fightPower;
            return result;
        }
    );
    d(p, "attack"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (equipment) {
                result += equipment.attack;
            });
            result += this.property.basic_Attack;
            return result;
        }
    );
    d(p, "strength"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (equipment) {
                result += equipment.strength;
            });
            result += this.property.basic_Strength;
            return result;
        }
    );
    d(p, "agility"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (equipment) {
                result += equipment.agility;
            });
            result += this.property.basic_Agility;
            return result;
        }
    );
    d(p, "intelligence"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (equipment) {
                result += equipment.intelligence;
            });
            result += this.property.basic_Intelligence;
            return result;
        }
    );
    d(p, "endurance"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (equipment) {
                result += equipment.endurance;
            });
            result += this.property.basic_Endurance;
            return result;
        }
    );
    d(p, "maxHp"
        ,function () {
            return this.endurance * 50;
        }
    );
    d(p, "maxMp"
        ,function () {
            return this.intelligence * 40;
        }
    );
    return Hero;
}());
egret.registerClass(Hero,'Hero');
//# sourceMappingURL=Hero.js.map