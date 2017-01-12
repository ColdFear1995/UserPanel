var WeaponProperty = (function (_super) {
    __extends(WeaponProperty, _super);
    function WeaponProperty(id, name, attack, strength, agility, intelligence, endurance) {
        _super.call(this);
        this.type = equipmentType.WEAPON;
        this.configId = "";
        this.name = "";
        this.basic_Attack = 0;
        this.basic_Strength = 0;
        this.basic_Agility = 0;
        this.basic_Intelligence = 0;
        this.basic_Endurance = 0;
        this.configId = id;
        this.name = name;
        this.basic_Attack = attack;
        this.basic_Strength = strength;
        this.basic_Agility = agility;
        this.basic_Intelligence = intelligence;
        this.basic_Endurance = endurance;
    }
    var d = __define,c=WeaponProperty,p=c.prototype;
    d(p, "fightPower"
        ,function () {
            var result = 0;
            result = this.basic_Attack + (this.basic_Strength + this.basic_Agility +
                this.basic_Intelligence + this.basic_Intelligence) * 0.5;
            return result;
        }
    );
    return WeaponProperty;
}(EquipmentID));
egret.registerClass(WeaponProperty,'WeaponProperty');
var EquipProperty = (function (_super) {
    __extends(EquipProperty, _super);
    function EquipProperty(id, name, attack, strength, agility, intelligence, endurance) {
        _super.call(this);
        this.type = equipmentType.BODY;
        this.configId = "";
        this.name = "";
        this.basic_Attack = 0;
        this.basic_Strength = 0;
        this.basic_Agility = 0;
        this.basic_Intelligence = 0;
        this.basic_Endurance = 0;
        this.configId = id;
        this.name = name;
        this.basic_Attack = attack;
        this.basic_Strength = strength;
        this.basic_Agility = agility;
        this.basic_Intelligence = intelligence;
        this.basic_Endurance = endurance;
    }
    var d = __define,c=EquipProperty,p=c.prototype;
    d(p, "fightPower"
        ,function () {
            var result = 0;
            result = this.basic_Attack + (this.basic_Strength + this.basic_Agility +
                this.basic_Intelligence + this.basic_Intelligence) * 0.5;
            return result;
        }
    );
    return EquipProperty;
}(EquipmentID));
egret.registerClass(EquipProperty,'EquipProperty');
var HeroProperty = (function () {
    function HeroProperty(id, name, attack_Grow, strength_Grow, agility_Grow, intelligence_Grow, endurance_Grow) {
        this.configId = "";
        this.name = "";
        this.level = 1;
        this.attack_Grow = 0;
        this.strength_Grow = 0;
        this.agility_Grow = 0;
        this.intelligence_Grow = 0;
        this.endurance_Grow = 0;
        this.configId = id;
        this.name = name;
        this.attack_Grow = attack_Grow;
        this.strength_Grow = strength_Grow;
        this.agility_Grow = agility_Grow;
        this.intelligence_Grow = intelligence_Grow;
        this.endurance_Grow = endurance_Grow;
    }
    var d = __define,c=HeroProperty,p=c.prototype;
    p.levelup = function () {
        this.level++;
    };
    d(p, "basic_Attack"
        ,function () {
            return this.level * this.attack_Grow;
        }
    );
    d(p, "basic_Strength"
        ,function () {
            return this.level * this.strength_Grow;
        }
    );
    d(p, "basic_Agility"
        ,function () {
            return this.level * this.agility_Grow;
        }
    );
    d(p, "basic_Intelligence"
        ,function () {
            return this.level * this.intelligence_Grow;
        }
    );
    d(p, "basic_Endurance"
        ,function () {
            return this.level * this.endurance_Grow;
        }
    );
    d(p, "fightPower"
        ,function () {
            var result = 0;
            result = this.basic_Attack + (this.basic_Strength + this.basic_Agility +
                this.basic_Intelligence + this.basic_Intelligence) * 0.5;
            return result;
        }
    );
    return HeroProperty;
}());
egret.registerClass(HeroProperty,'HeroProperty');
//# sourceMappingURL=IDConfig.js.map