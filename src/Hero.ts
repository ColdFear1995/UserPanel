// TypeScript file
//每个用户都有英雄，每个英雄都有装备，每个装备都有宝石,根据不同道具、等级等属性可以计算出战斗力，生命值等数值。
class User {

    heros: Hero[] = [];
    herointeam: Hero[] = [];

    dirtyFlag: boolean = true;

    @this.herosinTeamCache
    getheroInTeam(): Hero[] {

        var heroInTeam: Hero[] = [];

        for (var i = 0; i < this.heros.length; i++) {
            if (this.heros[i].isInTeam) {
                heroInTeam.push(this.heros[i]);

            }
        }

        return heroInTeam;

    }

    @this.fightpowerCache
    get FightPower(): number {

        var result = 0;

        var heros: Hero[] = this.getheroInTeam();

		this.heros.forEach(e => result += e.fightPower)

		result=result/150;

        return result;

    }

    herosinTeamCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

		if (!this.dirtyFlag) {
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

    fightpowerCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

		if (!this.dirtyFlag) {
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

}


class EquipmentMap {

	head:egret.Bitmap;
	neck:egret.Bitmap;
	shoulder:egret.Bitmap;	
	body:egret.Bitmap;
	
	weapon:egret.Bitmap;5
	shield:egret.Bitmap;

	public constructor(stage:egret.DisplayObjectContainer) {

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


	public equip(equipment:Equipment) {
		
		var image:string;//equipment.property.configId

		switch(equipment.equipmentID.equipmentType) {
			
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
	}

}

class HeroMap {

	hero:egret.Bitmap;

	public constructor(stage:egret.DisplayObjectContainer) {

		this.hero = new egret.Bitmap();

		this.setBackMap();

		stage.addChild(this.hero);

	}

	public setBackMap() {

		this.hero.texture = RES.getRes(HeroBackMapConfig[0].image);
		this.hero.x = HeroBackMapConfig[0].x;
		this.hero.y = HeroBackMapConfig[0].y;

	}

}

class Hero {

	dirtyFlag:boolean = true;
	property:HeroProperty;
	isInTeam:boolean = false;
	equipments:Equipment[] = [];
    
	public constructor(type:number) {
		this.property = new HeroProperty(heroConfig[type].id,heroConfig[type].name,heroConfig[type].attack,heroConfig[type].strength,
									 heroConfig[type].agility,heroConfig[type].intelligence,
									 heroConfig[type].endurance);
	}

	public setInTeam(status:boolean):void {
		this.isInTeam = status;
	}

	public equip(equipment:Equipment):void {
		this.equipments.push(equipment);
	}

	get fightPower():number {
		var result:number = 0;
		this.equipments.forEach(equipment => {
			result += equipment.FightPower;
		});
		result += this.property.fightPower;

		return result;
	}

	get attack():number {
		var result:number = 0;
		this.equipments.forEach(equipment => {
			result += equipment.attack;
		});
		result += this.property.basic_Attack;

		return result;
	}

	get strength():number {
		var result:number = 0;
		this.equipments.forEach(equipment => {
			result += equipment.strength;
		});
		result += this.property.basic_Strength;

		return result;
	}

	get agility():number {
		var result:number = 0;
		this.equipments.forEach(equipment => {
			result += equipment.agility;
		});
		result += this.property.basic_Agility;

		return result;
	}

	get intelligence():number {
		var result:number = 0;
		this.equipments.forEach(equipment => {
			result += equipment.intelligence;
		});
		result += this.property.basic_Intelligence;

		return result;
	}

	get endurance():number {
		var result:number = 0;
		this.equipments.forEach(equipment => {
			result += equipment.endurance;
		});
		result += this.property.basic_Endurance;

		return result;
	}

	get maxHp():number {
		return this.endurance * 50;
	}

	get maxMp():number {
		return this.intelligence * 40;
	}

}