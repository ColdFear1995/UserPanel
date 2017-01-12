// TypeScript file
class Jewel {

	quality:number = 1;

	basicattack:number = 0;

	strength:number = 0;
	agility:number = 0;
	intelligence:number = 0;
	endurance:number = 0;

	dirtyFlag:boolean = true;


	public constructor(type:number) {

		this.basicattack = jewelConfig[type].basicattack;
		this.strength = jewelConfig[type].strength
		this.agility = jewelConfig[type].agility;
		this.intelligence = jewelConfig[type].intelligence;
		this.quality = jewelConfig[type].quality;

	}

	@this.attackCache
	get attack():number {

		return (this.basicattack+this.agility+this.strength+this.intelligence)* this.quality;
	}

	@this.fightpowerCache
	get FightPower():number {

		var result = 0;

		result =  this.attack + this.endurance * 0.4 * this.quality;

		return result;

	}

	attackCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

    fightpowerCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}


	
}


class Weapen implements Equipment{

	quality:number = 1;

	basicattack:number = 0;

	weight:number=1;

	public equipmentID:WeaponProperty;

	strength:number = 0;
	agility:number = 0;
	intelligence:number = 0;
	endurance:number = 0;

	dirtyFlag:boolean = true;

	jewels:Jewel[] =[];

	public constructor(type:number) {

		this.basicattack = weapenConfig[type].basicattack;
		this.quality = weapenConfig[type].quality;
		this.strength = weapenConfig[type].strength
		this.agility = weapenConfig[type].agility;
		this.intelligence = weapenConfig[type].intelligence;
		this.endurance = weapenConfig[type].endurance;
		this.weight=weapenConfig[type].weight;

	}

	@this.attackCache
	get attack():number {

		return (this.basicattack + this.strength * 0.8 + this.agility * 0.8 + this.intelligence * 0.8) * (this.quality*this.weight);

	}

	@this.fightpowerCache
	get FightPower():number {

		var result = 0;

		this.jewels.forEach(e => result += e.FightPower)

		result += this.attack + this.endurance * 0.4 * this.quality;

		return result;

	}


	attackCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

    fightpowerCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

}
class Equip implements Equipment{

	quality:number = 1;

	weight:number=1;

	public equipmentID:EquipProperty;

	strength:number = 0;
	agility:number = 0;
	intelligence:number = 0;
	endurance:number = 0;

	dirtyFlag:boolean = true;

	jewels:Jewel[] =[];

	public constructor(type:number) {
		this.quality = equipConfig[type].quality;
		this.strength = equipConfig[type].strength
		this.agility = equipConfig[type].agility;
		this.intelligence = equipConfig[type].intelligence;
		this.weight=equipConfig[type].weight;

	}

	@this.attackCache
	get attack():number {

		return (this.strength * 0.8 + this.agility * 0.8 + this.intelligence * 0.8) * (this.quality*this.weight);

	}

	@this.fightpowerCache
	get FightPower():number {

		var result = 0;

		this.jewels.forEach(e => result += e.FightPower)

		result+=(this.strength * 0.8 + this.agility * 0.8 + this.intelligence * 0.8) * (this.quality*this.weight);

		return result;

	}


	attackCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

    fightpowerCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

}