// TypeScript file
class Equipment {
	
	
	equipmentID:EquipmentID;

	get FightPower():number{
		return 0;
	};

	get attack():number {
		return 0;
	}

	get strength():number {
		return 0; 
	};

	get agility():number {
		return 0;
	};

	get intelligence():number {
		return 0; 
	};

	get endurance():number {
		return 0;
	};

}

class EquipmentID {
	configId:string;
	configName:string;
	equipmentType:number;
}