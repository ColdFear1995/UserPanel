var Panel = (function (_super) {
    __extends(Panel, _super);
    function Panel(x, y, width, height) {
        _super.call(this);
        this.Init();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.drawPanel();
    }
    var d = __define,c=Panel,p=c.prototype;
    p.Init = function () {
        this.background = new egret.Shape();
    };
    p.drawPanel = function () {
        this.background.graphics.beginFill(0x663300, 1);
        this.background.graphics.drawRect(0, 0, this.width, this.height);
        this.background.graphics.endFill();
        this.background.alpha = 0.5;
        this.addChild(this.background);
    };
    return Panel;
}(egret.DisplayObjectContainer));
egret.registerClass(Panel,'Panel');
var EquipmentPanel = (function (_super) {
    __extends(EquipmentPanel, _super);
    function EquipmentPanel() {
        _super.call(this);
        this.backpanel = new Panel(0, 0, 400, 400);
        this.addChild(this.backpanel);
        this.init();
    }
    var d = __define,c=EquipmentPanel,p=c.prototype;
    p.init = function () {
        this.name_Texfield = new egret.TextField();
        this.name_Texfield.text = userPanelTextConfig[0].name;
        this.name_Texfield.x = userPanelTextConfig[0].x;
        this.name_Texfield.y = userPanelTextConfig[0].y;
        this.addChild(this.name_Texfield);
        this.attack_Textfield = new egret.TextField();
        this.attack_Textfield.text = userPanelTextConfig[1].name;
        this.attack_Textfield.x = userPanelTextConfig[1].x;
        this.attack_Textfield.y = userPanelTextConfig[1].y;
        this.addChild(this.attack_Textfield);
        this.strength_Textfield = new egret.TextField();
        this.strength_Textfield.text = userPanelTextConfig[2].name;
        this.strength_Textfield.x = userPanelTextConfig[2].x;
        this.strength_Textfield.y = userPanelTextConfig[2].y;
        this.addChild(this.strength_Textfield);
        this.agility_Textfield = new egret.TextField();
        this.agility_Textfield.text = userPanelTextConfig[3].name;
        this.agility_Textfield.x = userPanelTextConfig[3].x;
        this.agility_Textfield.y = userPanelTextConfig[3].y;
        this.addChild(this.agility_Textfield);
        this.intelligence_Textfield = new egret.TextField();
        this.intelligence_Textfield.text = userPanelTextConfig[4].name;
        this.intelligence_Textfield.x = userPanelTextConfig[4].x;
        this.intelligence_Textfield.y = userPanelTextConfig[4].y;
        this.addChild(this.intelligence_Textfield);
        this.endurance_Textfield = new egret.TextField();
        this.endurance_Textfield.text = userPanelTextConfig[5].name;
        this.endurance_Textfield.x = userPanelTextConfig[5].x;
        this.endurance_Textfield.y = userPanelTextConfig[5].y;
        this.addChild(this.endurance_Textfield);
        this.fightPower_Textfield = new egret.TextField();
        this.fightPower_Textfield.text = userPanelTextConfig[6].name;
        this.fightPower_Textfield.x = userPanelTextConfig[6].x;
        this.fightPower_Textfield.y = userPanelTextConfig[6].y;
        this.addChild(this.fightPower_Textfield);
    };
    p.setPanel = function (equipment) {
        this.setPanelText(equipment);
    };
    p.setPanelText = function (equipment) {
        this.name_Texfield.text = userPanelTextConfig[0].name + equipment.equipmentID.equipmentType;
        this.attack_Textfield.text = "    +" + equipment.attack + userPanelTextConfig[1].name;
        this.strength_Textfield.text = "    +" + equipment.strength + userPanelTextConfig[2].name;
        this.agility_Textfield.text = "    +" + equipment.agility + userPanelTextConfig[3].name;
        this.intelligence_Textfield.text = "    +" + equipment.intelligence + userPanelTextConfig[4].name;
        this.endurance_Textfield.text = "    +" + equipment.endurance + userPanelTextConfig[5].name;
        this.fightPower_Textfield.text = "    +" + equipment.FightPower + userPanelTextConfig[6].name;
    };
    return EquipmentPanel;
}(egret.DisplayObjectContainer));
egret.registerClass(EquipmentPanel,'EquipmentPanel');
var HeroInfoPanel = (function (_super) {
    __extends(HeroInfoPanel, _super);
    function HeroInfoPanel() {
        _super.call(this);
        this.backpanel = new Panel(0, 0, 400, 400);
        this.addChild(this.backpanel);
        this.init();
    }
    var d = __define,c=HeroInfoPanel,p=c.prototype;
    p.init = function () {
        this.name_Texfield = new egret.TextField();
        this.name_Texfield.text = heroTextConfig[0].name;
        this.name_Texfield.x = heroTextConfig[0].x;
        this.name_Texfield.y = heroTextConfig[0].y;
        this.addChild(this.name_Texfield);
        this.attack_Textfield = new egret.TextField();
        this.attack_Textfield.text = heroTextConfig[1].name;
        this.attack_Textfield.x = heroTextConfig[1].x;
        this.attack_Textfield.y = heroTextConfig[1].y;
        this.addChild(this.attack_Textfield);
        this.strength_Textfield = new egret.TextField();
        this.strength_Textfield.text = heroTextConfig[2].name;
        this.strength_Textfield.x = heroTextConfig[2].x;
        this.strength_Textfield.y = heroTextConfig[2].y;
        this.addChild(this.strength_Textfield);
        this.agility_Textfield = new egret.TextField();
        this.agility_Textfield.text = heroTextConfig[3].name;
        this.agility_Textfield.x = heroTextConfig[3].x;
        this.agility_Textfield.y = heroTextConfig[3].y;
        this.addChild(this.agility_Textfield);
        this.intelligence_Textfield = new egret.TextField();
        this.intelligence_Textfield.text = heroTextConfig[4].name;
        this.intelligence_Textfield.x = heroTextConfig[4].x;
        this.intelligence_Textfield.y = heroTextConfig[4].y;
        this.addChild(this.intelligence_Textfield);
        this.endurance_Textfield = new egret.TextField();
        this.endurance_Textfield.text = heroTextConfig[5].name;
        this.endurance_Textfield.x = heroTextConfig[5].x;
        this.endurance_Textfield.y = heroTextConfig[5].y;
        this.addChild(this.endurance_Textfield);
        this.fightPower_Textfield = new egret.TextField();
        this.fightPower_Textfield.text = heroTextConfig[6].name;
        this.fightPower_Textfield.x = heroTextConfig[6].x;
        this.fightPower_Textfield.y = heroTextConfig[6].y;
        this.addChild(this.fightPower_Textfield);
        this.maxHp_Textfield = new egret.TextField();
        this.maxHp_Textfield.text = heroTextConfig[7].name;
        this.maxHp_Textfield.x = heroTextConfig[7].x;
        this.maxHp_Textfield.y = heroTextConfig[7].y;
        this.addChild(this.maxHp_Textfield);
        this.maxMp_Textfield = new egret.TextField();
        this.maxMp_Textfield.text = heroTextConfig[8].name;
        this.maxMp_Textfield.x = heroTextConfig[8].x;
        this.maxMp_Textfield.y = heroTextConfig[8].y;
        this.addChild(this.maxMp_Textfield);
    };
    p.setPanelText = function (hero) {
        this.name_Texfield.text = heroTextConfig[0].name + hero.property.name;
        this.attack_Textfield.text = heroTextConfig[1].name + Math.ceil(hero.attack);
        this.strength_Textfield.text = heroTextConfig[2].name + hero.strength;
        this.agility_Textfield.text = heroTextConfig[3].name + hero.agility;
        this.intelligence_Textfield.text = heroTextConfig[4].name + hero.intelligence;
        this.endurance_Textfield.text = heroTextConfig[5].name + hero.endurance;
        this.fightPower_Textfield.text = heroTextConfig[6].name + Math.ceil(hero.fightPower);
        this.maxHp_Textfield.text = heroTextConfig[7].name + hero.maxHp;
        this.maxMp_Textfield.text = heroTextConfig[8].name + hero.maxMp;
    };
    return HeroInfoPanel;
}(egret.DisplayObjectContainer));
egret.registerClass(HeroInfoPanel,'HeroInfoPanel');
var HeroPanel = (function (_super) {
    __extends(HeroPanel, _super);
    function HeroPanel() {
        _super.call(this);
        this.heroMap = new HeroMap(this);
        this.heroInfoPanel = new HeroInfoPanel();
        this.heroInfoPanel.x = 0;
        this.heroInfoPanel.y = 600;
        this.addChild(this.heroInfoPanel);
    }
    var d = __define,c=HeroPanel,p=c.prototype;
    p.setHero = function (hero) {
        this.hero = hero;
        this.heroInfoPanel.setPanelText(this.hero);
    };
    return HeroPanel;
}(egret.DisplayObjectContainer));
egret.registerClass(HeroPanel,'HeroPanel');
//# sourceMappingURL=UserPanel.js.map