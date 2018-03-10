import { Location, LocationComponent } from '../location/location.component';

const fs = require('fs');

export class LocationManager
{

    locationPackPath:string;
    locations: Array<Location>=[];

    createNewLocationEnvironment(loc_path)
    {
        if(loc_path==='')
        {
            this.locationPackPath = '../assets/locationPackDefault';
        }
        else
        {
            this.locationPackPath = loc_path;
        }
        fs.exists(this.locationPackPath, (exists) => {
            if(!exists)
            {
                console.log("location Package dir missing.");
                return;
            }
            let locationIcons = fs.readdirSync(this.locationPackPath);
            for(var locationItr in locationIcons)
            {
                console.log(locationItr);
                let locationObj = new Location(locationItr,locationItr,locationItr);
                this.locations.push(locationObj);
            }
        });
    }

  constructor() { }

}
