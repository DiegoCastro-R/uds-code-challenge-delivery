import { ApiRawResponse } from './dto/api';
import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class ApiService {
    public async getData() {
        try {
            const response = await fetch(process.env.STAR_WARS_API_URL || '');
            const data = await response.json();
            const apiResponse: ApiRawResponse[] = data as ApiRawResponse[];
            const formattedResponse = apiResponse.map(item => ({
                profileInfos: {
                    id: item.id,
                    name: item.name,
                    height: item.height,
                    mass: item.mass,
                    gender: item.gender,
                    wiki: item.wiki,
                    homeworld: item.homeworld,
                    image: item.image,
                },
                biography: {
                    born: item.born,
                    bornLocation: item.bornLocation,
                    died: item.died,
                    diedLocation: item.diedLocation,
                },
                hairColor: item.hairColor,
                eyeColor: item.eyeColor,
                skinColor: item.skinColor,
                cybernetics: item.cybernetics,
                affiliations: item.affiliations,
                masters: item.masters,
                apprentices: item.apprentices,
                formerAffiliations: item.formerAffiliations,
            }))

            return formattedResponse            
        }
        catch(error) {
            console.error('Error fetching data:', error);
            throw new Error('Failed to fetch data');

        }
    }
}
