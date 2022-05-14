import seedrandom from "seedrandom";

export const generateUuid = function(){
	var myrng = seedrandom('marc');
	return String(Math.abs(myrng.int32())).padStart(10, "0")
}
