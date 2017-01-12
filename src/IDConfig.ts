class WeaponProperty extends EquipmentID{

	public type = equipmentType.WEAPON;
	public configId:string = "";
	public name:string = "";
	public basic_Attack:number = 0;
	public basic_Strength:number = 0;
	public basic_Agility:number = 0;
	public basic_Intelligence:number = 0;
	public basic_Endurance:number = 0;

	public constructor(id:string,name:string,attack:number,strength:number,agility:number,intelligence:number,endurance:number){
		super();
		this.configId = id;
		this.name = name;
		this.basic_Attack = attack;
		this.basic_Strength = strength;
		this.basic_Agility = agility;
		this.basic_Intelligence = intelligence;
		this.basic_Endurance = endurance;

	}

	get fightPower():number {

		var result = 0;

		result =  this.basic_Attack + (this.basic_Strength + this.basic_Agility + 
									   this.basic_Intelligence + this.basic_Intelligence) * 0.5;

		return result;

	}


}

class EquipProperty extends EquipmentID{

	public type = equipmentType.BODY;
	public configId:string = "";
	public name:string = "";
	public basic_Attack:number = 0;
	public basic_Strength:number = 0;
	public basic_Agility:number = 0;
	public basic_Intelligence:number = 0;
	public basic_Endurance:number = 0;

	public constructor(id:string,name:string,attack:number,strength:number,agility:number,intelligence:number,endurance:number){
		super();
		this.configId = id;
		this.name = name;
		this.basic_Attack = attack;
		this.basic_Strength = strength;
		this.basic_Agility = agility;
		this.basic_Intelligence = intelligence;
		this.basic_Endurance = endurance;

	}

	get fightPower():number {

		var result = 0;

		result =  this.basic_Attack + (this.basic_Strength + this.basic_Agility + 
									   this.basic_Intelligence + this.basic_Intelligence) * 0.5;

		return result;

	}


}
class HeroProperty {

	configId:string = "";
	name:string = "";
	level:number = 1;

	attack_Grow:number = 0;
	strength_Grow:number = 0;
	agility_Grow:number = 0;
	intelligence_Grow:number = 0;
	endurance_Grow:number = 0;

	public constructor(id:string,name:string,attack_Grow:number,strength_Grow:number,agility_Grow:number,intelligence_Grow:number,endurance_Grow:number){
		this.configId = id;
		this.name = name;
		this.attack_Grow = attack_Grow;
		this.strength_Grow = strength_Grow;
		this.agility_Grow = agility_Grow;
		this.intelligence_Grow = intelligence_Grow;
		this.endurance_Grow = endurance_Grow;
		
	}

	public levelup():void {
		this.level++;
	}

	get basic_Attack():number {
		return this.level * this.attack_Grow;
	}

	get basic_Strength():number {
		return this.level * this.strength_Grow;
	}

	get basic_Agility():number {
		return this.level * this.agility_Grow;
	}

	get basic_Intelligence():number {
		return this.level * this.intelligence_Grow;
	}

	get basic_Endurance():number {
		return this.level * this.endurance_Grow;
	}

	get fightPower():number {

		var result = 0;

		result =  this.basic_Attack + (this.basic_Strength + this.basic_Agility + 
									   this.basic_Intelligence + this.basic_Intelligence) * 0.5;

		return result;

	}

}