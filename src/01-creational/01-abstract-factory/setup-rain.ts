import { Compound } from "./constants/compound";
import { Modality } from "./constants/modality";
import { RearWing } from "./constants/rear-wing";
import { Setup } from "./setup";

export abstract class SetupRain extends Setup {

    public configure() {
        this.compoundType = Compound.BLUE;
        this.rearWingType = RearWing.MEDIAN;
    }

}

export class SetupRainRace extends SetupRain {

    public configure() {
        this.compoundType = Compound.BLUE;
        this.rearWingType = RearWing.LONG;
    }

}

export class SetupRainQualify extends SetupRain {

    public configure() {
        this.compoundType = Compound.GREEN;
        this.rearWingType = RearWing.MEDIAN;
    }

}

export class SetupRainCreator{

    public static create(modality:Modality): SetupRain{
        switch (modality){
            case Modality.RACE:
                return new SetupRainRace();
            case Modality.QUALIFY:
                return new SetupRainQualify();
            default:
                throw new TypeError("Modality is not defined")
        }            
    }
}